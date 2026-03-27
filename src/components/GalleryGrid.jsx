import { useState } from 'react';

function GalleryGrid({ images, onImageClick }) {
  return (
    <div className="columns-1 gap-4 space-y-4 sm:columns-2 sm:gap-5 sm:space-y-5 lg:columns-3 xl:columns-4">
      {images.map(function (item, index) {
        return (
          <GalleryItem
            key={item.id}
            item={item}
            index={index}
            onImageClick={onImageClick}
            fadeInDelay={index * 80}
          />
        );
      })}
    </div>
  );
}

function GalleryItem({ item, index, onImageClick, fadeInDelay }) {
  const [loaded, setLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article className="break-inside-avoid">
      <button
        type="button"
        onClick={function () {
          if (onImageClick) {
            onImageClick(index);
          }
        }}
        onMouseEnter={function () {
          setIsHovered(true);
        }}
        onMouseLeave={function () {
          setIsHovered(false);
        }}
        onFocus={function () {
          setIsHovered(true);
        }}
        onBlur={function () {
          setIsHovered(false);
        }}
        className="group relative w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 sm:rounded-3xl fade-in-gallery"
        aria-label={'Open image: ' + item.title}
        style={{ animationDelay: loaded ? fadeInDelay + 'ms' : '0ms' }}
      >
        <div className={[
          'aspect-auto transition-all duration-500',
          loaded ? 'bg-transparent' : 'skeleton'
        ].join(' ')}>
          <img
            src={item.image}
            alt={item.alt}
            loading="lazy"
            onLoad={function () {
              setLoaded(true);
            }}
            className={[
              'h-auto w-full object-cover transition-all duration-700',
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105',
              isHovered ? 'scale-110 rotate-1 saturate-150' : 'scale-100'
            ].join(' ')}
          />
        </div>

        <div className={[
          'absolute inset-0 bg-gradient-to-t from-gold/60 via-black/20 to-transparent transition-opacity duration-500',
          isHovered ? 'opacity-100' : 'opacity-0'
        ].join(' ')} />

        <div className={[
          'absolute inset-0 flex flex-col justify-end p-4 text-left text-white transition-all duration-500 sm:p-5',
          isHovered ? 'opacity-100' : 'opacity-70'
        ].join(' ')}>
          <div
            className="transition-transform duration-500"
            style={{
              transform: isHovered ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <span className="mb-2 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] backdrop-blur-sm">
              {item.category}
            </span>
            <h3 className="font-serif text-lg font-semibold leading-tight sm:text-xl">
              {item.title}
            </h3>
          </div>

          <div
            className="mt-3 flex items-center gap-2 text-xs text-white/80 transition-all duration-500"
            style={{
              transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '50ms'
            }}
          >
            <span>View Full Size</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </div>
        </div>

        <div className={[
          'absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-lg transition-all duration-500 backdrop-blur-sm sm:right-4 sm:top-4',
          isHovered ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-2 opacity-0 scale-90'
        ].join(' ')}>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
          </svg>
        </div>
      </button>
    </article>
  );
}

export default GalleryGrid;
