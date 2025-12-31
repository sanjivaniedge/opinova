import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, linkedin, country, phone, city, message } = await req.json();
    if (!name || !email || !linkedin || !country || !phone || !city) {
      return new Response(
        JSON.stringify({ error: "Name, email, LinkedIn, country, phone, and city are required." }),
        { status: 400 }
      );
    }

    // Preferred: Gmail via OAuth2 (no raw passwords)
    const gmailUser = process.env.GMAIL_USER;
    const gmailClientId = process.env.GMAIL_CLIENT_ID;
    const gmailClientSecret = process.env.GMAIL_CLIENT_SECRET;
    const gmailRefreshToken = process.env.GMAIL_REFRESH_TOKEN;
    const to = process.env.contribute_TO_EMAIL || gmailUser;

    let transporter: nodemailer.Transporter | null = null;
    if (gmailUser && gmailClientId && gmailClientSecret && gmailRefreshToken) {
      transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: gmailUser,
          clientId: gmailClientId,
          clientSecret: gmailClientSecret,
          refreshToken: gmailRefreshToken,
        },
      });
    } else {
      // Fallback: generic SMTP (for non-Gmail providers)
      const host = process.env.SMTP_HOST;
      const port = Number(process.env.SMTP_PORT || 587);
      const user = process.env.SMTP_USER;
      const pass = process.env.SMTP_PASS;
      if (!host || !user || !pass) {
        return new Response(
          JSON.stringify({ error: "Email settings missing. Prefer Gmail OAuth2. Or set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS." }),
          { status: 500 }
        );
      }
      transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });
    }

    const subject = `New donation intent from ${name}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `LinkedIn: ${linkedin}`,
      `Country: ${country}`,
      `City: ${city}`,
      `Phone: ${phone}`,
      `Message: ${message || ""}`,
    ].join("\n");

    await transporter.sendMail({
      from: gmailUser || process.env.SMTP_USER || "no-reply@opinova.local",
      to,
      replyTo: email,
      subject,
      text,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to send email." }), { status: 500 });
  }
}
