import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { styles } from './styles';

export default class Burger extends Component {
  state = { menuOpen: false };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    const { menuOpen } = this.state;
    return (
      <Menu
        right
        styles={styles}
        isOpen={menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <a onClick={() => this.closeMenu()} href="#top">
          Главная
        </a>
        <a onClick={() => this.closeMenu()} href="#options">
          Наши услуги
        </a>
        <a onClick={() => this.closeMenu()} href="#time">
          Часы работы
        </a>
        <a onClick={() => this.closeMenu()} href="#contact">
          Контакты
        </a>
        <a onClick={() => this.closeMenu()} href="#map">
          Карта проезда
        </a>
      </Menu>
    );
  }
}
