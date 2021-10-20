import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {

  const [curPath, setCurPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocChange = () => {
      setCurPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocChange);

    return () => {
      window.removeEventListener('popstate', onLocChange);
    };
  }, []);

  return curPath === path ? children : null;
};

export default Route;