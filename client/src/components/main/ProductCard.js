import { useContext, useState } from "react";
import { CartContext } from "../utils/cartContext";

const ProductCard = ({item}) => {

    const cart = useContext(CartContext);

    const [itemCounter, setItemCounter] = useState(0);

    function handleAddBtn(id, name, url, price) {
        cart.addItemToCart(id, name, url, price);
        setItemCounter(itemCounter + 1);
    }

    function handleSubBtn(id) {
        cart.removeItemFromCart(id);
        setItemCounter(itemCounter - 1);
    }


    return (  
        <div className="product-card-container">
            <img className='img-box' src={item.imgurl} alt="pizzaHere" />
            <div className="name">{item.name}</div>
            <div className="price">Price: ${item.price}</div>
            {itemCounter === 0 
            ? <button className='add-btn' onClick={() => handleAddBtn(item.id, item.name, item.price, item.imgurl)}>Add To Cart</button>
            : <div className="change-quantity">
                <button onClick={() => handleSubBtn(item.id)}><i className="fa-solid fa-circle-minus" style={{color: "#cdaa7c"}}></i></button>
                {itemCounter}
                <button onClick={() => handleAddBtn(item.id, item.name, item.price, item.imgurl)}><i className="fa-solid fa-circle-plus" style={{color: "#cdaa7c"}}></i></button>
            </div>
            }
            
        </div>
    );
}
 
export default ProductCard;