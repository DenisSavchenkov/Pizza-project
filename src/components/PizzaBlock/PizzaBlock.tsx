import styles from './PizzaBlock.module.scss';

type propsTypes = {
  imageUrl: string;
  title: string;
  price: number;
  types: number[];
  sizes: number[];
};

const PizzaBlock: React.FC<propsTypes> = ({
  imageUrl,
  title,
  price,
  types,
  sizes,
}) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <img src={imageUrl} alt="pizza" />
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.switchBlock}>
          <ul className={styles.types}>
            <li className={styles.active}>{types}</li>
          </ul>
          <ul className={styles.sizes}>
            <li className={styles.active}>{sizes} см.</li>
          </ul>
        </div>
        <div className={styles.bottom}>
          <p className={styles.price}>от {price} ₽</p>
          <button className={styles.button}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="#EB5A1E"
              />
            </svg>
            <span className={styles.buttonText}>Добавить</span>
            <span className={styles.count}>0</span>
          </button>
        </div>
      </li>
    </ul>
  );
};

export default PizzaBlock;
