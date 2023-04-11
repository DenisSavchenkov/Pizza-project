import Categories from '../../components/Categories/Categories';
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock';
import Sort from '../../components/Sort/Sort';

function Home() {
  return (
    <>
      <div className="content-top">
        <Categories />
        <Sort />
      </div>
      <h2 className="title">Все пиццы</h2>
      <div className="content-bottom">
        <PizzaBlock />
      </div>
    </>
  );
}

export default Home;
