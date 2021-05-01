/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';

const getOffset = (e, zoom) => {
  const t = e.target;
  const p = t.parentElement;
  const parentX = p.offsetWidth;
  const parentY = p.offsetHeight;
  const imageX = t.offsetWidth;
  const imageY = t.offsetHeight;
  const xPos = e.clientX - p.offsetLeft;
  const yPos = e.clientY - p.offsetTop;
  const xPercent = -Math.max(0, xPos / parentX);
  const yPercent = -Math.max(0, yPos / parentY);
  const xDiff = zoom * imageX - parentX;
  const yDiff = zoom * imageY - parentY;
  return [xPercent * xDiff, yPercent * yDiff];
};

const ExtendedViewZoom = ({ onClick, image }) => {
  const zoom = 2.5;
  const [offset, setOffset] = useState([0, 0]);

  const onMouseMove = (e) => {
    setOffset(getOffset(e, zoom));
  };

  return (
    <div
      className="ov-gallery-extended-zoomed"
      onClick={onClick}
      onMouseMove={onMouseMove}
    >
      <img
        src={image}
        alt="temp"
        className="ov-zoomed-image"
        style={{ transform: `translate(${offset[0]}px, ${offset[1]}px) scale(${zoom})` }}
      />
    </div>
  );
};

export default ExtendedViewZoom;
