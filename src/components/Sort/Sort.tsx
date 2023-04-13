import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import styles from './Sort.module.scss';
import { setActiveSort } from '../../redux/slices/filterSlice';
import React from 'react';

const sortNames = ['популярности', 'цене', 'алфавиту'];

const Sort: React.FC = () => {
  const [isPopup, setIsPopup] = React.useState<boolean>(false);
  const { activeSort } = useSelector((state: RootState) => state.filter);
  const dispatch = useAppDispatch();
  const sortRef = React.useRef<HTMLDivElement>(null);

  // Close popap when click outside block!
  window.document.addEventListener('click', (event: MouseEvent) => {
    if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
      setIsPopup(false);
    }
  });

  return (
    <div ref={sortRef} className={styles.sort}>
      <img src="src/images/arrow-up.svg" alt="arrow" />
      <span className={styles.sortBy}>Сортировка по:</span>
      <span onClick={() => setIsPopup(!isPopup)} className={styles.sortName}>
        {sortNames[activeSort]}
      </span>
      {isPopup && (
        <ul className={styles.popup}>
          {sortNames.map((name, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  dispatch(setActiveSort(index));
                  setIsPopup(false);
                }}
                className={activeSort === index ? styles.active : ''}
              >
                {name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Sort;
