import { useContext, useState } from "react";
import { CartContext } from "../utils/cartContext";
import ProductInCart from "./ProductInCart";

const Cart = ({setIsCartVisible}) => {

    const cart = useContext(CartContext);
    console.log(cart);

    return (  
        <div className="background-blur">
            <div className="cart-container">

                <div className="cart-header">
                    <div>Shopping Cart</div>
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
                    <button onClick={() => cart.setIsCartVisible(false)}>Back To Shopping</button>
                </div>

            </div>
        </div>
    );
}
 
export default Cart;