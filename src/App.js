import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './shop';
import ShopCategory from './shopCategory'; // Corrected import
import Products from './products';
import Cart from './cart';
import LoginSignup from './LoginSignup';
import SignupLogin from './SignupLogin';
import Footer from './Footer';
import men_banner from './images/banner_men.jpg';
import women_banner from './images/banner_women.jpg';
import kid_banner from './images/banner_kids.jpg';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>} />
          <Route path='/product' element={<Products />}>
            <Route path=':productId' element={<Products />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/signup' element={<SignupLogin />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
