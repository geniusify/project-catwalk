/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';

const logClicks = (WrappedComponent, cb) => (props) => {
  const startTime = new Date();
  const [name, Component] = Object.entries(WrappedComponent)[0];
  return (
    <div onClick={(event) => {
      const clickInfo = {
        module: name,
        element: event.target,
        time: (new Date() - startTime) / 1000,
      };
      cb(clickInfo);
    }}
    >
      <Component {...props} />
    </div>
  );
};

export default logClicks;
