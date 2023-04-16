import React, { useRef } from 'react';
import styles from './Search.module.scss';
import debounce from 'lodash.debounce';
import { useAppDispatch } from '../../redux/store';
import { setSearchContent } from '../../redux/slices/filterSlice';

const Search: React.FC = () => {
  const [localSearch, setLocalSeach] = React.useState<string>('');
  const dispatch = useAppDispatch();
  const searchRef = useRef<HTMLInputElement>(null);

  //Clear Input
  const clearSeatchContent = () => {
    dispatch(setSearchContent(''));
    setLocalSeach('');
    searchRef.current?.focus();
  };

  //debounce Function
  const updatedInput = React.useCallback(
    debounce((srt: string) => {
      dispatch(setSearchContent(srt));
    }, 500),
    []
  );

  //Change content
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSeach(event.target.value);
    updatedInput(event.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        ref={searchRef}
        value={localSearch}
        onChange={onChangeInput}
        className={styles.input}
        type="text"
        placeholder="Найди свою пиццу..."
      />
      <img
        className={styles.searchIcon}
        src="src/images/search.svg"
        alt="search"
      />
      {localSearch && (
        <img
          onClick={clearSeatchContent}
          className={styles.cancel}
          src="src/images/cancel.svg"
          alt="cancel"
        />
      )}
    </div>
  );
};

export default Search;
