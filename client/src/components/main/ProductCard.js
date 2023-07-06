import { useContext, useEffect, useState } from "react";
import { CartContext } from "../utils/cartContext";

const ProductCard = ({item}) => {

    const cart = useContext(CartContext);

    const [itemCounter, setItemCounter] = useState(0);

    function handleAddBtn(id, name, url, price) {
        cart.addItemToCart(id, name, url, price);
        setItemCounter(itemCounter + 1);
        cart.getFullPrice(price);
        console.log(cart.items);
    }

    function handleSubBtn(id, price) {
        cart.removeItemFromCart(id);
        setItemCounter(itemCounter - 1);
        cart.getFullPrice(-price);
    }

    useEffect(() => {
        setItemCounter(0);
    }, [cart.clearedCart])


    return (  
        <div className="product-card-container">
            <img className='img-box' src={item.imgurl} alt="pizzaHere" />
            <div className="name">{item.name}</div>
            <div className="ingredients">{item.ingredients && item.ingredients.join(', ')}</div>
            <div className="price">Price: ${item.price}</div>
            {itemCounter === 0 
            ? <button className='add-btn' onClick={() => handleAddBtn(item.id, item.name, item.imgurl, item.price)}>Add To Cart</button>
            : <div className="change-quantity">
                <button onClick={() => handleSubBtn(item.id, item.price)}><i className="fa-solid fa-circle-minus" style={{color: "#cdaa7c"}}></i></button>
                {itemCounter}
                <button onClick={() => handleAddBtn(item.id, item.name, item.imgurl, item.price)}><i className="fa-solid fa-circle-plus" style={{color: "#cdaa7c"}}></i></button>
            </div>
            }
            
        </div>
    );
}
 
export default ProductCard;