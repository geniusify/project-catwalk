import React from 'react';
import PropTypes from 'prop-types';

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
    }
    return `ov-gallery-thumbnail-extended ${selected ? 'ov-gallery-thumbnail-extended-selected' : ''}`;
  };

  return (
    <div
      className="ov-gallery-thumbnail-viewer"
      style={{ gridTemplateRows: `50px ${height}px 50px` }}
    >
      {canScrollUp && (
        <img
          className="ov-up-arrow"
          src="icons/up.svg"
          alt="up"
          onClick={() => setTopIndex((i) => i - 1)}
        />
      )}

      <div className="ov-gallery-thumbnails-container" style={{ height }}>
        <div className="ov-gallery-thumbnails" style={{ top: topIndex * thumbOffset + 3 + 6 }}>
          {photos.map((photo, index) => (
            <div
              data-testid="thumbnails"
              key={photo.url}
              className={classNames(index)}
              onClick={() => chooseThumbnail(index)}
              style={false ? {} : { backgroundImage: `url(${photo.thumbnail_url})` }}
              role="button"
              tabIndex={0}
              label="thumbnail"
            />
          ))}
        </div>
      </div>

      {canScrollDown && (
        <img
          className="ov-down-arrow"
          alt="down"
          src="icons/down.svg"
          onClick={() => setTopIndex((i) => i + 1)}
        />
      )}
    </div>
  );
};

GalleryThumbnails.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    thumbnail_url: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
  chooseThumbnail: PropTypes.func.isRequired,
  imageIndex: PropTypes.number.isRequired,
  topIndex: PropTypes.number.isRequired,
  setTopIndex: PropTypes.func.isRequired,
  extendedView: PropTypes.bool.isRequired,
};

export default GalleryThumbnails;
