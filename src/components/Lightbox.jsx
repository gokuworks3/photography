import { useEffect, useRef, useState, useCallback } from 'react';

function Lightbox({ images, currentIndex, onClose, onPrev, onNext, onGoTo }) {
  const closeButtonRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const hasImage = typeof currentIndex === 'number' && currentIndex >= 0 && currentIndex < images.length;

  useEffect(function () {
    if (!hasImage) {
      return undefined;
    }

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      }
      if (event.key === 'ArrowRight') {
        onNext();
      }
      if (event.key === 'ArrowLeft') {
        onPrev();
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    return function () {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [hasImage, onClose, onNext, onPrev]);

  useEffect(function () {
    setImageLoaded(false);
  }, [currentIndex]);

  const minSwipeDistance = 50;

  function onTouchStart(e) {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }

  function onTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function onTouchEnd() {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onNext();
    } else if (isRightSwipe) {
      onPrev();
    }
  }

  if (!hasImage) {
    return null;
  }

  const image = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={function (event) {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="absolute inset-x-4 top-4 flex items-center justify-between sm:inset-x-6 sm:top-6">
        <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
          {currentIndex + 1} / {images.length}
        </span>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white hover:text-charcoal"
          aria-label="Close lightbox"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <button
        type="button"
        onClick={onPrev}
        className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white hover:text-charcoal sm:left-6 sm:h-14 sm:w-14"
        aria-label="Previous image"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        type="button"
        onClick={onNext}
        className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white hover:text-charcoal sm:right-6 sm:h-14 sm:w-14"
        aria-label="Next image"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <div
        className="relative mx-auto w-full max-w-5xl px-4 sm:px-16"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative flex items-center justify-center">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-white" />
            </div>
          )}
          <img
            src={image.image}
            alt={image.alt}
            onLoad={function () {
              setImageLoaded(true);
            }}
            className={[
              'max-h-[75vh] max-w-full rounded-lg object-contain transition-opacity duration-300',
              imageLoaded ? 'opacity-100' : 'opacity-0'
            ].join(' ')}
            draggable="false"
          />
        </div>

        <div className={[
          'mt-4 text-center transition-opacity duration-300',
          imageLoaded ? 'opacity-100' : 'opacity-0'
        ].join(' ')}>
          <h3 className="font-serif text-xl text-white">{image.title}</h3>
          <p className="mt-1 text-sm text-white/60">{image.category}</p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-xs text-white/40">
        <p className="hidden sm:block">Use arrow keys to navigate • ESC to close</p>
        <p className="sm:hidden">Swipe to navigate • Tap outside to close</p>
      </div>
    </div>
  );
}

export default Lightbox;
