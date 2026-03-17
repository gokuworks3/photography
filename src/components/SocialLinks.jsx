const iconClass = 'h-5 w-5';

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M13.5 8.5V6.75c0-.72.58-1.3 1.3-1.3h1.7V2h-2.92a4.08 4.08 0 0 0-4.08 4.08V8.5H7v3.45h2.5V22h4V11.95h2.7l.45-3.45h-3.15z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M18.9 3H22l-6.77 7.73L23 21h-6.3l-4.94-6.47L6.1 21H3l7.24-8.27L2 3h6.45l4.47 5.94L18.9 3zm-1.1 16h1.75L7.5 4.88H5.62L17.8 19z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.425 1.81-2.425.853 0 1.265.64 1.265 1.41 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  );
}

const items = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: <InstagramIcon />,
    hoverColor: 'hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400'
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: <FacebookIcon />,
    hoverColor: 'hover:bg-blue-600'
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/',
    icon: <TwitterIcon />,
    hoverColor: 'hover:bg-neutral-900'
  },
  {
    label: 'Pinterest',
    href: 'https://www.pinterest.com/',
    icon: <PinterestIcon />,
    hoverColor: 'hover:bg-red-600'
  }
];

function SocialLinks({ className = '', variant = 'default' }) {
  const baseClass = variant === 'dark'
    ? 'group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:text-white hover:shadow-lg'
    : 'group inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:text-white hover:shadow-lg';

  return (
    <div className={'flex items-center gap-3 ' + className}>
      {items.map(function (item) {
        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={'Follow on ' + item.label}
            className={baseClass + ' ' + item.hoverColor}
          >
            <span className="transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </span>
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
