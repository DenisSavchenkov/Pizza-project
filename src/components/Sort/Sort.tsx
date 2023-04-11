import styles from './Sort.module.scss';

function Sort() {
  return (
    <div className={styles.sort}>
      <img src="src/images/arrow-up.svg" alt="arrow" />
      <span className={styles.sortBy}>Сортировка по:</span>
      <span className={styles.sortName}>популярности</span>
      <ul className={styles.popup}>
        <li className={styles.active}>популярности</li>
        <li>цене</li>
        <li>алфавиту</li>
      </ul>
    </div>
  );
}

export default Sort;
