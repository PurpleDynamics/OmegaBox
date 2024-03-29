import { useEffect } from 'react';

const usePreloadImage = ({ url }) => {
    useEffect(() => {
        const preloadLink = document.createElement('link');
        preloadLink.href = url;
        preloadLink.rel = 'preload';
        preloadLink.as = 'image';
        document.head.appendChild(preloadLink);
        // const img = new Image();

        // img.onload = () => {
        //     console.log(`preload: ${url}`);
        // };

        // img.onerror = err => {
        //     console.log(`faild preload : ${url}`, err);
        // };

        // img.src = url;

        return () => {
            if (preloadLink) {
                document.head.removeChild(preloadLink);
            }
        };
    }, [url]);
};
export default usePreloadImage;
