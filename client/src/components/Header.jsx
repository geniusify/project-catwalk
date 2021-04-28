import React, { useState } from 'react';

const Header = () => {
  const [searchText, setSearchText] = useState('');
  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') {
      setSearchText('');
    }
  };
  return (
    <div>
      <h1 className="hdr-logo">
        GENIUSIFY
      </h1>
      <div className="hdr-search">
        <input
          className="hdr-search-field"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <input className="hdr-search-icon" type="image" src="./icons/search.svg" alt="search" />
      </div>
    </div>
  );
};

export default Header;
