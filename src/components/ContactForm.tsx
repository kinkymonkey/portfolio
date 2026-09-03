"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const payload = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      const json = (await res.json()) as { success?: boolean };
      setStatus(json.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full bg-transparent border-b border-neutral-800 py-4 text-base text-white outline-none transition-colors duration-200 placeholder:text-neutral-600 focus:border-white";
  const labelClass =
    "mb-1 block text-[10px] uppercase tracking-widest text-neutral-400";

  return (
    <section className="mx-auto max-w-2xl px-6 py-24">
      <p className="mb-2 text-xs tracking-[0.25em] text-neutral-500 uppercase">
        Inquiries &amp; commissions
      </p>
      <h2 className="font-display mb-12 text-4xl font-light tracking-tight text-white md:text-5xl">
        Let&apos;s work together.
      </h2>

      {status === "success" ? (
        <div>
          <p className="mb-2 font-mono text-xs tracking-[0.25em] text-neutral-400 uppercase">
            Message received
          </p>
          <p className="font-display text-2xl font-light text-white">
            Thank you for reaching out. I will get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          <input
            type="hidden"
            name="access_key"
            value={
              process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
              "YOUR_ACCESS_KEY_HERE"
            }
          />
          <input type="hidden" name="from_name" value="justinhenryteh.com" />
          <input
            type="hidden"
            name="subject"
            value="Website inquiry for jt@justinhenryteh.com"
          />

          <div className="mb-8">
            <label htmlFor="contact-name" className={labelClass}>
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className={fieldClass}
            />
          </div>

          <div className="mb-8">
            <label htmlFor="contact-email" className={labelClass}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@studio.com"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="contact-message" className={labelClass}>
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              placeholder="What are you building?"
              className={`${fieldClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-8 w-full cursor-pointer bg-white px-10 py-4 font-mono text-xs tracking-[0.2em] text-black uppercase transition-all duration-200 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
          >
            {status === "submitting" ? "Sending..." : "Send"}
          </button>

          {status === "error" ? (
            <p className="mt-4 text-sm text-red-400">
              Something went wrong. Please try again.
            </p>
          ) : null}
        </form>
      )}
    </section>
  );
}
