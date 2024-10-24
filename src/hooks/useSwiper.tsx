import { useState, useEffect } from 'react';

const useIsMobile = (threshold: number) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < threshold);
    };

    const debounceResize = () => {
      let timer: NodeJS.Timeout;
      return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          handleResize();
        }, 100);
      };
    };

    const debouncedResize = debounceResize();

    handleResize();
    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, [threshold]);

  return isMobile;
};

export default useIsMobile;
