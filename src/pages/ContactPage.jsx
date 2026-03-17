import Seo from '../components/Seo';
import SectionReveal from '../components/SectionReveal';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';

const contactInfo = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@alexmonroephoto.com',
    href: 'mailto:hello@alexmonroephoto.com'
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Phone',
    value: '+1 (555) 728-2048',
    href: 'tel:+15557282048'
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Studio',
    value: 'Brooklyn, New York',
    href: null
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Hours',
    value: 'Mon-Fri: 9AM - 6PM',
    href: null
  }
];

function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Alex Monroe for bookings, package details, and project discussions."
      />

      <section className="relative overflow-hidden">
        <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -right-40 bottom-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
                <span className="h-px w-8 bg-gold" />
                Get in Touch
                <span className="h-px w-8 bg-gold" />
              </span>
              <h1 className="mt-4 font-serif text-4xl text-charcoal sm:text-5xl lg:text-6xl">
                Let's Create <span className="text-gold">Together</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
                Share your vision and let's plan something extraordinary. I typically respond within 24 hours.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <SectionReveal>
              <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-card sm:p-8 lg:p-10">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/5 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gold/5 blur-2xl" />

                <div className="relative">
                  <div className="mb-8">
                    <h2 className="font-serif text-2xl text-charcoal sm:text-3xl">Send a Message</h2>
                    <p className="mt-2 text-sm text-neutral-500">Fill out the form and I'll get back to you shortly.</p>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </SectionReveal>

            <div className="space-y-6">
              <SectionReveal delay={100}>
                <div className="rounded-3xl bg-gradient-to-br from-charcoal to-neutral-800 p-6 text-white shadow-card sm:p-8">
                  <h2 className="font-serif text-2xl">Contact Information</h2>
                  <p className="mt-2 text-sm text-white/60">Reach out through any of these channels</p>

                  <div className="mt-8 space-y-5">
                    {contactInfo.map(function (item) {
                      const content = (
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.15em] text-white/50">{item.label}</p>
                            <p className="mt-1 font-medium text-white">{item.value}</p>
                          </div>
                        </div>
                      );

                      if (item.href) {
                        return (
                          <a
                            key={item.label}
                            href={item.href}
                            className="block rounded-xl p-3 -m-3 transition-colors duration-300 hover:bg-white/5"
                          >
                            {content}
                          </a>
                        );
                      }

                      return (
                        <div key={item.label} className="p-3 -m-3">
                          {content}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/50">Follow Along</p>
                    <SocialLinks variant="dark" />
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={200}>
                <div className="overflow-hidden rounded-3xl bg-white shadow-card">
                  <div className="relative h-64 overflow-hidden">
                    <iframe
                      title="Map location"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0276%2C40.6872%2C-73.9346%2C40.7405&layer=mapnik"
                      loading="lazy"
                      className="h-full w-full"
                    />
                    <div className="pointer-events-none absolute inset-0 border-b-4 border-gold" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-charcoal">Studio Location</p>
                        <p className="text-sm text-neutral-500">Brooklyn, New York</p>
                      </div>
                      <a
                        href="https://maps.google.com/?q=Brooklyn,+New+York"
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={300}>
                <div className="rounded-3xl border border-neutral-200 bg-gradient-to-br from-cream to-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Currently Booking</p>
                      <p className="text-sm text-neutral-500">Spring & Summer 2026</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
