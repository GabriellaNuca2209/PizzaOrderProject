import { useContext, useState } from "react";
import { CartContext } from "../utils/cartContext";

const ProductCard = ({item}) => {

    const cart = useContext(CartContext);

    const [itemCounter, setItemCounter] = useState(0);

    function handleAddBtn(id, name, url, price) {
        cart.addItemToCart(id, name, url, price);
        setItemCounter(itemCounter+1);

    }

    return (  
        <div className="product-card-container">
            <img className='img-box' src={item.imgurl} alt="pizzaHere" />
            <div className="name">{item.name}</div>
            <div className="price">Price: ${item.price}</div>
            <button className='add-btn' onClick={() => handleAddBtn(item.id, item.name, item.price, item.imgurl)}>Add To Cart {itemCounter}</button>
        </div>
    );
}
 
export default ProductCard;