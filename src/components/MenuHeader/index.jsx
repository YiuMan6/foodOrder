import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import SearchBar from '../SearchBar';
import cartIcon from '../../assets/cart.svg';
import accountIcon from '../../assets/account.svg';
import { useCart } from '../../context/CartItemContext/cartContext';
import '../../style/components/menuHeader.scss';
import { useAuth } from '../../context/userContext';
import { TOKEN } from '../../static/constants';
import signoutIcon from '../../assets/signout.svg';

const MenuHeader = (props) => {
  const { cartHandle } = props;
  const { cartItems } = useCart();
  const quantity = cartItems.length;
  const { user, authLogout } = useAuth();
  const isUserLogout = isEmpty(user);

  return (
    <header className="menuHeader">
      <div className="menuHeader__title">
        <h1>Jaegar RestoCCC</h1>
        <h2>Tuesday, 2 Feb 2021</h2>
      </div>

      <div className="menuHeader__search">
        <SearchBar placeHolder={'Search for food, coffee,etc...'} />
      </div>

      <div className="menuHeader__iconsets">
        <div className="menuHeader__shopping-cart" onClick={cartHandle}>
          <span className={quantity === 0 ? 'menuHeader__quantity-hide' : 'menuHeader__quantity'}>{quantity}</span>
          <ReactSVG src={cartIcon} className="menuHeader__icon" />
        </div>
        <Link to={isUserLogout ? '/auth' : '/user'}>
          <ReactSVG src={accountIcon} className="menuHeader__icon" />
        </Link>
        {!isUserLogout && (
          <div className="menuHeader__user-info">
            <span className="menuHeader__username">Hello, {user.firstname}</span>
            <ReactSVG src={signoutIcon} className="menuHeader__icon" onClick={() => authLogout(TOKEN.USER)} />
          </div>
        )}
      </div>
    </header>
  );
};

export default MenuHeader;
