/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';

const LogClicks = ({ callback, children }) => {
  const startTime = new Date();

  const onClick = (event, child) => {
    const clickInfo = {
      module: child.type.name,
      element: event.target,
      time: (new Date() - startTime) / 1000,
    };
    callback(clickInfo);
  };

  return (
    <>
      {React.Children.toArray(children).map((child, idx) => (
        <div
          onClick={(event) => onClick(event, child)}
          key={idx}
          className={child.props.className}
        >
          {React.cloneElement(child)}
        </div>
      ))}
    </>
  );
};

export default LogClicks;
