/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const GalleryThumbnails = ({ photos, chooseThumbnail, imageIndex }) => {
  const [topIndex, setTopIndex] = useState(0);
  const thumbOffset = -90;

  return (
    <div className="ov-gallery-thumbnail-viewer">
      <img className="ov-up-arrow" src="icons/up.svg" onClick={()=>setTopIndex((i) => i - 1)} />
      <div className="ov-gallery-thumbnails-container">
        <div className="ov-gallery-thumbnails" style={{ top: topIndex * thumbOffset }}>
          {photos.map((photo, index) => (
            <div
              key={photo.url}
              className={`ov-gallery-thumbnail ${index === imageIndex ? 'ov-gallery-thumbnail-selected' : ''}`}
              onClick={() => chooseThumbnail(index)}
              style={{ backgroundImage: `url(${photo.thumbnail_url})` }}
            />
          ))}
        </div>
      </div>
      <img className="ov-down-arrow" src="icons/down.svg" onClick={()=>setTopIndex((i) => i + 1)} />
    </div>
  )
};

export default GalleryThumbnails;
