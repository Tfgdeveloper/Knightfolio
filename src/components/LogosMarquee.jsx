import './logos-marquee.css';

export default function LogosMarquee({
  speed = 30,           // seconds per full loop (lower = faster)
  height = 56,          // logo height in px
  gap = 64,             // gap between logos in px
  grayscale = true,     // desaturate logos for that muted look
}) {
  // Replace with your real logo URLs (SVG/PNG). Same height works best.
  const logos = [
    '/logos/604fd7acba5e872acde407e4d98aa84b.png',
    '/logos/salesforce_c8fcfa55-0812-4843-a684-8a316b953785.png',
    '/logos/771dc01440a3a3ebb08522e591cfec74.png',
    '/logos/Oddbox_162955c4-a6fb-4e84-9bd3-18892c817838.png',
    '/logos/WARM_GREY_-_B_Lab_Uk.png',
    '/logos/Warm_Grey_-_Bloom_and_Wild_26da3ccb-e760-4851-a444-d6bb5522852d.png',
    '/logos/WARM_GREY_-_Hunter_and_Gather_Logo_-_B_W.png',
    '/logos/WARM_GREY_-_RB_logo_black_RGB_556.png',
    '/logos/Warm_Grey_-_Suri_Logo.png',
    '/logos/Warm_Grey_-_THIS_MKT582_Logo_and_profile_pics_THIS_logo_Black_transparent.png',
    
  ];

  return (
    <div
      className="marquee bg-gradient-to-tr from-[#381C75] to-[#007C00]"
      style={{
        // CSS custom properties control motion/spacing from props
        '--marquee-height': `${height}px`,
        '--marquee-gap': `${gap}px`,
        '--marquee-duration': `${speed}s`,
      }}
    >
      
      <div className="marquee__track">
        {/* 2 copies for perfect seamless loop */}
        {[...logos, ...logos].map((src, i) => (
          <div className="marquee__item" key={i}>
            
            {/* Use img or Next/Image; keep height consistent */}
            <img
              src={src}
              alt=""
              height={height}
              style={{ height }}
              className={grayscale ? 'marquee__img marquee__img--muted' : 'marquee__img'}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
