import React from 'react';
import PullDown from '../PullDown/PullDown';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-item center">
        <h1>succie.net</h1>
      </div>
      <div className="Header-item right">
        <PullDown />
      </div>
    </div>
  );
};

export default Header;
