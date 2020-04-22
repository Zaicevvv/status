import React from 'react';
import logo from '../../images/logo.jpg';
import css from './Header2.module.css';

const Header2 = () => (
  <div className={css.header}>
    <div className={css.hat}>
      <a href="#top">
        <img className={css.logoImg} src={logo} />
      </a>
      <a className={css.logo} href="#top">
        СТО - STATUS
      </a>
      <div className={css.nav}>
        <a className={css.navItem} href="#top">
          Вернуться на главную
        </a>
      </div>
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
    </div>
  </div>
);

export default Header2;
