import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' }
];

const services = [
  'Wedding Photography',
  'Portrait Sessions',
  'Event Coverage',
  'Commercial Work'
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-neutral-200 bg-gradient-to-br from-ivory via-white to-gold/10">
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold/10 blur-3xl animate-footer-float" />
      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-gold/10 blur-3xl animate-footer-float2" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="group inline-block">
              <span className="font-serif text-2xl text-charcoal transition-colors duration-300 group-hover:text-gold sm:text-3xl">
                Alex Monroe
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-600">
              Crafting timeless visual stories through wedding, portrait, and lifestyle photography. Based in New York, available worldwide.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-neutral-200" />
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">Follow</span>
              <div className="h-px flex-1 bg-neutral-200" />
            </div>
            <SocialLinks className="mt-4" />
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-charcoal">Quick Links</h3>
            <nav className="mt-5 flex flex-col gap-3" aria-label="Footer links">
              {quickLinks.map(function (item) {
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="group flex items-center gap-2 text-sm text-neutral-600 transition-colors duration-300 hover:text-charcoal"
                  >
                    <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-3" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-charcoal">Services</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {services.map(function (service) {
                return (
                  <li key={service} className="flex items-center gap-2 text-sm text-neutral-600">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {service}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-charcoal">Contact</h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="mailto:hello@alexmonroephoto.com"
                  className="group flex items-start gap-3 text-sm text-neutral-600 transition-colors duration-300 hover:text-charcoal"
                >
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span className="break-all">hello@alexmonroephoto.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+15557282048"
                  className="group flex items-start gap-3 text-sm text-neutral-600 transition-colors duration-300 hover:text-charcoal"
                >
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  +1 (555) 728-2048
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-600">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Brooklyn, New York
              </li>
            </ul>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg"
            >
              Get in Touch
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-neutral-200 pt-8 sm:flex-row sm:justify-between">
          <p className="text-center text-xs text-neutral-500 sm:text-left">
            &copy; {currentYear} Alex Monroe Photography. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-neutral-500">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Available for bookings
            </span>
            <span className="hidden h-4 w-px bg-neutral-300 sm:block" />
            <span>Made with care in NYC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
