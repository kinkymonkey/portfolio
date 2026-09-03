import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact, Justin Henry Teh",
  description:
    "Inquiries and commissions. Reach Justin Henry Teh about creative operations, AI production, and team leadership.",
};

export default function ContactPage() {
  return (
    <main className="bg-bg">
      <ContactForm />
    </main>
  );
}
