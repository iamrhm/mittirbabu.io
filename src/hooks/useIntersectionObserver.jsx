import React from 'react';

function useIntersectionObserver(props) {
  const { option } = props;
  const containerRef = React.useRef(null);
  const [crossedThreshold, setCrossedThreshold] = React.useState(false);
  const observer = React.useRef(null);

  const callback = (entries) => {
    const [entry] = entries;
    setCrossedThreshold(entry.isIntersecting);
  };

  const cleanOb = () => {
    if (observer.current) {
      observer.current.disconnect();
    }
  };

  React.useEffect(() => {
    if (containerRef.current) {
      cleanOb();
      observer.current = new IntersectionObserver(callback, option);
      observer.current.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        cleanOb();
      }
    };
  }, [containerRef, option]);

  return [containerRef, crossedThreshold];
}

export default useIntersectionObserver;
