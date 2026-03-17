import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import SectionReveal from '../components/SectionReveal';

const profileImage =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1300&q=80';

const awards = [
  {
    year: '2025',
    title: 'International Wedding Photo Finalist',
    icon: '🏆'
  },
  {
    year: '2024',
    title: 'Editorial Portrait Excellence Award',
    icon: '⭐'
  },
  {
    year: '2023',
    title: 'Top 30 Emerging Photographers',
    icon: '📸'
  }
];

const skills = [
  { name: 'Wedding Photography', level: 98 },
  { name: 'Portrait Sessions', level: 95 },
  { name: 'Photo Editing', level: 92 },
  { name: 'Creative Direction', level: 88 }
];

const timeline = [
  { year: '2015', title: 'Started Professional Career', description: 'Began as assistant photographer in NYC' },
  { year: '2017', title: 'First Solo Exhibition', description: 'Featured at Brooklyn Art Gallery' },
  { year: '2019', title: 'International Recognition', description: '100+ destination weddings shot' },
  { year: '2022', title: 'Studio Launch', description: 'Opened flagship studio in Manhattan' },
  { year: '2024', title: 'Award-Winning Work', description: 'Multiple international awards' }
];

function AboutPage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <Seo
        title="About"
        description="Learn more about Alex Monroe, a photographer blending elegance, emotion, and storytelling in every frame."
      />

      <section className="relative overflow-hidden">
        <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -right-40 bottom-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
                <span className="h-px w-8 bg-gold" />
                About Me
                <span className="h-px w-8 bg-gold" />
              </span>
              <h1 className="mt-4 font-serif text-4xl text-charcoal sm:text-5xl lg:text-6xl">
                The Eye Behind The Camera
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
                Transforming moments into timeless art through the lens of passion and creativity
              </p>
            </div>
          </SectionReveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
            <SectionReveal>
              <div className="group relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/20 to-gold-light/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-card transition-shadow duration-500 group-hover:shadow-card-hover sm:p-4">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                    <img
                      src={profileImage}
                      alt="Photographer Alex Monroe smiling while holding a camera"
                      loading="lazy"
                      onLoad={function () { setImageLoaded(true); }}
                      className={[
                        'h-full w-full object-cover transition-all duration-700',
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      ].join(' ')}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition-transform duration-500 group-hover:translate-y-0">
                      <p className="font-serif text-2xl text-white">Alex Monroe</p>
                      <p className="text-sm text-white/80">Fine Art Photographer</p>
                    </div>
                  </div>

                  <div className="absolute -right-4 -top-4 flex h-20 w-20 items-center justify-center rounded-full bg-gold text-2xl shadow-lg sm:h-24 sm:w-24 sm:text-3xl">
                    📷
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-lg sm:block">
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Experience</p>
                  <p className="mt-1 font-serif text-3xl text-charcoal">10<span className="text-gold">+</span></p>
                  <p className="text-sm text-neutral-600">Years</p>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={150}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
                    Passionate About <span className="text-gold">Visual Stories</span>
                  </h2>
                  <p className="mt-4 leading-relaxed text-neutral-600">
                    Alex Monroe is a lifestyle and fine art photographer known for turning real moments into timeless visual
                    narratives. With a cinematic yet natural approach, Alex blends emotion, composition, and light to capture
                    imagery that feels both refined and deeply personal.
                  </p>
                  <p className="mt-4 leading-relaxed text-neutral-600">
                    Over the last decade, Alex has photographed destination weddings, editorial portraits, and commercial
                    campaigns for clients who value authenticity and sophisticated storytelling. Based in New York,
                    available worldwide.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {['Wedding', 'Portrait', 'Lifestyle', 'Editorial', 'Commercial'].map(function (tag) {
                    return (
                      <span
                        key={tag}
                        className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 transition-all duration-300 hover:border-gold hover:text-gold"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    to="/portfolio"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-500 hover:-translate-y-1 hover:bg-black hover:shadow-xl"
                  >
                    View My Work
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-neutral-300 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-charcoal transition-all duration-500 hover:-translate-y-1 hover:border-charcoal hover:shadow-lg"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="grid gap-8 sm:grid-cols-3">
              {awards.map(function (award, index) {
                return (
                  <div
                    key={award.title}
                    className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:bg-white/10"
                  >
                    <span className="text-4xl">{award.icon}</span>
                    <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">{award.year}</p>
                    <p className="mt-2 font-serif text-xl text-white">{award.title}</p>
                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-charcoal">
                      {index + 1}
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
                <span className="h-px w-8 bg-gold" />
                Skills
                <span className="h-px w-8 bg-gold" />
              </span>
              <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">Expertise & Capabilities</h2>
            </div>
          </SectionReveal>

          <div className="mx-auto mt-12 max-w-2xl space-y-6">
            {skills.map(function (skill, index) {
              return (
                <SectionReveal key={skill.name} delay={index * 100}>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium text-charcoal">{skill.name}</span>
                      <span className="text-sm text-gold">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light transition-all duration-1000"
                        style={{ width: skill.level + '%' }}
                      />
                    </div>
                  </div>
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
                Journey
                <span className="h-px w-8 bg-gold" />
              </span>
              <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">My Photography Journey</h2>
            </div>
          </SectionReveal>

          <div className="relative mx-auto mt-12 max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold to-transparent sm:left-1/2 sm:-translate-x-1/2" />

            {timeline.map(function (item, index) {
              const isEven = index % 2 === 0;

              return (
                <SectionReveal key={item.year} delay={index * 100}>
                  <div className={[
                    'relative mb-8 flex items-center gap-6',
                    isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  ].join(' ')}>
                    <div className={[
                      'hidden w-1/2 sm:block',
                      isEven ? 'text-right pr-8' : 'text-left pl-8'
                    ].join(' ')}>
                      <p className="font-serif text-2xl text-gold">{item.year}</p>
                    </div>

                    <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gold shadow-lg sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                      <div className="h-3 w-3 rounded-full bg-white" />
                    </div>

                    <div className={[
                      'flex-1 rounded-2xl bg-white p-5 shadow-card sm:w-1/2',
                      isEven ? 'sm:ml-auto sm:pl-8' : 'sm:mr-auto sm:pr-8'
                    ].join(' ')}>
                      <p className="font-serif text-lg text-gold sm:hidden">{item.year}</p>
                      <h3 className="font-semibold text-charcoal">{item.title}</h3>
                      <p className="mt-1 text-sm text-neutral-600">{item.description}</p>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-charcoal to-neutral-800 px-6 py-14 text-center text-white sm:px-12 sm:py-20">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />

              <div className="relative z-10">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">
                  Let's Create Something <span className="text-gold">Beautiful</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/70">
                  Ready to capture your special moments? I'd love to hear about your vision and bring it to life.
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-charcoal transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/25"
                >
                  Start Your Project
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
