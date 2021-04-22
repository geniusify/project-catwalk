/* eslint-disable react/prop-types */
import React from 'react';

const GalleryThumbnails = ({ photos, chooseThumbnail, imageIndex }) => (
  <div className="ov-gallery-thumbnails">
    {photos.map((photo, index) => (
      <div
        key={photo.url}
        className={`ov-gallery-thumbnail ${index === imageIndex ? 'ov-gallery-thumbnail-selected' : ''}`}
        onClick={() => chooseThumbnail(index)}
        style={{ backgroundImage: `url(${photo.thumbnail_url})` }}
      />
    ))}

  </div>
);

export default GalleryThumbnails;
