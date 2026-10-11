# Golden Viral — Premium Dubai Chocolate Demo

A one-page, interactive brand and e-commerce demo for **Golden Viral Dubai Chocolate**. Built to present custom branding, UI/UX, and storefront interactions to a prospective client.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
npm run lint
```

## Demo notes

- Cart, product details, and search are fully interactive on the front end.
- Cart state persists in `localStorage`.
- Checkout is intentionally disabled: “Interactive demo — checkout is not enabled.”
- Newsletter validation is local only; no mailing list provider is connected.
- Social links, privacy/terms, and contact details are placeholders pending client assets.
- Product catalog and demo prices live in [`src/data/products.ts`](src/data/products.ts).

## Production integrations (not included)

- Stripe Checkout (or another payment provider)
- Email / newsletter provider (Resend, Klaviyo, Mailchimp, etc.)
- Customer accounts / authentication
- Official domain, analytics, and social account URLs
