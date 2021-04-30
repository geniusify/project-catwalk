/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
import React from 'react';

const ExtendedViewZoom = ({ onClick }) => {
  return (
    <div
      className="ov-gallery-extended-zoomed"
      onClick={onClick}
    >
      I'm an extended zoom!
    </div>
  );
};

export default ExtendedViewZoom;
