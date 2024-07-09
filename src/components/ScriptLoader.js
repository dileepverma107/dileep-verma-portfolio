// components/ScriptLoader.js
import { useEffect } from 'react';

const ScriptLoader = ({ url, id }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.id = id;
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url, id]);

  return null;
};

export default ScriptLoader;
