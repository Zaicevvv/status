import React from 'react';
import css from './Map.module.css';

const Map = () => (
  <div className={css.mapWrap}>
    <a className={css.move} href="https://goo.gl/maps/TtBF5GJ2PyjSnxMZ6">
      <img
        className={css.moveIcon}
        src="https://img.icons8.com/ultraviolet/40/000000/collect.png"
      />
      Маршрут
    </a>
    <iframe
      className={css.map}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d417.90603178028095!2d30.406603959698998!3d50.44042225153873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce5102781b5b%3A0xf30584696cba623b!2z0KDQtdC30LjQvdCwINCxL9GDINCb0LXQv9GB0LUs0YHQutC70LDQtCAo0JLQsNGG0LvQsNCy0LAg0JPQsNCy0LXQu9CwMTYp!5e0!3m2!1sru!2sua!4v1586974343081!5m2!1sru!2sua"
    ></iframe>
  </div>
);

export default Map;
