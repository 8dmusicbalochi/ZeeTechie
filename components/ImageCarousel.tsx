import React, { useState, useCallback, useEffect } from 'react';
import LazyImage from './LazyImage';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface ImageCarouselProps {
  images: string[];
  altPrefix: string;
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, altPrefix, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasMultipleImages = images && images.length > 1;

  const goToPrevious = useCallback(() => {
    if (!hasMultipleImages) return;
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images, hasMultipleImages]);

  const goToNext = useCallback(() => {
    if (!hasMultipleImages) return;
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images, hasMultipleImages]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
            goToPrevious();
        } else if (e.key === 'ArrowRight') {
            goToNext();
        }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToPrevious, goToNext]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* Main Image Display */}
      <div className="relative w-full aspect-video rounded-lg shadow-2xl overflow-hidden group">
        <LazyImage
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={`${altPrefix} - Image ${currentIndex + 1}`}
          containerClassName="w-full h-full"
          imageClassName="w-full h-full object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:scale-110"
        />
        
        {hasMultipleImages && (
          <>
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              aria-label="Previous image"
            >
              <ChevronLeftIcon />
            </button>
            
            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              aria-label="Next image"
            >
              <ChevronRightIcon />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {hasMultipleImages && (
        <div className="mt-4">
          <div className="flex justify-center gap-4 py-2 overflow-x-auto">
            {images.map((imgUrl, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-background dark:focus:ring-offset-dark-brand-background focus:ring-brand-primary transition-all duration-200 ${currentIndex === index ? 'ring-2 ring-brand-primary scale-105' : 'opacity-60 hover:opacity-100'}`}
                aria-label={`View image ${index + 1}`}
              >
                <LazyImage
                  src={imgUrl}
                  alt={`Thumbnail ${index + 1} for ${altPrefix}`}
                  containerClassName="w-full h-full"
                  imageClassName="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;