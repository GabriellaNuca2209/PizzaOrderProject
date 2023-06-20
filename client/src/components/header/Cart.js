import { useContext, useState } from "react";
import { CartContext } from "../utils/cartContext";

const Cart = () => {

    const cart = useContext(CartContext);
    console.log(cart);

    return (  
        <div>Hello</div>
    );
}
 
export default Cart;