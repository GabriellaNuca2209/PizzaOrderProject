import { useContext, useState } from "react";
import { CartContext } from "../utils/cartContext";
import ProductInCart from "./ProductInCart";

const Cart = ({setIsFormVisible}) => {

    const cart = useContext(CartContext);
    console.log(cart);
    console.log(cart.fullPrice)

    function emptyAndCloseCart() {
        cart.emptyCart();
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

                <div className="cart-products">
                    {
                        cart.items.map((item, index) => (
                            <div key={index} className="cart-product">
                                <ProductInCart item={item}/>
                            </div>
                        ))
                    }
                </div>
                
                <div className="cart-footer">
                    <div className="total-price">TOTAL PRICE: ${cart.fullPrice.toFixed(2)}</div>

                    <button onClick={handlePurchase}>Purchase</button>
                </div>

            </div>
        </div>
    );
}
 
export default Cart;