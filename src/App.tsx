import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import { Route, Routes } from 'react-router-dom';
import './scss/global.scss';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<p>СТРАНИЦА НЕ НАЙДЕНА!</p>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
