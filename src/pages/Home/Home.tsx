import { useSelector } from 'react-redux';
import Categories from '../../components/Categories/Categories';
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock';
import Sort from '../../components/Sort/Sort';
import { fetchPizza } from '../../redux/slices/pizzaDataSlice';
import React from 'react';
import { RootState, useAppDispatch } from '../../redux/store';

function Home() {
  const pizzaData = useSelector((state: RootState) => state.pizzas.pizzaData);
  const { activeCategory, activeSort, searchContent } = useSelector(
    (state: RootState) => state.filter
  );
  const dispatch = useAppDispatch();

  const category = activeCategory > 0 ? `category=${activeCategory}` : '';
  const search = searchContent ? `&search=${searchContent}` : '';
  const sortBy =
    activeSort === 0
      ? '&sortBy=raiting&order=desc'
      : activeSort === 1
      ? '&sortBy=price&order=desc'
      : ''
      ? activeSort === 2
      : '&sortBy=title&order=desc';

  type itemsTypes = {
    category: string;
    sortBy: string | boolean;
    search: string;
  };

  const items: itemsTypes = {
    category,
    sortBy,
    search,
  };

  React.useEffect(() => {
    dispatch(fetchPizza(items));
  }, [category, sortBy, searchContent]);

  return (
    <>
      <div className="content-top">
        <Categories />
        <Sort />
      </div>
      <h2 className="title">Все пиццы</h2>
      <div className="content-bottom">
        {pizzaData.map((pizza) => (
          <PizzaBlock key={pizza.id} {...pizza} />
        ))}
      </div>
    </>
  );
}

export default Home;
