// ServicesSection.jsx
import React, { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    id: "strategy",
    label: "Strategy",
    title: "Strategy",
    text: "We build sharp, culture-first strategies that connect brands with the right people and opportunities."
  },
  {
    id: "advertising",
    label: "Advertising",
    title: "Advertising",
    text: "Integrated campaigns across film, OOH, social, and digital to drive attention and performance."
  },
  {
    id: "social",
    label: "Social",
    title: "Social",
    text: "Always-on content and social ideas that keep your brand in the conversation, not chasing it."
  },
  {
    id: "branding",
    label: "Branding",
    title: "Branding",
    text: "Visual identities and brand worlds that feel modern, distinctive, and instantly recognisable."
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState(SERVICES[0].id);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  // Scroll-in animation for whole block
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate title + text whenever `active` changes
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        textRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.1,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [active]);

  const activeService = SERVICES.find((s) => s.id === active);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-20 px-4 md:px-10"
    >
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-[1.1fr,2fr] items-start">
        {/* Left: services list */}
        <ul className="space-y-3 text-base md:text-lg">
          {SERVICES.map((service) => (
            <li
              key={service.id}
              onMouseEnter={() => setActive(service.id)}
              onClick={() => setActive(service.id)}
              className={[
                "flex items-center justify-between cursor-pointer group",
                "transition-colors duration-300",
                active === service.id ? "text-white" : "text-white/50"
              ].join(" ")}
            >
              <span className="flex items-center gap-2">
                <span
                  className={[
                    "inline-block h-1 w-6 rounded-full transition-all duration-300",
                    active === service.id
                      ? "bg-white"
                      : "bg-white/20 group-hover:w-10"
                  ].join(" ")}
                />
                {service.label}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                {String(SERVICES.indexOf(service) + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ul>

        {/* Right: animated detail area */}
        <div className="relative min-h-[220px]">
          {/* Big faint word behind (like Fold7 effect) */}
          <div className="pointer-events-none select-none absolute -top-10 -right-2 md:-right-6 text-6xl md:text-8xl font-semibold tracking-tight text-white/5 uppercase">
            {activeService.title}
          </div>

          {/* Foreground heading + text */}
          <div className="relative">
            <h2
              ref={headingRef}
              className="text-3xl md:text-5xl font-semibold tracking-tight mb-4"
            >
              {activeService.title}
            </h2>
            <p
              ref={textRef}
              className="text-sm md:text-base text-white/70 max-w-xl leading-relaxed"
            >
              {activeService.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
