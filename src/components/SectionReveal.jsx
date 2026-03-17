import { useEffect, useRef, useState } from 'react';

function SectionReveal({ as = 'div', className = '', delay = 0, children }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const Tag = as;

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
      }
    );

    observer.observe(node);

    return function () {
      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={'reveal ' + (visible ? 'reveal-visible ' : '') + className}
      style={{ transitionDelay: delay + 'ms' }}
    >
      {children}
    </Tag>
  );
}

export default SectionReveal;
