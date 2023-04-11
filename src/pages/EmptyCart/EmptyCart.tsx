import styles from './EmptyCart.module.scss';

function CartEmpty() {
  return (
    <div className={styles.cartEmpty}>
      <h3 className={styles.title}>Корзина пустая 😕</h3>
      <p className={styles.text}>
        Вероятней всего, вы не заказывали ещё пиццу. <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <div>
        <img
          className={styles.img}
          src="src/images/cart-empty.png"
          alt="cart-empty"
        />
      </div>
      <button className={styles.back}>Вернуться назад</button>
    </div>
  );
}

export default CartEmpty;
