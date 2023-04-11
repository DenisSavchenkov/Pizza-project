import Search from '../Search/Search';
import styles from './Header.module.scss';
import CartButton from '../CartButton/CarrtButton';

function Header() {
  return (
    <div className={styles.header}>
      <a href="#" className={styles.logo}>
        <img className={styles.img} src="src/images/logo.png" alt="logo" />
        <div>
          <h1 className={styles.title}>Вкусная пицца</h1>
          <span className={styles.text}>самая вкусная пицца во вселенной</span>
        </div>
      </a>
      <Search />
      <CartButton />
    </div>
  );
}

export default Header;
