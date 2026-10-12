"use client";

import { useState, type FormEvent } from "react";

type Props = { publicKey: string; clientKey: string; paymentIntentId: string; returnUrl: string; name: string; email: string };

const auth = (key: string) => ({ Authorization: `Basic ${btoa(`${key}:`)}`, "Content-Type": "application/json" });
const firstError = (json: { errors?: { detail?: string }[] }) => json.errors?.[0]?.detail ?? "The card was not accepted.";

export function CardForm({ publicKey, clientKey, paymentIntentId, returnUrl, name, email }: Props) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const f = new FormData(e.currentTarget);
    const [mm, yy] = String(f.get("exp")).split("/").map((s) => s.trim());
    try {
      // 1. Card details go straight to PayMongo with the public key.
      const pmRes = await fetch("https://api.paymongo.com/v1/payment_methods", {
        method: "POST",
        headers: auth(publicKey),
        body: JSON.stringify({
          data: {
            attributes: {
              type: "card",
              details: {
                card_number: String(f.get("number")).replace(/\s+/g, ""),
                exp_month: Number(mm),
                exp_year: Number(yy.length === 2 ? `20${yy}` : yy),
                cvc: String(f.get("cvc")),
              },
              billing: { name, email },
            },
          },
        }),
      });
      const pmJson = await pmRes.json();
      if (!pmRes.ok) throw new Error(firstError(pmJson));

      // 2. Attach it to the subscription's first payment.
      const absoluteReturn = `${window.location.origin}${returnUrl}`;
      const attachRes = await fetch(`https://api.paymongo.com/v1/payment_intents/${paymentIntentId}/attach`, {
        method: "POST",
        headers: auth(publicKey),
        body: JSON.stringify({
          data: { attributes: { payment_method: pmJson.data.id, client_key: clientKey, return_url: absoluteReturn } },
        }),
      });
      const attach = await attachRes.json();
      if (!attachRes.ok) throw new Error(firstError(attach));

      const status = attach.data.attributes.status as string;
      if (status === "succeeded" || status === "processing") {
        window.location.href = returnUrl;
      } else if (status === "awaiting_next_action") {
        window.location.href = attach.data.attributes.next_action.redirect.url; // 3-D Secure, returns to return_url
      } else {
        throw new Error(attach.data.attributes.last_payment_error?.failed_message ?? "The card was not accepted.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "The card was not accepted.");
      setBusy(false);
    }
  }

  return (
    <form className="ma-form" onSubmit={onSubmit}>
      <label>
        Card number
        <input name="number" inputMode="numeric" autoComplete="cc-number" required placeholder="4343 4343 4343 4345" />
      </label>
      <div className="ma-form__row">
        <label>
          Expiry (MM/YY)
          <input name="exp" autoComplete="cc-exp" required placeholder="08/29" maxLength={7} />
        </label>
        <label>
          CVC
          <input name="cvc" inputMode="numeric" autoComplete="cc-csc" required maxLength={4} />
        </label>
      </div>
      {error && <p className="ma-notice ma-notice--error" role="alert">{error}</p>}
      <button className="ma-btn" type="submit" disabled={busy}>{busy ? "Processing" : "Pay and start my subscription"}</button>
    </form>
  );
}
