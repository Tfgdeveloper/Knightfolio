'use client';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Logo Design',
    body: 'Knightfolio360 delivers refined, purposeful logo designs that strengthen your brand’s presence across every touchpoint.',
    icon: 'images/web-design_17109629.png',
    href: '/logodesign',
  },
  {
    title: 'Web design and development',
    body: 'At Knightfolio360, we craft elegant, future-ready web experiences that blend design excellence with powerful development.',
    icon: 'images/website_17209278.png',
    href: '/web-design-and-development',
  },
  {
    title: 'Graphic design & Illustrations',
    body: 'Knightfolio360 crafts bold, expressive graphics and illustrations that bring your brand’s personality to life.',
    icon: 'images/mobile-apps_13731079.png',
    href: '/graphic-design-and-illustrations',
  },
  {
    title: 'Social media content & management',
    body: 'Knightfolio360 creates scroll-stopping content and manages your social presence to keep your brand active, consistent, and engaging.',
    icon: 'images/campaign_18482497.png',
    href: '/social-media-content-and-management',
  },
  {
    title: 'Video editing, Animation & motion graphics',
    body: 'Knightfolio360 produces dynamic video, animation, and motion graphics that tell your story with energy, clarity, and impact.',
    icon: 'images/shopping_12767215.png',
    href: '/video-editing-animation-and-motion-graphics',
  },
  {
    title: 'Creative strategy & concept development',
    body: 'Knightfolio360 develops smart, insight-driven creative concepts and strategies that shape stronger brands and more effective campaigns.',
    icon: 'images/ai-format_4553952.png',
    href: '/creative-strategy-and-concept-development',
  },
];

// helper to give delays by row: 0s for row1, 0.35s for row2, 0.7s for row3
const delayByIndex = (i) => {
  const row = Math.floor(i / 2);   // 0,1,2 for rows
  const columnOffset = i % 2 ? 0.1 : 0; // tiny stagger within the row
  return row * 0.35 + columnOffset;
};

export default function SolutionsGrid() {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-14 md:py-20 text-center">
        <h2 className="text-[32px] md:text-[48px] font-semibold text-[#333435]">
          Services you get with Knightfolio360

        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-4 md:gap-6 text-left">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href={it.href}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: delayByIndex(i) }}
              className="group relative rounded-xl border border-[#1B1B1B] bg-white p-4 md:p-5 hover:shadow-lg "
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <motion.img
                  src={it.icon}
                  alt=""
                  className="w-25 h-25 rounded-md border border-black/10 bg-white p-2"
                  initial={false}
                  whileHover={{ x: 2 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                />
                {/* Copy */}
                <div>
                  <h3 className="text-[20px] md:text-[24px] font-semibold text-black/80 ">
                    {it.title}
                  </h3>
                  <p className="mt-1 text-[16px] md:text-[18px] leading-6 text-[#6F6F6F]">
                    {it.body}
                  </p>

                  
                </div>
              </div>

              {/* Accent outline on hover */}
              <span
                className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-[#FFB84D]/40 transition group-hover:ring-4"
                aria-hidden="true"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
