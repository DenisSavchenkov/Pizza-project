import { useSelector } from 'react-redux';
import Categories from '../../components/Categories/Categories';
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock';
import Sort from '../../components/Sort/Sort';
import { fetchPizza } from '../../redux/slices/pizzaDataSlice';
import React from 'react';
import { RootState, useAppDispatch } from '../../redux/store';

function Home() {
  const pizzaData = useSelector((state: RootState) => state.pizzas.pizzaData);
  const dispatch = useAppDispatch();
  console.log(pizzaData);

  React.useEffect(() => {
    dispatch(fetchPizza());
  }, []);

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
