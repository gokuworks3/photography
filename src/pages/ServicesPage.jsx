import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import SectionReveal from '../components/SectionReveal';
import services from '../data/services';

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We discuss your vision, preferences, and special requirements',
    icon: '💬'
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Detailed timeline, location scouting, and creative direction',
    icon: '📋'
  },
  {
    number: '03',
    title: 'The Shoot',
    description: 'Professional photography with artistic attention to detail',
    icon: '📸'
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Edited gallery delivered within 2-3 weeks',
    icon: '🎁'
  }
];

const faqs = [
  {
    question: 'How far in advance should I book?',
    answer: 'For weddings, I recommend booking 6-12 months ahead. Portrait sessions can usually be scheduled within 2-4 weeks.'
  },
  {
    question: 'Do you travel for shoots?',
    answer: 'Yes! I photograph destination weddings and events worldwide. Travel fees are discussed during consultation.'
  },
  {
    question: 'How many photos will I receive?',
    answer: 'It depends on the package, but typically weddings receive 400-800+ images, portraits 50-100+ images.'
  },
  {
    question: 'Can I request specific edits?',
    answer: 'Absolutely. I work with you to achieve the perfect look for your final gallery.'
  }
];

function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Seo
        title="Services"
        description="Photography service packages by Alex Monroe including wedding, portrait, event, and commercial sessions."
      />

      <section className="relative overflow-hidden">
        <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -right-40 bottom-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
                <span className="h-px w-8 bg-gold" />
                Services
                <span className="h-px w-8 bg-gold" />
              </span>
              <h1 className="mt-4 font-serif text-4xl text-charcoal sm:text-5xl lg:text-6xl">
                Designed For Every <span className="text-gold">Milestone</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
                Every package includes personalized planning, artistic direction, and carefully edited final galleries with fast
                turnaround.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {services.map(function (service, index) {
              return (
                <SectionReveal key={service.id} delay={index * 100}>
                  <article className="group relative overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <span className="inline-flex rounded-full bg-gold/90 px-4 py-1 text-xs font-bold uppercase tracking-[0.15em] text-charcoal">
                          {service.price}
                        </span>
                      </div>

                      <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-charcoal opacity-0 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <h2 className="font-serif text-2xl text-charcoal sm:text-3xl">{service.title}</h2>
                      <p className="mt-3 text-neutral-600">{service.description}</p>

                      <ul className="mt-4 space-y-2">
                        {['Professional editing', 'Online gallery', 'Print rights included'].map(function (feature) {
                          return (
                            <li key={feature} className="flex items-center gap-2 text-sm text-neutral-600">
                              <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          );
                        })}
                      </ul>

                      <Link
                        to="/contact"
                        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-charcoal py-3 text-sm font-semibold uppercase tracking-[0.15em] text-charcoal transition-all duration-300 hover:bg-charcoal hover:text-white"
                      >
                        Book Now
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
                <span className="h-px w-8 bg-gold" />
                Process
                <span className="h-px w-8 bg-gold" />
              </span>
              <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">How It Works</h2>
              <p className="mx-auto mt-4 max-w-xl text-neutral-600">
                A seamless experience from first contact to final delivery
              </p>
            </div>
          </SectionReveal>

          <div className="relative mt-12">
            <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-gold to-transparent lg:block" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map(function (step, index) {
                return (
                  <SectionReveal key={step.number} delay={index * 100}>
                    <div className="group relative rounded-2xl bg-white p-6 shadow-card text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover">
                      <div className="relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-light text-2xl shadow-lg transition-transform duration-500 group-hover:scale-110">
                        {step.icon}
                      </div>
                      <span className="text-xs font-bold text-gold">{step.number}</span>
                      <h3 className="mt-1 font-serif text-xl text-charcoal">{step.title}</h3>
                      <p className="mt-2 text-sm text-neutral-600">{step.description}</p>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
                <span className="h-px w-8 bg-gold" />
                FAQ
                <span className="h-px w-8 bg-gold" />
              </span>
              <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">Common Questions</h2>
            </div>
          </SectionReveal>

          <div className="mt-10 space-y-4">
            {faqs.map(function (faq, index) {
              const isOpen = openFaq === index;

              return (
                <SectionReveal key={faq.question} delay={index * 50}>
                  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:border-gold/50">
                    <button
                      type="button"
                      onClick={function () {
                        setOpenFaq(isOpen ? null : index);
                      }}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className="font-medium text-charcoal">{faq.question}</span>
                      <span className={[
                        'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 transition-all duration-300',
                        isOpen ? 'rotate-180 bg-gold text-white' : ''
                      ].join(' ')}>
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    <div className={[
                      'overflow-hidden transition-all duration-300',
                      isOpen ? 'max-h-40 pb-5' : 'max-h-0'
                    ].join(' ')}>
                      <p className="px-5 text-neutral-600">{faq.answer}</p>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-charcoal via-neutral-800 to-charcoal px-6 py-14 text-center text-white sm:px-12 sm:py-20">
              <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-gold/20 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-gold/20 blur-3xl" />

              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
                  backgroundSize: '32px 32px'
                }} />
              </div>

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
                  Limited Availability
                </span>

                <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl">
                  Need a Custom Package?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-white/70">
                  Tell me about your timeline, location, and vision. I can tailor coverage for destination shoots, multi-day events,
                  and brand projects.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    to="/contact"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-charcoal shadow-lg shadow-gold/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/40 sm:w-auto"
                  >
                    Get Custom Quote
                    <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <a
                    href="tel:+15557282048"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/30 px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:-translate-y-1 hover:border-white hover:bg-white/10 sm:w-auto"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
