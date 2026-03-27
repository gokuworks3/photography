import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2000&q=80',
    alt: 'Wedding couple in dramatic evening light',
    zoom: 1.04,
    position: 'center center'
  },
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80',
    alt: 'Elegant wedding portrait',
    zoom: 1,
    position: 'center 30%'
  },
  {
    url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=2000&q=80',
    alt: 'Romantic couple moment',
    zoom: 1.03,
    position: 'center center'
  }
];

function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef(null);

  useEffect(function () {
    function handleScroll() {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(function () {
    const interval = setInterval(function () {
      setCurrentImage(function (prev) {
        return (prev + 1) % heroImages.length;
      });
    }, 6000);

    return function () {
      clearInterval(interval);
    };
  }, []);

  useEffect(function () {
    function handleMouseMove(e) {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    }

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
    }

    return function () {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  function scrollToGallery() {
    const gallerySection = document.getElementById('featured-gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const parallaxOffset = scrollY * 0.5;
  const contentOpacity = Math.max(0.88, 1 - scrollY / 700);
  const contentTranslate = scrollY * 0.3;
  const imageTranslateX = (mousePosition.x - 0.5) * 20;
  const imageTranslateY = (mousePosition.y - 0.5) * 20;

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden text-white"
    >
      {heroImages.map(function (image, index) {
        return (
          <div
            key={image.url}
            className={[
              'absolute inset-0 transition-opacity duration-1500',
              index === currentImage ? 'opacity-100' : 'opacity-0'
            ].join(' ')}
            style={{
              transform: `translateY(${parallaxOffset}px) translate3d(${imageTranslateX}px, ${imageTranslateY}px, 0) scale(${image.zoom})`
            }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className={[
                'h-full w-full object-cover transition-all duration-1000',
                loaded ? 'scale-100' : 'scale-110'
              ].join(' ')}
              style={{ objectPosition: image.position }}
              loading={index === 0 ? 'eager' : 'lazy'}
              onLoad={index === 0 ? function () { setLoaded(true); } : undefined}
            />
          </div>
        );
      })}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />


      {/* Animated Sparkles Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute h-[600px] w-[600px] rounded-full bg-gold/20 blur-[120px]"
          style={{
            left: mousePosition.x * 100 + '%',
            top: mousePosition.y * 100 + '%',
            transform: 'translate(-50%, -50%)'
          }}
        />
        {/* Sparkles */}
        {[...Array(12)].map((_, i) => {
          const size = Math.random() * 8 + 6;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const delay = Math.random() * 3;
          const duration = 3 + Math.random() * 3;
          return (
            <span
              key={i}
              className="absolute rounded-full bg-white/35 shadow-sm animate-sparkle"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                opacity: 0.2 + Math.random() * 0.2
              }}
            />
          );
        })}
      </div>

      <div className="absolute -bottom-40 left-1/4 h-96 w-96 animate-pulse rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute -top-20 right-1/4 h-80 w-80 animate-pulse rounded-full bg-white/5 blur-3xl" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-16 h-40 w-40 rounded-full bg-gold/25 blur-2xl floating" />
      <div className="absolute left-16 top-1/3 h-32 w-32 rounded-full bg-white/5 blur-2xl floating" style={{ animationDelay: '2s' }} />

      <div className="absolute left-8 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        {heroImages.map(function (_, index) {
          return (
            <button
              key={index}
              onClick={function () { setCurrentImage(index); }}
              className={[
                'h-16 w-1 rounded-full transition-all duration-500',
                index === currentImage ? 'bg-gold h-24' : 'bg-white/30 hover:bg-white/50'
              ].join(' ')}
              aria-label={'Go to slide ' + (index + 1)}
            />
          );
        })}
      </div>

      <div
        className="relative z-20 mx-auto w-full max-w-6xl px-5 pt-20 text-center sm:px-8"
        style={{
          opacity: contentOpacity,
          transform: `translateY(${contentTranslate}px)`
        }}
      >
        <div className="pointer-events-none absolute inset-x-4 top-8 h-[72%] rounded-[2.5rem] bg-black/35 blur-3xl sm:inset-x-10" />

        <div
          className={[
            'relative z-10 transition-all duration-1000',
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          ].join(' ')}
          style={{ transitionDelay: '400ms' }}
        >
          <span className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.55)' }}>
              Award-Winning Photography
            </span>
          </span>
        </div>

        <h1
          className={[
            'relative z-10 mt-10 transition-all duration-1000',
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          ].join(' ')}
          style={{ transitionDelay: '600ms' }}
        >
          <span className="block font-serif text-5xl font-semibold leading-[1.1] tracking-wide text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.65)] xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            Alex
            <span className="relative mx-4 inline-block">
              <span className="text-gold">Monroe</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" fill="none">
                <path d="M0 5 Q50 0, 100 5 T200 5" stroke="url(#gold-gradient)" strokeWidth="2" fill="none" />
                <defs>
                  <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#c9a96e" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </span>
        </h1>

        <p
          className={[
            'relative z-10 mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white transition-all duration-1000 sm:text-xl md:text-2xl',
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          ].join(' ')}
          style={{
            transitionDelay: '800ms',
            textShadow: '0 4px 18px rgba(0,0,0,0.55)'
          }}
        >
          Capturing Timeless Moments with
          <span className="font-serif italic text-gold"> Artistic Elegance</span>
        </p>

        <p
          className={[
            'relative z-10 mx-auto mt-4 max-w-xl text-sm text-white/90 transition-all duration-1000 sm:text-base',
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          ].join(' ')}
          style={{
            transitionDelay: '900ms',
            textShadow: '0 3px 14px rgba(0,0,0,0.5)'
          }}
        >
          Specializing in Weddings, Portraits, and Lifestyle Photography
        </p>

        <div
          className={[
            'relative z-10 mt-12 flex flex-col items-center justify-center gap-4 transition-all duration-1000 sm:flex-row sm:gap-6 md:mt-16',
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          ].join(' ')}
          style={{ transitionDelay: '1000ms' }}
        >
          <button
            type="button"
            onClick={scrollToGallery}
            className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-gold to-gold-light px-10 py-5 text-sm font-bold uppercase tracking-[0.25em] text-charcoal shadow-lg shadow-gold/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/40 sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Explore Portfolio
              <svg
                className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
          </button>

          <Link
            to="/contact"
            className="group w-full rounded-full border-2 border-white/50 bg-white/5 px-10 py-5 text-sm font-bold uppercase tracking-[0.25em] text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-charcoal hover:shadow-xl sm:w-auto"
          >
            <span className="flex items-center justify-center gap-3">
              Book Session
              <svg
                className="h-5 w-5 transition-transform duration-500 group-hover:rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </Link>
        </div>

        <div
          className={[
            'relative z-10 mt-20 grid grid-cols-3 gap-4 rounded-3xl bg-black/35 px-4 py-4 backdrop-blur-sm transition-all duration-1000 sm:gap-8 sm:px-8 sm:py-6 md:mt-24',
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          ].join(' ')}
          style={{ transitionDelay: '1200ms' }}
        >
          {[
            { number: '10+', label: 'Years Experience' },
            { number: '500+', label: 'Projects Delivered' },
            { number: '50+', label: 'Awards Won' }
          ].map(function (stat, index) {
            return (
              <div key={stat.label} className="group relative text-center">
                <div className="absolute -inset-4 rounded-2xl bg-white/5 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100" />
                <p className="relative font-serif text-3xl text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)] sm:text-4xl md:text-5xl">
                  {stat.number.split('').map(function (char, i) {
                    return (
                      <span
                        key={i}
                        className="inline-block transition-transform duration-300 group-hover:-translate-y-1"
                        style={{ transitionDelay: i * 50 + 'ms' }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </p>
                <p className="relative mt-2 text-[10px] uppercase tracking-[0.2em] text-white/80 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-10">
        <button
          type="button"
          onClick={scrollToGallery}
          className={[
            'group flex flex-col items-center gap-4 text-white/60 transition-all duration-1000 hover:text-white',
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          ].join(' ')}
          style={{ transitionDelay: '1400ms' }}
          aria-label="Scroll to gallery"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.4em]">Discover</span>
          <div className="relative flex h-14 w-8 items-start justify-center rounded-full border-2 border-current p-2">
            <span className="h-3 w-1.5 animate-bounce rounded-full bg-gold" />
          </div>
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-ivory/10 to-transparent" />

      <div className="absolute bottom-6 right-8 hidden items-center gap-3 text-xs text-white/40 lg:flex">
        <span className="uppercase tracking-[0.2em]">Follow</span>
        <span className="h-px w-8 bg-white/30" />
        {['Ig', 'Fb', 'Pi'].map(function (social) {
          return (
            <a
              key={social}
              href="#"
              className="transition-colors duration-300 hover:text-gold"
            >
              {social}
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Hero;
