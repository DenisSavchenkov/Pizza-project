import React from 'react';
import styles from './Search.module.scss';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { setSearchContent } from '../../redux/slices/filterSlice';

const Search: React.FC = () => {
  const searchContent = useSelector(
    (state: RootState) => state.filter.searchContent
  );
  const dispatch = useAppDispatch();

  return (
    <div className={styles.search}>
      <input
        value={searchContent}
        onChange={(event) => dispatch(setSearchContent(event.target.value))}
        className={styles.input}
        type="text"
        placeholder="Найди свою пиццу..."
      />
      <img
        className={styles.searchIcon}
        src="src/images/search.svg"
        alt="search"
      />
      <img className={styles.cancel} src="src/images/cancel.svg" alt="cancel" />
    </div>
  );
};

export default Search;
