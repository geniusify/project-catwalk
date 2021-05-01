/* eslint-disable react/prop-types */

import React from 'react';

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

export default StyleSelector;
