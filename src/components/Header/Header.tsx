import Search from '../Search/Search';
import styles from './Header.module.scss';
import CartButton from '../CartButton/CarrtButton';
import { Link } from 'react-router-dom';
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img className={styles.img} src="src/images/logo.png" alt="logo" />
        <div>
          <h1 className={styles.title}>Вкусная пицца</h1>
          <span className={styles.text}>самая вкусная пицца во вселенной</span>
        </div>
      </Link>
      <Search />
      <CartButton />
    </div>
  );
};

export default Header;
