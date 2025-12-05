import './logos-marquee2.css';

export default function LogosMarquee2({
  speed = 20,           // seconds per full loop (lower = faster)
  height = 45,          // logo height in px
  gap = 150,             // gap between logos in px
  grayscale = true,     // desaturate logos for that muted look
}) {
  // Replace with your real logo URLs (SVG/PNG). Same height works best.
  const logos = [
    '/logos/apple.png',
    '/logos/dell.png',
    '/logos/lenovo.png',
    '/logos/3dca5bac3b43ae16d1b4f56135627d32.png',
    '/logos/samsung.png',
    
  ];

  return (
    <div
      className="marquee2"
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
