import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import editIcon from '../../../assets/edit.svg';
import deleteIcon from '../../../assets/deleteDish.svg';

const DishEditor = (props) => {
  const { name, price, modalHandler, _id, categories, url, deleteItem } = props;
  //TODO 图片链接要修改,暂时8081写死
  const imgUrl = `http://localhost:8081/${url}`;

  const onClickModal = () => {
    modalHandler({ _id, name, price, categories, imgUrl: url, type: 'update' });
  };

  return (
    <div className="edit-page__exist-item">
      <section className="edit-page__dish-detail">
        <ReactSVG src={deleteIcon} className="edit-page__delete-icon" onClick={() => deleteItem(_id)} />
        <div className="edit-page__dish-img">
          <img src={imgUrl} alt="apple" />
        </div>
        <span className="edit-page__dish-desc">{name}</span>
        <span className="edit-page__dish-price">{`$${price}`}</span>
      </section>
      <footer className="edit-page__dish-edit-btn">
        <ReactSVG className="edit-page__dish-edit-btn--icon" src={editIcon} />
        <span onClick={onClickModal}>Edit dish</span>
      </footer>
    </div>
  );
};

DishEditor.propTypes = {
  url: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  modalHandler: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default DishEditor;
