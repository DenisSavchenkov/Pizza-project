import React from 'react';
import styles from './CartButton.module.scss';

const CartButton: React.FC = () => {
  return (
    <>
      <button className={styles.button}>
        <span className={styles.sum}>0 ₽</span>
        <div className={styles.line}></div>
        <img
          className={styles.basket}
          src="src/images/white-basket.svg"
          alt="basket"
        />
        <span className={styles.amount}>0</span>
      </button>
    </>
  );
};

export default CartButton;
