This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Form Handling & Email

### Forms
The project currently uses **Formspree** for handling form submissions (Contact/Contribute and Newsletter).
- **Service**: Formspree
- **Endpoint ID**: `xdkvkoen`
- **Target URL**: `https://formspree.io/f/xdkvkoen`

All submissions from the "Contribute" modal and the "Newsletter" footer form are sent to this Formspree endpoint. The destination email address where these submissions are delivered is configured within the Formspree dashboard associated with this ID.

### Contact Email
The public-facing contact email displayed on the website (in the Contact section) is:
- **Email**: `contact@opinovafoundation.com`

### Backend (Optional/Legacy)
There is a backend route located at `src/app/api/donate/route.ts` which is set up to use `nodemailer` for sending emails. However, the current frontend implementation bypasses this and uses Formspree directly.
