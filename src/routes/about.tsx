import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import heritage from "@/assets/heritage-1960.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import heroBlended from "@/assets/hero-blended-spices.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Heritage — Dehyug Masala Since 1960" },
      {
        name: "description",
        content:
          "Six decades of spice mastery. Discover the heritage, mission and manufacturing excellence that defines Dehyug Masala.",
      },
      { property: "og:title", content: "Our Heritage — Dehyug Masala" },
      {
        property: "og:description",
        content: "The story of Dehyug Masala — heritage, mission and manufacturing since 1960.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end pb-16 md:pb-24 overflow-hidden">
        <img src={heroBlended} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/70 to-cream/20" />
        <div className="relative container-luxury">
          <Reveal className="text-clay text-eyebrow mb-6">Our Story</Reveal>
          <Reveal as="h1" delay={0.1} className="font-display text-5xl md:text-8xl font-light text-charcoal max-w-4xl leading-[0.95]">
            Six decades of <span className="italic">unwavering purity.</span>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <span className="block text-clay text-eyebrow mb-4">Since 1960</span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
              The Dehyug Heritage.
            </h2>
          </Reveal>
          <div className="lg:col-span-7 space-y-6 text-charcoal/70 font-light leading-relaxed text-base md:text-lg">
            <Reveal>
              Dehyug was founded in 1960 as a single-counter spice shop in the heart of Gujarat. Our
              founder believed that the soul of Indian cooking lived not in the recipe, but in the
              integrity of every grain that touched the pan.
            </Reveal>
            <Reveal delay={0.05}>
              For more than six decades, that conviction has guided every decision — from how we
              source, to how we grind, to how we seal the final pouch.
            </Reveal>
            <Reveal delay={0.1}>
              Today, Dehyug supplies homes, restaurants and exporters across the world, while
              remaining family-owned and family-led.
            </Reveal>
          </div>
        </div>
      </section>

      {/* Heritage image block */}
      <section className="bg-charcoal text-cream py-24 md:py-32">
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img
              src={heritage}
              alt="Traditional Indian spice storehouse"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
          </Reveal>
          <div>
            <Reveal className="text-gold text-eyebrow mb-6">Mission & Vision</Reveal>
            <Reveal as="h2" delay={0.1} className="font-display text-4xl md:text-5xl font-light mb-8 leading-tight">
              To carry the soul of Indian spice <span className="italic text-gold">into every kitchen.</span>
            </Reveal>
            <Reveal delay={0.15} className="space-y-6 text-cream/70 font-light leading-relaxed">
              <p>
                Our mission is simple — to deliver spices of uncompromised purity, in their most
                potent and aromatic form. We believe a spice should taste like the land it came from.
              </p>
              <p>
                Our vision is for Dehyug to become the most-trusted Indian spice house globally, while
                staying rooted in the small-batch, hand-quality ethics of our founder.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Manufacturing Quality */}
      <section className="py-24 md:py-32">
        <div className="container-luxury">
          <div className="max-w-3xl mb-16">
            <Reveal className="text-clay text-eyebrow mb-4">Manufacturing Quality</Reveal>
            <Reveal as="h2" delay={0.1} className="font-display text-4xl md:text-6xl text-charcoal leading-tight">
              Old-world craft, <span className="italic">new-world rigor.</span>
            </Reveal>
          </div>
          <Reveal>
            <img
              src={manufacturing}
              alt="Stainless-steel spice processing line"
              loading="lazy"
              className="w-full aspect-[16/9] object-cover mb-16"
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                t: "Cold-Grinding",
                d: "We grind at low temperature to preserve the volatile oils — the very soul of every spice — that heat-based grinding destroys.",
              },
              {
                t: "Triple Inspection",
                d: "Every batch passes through three independent quality stages including metal detection, sieve calibration and moisture testing.",
              },
              {
                t: "Aroma-Lock Pack",
                d: "Nitrogen-flushed multi-layer foil packaging maintains peak aroma and color from our floor to your kitchen.",
              },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 0.1}>
                <div className="text-xs uppercase tracking-[0.3em] text-clay mb-4">0{i + 1}</div>
                <h3 className="font-display text-2xl mb-4 text-charcoal">{item.t}</h3>
                <p className="text-sm text-charcoal/60 font-light leading-relaxed">{item.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-stone-warm">
        <div className="container-luxury max-w-3xl text-center">
          <Reveal as="h2" className="font-display text-4xl md:text-5xl text-charcoal mb-8 leading-tight">
            Explore the Dehyug collection.
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-charcoal text-cream px-10 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-clay transition-colors"
            >
              View Products
              <span className="w-6 h-px bg-cream" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
