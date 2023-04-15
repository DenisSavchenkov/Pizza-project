import React from 'react';
import styles from './CartButton.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CartButton: React.FC = () => {
  const { totalItems, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  const totalCount = totalItems.reduce((sum, item) => item.quantity + sum, 0);

  return (
    <>
      <Link to="/cart" className={styles.button}>
        <span className={styles.sum}>{totalPrice} ₽</span>
        <div className={styles.line}></div>
        <img
          className={styles.basket}
          src="src/images/white-basket.svg"
          alt="basket"
        />
        <span className={styles.amount}>{totalCount}</span>
      </Link>
    </>
  );
};

export default CartButton;
