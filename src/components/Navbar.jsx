import { useEffect, useState, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' }
];

function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(function () {
    setMenuOpen(false);
  }, [pathname]);

  const handleScroll = useCallback(function () {
    const currentScrollY = window.scrollY;

    setScrolled(currentScrollY > 50);

    if (currentScrollY > lastScrollY && currentScrollY > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(function () {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(function () {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return function () {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isHomeTop = pathname === '/' && !scrolled;

  const headerClass = [
    'fixed inset-x-0 top-0 z-50 transition-all duration-500 safe-top',
    hidden && !menuOpen ? '-translate-y-full' : 'translate-y-0',
    isHomeTop
      ? 'bg-transparent text-white'
      : 'glass border-b border-neutral-200/50 text-charcoal shadow-sm'
  ].join(' ');

  function getNavLinkClass(isActive) {
    const base = 'group relative text-sm font-medium tracking-wide transition-colors duration-300';

    if (isActive) {
      return base + ' ' + (isHomeTop ? 'text-white' : 'text-charcoal');
    }

    return base + ' ' + (isHomeTop
      ? 'text-white/75 hover:text-white'
      : 'text-neutral-500 hover:text-charcoal');
  }

  function getMobileLinkClass(isActive) {
    const base = 'flex items-center gap-3 rounded-2xl px-5 py-4 text-base font-medium transition-all duration-300';

    if (isActive) {
      return base + ' bg-charcoal text-white';
    }

    return base + ' text-neutral-700 hover:bg-neutral-100';
  }

  return (
    <>
      <header className={headerClass}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="group relative z-10 font-serif text-xl font-semibold tracking-wide sm:text-2xl"
          >
            <span className="relative">
              Alex Monroe
              <span
                className={[
                  'absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full',
                  isHomeTop ? 'bg-white' : 'bg-gold'
                ].join(' ')}
              />
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navItems.map(function (item) {
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={function (state) {
                    return getNavLinkClass(state.isActive);
                  }}
                >
                  {function (state) {
                    return (
                      <>
                        {item.label}
                        <span
                          aria-hidden="true"
                          className={[
                            'absolute -bottom-1 left-0 h-0.5 w-full origin-left transition-transform duration-300',
                            isHomeTop ? 'bg-white' : 'bg-gold',
                            state.isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                          ].join(' ')}
                        />
                      </>
                    );
                  }}
                </NavLink>
              );
            })}
          </nav>

          <Link
            to="/contact"
            className={[
              'hidden rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 lg:inline-flex',
              isHomeTop
                ? 'border border-white/40 text-white hover:bg-white hover:text-charcoal'
                : 'bg-charcoal text-white hover:-translate-y-0.5 hover:bg-black hover:shadow-lg'
            ].join(' ')}
          >
            Book Now
          </Link>

          <button
            type="button"
            className={[
              'relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 lg:hidden',
              menuOpen ? 'bg-charcoal text-white' : isHomeTop ? 'hover:bg-white/10' : 'hover:bg-neutral-100'
            ].join(' ')}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={function () {
              setMenuOpen(function (value) {
                return !value;
              });
            }}
          >
            <span className="relative flex h-5 w-6 flex-col items-center justify-center">
              <span
                className={[
                  'absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300',
                  menuOpen ? 'rotate-45' : '-translate-y-2'
                ].join(' ')}
              />
              <span
                className={[
                  'absolute h-0.5 rounded-full bg-current transition-all duration-300',
                  menuOpen ? 'w-0 opacity-0' : 'w-4 opacity-100'
                ].join(' ')}
              />
              <span
                className={[
                  'absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300',
                  menuOpen ? '-rotate-45' : 'translate-y-2'
                ].join(' ')}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={[
          'fixed inset-0 z-40 lg:hidden',
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        ].join(' ')}
      >
        <div
          className={[
            'absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500',
            menuOpen ? 'opacity-100' : 'opacity-0'
          ].join(' ')}
          onClick={function () {
            setMenuOpen(false);
          }}
          aria-hidden="true"
        />

        <nav
          className={[
            'absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out safe-top',
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          ].join(' ')}
          aria-label="Mobile navigation"
        >
          <div className="flex h-full flex-col px-6 pb-8 pt-24">
            <div className="flex-1 space-y-2">
              {navItems.map(function (item, index) {
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={function (state) {
                      return getMobileLinkClass(state.isActive);
                    }}
                    style={{
                      transitionDelay: menuOpen ? (index * 50) + 'ms' : '0ms',
                      opacity: menuOpen ? 1 : 0,
                      transform: menuOpen ? 'translateX(0)' : 'translateX(20px)'
                    }}
                  >
                    <span className={[
                      'flex h-10 w-10 items-center justify-center rounded-xl',
                      'bg-neutral-100 text-charcoal'
                    ].join(' ')}>
                      {getNavIcon(item.to)}
                    </span>
                    {item.label}
                  </NavLink>
                );
              })}
            </div>

            <div
              className="mt-auto space-y-4 border-t border-neutral-200 pt-6"
              style={{
                transitionDelay: menuOpen ? '300ms' : '0ms',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.3s ease, transform 0.3s ease'
              }}
            >
              <p className="text-sm text-neutral-500">Ready to create something beautiful?</p>
              <Link
                to="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-charcoal py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-black"
              >
                Book a Session
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

function getNavIcon(path) {
  const iconClass = 'h-5 w-5';

  switch (path) {
    case '/':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      );
    case '/portfolio':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      );
    case '/about':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      );
    case '/services':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
        </svg>
      );
    case '/contact':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      );
    default:
      return null;
  }
}

export default Navbar;
