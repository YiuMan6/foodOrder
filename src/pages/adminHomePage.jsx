import React from 'react';
import moment from 'moment';
import NavLayout from '../components/NavLayout';
import { ROLE } from '../static/constants';
import '../style/pages/adminHomePage.scss';

const AdminHomePage = (props) => {
  const today = moment(Date()).format('dddd, D MMMM, YYYY');

  return (
    <NavLayout role={ROLE.ADMIN}>
      <section className="home-page">
        <header className="home-page__title">
          <span>Dashboard</span>
          <span>{today}</span>
        </header>
        <div className="home-page__content">
          <span className="home-page__sub-header">Welcome to profolio</span>
        </div>
      </section>
    </NavLayout>
  );
};

export default AdminHomePage;
