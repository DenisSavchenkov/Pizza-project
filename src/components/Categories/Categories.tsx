import React from 'react';
import styles from './Categories.module.scss';

const Categories: React.FC = () => {
  const nameOfCategory = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <ul className={styles.list}>
      {nameOfCategory.map((category, index) => {
        return <li key={index}>{category}</li>;
      })}
    </ul>
  );
};

export default Categories;
