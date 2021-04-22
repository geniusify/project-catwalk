/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import GalleryThumbnails from './GalleryThumbnails.jsx';

const ImageGallery = ({ photos, alt }) => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="ov-image-gallery">
      <img className="ov-main-gallery-image" src={photos[imageIndex].url} alt={alt} />
      <GalleryThumbnails
        photos={photos}
        chooseThumbnail={setImageIndex}
        imageIndex={imageIndex}
      />
    </div>
  );
};

export default ImageGallery;
