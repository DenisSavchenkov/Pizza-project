import React from 'react';
import styles from './Categories.module.scss';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { setActiveCategory } from '../../redux/slices/filterSlice';

const nameOfCategory = ['Все', 'Вегетарианская', 'Острые', 'Мясные'];

const Categories: React.FC = () => {
  const { activeCategory } = useSelector((state: RootState) => state.filter);
  const dispatch = useAppDispatch();

  return (
    <ul className={styles.list}>
      {nameOfCategory.map((category, index) => {
        return (
          <li
            onClick={() => dispatch(setActiveCategory(index))}
            className={activeCategory === index ? styles.active : ''}
            key={index}
          >
            {category}
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
