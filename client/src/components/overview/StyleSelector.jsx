/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';

import StyleItem from './StyleItem.jsx';

const StyleSelector = ({ styles, index }) => {
  return (
    <div className='ov-style-selector'>
      <div>
        <b>STYLE {'>'} {styles[index].name}</b>
      </div>
      <div className="ov-style-name">
        {styles.map((style, i) => (
          <StyleItem
            key={style.style_id}
            style={style}
            selected={i === index}
          />
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
