import React, { useState } from 'react';
import Logo from '../../dist/icons/logo6.png';

const Header = () => {
  const [searchText, setSearchText] = useState('');
  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') {
      setSearchText('');
    }
  };
  return (
    <div>
       <a href="http://localhost:3000/"><img className="hdr-image" src={Logo}></img></a>
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
