import React from 'react';

const Header = ({ main, sub }) => (
  <div className="profile-header">
    <div className="header-main">{main}</div>
    <div className="header-sub">{sub}</div>
  </div>
);

export default Header;
