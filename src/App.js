import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './shop';
import ShopCategory from './shopCategory'; // Corrected import
import Products from './products';
import Cart from './cart';
import LoginSignup from './LoginSignup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="mens" />} />
          <Route path='/womens' element={<ShopCategory category="womens"/>} />
          <Route path='/kids' element={<ShopCategory category="kids"/>} />
          <Route path='/product' element={<Products />}>
            <Route path=':productId' element={<Products />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
