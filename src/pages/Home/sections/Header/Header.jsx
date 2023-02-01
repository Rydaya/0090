import React from 'react';
import './header.scss';
import userPhoto from 'assets/images/userPhoto.png';

export const Header = () => {
  return (
    <header className="header">
      <h2 className="header__title">Eva Jonson</h2>
      <div className="header__subtitle">Sales Manager</div>
      <div className="header__about">
        I will find the best offers for you.
        <br />
        My services are absolutely free.
        <div className="header__aboutBackground"></div>
      </div>
      <div className="header__photo">
        <img src={userPhoto} alt="user" />
      </div>
    </header>
  );
};
