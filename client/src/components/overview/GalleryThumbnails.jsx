/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const GalleryThumbnails = ({ photos, chooseThumbnail, imageIndex }) => {
  const [topIndex, setTopIndex] = useState(0);
  const thumbOffset = -90;
  const height = Math.min(photos.length, 7) * 90 - 30 + 4;
  const canScrollUp = topIndex > 0;
  const canScrollDown = photos.length - topIndex > 7;
  return (
    <div className="ov-gallery-thumbnail-viewer"
      style={{ gridTemplateRows: `50px ${height}px 50px` }}>
      {canScrollUp
        ? (<img className="ov-up-arrow" src="icons/up.svg" onClick={() => setTopIndex((i) => i - 1)} />)
        : null}
      <div className="ov-gallery-thumbnails-container"
        style={{ height }}>
        <div className="ov-gallery-thumbnails" style={{ top: topIndex * thumbOffset + 3 }}>
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
      {canScrollDown
        ? (<img className="ov-down-arrow" src="icons/down.svg" onClick={() => setTopIndex((i) => i + 1)} />)
        : null}
    </div>
  )
};

export default GalleryThumbnails;
