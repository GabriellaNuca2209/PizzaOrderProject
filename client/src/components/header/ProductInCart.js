import { useContext } from "react";
import { CartContext } from "../utils/cartContext";

const ProductInCart = ({item}) => {
    const cart = useContext(CartContext);

    return (  
        <>
            <img src={item.url} alt="product" className="product-img"/>
            <div className="product-name">{item.name}</div>
            <div className="product-quantity">Amount: {item.quantity}</div>
            <div className="product-cost">Cost: ${item.price * item.quantity}</div>
        </>
    );
}
 
export default ProductInCart;