import React from 'react';
import PropTypes from 'prop-types';

import StyleItem from './StyleItem.jsx';

const StyleSelector = ({ styles, index, select }) => (
  <div className="ov-style-selector">
    <div className="ov-style-name">
      <b>{`STYLE > ${styles[index].name}`}</b>
    </div>
    <div className="ov-style-item-container">
      {styles.map((style, i) => (
        <StyleItem
          key={style.style_id}
          style={style}
          selected={i === index}
          select={() => select(i)}
        />
      ))}
    </div>
  </div>
);

StyleSelector.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.shape({
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    'default?': PropTypes.bool,
    photos: PropTypes.arrayOf(PropTypes.shape({
      thumbnail_url: PropTypes.string,
      url: PropTypes.string,
    })),
  })).isRequired,
  index: PropTypes.number.isRequired,
  select: PropTypes.func.isRequired,
};

export default StyleSelector;
