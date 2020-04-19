import React from 'react';
import Burger from '../Burger/Burger';
// import logo from '../../images/logo.png';
import css from './Header.module.css';

const Header = () => (
  <div className={css.header}>
    <div className={css.hat}>
      <img
        className={css.logoImg}
        src="https://static.wixstatic.com/media/ef4bd0_c66d96a4e3a94d6ca11aaffa962052a4~mv2.png/v1/fill/w_94,h_49,al_c,q_85,usm_0.66_1.00_0.01/Tune-Up-300x300_edited.webp"
      />
      <h1 className={css.logo}>СТО - STATUS</h1>
      {window.screen.width < 768 && <Burger />}
      {window.screen.width > 768 && (
        <div className={css.nav}>
          <a className={css.navItem} href="#top">
            Главная
          </a>
          <a className={css.navItem} href="#options">
            Наши услуги
          </a>
          <a className={css.navItem} href="#time">
            Часы работы
          </a>
          <a className={css.navItem} href="#contact">
            Контакты
          </a>
          <a className={css.navItem} href="#map">
            Карта проезда
          </a>
        </div>
      )}
    </div>
    <div className={css.btns}>
      <a className={css.btn} href="tel:+380957572780">
        {window.screen.width > 768 && 'Позвонить '}МТС
      </a>
      <a className={css.btn} href="tel:+380738810607">
        {window.screen.width > 768 && 'Позвонить '}Life:)
      </a>
      <a className={css.btn} href="#map">
        Карта{window.screen.width > 768 && ' проезда'}
      </a>
    </div>
  </div>
);

export default Header;
