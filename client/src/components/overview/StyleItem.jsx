import React from 'react';
import PropTypes from 'prop-types';

const StyleItem = ({ style, selected, select }) => (
  <div
    className={`ov-style-item ${selected ? 'ov-selected-style-item' : ''}`}
    onClick={select}
    onKeyPress={select}
    role="button"
    tabIndex={0}
    style={{ backgroundImage: `url(${style.photos[0].thumbnail_url})` }}
  >
    {selected && (<div className="ov-style-selector-check">✓</div>)}
  </div>
);

StyleItem.propTypes = {
  style: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  select: PropTypes.func.isRequired,
};

export default StyleItem;
