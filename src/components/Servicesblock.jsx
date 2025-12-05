'use client';

import { FiArrowRight } from 'react-icons/fi';

const TESTIMONIALS = [
  { id: 1, company: 'Logo Design', quote: "We craft memorable, modern logos that capture your brand’s identity. Designed for versatility across digital and print.", imageSrc: 'images/AP442509.png' },

  { id: 2, company: 'Web Design & Development', quote: "We build fast, responsive, and visually stunning websites tailored to your goals. From UI/UX to full development—we handle it all.", imageSrc: 'images/AP442509.png' },

  { id: 3, company: 'Graphic Design & Illustrations', quote: "We create eye-catching graphics and custom illustrations that elevate your brand’s visual storytelling across all platforms.", imageSrc: 'images/AP442509.png' },

  { id: 4, company: 'Social Media Content & Management', quote: "We produce engaging posts and manage your social presence for consistent growth. Strategy, content, scheduling—completely done for you.", imageSrc: 'images/AP442509.png' },

  { id: 5, company: 'Video Editing, Animation & Motion Graphics', quote: "We transform raw footage into polished videos with dynamic animation and motion graphics. Perfect for ads, reels, explainers, and promos.", imageSrc: 'images/AP442509.png' },

  { id: 6, company: 'Creative Strategy & Concept Development', quote: "We develop powerful creative concepts that connect with your audience. From campaign ideas to brand messaging—we set the direction.", imageSrc: 'images/AP442509.png' },

  
];

export default function Servicesblock() {
  return (
    <section className="relative w-full py-16">
      <div className="container mx-auto px-4">
        {/* 2-column layout: left sticky, right scrollable grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT: Sticky content */}
          <div className="relative">
            <div className="md:sticky md:top-24">
              <h2 className="text-[32px] md:text-[48px] font-semibold text-black leading-tight">
                Explore Our Other Services
              </h2>
              <p className="mt-4 text-base md:text-lg text-black/70 max-w-prose">
                From sustainable device lifecycle to proactive support and growth-ready stacks,
                we deliver end-to-end IT that’s fast, friendly, and planet-positive.
              </p>

              {/* Optional: Progress hint */}
              

              {/* Optional CTA */}
              <a
                          href="#"
                          className="mt-6 inline-flex items-center gap-2 bg-transparent text-gray-800 font-semibold py-3 px-6 rounded-full border-2 border-black shadow-[3px_3px_0_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
                        >
                          It all starts with a Knightfolio360 <FiArrowRight />
                        </a>
            </div>
          </div>

          {/* RIGHT: Testimonials grid (scrolls with page) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="relative w-full h-[420px] md:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden border border-black/10">
      {/* BG image */}
      <img
        src={testimonial.imageSrc}
        alt={`${testimonial.company} background`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-x-5 bottom-5 text-white">
        <p className="text-lg font-bold">{testimonial.company}</p>
        <blockquote className="mt-2 text-sm md:text-base">
          {testimonial.quote}
        </blockquote>
        

      </div>

      {/* Frosted card edge (subtle) */}
      <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl pointer-events-none" />
    </div>
  );
}
