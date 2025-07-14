import React, { useState, useRef, useEffect } from "react";

interface PhotoCard {
  id: string;
  backgroundImage?: string;
  customImage?: string;
  hasOverflow?: boolean;
}

interface SwipeablePhotoGalleryProps {
  photos: PhotoCard[];
  onTryNow: (photoId: string) => void;
}

export const SwipeablePhotoGallery: React.FC<SwipeablePhotoGalleryProps> = ({
  photos,
  onTryNow,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    const threshold = 50;
    
    if (translateX > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (translateX < -threshold && currentIndex < photos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    
    setTranslateX(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const currentX = e.clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    const threshold = 50;
    
    if (translateX > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (translateX < -threshold && currentIndex < photos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    
    setTranslateX(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  const renderPhotoCard = (photo: PhotoCard) => {
    return (
      <div
        key={photo.id}
        className="relative w-[140px] h-[140px] bg-[#dddddd] rounded-2xl overflow-hidden flex-shrink-0"
      >
        {photo.backgroundImage ? (
          <div
            className="h-[140px] bg-cover bg-[50%_50%]"
            style={{ backgroundImage: `url(${photo.backgroundImage})` }}
          >
            <button
              className="flex w-20 h-8 items-center justify-center gap-2.5 p-2.5 relative top-24 left-[26px] bg-white rounded-[100px] shadow-[0px_10px_20px_#0807241a] hover:shadow-[0px_12px_24px_#0807242a] transition-shadow cursor-pointer"
              aria-label="Try Now"
              onClick={() => onTryNow(photo.id)}
            >
              <span className="relative w-fit mt-[-5.50px] mb-[-3.50px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-sm tracking-[-0.20px] leading-[21px] whitespace-nowrap">
                Try Now
              </span>
            </button>
          </div>
        ) : photo.customImage ? (
          <div className="relative w-[106px] h-[140px]">
            <img
              className="absolute w-[47px] h-[140px] top-0 left-0 object-cover"
              alt="Fashion model"
              src={photo.customImage}
            />
            <button
              className="absolute top-24 shadow-[0px_10px_20px_#0807241a] flex w-20 h-8 items-center justify-center gap-2.5 p-2.5 left-[26px] bg-white rounded-[100px] hover:shadow-[0px_12px_24px_#0807242a] transition-shadow cursor-pointer"
              aria-label="Try Now"
              onClick={() => onTryNow(photo.id)}
            >
              <span className="relative w-fit mt-[-5.50px] mb-[-3.50px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-sm tracking-[-0.20px] leading-[21px] whitespace-nowrap">
                Try Now
              </span>
            </button>
          </div>
        ) : (
          <button
            className="relative top-[92px] flex w-20 h-8 items-center justify-center gap-2.5 p-2.5 left-[26px] bg-white rounded-[100px] hover:shadow-[0px_4px_12px_#0807241a] transition-shadow cursor-pointer"
            aria-label="Try Now"
            onClick={() => onTryNow(photo.id)}
          >
            <span className="relative w-fit mt-[-5.50px] mb-[-3.50px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-sm tracking-[-0.20px] leading-[21px] whitespace-nowrap">
              Try Now
            </span>
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="w-full max-w-[280px] overflow-hidden">
      <div
        ref={containerRef}
        className="flex transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing"
        style={{
          transform: `translateX(${-currentIndex * 152 + translateX}px)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {photos.map((photo) => (
          <div key={photo.id} className="mr-3">
            {renderPhotoCard(photo)}
          </div>
        ))}
      </div>
    </div>
  );
};