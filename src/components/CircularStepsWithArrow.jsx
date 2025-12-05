'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// CHANGED: Re-ordered STEPS and ANGLES to be in a continuous clockwise progression
// The logical order of the steps is now aligned with their physical position on the circle.
const STEPS = [
  // 1. Top-right
  { key: 'Setp1', title: 'Step 1', text: 'We supply certified refurbished and secure stock direct from top brands.', img: 'images/CircularIT_CyberProtection_2x_20794292-844c-4579-9672-626a50486890.png', color: '#FFB84D' },
  // 2. Left
  { key: 'Setp2',  title: 'Step 2', text: 'Zero-touch provisioning and policy baselines for fast starts.',          img: 'images/CircularIT_Monitoring_2x_91e5d007-1ce7-466e-aa72-23d9cb286b1a.png',  color: '#FFB84D' },
  
  // 3. Left-center
  { key: 'Setp3',  title: 'Step 3', text: 'AI device health checks reduce downtime and risk.',                      img: 'images/CircularIT_Offboardingn_1x_1.png',  color: '#FFB84D' },
  
  // 4. Bottom-left
  { key: 'Setp4', title: 'Step 4', text: 'Multi-channel helpdesk + diagnostics to keep teams productive.',         img: 'images/CircularIT_Offboardingn_1x_1.png',     color: '#FFB84D' },
  
  // 5. Bottom
  { key: 'Setp5', title: 'Step 5', text: 'Certified data wipe, remarket, or responsibly recycle assets.',         img: 'images/CircularIT_Offboardingn_1x_1.png',     color: '#FFB84D' },
  // 6. Bottom-right
  { key: 'Setp6', title: 'Step 6', text: 'Recover, wipe, and reassign with chain-of-custody logs.',               img: 'images/CircularIT_Offboardingn_1x_1.png', color: '#FFB84D' },
  // 7. Right
  { key: 'Setp7',  title: 'Step 7', text: 'MDM, EDR, and backups to keep endpoints safe and compliant.',            img: 'images/CircularIT_Offboardingn_1x_1.png',  color: '#FFB84D' },
];

// CHANGED: Angles now match the new clockwise order of STEPS
const ANGLES = [320, 0, 40, 90, 140, 180, 220]; // Using 360 instead of 0 for the last step ensures the arc grows

