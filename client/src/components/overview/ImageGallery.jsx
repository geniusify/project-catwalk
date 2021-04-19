/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const ImageGallery = ({ photos, alt }) => {
  const a = 123;
  return (
    <div className="ov-image-gallery">
      {/* {JSON.stringify(photos)} */}
      <img className="ov-main-gallery-image" src={photos[0].url} alt={alt} />
    </div>
  );
};

export default ImageGallery;
