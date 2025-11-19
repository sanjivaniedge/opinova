import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, amount, message } = await req.json();
    if (!name || !email) {
      return new Response(JSON.stringify({ error: "Name and email are required." }), { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.DONATE_TO_EMAIL || user;

    if (!host || !user || !pass || !to) {
      return new Response(
        JSON.stringify({ error: "Email settings missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, DONATE_TO_EMAIL." }),
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const subject = `New donation intent from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nAmount: ${amount || ""}\nMessage: ${message || ""}`;

    await transporter.sendMail({
      from: user,
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