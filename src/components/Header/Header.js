import React from 'react';
import Burger from '../Burger/Burger';
import logo from '../../images/logo.jpg';
import css from './Header.module.css';

const Header = () => (
  <div className={css.header}>
    <div className={css.hat}>
      <a href="#top">
        <img className={css.logoImg} src={logo} />
      </a>
      <a className={css.logo} href="#top">
        СТО - STATUS
      </a>
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
      <a className={css.btn} href="tel:+380978868899">
        {window.screen.width > 768 && 'Позвонить '}Киевстар
      </a>
      <a className={css.btn} href="#map">
        Карта{window.screen.width > 768 && ' проезда'}
      </a>
    </div>
  </div>
);

export default Header;
