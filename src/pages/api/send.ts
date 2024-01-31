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
