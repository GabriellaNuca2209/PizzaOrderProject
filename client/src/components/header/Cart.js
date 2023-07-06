import { useContext, useState } from "react";
import { CartContext } from "../utils/cartContext";
import ProductInCart from "./ProductInCart";
import EmptyCart from "./EmptyCart";

const Cart = ({setIsFormVisible}) => {

    const cart = useContext(CartContext);

    function emptyAndCloseCart() {
        cart.emptyCart();
        cart.setFullPrice(0);
        cart.setIsCartVisible(false);
    }

    function handlePurchase() {
        setIsFormVisible(true);
        cart.setIsCartVisible(false);
    }

    return (  
        <div className="background-blur" onClick={() => cart.setIsCartVisible(false)}>
            <div className="cart-container">

                <div className="cart-header">
                    <button className="back" onClick={() => cart.setIsCartVisible(false)}><i className="fa-sharp fa-solid fa-arrow-left" style={{color: "#ffffff"}}></i></button>
                    <div>Shopping Cart</div>
                    <button className="trash" onClick={emptyAndCloseCart}><i class="fa-solid fa-trash" style={{color: "#fff"}}></i></button>
                </div>

                {cart.items.length > 0 
                ? <div className="cart-products">
                    {
                        cart.items.map((item, index) => (
                            <div key={index} className="cart-product">
                                <ProductInCart item={item}/>
                            </div>
                        ))
                    }
                </div>
                :
                <EmptyCart/>
                }
                
                
                <div className="cart-footer">
                    <div className="total-price">TOTAL PRICE: ${cart.fullPrice.toFixed(2)}</div>

                    {cart.items.length > 0 && <button onClick={handlePurchase}>Purchase</button>}
                    
                </div>

            </div>
        </div>
    );
}
 
export default Cart;