import { createContext, useState } from "react";

export const CartContext = createContext({
    items: [],
    fullPrice: 0,
    addItemToCart: () => {},
    getItemQuantity: () => {},
    getFullPrice: () => {},
})

export function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function getItemQuantity(id) {
        const quantity = cartItems.find(item => item.id === id)?.quantity;
        if (quantity === undefined) {
            return 0;
        } 
        return quantity;
    }

    function addItemToCart(id, itemName, itemPrice, itemImg) {
        const quantity = getItemQuantity(id);

        if (quantity === 0) {
            setCartItems([...cartItems, {
                id: id,
                name: itemName,
                url: itemImg,
                price: itemPrice,
                quantity: 1,
            }])
        } else {
            setCartItems(cartItems.map(item => item.id === id 
                ? {...item, quantity: item.quantity + 1} 
                : item
                ))
        }
    }

    const contextValue = {
        items: cartItems,
        addItemToCart,
        getItemQuantity
    };

    return (
        <CartContext.Provider value={contextValue}>
            { children }
        </CartContext.Provider>
    );


}



