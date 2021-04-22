/* eslint-disable react/prop-types */
import React from 'react';

const GalleryThumbnails = ({ photos, chooseThumbnail, imageIndex }) => (
  <div className="ov-gallery-thumbnails">
    <span className="ov-up-arrow">^</span>
    {photos.map((photo, index) => (
      <div
        key={photo.url}
        className={`ov-gallery-thumbnail ${index === imageIndex ? 'ov-gallery-thumbnail-selected' : ''}`}
        onClick={() => chooseThumbnail(index)}
        style={{ backgroundImage: `url(${photo.thumbnail_url})` }}
      />
    ))}
    <span className="ov-down-arrow">^</span>
  </div>
);

export default GalleryThumbnails;
