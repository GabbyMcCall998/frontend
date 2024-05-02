import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import remove from '../images/remove_icon.png';



const CartItems = () => {
    const {getTotalAmount,cartItems,all_products,removeFromCart} = useContext(ShopContext);
    return ( 
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>                
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((e)=>{
                if (cartItems[e.id]>0)
                {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format-mains">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>Ghc {e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>Ghc {e.new_price * cartItems[e.id]}</p>
                                <img src={remove} className='cartitems-remove-icon' onClick={()=>{removeFromCart(e.id)}} alt="" />
                            </div>
                            <hr /> 
                        </div>
                    )
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>Ghc {getTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>Ghc {getTotalAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default CartItems;