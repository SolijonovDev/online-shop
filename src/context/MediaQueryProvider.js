import { createContext, useContext, useState, useEffect } from 'react';

const MediaQueryContext = createContext(null);

export const MediaQueryProvider = props => {
  const { children } = props;

  const [matches, setMatches] = useState(null);

  useEffect(() => {
    //set initial value
    const mediaWatcher = window.matchMedia('(min-width: 991px)');
    setMatches(mediaWatcher.matches);

    const handler = e => {
      setMatches(e.matches);
    };

    mediaWatcher.addEventListener('change', handler);

    // clean
    return () => {
      mediaWatcher.removeEventListener('change', handler);
    };
  }, []);

  return <MediaQueryContext.Provider value={{ matches }}>{children}</MediaQueryContext.Provider>;
};

export const useMediaQuery = () => useContext(MediaQueryContext);
