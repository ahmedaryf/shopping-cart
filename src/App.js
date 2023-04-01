
import './App.css';
import Nav from './components/nav';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Shop from './components/shop';
import { ShopContextProvider } from './context/shop-context';
import Cart from './components/cart';

function App() {
  return (
    <div className="App">
    <ShopContextProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </ShopContextProvider>
      
    </div>
  );
}

export default App;
