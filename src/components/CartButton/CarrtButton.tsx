import styles from './CartButton.module.scss';

function CartButton() {
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
}

export default CartButton;
