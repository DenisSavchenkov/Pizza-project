import styles from './CartEmpty.module.scss';
import { Link } from 'react-router-dom';

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
      <Link to="/" className={styles.back}>
        Вернуться назад
      </Link>
    </div>
  );
}

export default CartEmpty;
