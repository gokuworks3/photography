import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
      />

      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-5 py-20">
        <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <div className="mb-8 inline-flex items-center justify-center">
            <span className="font-serif text-[120px] leading-none text-charcoal/10 sm:text-[180px] md:text-[220px]">
              404
            </span>
          </div>

          <h1 className="font-serif text-3xl text-charcoal sm:text-4xl md:text-5xl">
            Page Not Found
          </h1>

          <p className="mx-auto mt-4 max-w-md text-neutral-600">
            The page you're looking for seems to have wandered off. Perhaps it's out capturing beautiful moments somewhere.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-charcoal px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-500 hover:-translate-y-1 hover:bg-black hover:shadow-xl sm:w-auto"
            >
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>

            <Link
              to="/portfolio"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-neutral-300 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-charcoal transition-all duration-500 hover:-translate-y-1 hover:border-charcoal hover:shadow-lg sm:w-auto"
            >
              View Portfolio
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="mt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-400">Or explore these pages</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { to: '/about', label: 'About' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' }
              ].map(function (link) {
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-600 transition-all duration-300 hover:border-gold hover:text-charcoal"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFoundPage;
