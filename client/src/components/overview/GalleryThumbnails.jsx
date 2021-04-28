/* eslint-disable no-else-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

const GalleryThumbnails = ({
  photos, chooseThumbnail, imageIndex, topIndex, setTopIndex, extendedView,
}) => {
  const thumbOffset = -90;
  const height = Math.min(photos.length, 7) * 90 - 30 + 4;
  const canScrollUp = topIndex > 0;
  const canScrollDown = photos.length - topIndex > 7;
  const classNames = (index) => {
    const selected = index === imageIndex;
    if (!extendedView) {
      return `ov-gallery-thumbnail ${selected ? 'ov-gallery-thumbnail-selected' : ''}`;
    } else {
      return `ov-gallery-thumbnail-extended ${selected ? 'ov-gallery-thumbnail-extended-selected' : ''}`;
    }
  };
  return (
    <div
      className="ov-gallery-thumbnail-viewer"
      style={{ gridTemplateRows: `50px ${height}px 50px` }}
    >
      {canScrollUp
        ? (
          <img
            className="ov-up-arrow"
            src="icons/up.svg"
            alt="up"
            onClick={() => setTopIndex((i) => i - 1)}
          />
        ) : null}

      <div className="ov-gallery-thumbnails-container" style={{ height }}>
        <div className="ov-gallery-thumbnails" style={{ top: topIndex * thumbOffset + 3 }}>
          {photos.map((photo, index) => (
            <div
              data-testid="thumbnails"
              key={photo.url}
              className={classNames(index)}
              onClick={() => chooseThumbnail(index)}
              style={false ? {} : { backgroundImage: `url(${photo.thumbnail_url})` }}
            />
          ))}
        </div>
      </div>

      {canScrollDown
        ? (
          <img
            className="ov-down-arrow"
            alt="down"
            src="icons/down.svg"
            onClick={() => setTopIndex((i) => i + 1)}
          />
        ) : null}
    </div>
  );
};

export default GalleryThumbnails;
