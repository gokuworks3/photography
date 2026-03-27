import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Seo from '../components/Seo';
import SectionReveal from '../components/SectionReveal';
import GalleryGrid from '../components/GalleryGrid';
import TestimonialSlider from '../components/TestimonialSlider';
import galleryImages from '../data/galleryImages';
import services from '../data/services';

const featuredImages = galleryImages.filter(function (img) {
  return img.id !== 2;
}).slice(0, 8);

function HomePage() {
  const navigate = useNavigate();

  function goToPortfolio() {
    navigate('/portfolio');
  }

  return (
    <>
      <Seo
        title="Home"
        description="Alex Monroe is a professional photographer capturing timeless wedding, portrait, travel, and nature stories."
      />

      <Hero />

      <section id="featured-gallery" className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="absolute -left-20 top-1/2 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />

        <SectionReveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold">
                <span className="h-px w-8 bg-gold" />
                Featured Work
              </span>
              <h2 className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl lg:text-5xl">
                Portfolio Highlights
              </h2>
              <p className="mt-3 max-w-xl text-neutral-600">
                A curated selection of recent work spanning weddings, portraits, and landscape photography.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="group mt-4 inline-flex items-center gap-2 self-start rounded-full border border-neutral-300 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-charcoal hover:text-charcoal sm:mt-0"
            >
              View All Projects
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </SectionReveal>

        <SectionReveal delay={120} className="relative mt-10">
          <GalleryGrid images={featuredImages} onImageClick={goToPortfolio} />
        </SectionReveal>
      </section>

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold">
                <span className="h-px w-8 bg-gold" />
                Services
                <span className="h-px w-8 bg-gold" />
              </span>
              <h2 className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl lg:text-5xl">
                Photography Crafted Around Your Story
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
                Every session is thoughtfully designed to capture authentic moments with artistry and elegance.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {services.map(function (service, index) {
              return (
                <SectionReveal key={service.id} delay={index * 100}>
                  <article className="group relative overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover sm:rounded-3xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative p-5 sm:p-6">
                      <h3 className="font-serif text-xl text-charcoal sm:text-2xl">{service.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-600">{service.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-gold">
                          {service.price}
                        </span>
                        <Link
                          to="/services"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-charcoal text-white transition-all duration-300 hover:bg-black"
                          aria-label={'Learn more about ' + service.title}
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <TestimonialSlider />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-3xl bg-charcoal px-6 py-14 text-center text-white sm:rounded-4xl sm:px-12 sm:py-20 lg:px-20">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/60">
                <span className="h-px w-6 bg-gold" />
                Ready to Create
                <span className="h-px w-6 bg-gold" />
              </span>

              <h2 className="mx-auto mt-4 max-w-2xl font-serif text-2xl leading-snug sm:text-3xl md:text-4xl lg:text-5xl">
                Let's make your next moment unforgettable
              </h2>

              <p className="mx-auto mt-4 max-w-lg text-sm text-white/70 sm:text-base">
                Whether it's a wedding, portrait session, or creative project, I'd love to hear your story.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-charcoal transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:w-auto"
                >
                  Start Your Project
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-500 hover:-translate-y-1 hover:border-white hover:bg-white/10 sm:w-auto"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}

export default HomePage;
