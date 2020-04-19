import React, { Fragment } from 'react';
import css from './Card.module.css';

const Card = ({ img, text }) => (
  <Fragment>
    {/* style='backgroundImage: url('{...img}')' */}
    <div className={css.wrapper}>
      <h2 className={css.cardTitle}>{text}</h2>
      <img src={img} className={css.img} />
    </div>
  </Fragment>
);

export default Card;
