import React from 'react';
import PropTypes from 'prop-types';

const DishesCard = (props) => {
  const { name, price, openModal, _id, url } = props;
  //TODO url前缀暂时写死，后续要修改
  const imgUrl = `http://localhost:8081/${url}`;

  const openDishModal = () => {
    openModal({ _id, name, price: Number(price), imgUrl });
  };
  return (
    <div className="dish-content__dish" onClick={openDishModal}>
      <header className="dish-content__dish-img">
        <img src={imgUrl} alt="logo" />
      </header>
      <main className="dish-content__dish-detail">
        <span className="dish-content__dish-desc">{name}</span>
        <span className="dish-content__dish-price">{`$${price}`}</span>
      </main>
    </div>
  );
};

DishesCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  openModal: PropTypes.func,
  _id: PropTypes.string,
  url: PropTypes.string,
};

export default DishesCard;
