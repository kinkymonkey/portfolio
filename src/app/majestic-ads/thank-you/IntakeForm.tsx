"use client";

import { useState, type FormEvent } from "react";

export function IntakeForm({ reference, defaultBrand, turnaround }: { reference: string; defaultBrand: string; turnaround?: string }) {
  const [state, setState] = useState<"idle" | "busy" | "done">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("busy");
    setError("");
    const body: Record<string, FormDataEntryValue> = { ref: reference, ...Object.fromEntries(new FormData(e.currentTarget)) };
    const res = await fetch("/api/majestic-ads/intake", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const json = await res.json().catch(() => ({}));
    if (!res.ok || !json.ok) {
      setError(json.error ?? "Something went wrong. Please try again.");
      setState("idle");
      return;
    }
    setState("done");
    // Email notification, same Web3Forms key the contact form uses. Best effort: the answers are already saved.
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (key) {
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject: `Majestic Ads intake: ${body.brand} (${json.plan})`,
          from_name: "Majestic Ads",
          name: json.name,
          email: json.email,
          reference,
          ...body,
        }),
      }).catch(() => {});
    }
  }

  if (state === "done") {
    return (
      <p className="ma-notice" role="status">
        Got it. I have your brand details and files. Your ads are due in {turnaround ?? "5 to 10 business days"}, counted from now. I will email you at the address you used to pay.
      </p>
    );
  }

  return (
    <form className="ma-form" onSubmit={onSubmit}>
      <label>
        Brand name
        <input name="brand" required defaultValue={defaultBrand} maxLength={200} />
      </label>
      <label>
        Product page link
        <input name="productUrl" required placeholder="https://yourbrand.com/products/..." maxLength={500} />
      </label>
      <label>
        Google Drive link
        <input name="drive" required placeholder="https://drive.google.com/drive/folders/..." maxLength={600} />
        <small>Put your logos, brand guidelines and product photos in one folder. Set sharing to &quot;Anyone with the link can view&quot;.</small>
      </label>
      <label>
        Claims you are allowed to make
        <textarea name="claims" rows={3} placeholder="For example: dermatologist tested, fragrance free" maxLength={3000} />
      </label>
      <label>
        Claims or looks to avoid
        <textarea name="avoid" rows={3} maxLength={3000} />
      </label>
      <label>
        Competitors you want to stand apart from
        <textarea name="competitors" rows={3} placeholder="Names or links" maxLength={3000} />
      </label>
      <label>
        Videos with AI people?
        <select name="aiPeople" defaultValue="no">
          <option value="no">No, product only</option>
          <option value="yes">Yes, if it helps</option>
        </select>
      </label>
      <label>
        Anything else
        <textarea name="notes" rows={3} maxLength={3000} />
      </label>
      {error && <p className="ma-notice ma-notice--error" role="alert">{error}</p>}
      <button className="ma-btn" type="submit" disabled={state === "busy"}>{state === "busy" ? "Sending" : "Send to Justin"}</button>
    </form>
  );
}
