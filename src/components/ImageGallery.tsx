import React from "react";

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  title?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  onTryNow: (imageId: string) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onTryNow }) => {
  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {images.map((image) => (
          <div key={image.id} className="relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {image.title && (
              <p className="mt-2 text-xs font-body-text-body-3-regular text-monochrome-900">
                {image.title}
              </p>
            )}
            <button
              onClick={() => onTryNow(image.id)}
              className="mt-2 w-full px-3 py-2 bg-primary-950 text-basewhite text-xs font-body-text-body-3-regular rounded-lg hover:opacity-80 transition-opacity"
            >
              Try Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};