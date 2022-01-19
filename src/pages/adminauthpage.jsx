import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import '../style/pages/adminAuthPage.scss';
import authIcon from '../assets/authPage.svg';
import accountIcon from '../assets/account.svg';
import passwordIcon from '../assets/password.svg';
import InputTab from '../components/Input/index';
import { useAuth } from '../context/userContext';
import { ROLE } from '../static/constants';

const AdminAuthPage = (props) => {
  const [authDetail, setAuthDetail] = useState({
    username: '',
    password: '',
    type: ROLE.ADMIN,
  });
  const { authLogin } = useAuth();

  const handlerFieldInput = (key) => {
    return (value) => {
      setAuthDetail({
        ...authDetail,
        [key]: value,
      });
    };
  };

  const loginHandler = async () => {
    const { push } = props.history;
    try {
      await authLogin(authDetail);
      push('/admin/editor');
    } catch (e) {
      //TODO 登录时候后的错误信息，后续用来做用户提示
    }
  };

  return (
    <div className="admin-auth-page">
      <section className="admin-auth-page__form">
        <ReactSVG className="admin-auth-page__icon" src={authIcon} />
        <InputTab
          className="admin-auth-page__account"
          icon={accountIcon}
          type="text"
          onChange={handlerFieldInput('username')}
          placeholder="Username"
          required={true}
        />

        <InputTab
          className="admin-auth-page__password"
          icon={passwordIcon}
          type="password"
          onChange={handlerFieldInput('password')}
          placeholder="Password"
          required={true}
        />

        <button className="admin-auth-page__auth-action" type="submit" onClick={loginHandler}>
          LOGIN
        </button>
      </section>
    </div>
  );
};

export default AdminAuthPage;
