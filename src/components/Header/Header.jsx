import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.scss';

const Header = () => {
  return (
    <div className="content">
      <header className="header-section">
        <div className="container">
          <div className="header">
            <img className="header__logo" src={logo} alt="First sl" />
            <span className="header__text">real estate in Marbella</span>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
