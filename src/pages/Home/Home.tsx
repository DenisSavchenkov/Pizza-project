import React from 'react';
import { useSelector } from 'react-redux';
import { fetchPizza } from '../../redux/slices/pizzaDataSlice';
import { RootState, useAppDispatch } from '../../redux/store';
import Categories from '../../components/Categories/Categories';
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock';
import Sort from '../../components/Sort/Sort';

function Home() {
  const pizzaData = useSelector((state: RootState) => state.pizzas.pizzaData);
  const { activeCategory, activeSort, searchContent, orderDesc } = useSelector(
    (state: RootState) => state.filter
  );
  const dispatch = useAppDispatch();

  const category = activeCategory > 0 ? `category=${activeCategory}` : '';
  const search = searchContent ? `&search=${searchContent}` : '';
  const order = orderDesc ? '&order=desc' : `&order=asc`;
  const sortBy =
    activeSort === 0
      ? '&sortBy=rating'
      : activeSort === 1
      ? '&sortBy=price'
      : ''
      ? activeSort === 2
      : '&sortBy=title';

  type itemsTypes = {
    category: string;
    sortBy: string | boolean;
    search: string;
    order: string;
  };

  const items: itemsTypes = {
    category,
    sortBy,
    search,
    order,
  };

  React.useEffect(() => {
    dispatch(fetchPizza(items));
  }, [category, sortBy, searchContent, order]);

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
