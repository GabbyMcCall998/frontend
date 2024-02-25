import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from './Context/ShopContext';
import Menu from './images/Menu.png'





const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}=useContext(ShopContext)
    const menuRef=useRef()

    const menu_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }
    
    return ( 
        <div className="navigation">
            <div className="links">
            <Link to="/" style={{textDecoration:"none"}}><h1>Macron's Hub</h1></Link>
            </div>
            <img className='MenuDropDown' onClick={menu_toggle} src={Menu} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link to="/" style={{textDecoration:'none'}}>Shop{menu==="shop"?<hr/>:<></>}</Link></li>
                <li onClick={()=>{setMenu("mens")}}><Link to="/mens"  style={{textDecoration:'none'}}>Men{menu==="mens"?<hr/>:<></>}</Link></li>  
                <li onClick={()=>{setMenu("womens")}}><Link to="/womens"  style={{textDecoration:'none'}}>Women{menu==="womens"?<hr/>:<></>}</Link></li>  
                <li onClick={()=>{setMenu("kids")}}><Link to="/kids"  style={{textDecoration:'none'}}>Kids{menu==="kids"?<hr/>:<></>}</Link></li>     
            </ul>
            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                 <Link to="/cart "><img className='cart' src={require ('./images/cart_icon.png')} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>                         
    );
}
  
export default Navbar;
