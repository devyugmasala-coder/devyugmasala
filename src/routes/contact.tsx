import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dehyug Masala" },
      {
        name: "description",
        content:
          "Get in touch with Dehyug Masala for retail, wholesale, and export inquiries. Our team is ready to assist with the same care we give our spice.",
      },
      { property: "og:title", content: "Contact Dehyug Masala" },
      {
        property: "og:description",
        content: "Retail, wholesale, and export inquiries — get in touch with Dehyug.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-24">
        <div className="container-luxury max-w-4xl">
          <Reveal className="text-clay text-eyebrow mb-4">Get In Touch</Reveal>
          <Reveal as="h1" delay={0.1} className="font-display text-5xl md:text-7xl font-light text-charcoal leading-[0.95]">
            We'd love to <span className="italic">hear from you.</span>
          </Reveal>
          <Reveal delay={0.2} className="mt-8 text-lg text-charcoal/60 font-light max-w-xl leading-relaxed">
            For retail, wholesale, custom blends, or export partnerships — our concierge is ready to
            assist you with the same care we give our spice.
          </Reveal>
        </div>
      </section>

      {/* Form + details */}
      <section className="pb-24">
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              {submitted ? (
                <div className="bg-stone-warm p-12 text-center">
                  <h3 className="font-display text-3xl text-charcoal mb-4">Thank you.</h3>
                  <p className="text-charcoal/60 font-light">
                    Your inquiry has been received. Our team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field label="First Name" name="firstName" required />
                    <Field label="Last Name" name="lastName" required />
                  </div>
                  <Field label="Email Address" name="email" type="email" required />
                  <Field label="Company / Organization" name="company" />
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.3em] text-charcoal/60 mb-3">
                      Inquiry Type
                    </label>
                    <select
                      name="type"
                      className="w-full bg-transparent border-b border-charcoal/20 py-3 text-sm font-light focus:outline-none focus:border-charcoal transition-colors"
                    >
                      <option>Retail Inquiry</option>
                      <option>Wholesale</option>
                      <option>Export Partnership</option>
                      <option>Custom Blend</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.3em] text-charcoal/60 mb-3">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full bg-transparent border-b border-charcoal/20 py-3 text-sm font-light focus:outline-none focus:border-charcoal resize-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-charcoal text-cream px-10 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-clay transition-colors"
                  >
                    Send Inquiry
                    <span className="w-6 h-px bg-cream" />
                  </button>
                </form>
              )}
            </Reveal>
          </div>

          {/* Details */}
          <aside className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-border">
            <Reveal className="mb-10">
              <h3 className="text-[11px] uppercase tracking-[0.3em] text-clay mb-6">Company</h3>
              <p className="font-display text-2xl text-charcoal leading-snug">Dehyug Masala Pvt. Ltd.</p>
              <p className="text-charcoal/60 font-light mt-2 text-sm">
                Family-owned and operated since 1960.
              </p>
            </Reveal>

            <div className="space-y-8">
              <ContactItem icon={<MapPin size={16} strokeWidth={1.5} />} title="Visit Us">
                Plot 14, Spice Lane,
                <br />
                Industrial Estate, Ahmedabad,
                <br />
                Gujarat 380001, India
              </ContactItem>
              <ContactItem icon={<Phone size={16} strokeWidth={1.5} />} title="Call">
                +91 98250 00000
                <br />
                Mon — Sat · 09:30 — 18:00 IST
              </ContactItem>
              <ContactItem icon={<Mail size={16} strokeWidth={1.5} />} title="Email">
                sales@dehyugmasala.com
                <br />
                export@dehyugmasala.com
              </ContactItem>
            </div>

            <Reveal delay={0.2} className="mt-10 pt-10 border-t border-border">
              <h3 className="text-[11px] uppercase tracking-[0.3em] text-clay mb-4">Follow</h3>
              <div className="flex gap-3">
                {["Instagram", "Facebook", "LinkedIn"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="px-4 py-2 border border-charcoal/15 text-[10px] uppercase tracking-[0.2em] text-charcoal hover:bg-charcoal hover:text-cream transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-border">
        <div className="aspect-[21/9] md:aspect-[21/7] w-full bg-stone-warm relative overflow-hidden">
          <iframe
            title="Dehyug Masala location"
            src="https://maps.google.com/maps?q=Ahmedabad&t=&z=11&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.3em] text-charcoal/60 mb-3">
        {label}
        {required && <span className="text-clay ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-charcoal/20 py-3 text-sm font-light focus:outline-none focus:border-charcoal transition-colors"
      />
    </div>
  );
}

function ContactItem({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="flex gap-4">
        <div className="shrink-0 w-10 h-10 grid place-items-center border border-charcoal/15 text-charcoal">
          {icon}
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/60 mb-2">{title}</div>
          <div className="text-sm text-charcoal font-light leading-relaxed">{children}</div>
        </div>
      </div>
    </Reveal>
  );
}
