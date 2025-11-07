import React, { useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  containerClassName?: string;
  imageClassName?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, containerClassName, imageClassName }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;
    const img = new Image();
    img.src = src;
    img.onload = () => {
      // Small delay prevents flash of content on fast connections
      setTimeout(() => setIsLoaded(true), 200);
    };
  }, [src]);

  const skeletonBaseClass = 'bg-gray-200 dark:bg-dark-brand-surface';
  const skeletonShimmerClass = 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/20 dark:before:via-white/10 before:to-transparent';

  return (
    <div className={`relative ${containerClassName}`}>
      {!isLoaded && (
        <div className={`absolute inset-0 w-full h-full ${skeletonBaseClass} ${skeletonShimmerClass}`}></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${imageClassName}`}
        loading="lazy"
      />
    </div>
  );
};

export default LazyImage;
