import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import './scss/global.scss';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
