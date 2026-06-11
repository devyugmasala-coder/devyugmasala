import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroPure from "@/assets/hero-pure-spices.jpg";
import heroBlended from "@/assets/hero-blended-spices.jpg";
import heroSeasoning from "@/assets/hero-seasoning.jpg";
import packTurmeric from "@/assets/pack-turmeric.jpg";
import packGaram from "@/assets/pack-garam.jpg";
import packFlakes from "@/assets/pack-flakes.jpg";

const slides = [
  {
    eyebrow: "Pure Spices · Since 1960",
    title: "The Soul of",
    titleItalic: "Indian Spices.",
    description:
      "Crafting single-origin powders harvested at peak potency — the founding pillar of every Dehyug kitchen.",
    cta: "Explore Pure Spices",
    href: "/products" as const,
    search: { category: "pure-spices" as const },
    image: heroPure,
    pack: packTurmeric,
  },
  {
    eyebrow: "Blended Masalas · Heritage Formula",
    title: "Six Decades of",
    titleItalic: "Aromatic Mastery.",
    description:
      "Heritage masala ratios — biryani, garam, kitchen king — formulated for the precise heat, color and aroma of regional Indian cuisine.",
    cta: "Discover Blends",
    href: "/products" as const,
    search: { category: "blended-spices" as const },
    image: heroBlended,
    pack: packGaram,
  },
  {
    eyebrow: "Seasoning · Modern Finishers",
    title: "Global Notes,",
    titleItalic: "Indian Soul.",
    description:
      "From hand-crushed chilli flakes to coarse melange pepper — finishing touches that elevate every plate.",
    cta: "Shop Seasoning",
    href: "/products" as const,
    search: { category: "seasoning" as const },
    image: heroSeasoning,
    pack: packFlakes,
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, [isHovered]);

  const slide = slides[index];

  return (
    <section
      className="relative h-screen min-h-[640px] overflow-hidden bg-stone-warm"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image cross-fade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${index}`}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }, scale: { duration: 7, ease: "linear" } }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream/85 via-cream/60 to-cream/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream/40 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10 h-full container-luxury flex items-center pt-20">
        <div className="grid lg:grid-cols-12 gap-12 w-full items-center">
          <div className="lg:col-span-7 max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${index}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="block text-clay text-eyebrow mb-6">{slide.eyebrow}</span>
                <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-light leading-[0.95] mb-8 text-charcoal">
                  {slide.title}{" "}
                  <span className="italic">{slide.titleItalic}</span>
                </h1>
                <p className="text-base md:text-lg text-charcoal/70 font-light mb-10 max-w-lg leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to={slide.href}
                    search={slide.search}
                    className="group inline-flex items-center gap-3 px-10 py-5 bg-charcoal text-cream text-[11px] uppercase tracking-[0.2em] hover:bg-clay transition-colors"
                  >
                    {slide.cta}
                    <span className="inline-block w-6 h-px bg-cream transition-all group-hover:w-10" />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center px-8 py-5 text-[11px] uppercase tracking-[0.2em] text-charcoal border border-charcoal/20 hover:border-charcoal transition-colors"
                  >
                    Our Story
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floating pack */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`pack-${index}`}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: 8 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative animate-float"
                style={{ willChange: "transform" }}
              >
                <div className="absolute -inset-8 bg-clay/10 blur-3xl rounded-full" />
                <img
                  src={slide.pack}
                  alt=""
                  width={520}
                  height={520}
                  className="relative w-[420px] h-[420px] object-cover shadow-luxury rounded-sm"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="absolute bottom-10 left-0 right-0 z-20 container-luxury flex items-center justify-between">
        <div className="flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.eyebrow}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className="group relative h-[2px] w-12 bg-charcoal/15 overflow-hidden"
            >
              <span
                className={`absolute inset-0 origin-left bg-clay transition-transform duration-[6500ms] ease-linear ${
                  i === index && !isHovered ? "scale-x-100" : "scale-x-0"
                }`}
                style={{ transformOrigin: "left" }}
              />
              <span
                className={`absolute inset-0 bg-charcoal transition-opacity ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-charcoal/50">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="w-8 h-px bg-charcoal/30" />
          <span>{String(slides.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 18 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const size = 2 + (i % 4);
        const delay = (i * 0.4) % 6;
        const duration = 8 + (i % 5);
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-clay/40"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
