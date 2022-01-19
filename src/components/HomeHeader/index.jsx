import React from 'react';
import { ReactSVG } from 'react-svg';
import foodIcon from '../../assets/food.svg';
import accountIcon from '../../assets/account.svg';
import '../../style/components/homeHeader.scss';

const HomeHeader = (props) => {
  return (
    <header className="home-header">
      <div className="home-header__left">
        <ReactSVG src={foodIcon} className="home-header__icon" />
        <h1 className="home-header__left__title">Food Stop</h1>
      </div>

      <div className="menu-header__right">
        <ReactSVG src={accountIcon} className="home-header__icon" />
      </div>
    </header>
  );
};

export default HomeHeader;
