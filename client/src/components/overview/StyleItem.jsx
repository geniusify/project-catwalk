/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';

const StyleItem = ({ style, selected }) => {
  return (
    <>
      <div
        className={`ov-style-item ${selected ? 'ov-selected-style-item' : ''}`}
        style={{ backgroundImage: `url(${style.photos[0].thumbnail_url})` }}
      >
        {selected
          ? (<div className="ov-style-selector-check">√</div>)
          // ? null
          : null}

      </div>
    </>
  );
  // return (<div>!{style.name}</div>);
  // return (<div>abc</div>);
};

export default StyleItem;