export default function CircularStepsWithArrow() {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const timer = useRef(null);

  // geometry (SVG canvas coordinates)
  const CENTER_X = 400;
  const CENTER_Y = 400;
  const RING_R   = 260; // ring radius in px
  const CIRCUM   = 2 * Math.PI * RING_R;

  // We want the progress to start from the TOP of the circle
  const START_DEG = -90; // rotate (-90) so 0 = top

  // auto-rotate
  useEffect(() => {
    if (hovering) return;
    timer.current = setInterval(() => setIndex(i => (i + 1) % STEPS.length), 2000);
    return () => clearInterval(timer.current);
  }, [hovering]);

  // active step + derived angles
  const active = STEPS[index];

  // CHANGED: Corrected the sweep calculation
  // This formula correctly calculates the clockwise distance from START_DEG to the target angle.
  const sweepDeg = useMemo(
    () => ((ANGLES[index] - START_DEG + 360) % 360),
    [index]
  );
  const mobileCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
  };
  const sweepRatio = sweepDeg / 360; // 0..1
  const dash = sweepRatio * CIRCUM;  // arc length

  // arrow end position at the end of the arc
  const theta = (START_DEG + sweepDeg) * Math.PI / 180; // radians
  const ax = CENTER_X + RING_R * Math.cos(theta);
  const ay = CENTER_Y + RING_R * Math.sin(theta);
  const arrowRotate = START_DEG + sweepDeg + 90; // tangent direction

  return (
      <section >
         <div
           className="hidden md:block mx-auto w-full max-w-[1080px] px-4 relative"
           onMouseEnter={() => setHovering(true)}
           onMouseLeave={() => setHovering(false)}
         >
           {/* ---- RING + ARC + ARROW (SVG) ---- */}
           <svg className="block w-full h-[1080px]" viewBox="0 0 800 800">
             {/* dotted guide ring */}
             <circle
               cx={CENTER_X}
               cy={CENTER_Y}
               r={RING_R}
               fill="none"
               stroke="#C9C5BF"
               strokeWidth="2"
               strokeDasharray="4 8"
             />
   
             {/* solid progress arc (uses stroke-dasharray trick) */}
             <motion.circle
               cx={CENTER_X}
               cy={CENTER_Y}
               r={RING_R}
               fill="none"
               stroke={active.color}
               strokeWidth="3"
               transform={`rotate(${START_DEG} ${CENTER_X} ${CENTER_Y})`} /* start at top */
               style={{ transition: 'stroke-dasharray .6s ease-in-out, stroke .2s' }}
               // show arc from start to target
               strokeDasharray={`${dash} ${CIRCUM}`}
               strokeLinecap="round"
             />
   
             {/* moving arrowhead at the end of arc */}
             <motion.g
               animate={{ x: ax, y: ay, rotate: arrowRotate }}
               transition={{ type: 'tween', duration: 0.6, ease: 'easeInOut' }}
               style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
             >
               {/* small ring for visibility */}
               <circle cx="0" cy="0" r="10" fill="none" stroke={active.color} strokeWidth="2" opacity="0.35" />
               {/* arrow chevron pointing along tangent */}
               <path d="M-6 0 L6 0 M2 -6 L6 0 L2 6"
                 fill="none" stroke={active.color} strokeWidth="2.5"
                 strokeLinecap="round" strokeLinejoin="round"
               />
             </motion.g>
   
             {/* center image */}
             <foreignObject
               x={CENTER_X - 260} y={CENTER_Y - 200} width="520" height="340"
             >
               <AnimatePresence mode="wait">
                 <motion.img
                   key={active.key}
                   src={active.img}
                   alt={active.title}
                   className="w-full h-full object-contain" // Use object-contain to prevent stretching
                   initial={{ opacity: 0, y: 18 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -18 }}
                   transition={{ duration: 0.35 }}
                 />
               </AnimatePresence>
             </foreignObject>
           </svg>
   
           {/* top dialog box (HTML overlay) */}
           <div className="absolute left-1/2 -translate-x-1/2 top-35 w-[min(92%,500px)] bg-[#FFB84D] border-2 border-black rounded-xl py-3 px-8 shadow-[0_10px_30px_rgba(0,0,0,.08)]">
             <div className="font-semibold text-[28px] text-center">{active.title}</div>
             <div className="text-[#333] text-[16px] text-center">{active.text}</div>
           </div>
   
           {/* pills around the ring (HTML overlay) */}
           <ul className="pointer-events-auto ">
             {STEPS.map((s, i) => {
               // Get the angle from our newly ordered array
               const rad = ANGLES[i] * Math.PI / 180;
               // We need to calculate position based on the original angles, but now they are sorted.
               // A better way is to attach the angle to the step object itself to avoid managing two separate arrays.
               // For now, this works because we sorted both arrays together.
               const x = CENTER_X + Math.cos(rad) * RING_R;
               // Invert Y because SVG Y-axis goes down, but math sin() goes up
               const y = CENTER_Y + Math.sin(rad) * RING_R;
               const isActive = i === index;
               
               // Adjust pill positioning for better alignment
               const xTranslate = x > CENTER_X ? '-10%' : '-90%';
               const yTranslate = y > CENTER_Y ? '-10%' : '-90%';
   
               return (
                 <li key={s.key}
                     className="absolute mt-5"
                     // NOTE: Y-axis is often inverted in screen coordinates vs math coordinates.
                     // The original code had a bug here. Standard cartesian-to-screen is (x, -y).
                     // But since the SVG coordinate system also has Y going down, we can just use '+' for sin.
                     style={{ 
                       left: `${x / 8}%`, // Using percentages for better responsiveness
                       top: `${y / 8}%`,
                       transform: `translate(${xTranslate}, ${yTranslate})` 
                     }}>
                   <button
                     className={`inline-flex items-center rounded-[10px] border border-black shadow-[0_2px_0_#000] px-8 py-4 text-[22px] bg-white transition-all duration-200 ${
                       isActive ? `bg-[${s.color}]` : 'hover:-translate-y-[1px] hover:shadow-[0_4px_0_#000]'
                     }`}
                     onClick={() => setIndex(i)}
                   >
                     {s.title.split(' ')[0]} {s.title.split(' ')[1]}
                   </button>
                 </li>
               );
             })}
           </ul>
         </div>
          {/* Visible on small screens, hidden on medium and up */}
         <div className="block md:hidden max-w-md mx-auto px-4">
           {STEPS.map((step) => (
             <motion.div
               key={step.key}
               className="mb-12" // Margin between cards
               variants={mobileCardVariants}
               initial="hidden"
               whileInView="visible"
               // `once: true` ensures the animation only plays once
               // `amount: 0.3` triggers the animation when 30% of the card is visible
               viewport={{ once: true, amount: 0.3 }}
             >
               <div>
                 <img 
                   src={step.img} 
                   alt={step.title} 
                   className="w-full h-auto rounded-lg mb-6"
                 />
                 <div className="p-4 rounded-xl border-1 border-black bg-[#FFEBBE]"> 
                 <h3 className="text-xl font-bold text-gray-800">
                   {step.title}
                 </h3>
                 <hr className="border-t border-black my-3 w-full"/>
                 <p className="text-gray-600">
                   {step.text}
                 </p>
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
       </section>
  );
}