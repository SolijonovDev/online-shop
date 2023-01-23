import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export const Portal = props => {
  const { children } = props;

  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return isMounted ? ReactDOM.createPortal(children, document.getElementById('portal')) : null;
};
