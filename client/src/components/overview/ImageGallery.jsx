/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import GalleryThumbnails from './GalleryThumbnails.jsx';

const ImageGallery = ({ photos, alt }) => {
  const a = 123;
  return (
    <div className="ov-image-gallery">
      <img className="ov-main-gallery-image" src={photos[0].url} alt={alt} />
      <GalleryThumbnails photos={photos} />
    </div>
  );
};

export default ImageGallery;
