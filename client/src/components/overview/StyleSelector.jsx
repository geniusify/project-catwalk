/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';

import StyleItem from './StyleItem.jsx';

const StyleSelector = ({ styles, index, select }) => {
  return (
    <div className="ov-style-selector">
      <div className="ov-style-name">
        <b>STYLE {'>'} {styles[index].name}</b>
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
};

export default StyleSelector;
