import { useEffect, useState, useCallback } from 'react';
import testimonials from '../data/testimonials';
import SectionReveal from './SectionReveal';

function StarRating({ value }) {
  return (
    <div className="flex items-center gap-1" aria-label={value + ' star rating'}>
      {Array.from({ length: 5 }).map(function (_, index) {
        return (
          <svg
            key={index}
            viewBox="0 0 24 24"
            className={[
              'h-4 w-4 sm:h-5 sm:w-5',
              index < value ? 'fill-gold text-gold' : 'fill-transparent text-neutral-300'
            ].join(' ')}
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="m12 3.6 2.6 5.26 5.8.84-4.2 4.09.99 5.79L12 16.86l-5.19 2.72.99-5.79-4.2-4.09 5.8-.84L12 3.6z" />
          </svg>
        );
      })}
    </div>
  );
}

function TestimonialSlider({ className = '' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const showPrevious = useCallback(function () {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(function (current) {
      return (current - 1 + testimonials.length) % testimonials.length;
    });
    setTimeout(function () {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  const showNext = useCallback(function () {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(function (current) {
      return (current + 1) % testimonials.length;
    });
    setTimeout(function () {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  useEffect(function () {
    if (isPaused) return;

    const timerId = window.setInterval(function () {
      showNext();
    }, 6000);

    return function () {
      window.clearInterval(timerId);
    };
  }, [isPaused, showNext]);

  const item = testimonials[activeIndex];

  return (
    <section
      className={'relative overflow-hidden rounded-3xl bg-white p-6 shadow-card sm:rounded-4xl sm:p-8 lg:p-10 ' + className}
      aria-label="Testimonials"
      onMouseEnter={function () {
        setIsPaused(true);
      }}
      onMouseLeave={function () {
        setIsPaused(false);
      }}
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />

      <SectionReveal>
        <div className="relative z-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold">
                <span className="h-px w-6 bg-gold" />
                Testimonials
              </span>
              <h2 className="mt-2 font-serif text-2xl text-charcoal sm:text-3xl lg:text-4xl">What Clients Say</h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={showPrevious}
                disabled={isAnimating}
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition-all duration-300 hover:border-charcoal hover:bg-charcoal hover:text-white disabled:opacity-50 sm:h-12 sm:w-12"
                aria-label="Previous testimonial"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={showNext}
                disabled={isAnimating}
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition-all duration-300 hover:border-charcoal hover:bg-charcoal hover:text-white disabled:opacity-50 sm:h-12 sm:w-12"
                aria-label="Next testimonial"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-8 overflow-hidden">
            <div
              className="transition-all duration-500"
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? 'translateY(10px)' : 'translateY(0)'
              }}
            >
              <div className="rounded-2xl border border-neutral-100 bg-gradient-to-br from-ivory to-cream p-6 sm:rounded-3xl sm:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <StarRating value={item.rating} />
                  <svg className="h-8 w-8 text-gold/30 sm:h-10 sm:w-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>

                <blockquote>
                  <p className="text-base leading-relaxed text-neutral-700 sm:text-lg lg:text-xl">
                    "{item.quote}"
                  </p>
                </blockquote>

                <div className="mt-6 flex items-center gap-4 border-t border-neutral-200 pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-lg font-serif text-white sm:h-14 sm:w-14">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-serif text-lg text-charcoal sm:text-xl">{item.name}</p>
                    <p className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-neutral-500 sm:text-sm">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2" aria-label="Testimonial position indicators">
            {testimonials.map(function (entry, index) {
              return (
                <button
                  key={entry.id}
                  type="button"
                  onClick={function () {
                    if (!isAnimating && index !== activeIndex) {
                      setIsAnimating(true);
                      setActiveIndex(index);
                      setTimeout(function () {
                        setIsAnimating(false);
                      }, 500);
                    }
                  }}
                  className={[
                    'h-2.5 rounded-full transition-all duration-300',
                    index === activeIndex
                      ? 'w-10 bg-gold'
                      : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
                  ].join(' ')}
                  aria-label={'Go to testimonial ' + (index + 1)}
                  aria-current={index === activeIndex ? 'true' : 'false'}
                />
              );
            })}
          </div>

          <p className="mt-4 text-center text-xs text-neutral-400">
            {activeIndex + 1} of {testimonials.length}
          </p>
        </div>
      </SectionReveal>
    </section>
  );
}

export default TestimonialSlider;
