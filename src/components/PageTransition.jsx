import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function PageTransition({ children }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('enter');

  useEffect(function () {
    if (children !== displayChildren) {
      setTransitionStage('exit');
    }
  }, [children, displayChildren]);

  function handleTransitionEnd() {
    if (transitionStage === 'exit') {
      setDisplayChildren(children);
      setTransitionStage('enter');
    }
  }

  return (
    <div
      className={[
        'transition-all duration-500 ease-out',
        transitionStage === 'enter' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      ].join(' ')}
      onTransitionEnd={handleTransitionEnd}
    >
      {displayChildren}
    </div>
  );
}

export default PageTransition;
