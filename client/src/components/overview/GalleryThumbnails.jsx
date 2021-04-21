/* eslint-disable react/prop-types */
import React from 'react';

const GalleryThumbnails = ({ photos }) => (
  <div className="ov-gallery-thumbnails">
    {photos.map((photo) => (
      <div
        key={photo.url}
        className="ov-gallery-thumbnail"
        style={{ backgroundImage: `url(${photo.thumbnail_url})` }}
      />
    ))}

  </div>
);

export default GalleryThumbnails;
