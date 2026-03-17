import { useEffect, useRef, useState } from 'react';

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const closeButtonRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const hasImage = typeof currentIndex === 'number' && currentIndex >= 0 && currentIndex < images.length;

  useEffect(function () {
    if (!hasImage) return;

    function onKeyDown(event) {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNext();
      if (event.key === 'ArrowLeft') onPrev();
    }

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return function () {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [hasImage, onClose, onNext, onPrev]);

  function handleTouchStart(e) {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) onNext();
    if (distance < -50) onPrev();
  }

  if (!hasImage) return null;

  const image = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      role="dialog"
      aria-modal="true"
    >
      {/* Header with counter and close button */}
      <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between p-4 sm:p-6">
        <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/30 sm:h-12 sm:w-12"
          aria-label="Close"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Previous button */}
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/30 sm:left-4 sm:h-12 sm:w-12"
        aria-label="Previous"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={onNext}
        className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/30 sm:right-4 sm:h-12 sm:w-12"
        aria-label="Next"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Image container */}
      <div
        className="flex h-full w-full items-center justify-center p-4 pt-20 pb-24 sm:p-8 sm:pt-24 sm:pb-28"
        onClick={function (e) {
          if (e.target === e.currentTarget) onClose();
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          key={image.id}
          src={image.image}
          alt={image.alt}
          className="max-h-full max-w-full object-contain"
          draggable="false"
        />
      </div>

      {/* Footer with title */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-4 text-center sm:p-6">
        <h3 className="font-serif text-lg text-white sm:text-xl">{image.title}</h3>
        <p className="mt-1 text-sm text-white/70">{image.category}</p>
      </div>
    </div>
  );
}

export default Lightbox;
