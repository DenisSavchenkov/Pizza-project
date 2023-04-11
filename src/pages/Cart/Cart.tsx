import styles from './Cart.module.scss';

function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles.cartTop}>
        <div className={styles.basket}>
          <img src="src/images/black-basket.svg" alt="basket" />
          <span className={styles.basketText}>Корзина</span>
        </div>
        <div className={styles.garbage}>
          <svg
            className={styles.garbageIcon}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 5H4.16667H17.5"
              stroke="#B6B6B6"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
              stroke="#B6B6B6"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.33337 9.16667V14.1667"
              stroke="#B6B6B6"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.6666 9.16667V14.1667"
              stroke="#B6B6B6"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className={styles.garbageText}>Очистить корзину</p>
        </div>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.about}>
            <img src="src/images/pizza.png" alt="pizza" />
            <div>
              <h5 className={styles.title}>Чизбургер-пицца</h5>
              <p className={styles.text}>тонкое тесто, 26 см.</p>
            </div>
          </div>
          <div className={styles.counter}>
            <img
              className={styles.minus}
              src="src/images/minus-cart.svg"
              alt="minus"
            />
            <span className={styles.count}>0</span>
            <img
              className={styles.plus}
              src="src/images/plus-cart.svg"
              alt="plus"
            />
          </div>
          <p className={styles.sum}>0 ₽</p>
          <svg
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
              stroke-width="2"
            />
            <path
              d="M19.7479 17.9557L17.4993 15.7071L19.7479 13.4585C20.1618 13.0446 20.1618 12.3734 19.7479 11.9595C19.334 11.5455 18.6628 11.5455 18.2488 11.9595L16.0002 14.2081L13.7516 11.9595C13.3377 11.5455 12.6665 11.5455 12.2526 11.9595C11.8386 12.3734 11.8386 13.0446 12.2526 13.4585L14.5012 15.7071L12.2526 17.9557C11.8386 18.3696 11.8386 19.0409 12.2526 19.4548C12.6665 19.8687 13.3377 19.8687 13.7516 19.4548L16.0002 17.2062L18.2488 19.4548C18.6628 19.8687 19.334 19.8687 19.7479 19.4548C20.1618 19.0409 20.1618 18.3696 19.7479 17.9557Z"
              fill="#D0D0D0"
            />
          </svg>
        </li>
      </ul>
      <div className={styles.cartBottom}>
        <p className={styles.amount}>
          Всего пицц: <span>0 шт.</span>
        </p>
        <p className={styles.orderSum}>
          Сумма заказа:<span> 0 ₽</span>
        </p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.back}>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13L1 6.93015L6.86175 1"
              stroke="#D3D3D3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className={styles.backText}>Вернуться назад</p>
        </button>
        <button className={styles.pay}>Оплатить сейчас</button>
      </div>
    </div>
  );
}

export default Cart;
