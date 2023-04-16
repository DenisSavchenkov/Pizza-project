import React from 'react';
import styles from './PizzaBlock.module.scss';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { addItem } from '../../redux/slices/cartSlice';
import { CartSliceType } from '../../redux/slices/cartSlice';

export const typeNames = ['тонкое', 'традиционное'];

type propsTypes = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  types: number[];
  sizes: number[];
};

const PizzaBlock: React.FC<propsTypes> = ({
  id,
  imageUrl,
  title,
  price,
  types,
  sizes,
}) => {
  const [activeType, setActiveType] = React.useState<number>(0);
  const [activeSize, setActiveSize] = React.useState<number>(0);
  const currentItem = useSelector((state: RootState) =>
    state.cart.totalItems.find((item) => item.id === id)
  );
  const dispatch = useAppDispatch();
  const currentQuantity = currentItem ? currentItem.quantity : 0;

  const item: CartSliceType = {
    imageUrl,
    title,
    price,
    type: types[activeType],
    size: sizes[activeSize],
    id,
    quantity: 1,
  };

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <img src={imageUrl} alt="pizza" />
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.switchBlock}>
          <ul className={styles.types}>
            {types.map((type, index) => {
              return (
                <li
                  onClick={() => setActiveType(index)}
                  className={activeType === index ? styles.active : ''}
                  key={index}
                >
                  {typeNames[type]}
                </li>
              );
            })}
          </ul>
          <ul className={styles.sizes}>
            {sizes.map((size, index) => {
              return (
                <li
                  onClick={() => setActiveSize(index)}
                  className={activeSize === index ? styles.active : ''}
                  key={index}
                >
                  {size} см.
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.bottom}>
          <p className={styles.price}>от {price} ₽</p>
          <button
            onClick={() => dispatch(addItem(item))}
            className={styles.button}
          >
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
            <span className={styles.count}>{currentQuantity}</span>
          </button>
        </div>
      </li>
    </ul>
  );
};

export default PizzaBlock;
