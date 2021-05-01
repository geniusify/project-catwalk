/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import GalleryThumbnails from './GalleryThumbnails.jsx';

const ImageGallery = ({
  photos, alt, extendedView, onClick, imageIndex, setImageIndex
}) => {
  const [topIndex, setTopIndex] = useState(0);
  const canScrollLeft = imageIndex > 0;
  const canScrollRight = imageIndex < (photos.length - 1);
  const goLeft = () => {
    if (imageIndex === topIndex) {
      setTopIndex((i) => i - 1);
    }
    setImageIndex((i) => i - 1);
  };

  const goRight = () => {
    if ((imageIndex - 6) >= topIndex) {
      setTopIndex((i) => i + 1);
    }
    setImageIndex((i) => i + 1);
  };

  return (
    <div className={`ov-image-gallery ${extendedView ? 'ov-image-gallery-extended' : ''}`}>
      <img
        className={extendedView ? 'ov-main-gallery-image-extended' : 'ov-main-gallery-image'}
        src={photos[imageIndex].url}
        alt={alt}
        onClick={onClick}
      />

      {canScrollLeft
        ? (
          <img
            src="icons/left.svg"
            alt="left"
            onClick={goLeft}
            className={extendedView ? 'ov-gallery-left-extended' : 'ov-gallery-left'}
          />
        ) : null}
      {canScrollRight
        ? (
          <img
            src="icons/right.svg"
            alt="right"
            onClick={goRight}
            className={extendedView ? 'ov-gallery-right-extended' : 'ov-gallery-right'}
          />
        ) : null}

      <GalleryThumbnails
        photos={photos}
        chooseThumbnail={setImageIndex}
        imageIndex={imageIndex}
        topIndex={topIndex}
        setTopIndex={setTopIndex}
        extendedView={extendedView}
      />
    </div>
  );
};

export default ImageGallery;
