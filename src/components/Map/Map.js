import React from 'react';
import css from './Map.module.css';

const Map = () => (
  <div className={css.mapWrap}>
    <img
      className={css.moveIcon}
      src="https://img.icons8.com/ultraviolet/40/000000/collect.png"
    />
    <a
      className={css.move}
      href="https://maps.google.com/maps?ll=50.440528,30.406935&z=19&t=m&hl=ru&gl=UA&mapclient=embed&daddr=%D0%A0%D0%B5%D0%B7%D0%B8%D0%BD%D0%B0%20%D0%B1%2F%D1%83%20%D0%9B%D0%B5%D0%BF%D1%81%D0%B5%2C%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%20(%D0%92%D0%B0%D1%86%D0%BB%D0%B0%D0%B2%D0%B0%20%D0%93%D0%B0%D0%B2%D0%B5%D0%BB%D0%B016)%20%D0%B7%D0%B0%D0%B5%D0%B7%D0%B4%20%D1%81%20%D1%83%D0%BB%D0%B8%D1%86%D1%8B%20%D0%9A%D0%B0%D0%B1%D0%BB%D1%83%D0%BA%D0%BE%D0%B2%D0%B0%2026%2C%2003126%20%D0%B1%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%20%D0%92%D0%B0%D1%86%D0%BB%D0%B0%D0%B2%D0%B0%20%D0%93%D0%B0%D0%B2%D0%B5%D0%BB%D0%B0%2C%2016%20%D0%9A%D0%B8%D1%97%D0%B2@50.4405279,30.4069347"
    >
      Маршрут
    </a>
    <iframe
      className={css.map}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d417.90603178028095!2d30.406603959698998!3d50.44042225153873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce5102781b5b%3A0xf30584696cba623b!2z0KDQtdC30LjQvdCwINCxL9GDINCb0LXQv9GB0LUs0YHQutC70LDQtCAo0JLQsNGG0LvQsNCy0LAg0JPQsNCy0LXQu9CwMTYp!5e0!3m2!1sru!2sua!4v1586974343081!5m2!1sru!2sua"
    ></iframe>
  </div>
);

export default Map;
