import React from 'react';
import styles from './CartItem.module.scss';
import { useAppDispatch } from '../../redux/store';
import {
  minusQuantity,
  plusQuantity,
  removeItem,
} from '../../redux/slices/cartSlice';

type CartItemType = {
  imageUrl: string;
  title: string;
  price: number;
  id: string;
  quantity: number;
};

const CartItem: React.FC<CartItemType> = ({
  imageUrl,
  title,
  price,
  quantity,
  id,
}) => {
  const dispatch = useAppDispatch();

  return (
    <li className={styles.item}>
      <div className={styles.about}>
        <img src={imageUrl} alt="pizza" />
        <div>
          <h5 className={styles.title}>{title}</h5>
          <p className={styles.text}>традиционное тесто, 30 см.</p>
        </div>
      </div>
      <div className={styles.counter}>
        <button>
          <img
            onClick={() => dispatch(minusQuantity(id))}
            className={styles.minus}
            src="src/images/minus-cart.svg"
            alt="minus"
          />
        </button>
        <span className={styles.count}>{quantity}</span>
        <button>
          {' '}
          <img
            onClick={() => dispatch(plusQuantity(id))}
            className={styles.plus}
            src="src/images/plus-cart.svg"
            alt="plus"
          />
        </button>
      </div>
      <p className={styles.sum}>{price * quantity} ₽</p>
      <button className={styles.cancelButton}>
        <svg
          onClick={() => dispatch(removeItem(id))}
          className={styles.cancel}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="16"
            cy="16"
            r="15"
            fill="white"
            stroke="#D7D7D7"
            strokeWidth="2"
          />
          <path
            d="M19.7479 17.9557L17.4993 15.7071L19.7479 13.4585C20.1618 13.0446 20.1618 12.3734 19.7479 11.9595C19.334 11.5455 18.6628 11.5455 18.2488 11.9595L16.0002 14.2081L13.7516 11.9595C13.3377 11.5455 12.6665 11.5455 12.2526 11.9595C11.8386 12.3734 11.8386 13.0446 12.2526 13.4585L14.5012 15.7071L12.2526 17.9557C11.8386 18.3696 11.8386 19.0409 12.2526 19.4548C12.6665 19.8687 13.3377 19.8687 13.7516 19.4548L16.0002 17.2062L18.2488 19.4548C18.6628 19.8687 19.334 19.8687 19.7479 19.4548C20.1618 19.0409 20.1618 18.3696 19.7479 17.9557Z"
            fill="#D0D0D0"
          />
        </svg>
      </button>
    </li>
  );
};

export default CartItem;
