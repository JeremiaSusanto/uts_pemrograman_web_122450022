import { useEffect } from 'react';

export const useTitle = (title) => {
  useEffect(() => {
    document.title = title;

    // Set favicon
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = '/image/logo-aja.png';
  }, [title]);
};
