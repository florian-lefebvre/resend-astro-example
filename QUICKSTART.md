# Astro

Learn how to send your first email using Astro and the Resend Node.js SDK.

## Prerequisites

To get the most out of this guide, you’ll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)
- [Enable SSR (`output: 'hybrid'` or `server`) in your Astro project](https://docs.astro.build/en/guides/server-side-rendering/)

## 1. Install

Get the Resend Node.js SDK.

TODO: package manager tabs

## 2. Send emails using HTML

Create and [Endpoint](https://docs.astro.build/en/core-concepts/endpoints/) under `src/pages/api/send.ts`.

The easiest way to send an email is by using the `html` parameter.

```ts title="src/pages/api/send.ts"
import type { APIRoute } from "astro";
import { Resend } from "resend";

// Only needed in hybrid mode
export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async () => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["delivered@resend.dev"],
    subject: "Hello world",
    html: "<strong>It works!</strong>",
  });

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 400 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
};

```

## 3. Try it yourself

TODO: card to https://github.com/resend/resend-astro-example