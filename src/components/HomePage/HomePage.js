import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../Card/Card';
import Map from '../Map/Map';
import css from './HomePage.module.css';
import loc from '../../images/loc/baseline_location_on_white_24dp.png';
import mail from '../../images/mail/baseline_contact_mail_white_24dp.png';
import phone from '../../images/phone/baseline_call_white_24dp.png';
import turbo from '../../images/turbo.jpg';
import dvig from '../../images/dvig.jpg';
import gbc from '../../images/gbc.jpg';
import gbo from '../../images/gbo.jpg';
import hod from '../../images/hod.webp';
import tnvd from '../../images/tnvd.jpg';
import main from '../../images/main.jpg';

function HomePage() {
  return (
    <div className={css.wrapper}>
      <div className={css.body}>
        <a className={css.top} id="top"></a>
        <img src={main} className={css.mainImg} />
        <section className={css.textSection}>
          <h2 className={css.textSectionTitle}>
            РЕМОНТ НЕИСПРАВНОСТЕЙ ЛЮБОЙ СЛОЖНОСТИ
          </h2>
          <span className={css.textSectionSpan}>
            Ведущая авторемонтная мастерская в г. Киеве
          </span>
          <p className={css.textSectionP}>
            «CTO - STATUS» выполнит любые работы по ремонту и обслуживанию
            вашего автомобиля, по разумной и понятной цене. Мастерская по
            ремонту автомобилей самого высокого уровня — такова наша цель,
            которая является залогом нашего успеха.
          </p>
        </section>
        <section className={css.optionsSection}>
          <a className={css.anchor} id="options"></a>
          <h2 className={css.title}>НАШИ УСЛУГИ</h2>
          <ul className={css.list}>
            <li className={css.listItem}>
              <Card img={turbo} text={'РЕМОНТ ТУРБИН'} />
            </li>
            <li className={css.listItem}>
              <Card img={dvig} text={'РЕМОНТ ДВИГАТЕЛЕЙ'} />
            </li>
            <li className={css.listItem}>
              <Card img={gbc} text={'РЕМОНТ ГОЛОВКИ БЛОКА ЦИЛИНДРА (ГБЦ)'} />
            </li>
            <li className={css.listItem}>
              <Card img={tnvd} text={'РЕМОНТ ДИЗЕЛЬНОЙ ТОПЛИВНОЙ СИСТЕМЫ'} />
            </li>
            <li className={css.listItem}>
              <Card img={gbo} text={'УСТАНОВКА И ОТЛАДКА ГБО'} />
            </li>
            <li className={css.listItem}>
              <Card img={hod} text={'РЕМОНТ ХОДОВОЙ ЧАСТИ'} />
            </li>
          </ul>
          <NavLink to="/all-options" className={css.optionsBtn}>
            Больше услуг
          </NavLink>
        </section>
        <section className={css.time}>
          <div className={css.timeWrap}>
            <a className={css.anchor} id="time"></a>
            <p className={css.title}>ЧАСЫ РАБОТЫ</p>
            <p className={css.timeInfo}>
              ПН–ПТ: 9:00–18:00
              <br />
              СБ: 10:00–14:00
              <br />
              ВС: выходной
            </p>
          </div>
        </section>
        <section className={css.contactSection}>
          <a className={css.anchor} id="contact"></a>
          <h2 className={css.title}>КОНТАКТЫ</h2>
          <ul className={css.contacts}>
            <li className={css.contactListItem}>
              <img src={phone} className={css.icon} />
              <span className={css.contactTitle}>Телефоны</span>
              <a className={css.link} href="tel:+380738810607">
                +38(073)881-06-07
              </a>
              <a className={css.link} href="tel:+380957572780">
                +38(095)757-27-80
              </a>
              <span>Николай Романович</span>
            </li>
            <li className={css.contactListItem}>
              <img src={loc} className={css.icon} />
              <span className={css.contactTitle}>Адресс</span>
              <p style={{ margin: 0 }}>бульвар Вацлава Гавела, 16</p>
            </li>
            <li className={css.contactListItem}>
              <img src={mail} className={css.icon} />
              <span className={css.contactTitle}>Напишите нам</span>
              <p style={{ margin: 0 }}>
                <img
                  className={css.miniIcon}
                  src="https://img.icons8.com/color/24/000000/telegram-app.png"
                />
                <a className={css.link} href="https://t.me/stostatus">
                  Telegram
                </a>
              </p>
              <p style={{ margin: 0 }}>
                <img
                  className={css.miniIcon}
                  src="https://img.icons8.com/color/48/000000/viber.png"
                />
                <a className={css.link} href="viber://add?number=380738810607">
                  Viber
                </a>
              </p>
            </li>
          </ul>
        </section>
        <section className={css.mapSection}>
          <a className={css.anchor} id="map"></a>
          <Map />
        </section>
      </div>
      <div className={css.footer}>
        <img
          className={css.logoImg}
          src="https://static.wixstatic.com/media/ef4bd0_c66d96a4e3a94d6ca11aaffa962052a4~mv2.png/v1/fill/w_94,h_49,al_c,q_85,usm_0.66_1.00_0.01/Tune-Up-300x300_edited.webp"
        />
        <h1 className={css.logo}>СТО - STATUS</h1>
      </div>
    </div>
  );
}

export default HomePage;
