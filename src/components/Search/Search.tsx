import React from 'react';
import styles from './Search.module.scss';

const Search: React.FC = () => {
  return (
    <div className={styles.search}>
      <input
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
