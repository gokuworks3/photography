import { useEffect, useState } from 'react';

function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(function () {
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(function () {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(function () {
          setLoading(false);
        }, 300);
      }
    }, interval);

    return function () {
      clearInterval(timer);
    };
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div
      className={[
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal transition-opacity duration-500',
        progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      ].join(' ')}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-8">
          <div className="h-20 w-20 animate-spin-slow rounded-full border border-gold/20" />
          <div className="absolute inset-2 animate-spin-slow rounded-full border border-gold/40" style={{ animationDirection: 'reverse', animationDuration: '6s' }} />
          <div className="absolute inset-4 flex items-center justify-center rounded-full bg-gold/10">
            <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
            </svg>
          </div>
        </div>

        <h1 className="font-serif text-3xl text-white sm:text-4xl">Alex Monroe</h1>
        <p className="mt-2 text-sm uppercase tracking-[0.4em] text-white/50">Photography</p>

        <div className="mt-10 w-48">
          <div className="h-0.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light transition-all duration-100 ease-out"
              style={{ width: progress + '%' }}
            />
          </div>
          <p className="mt-3 text-center text-xs text-white/40">
            {Math.round(progress)}%
          </p>
        </div>
      </div>

      <p className="absolute bottom-8 text-xs uppercase tracking-[0.3em] text-white/30">
        Crafting Visual Stories
      </p>
    </div>
  );
}

export default PageLoader;
