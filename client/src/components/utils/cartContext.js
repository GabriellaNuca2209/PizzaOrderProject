import { createContext, useState } from "react";

export const CartContext = createContext({
    items: [],
    fullPrice: 0,
    setFullPrice: () => {},
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    removeCategoryFromCart: () => {},
    getItemQuantity: () => {},
    getFullPrice: () => {},
    // Cart Suff
    openCart: false,
    clearedCart: false,
    setIsCartVisible: () => {},
    emptyCart: () => {},
    // Orders
    isAdminOpen: false,
    setIsAdminOpen: () => {}
})

export function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [isCartEmpty, setIsCartEmpty] = useState(false);
    const [totalPrice, setFullPrice] = useState(0);
    const [isAdminOpen, setIsAdminOpen] = useState(false);

    function getFullPrice(price) {
        setFullPrice(totalPrice + price);
        console.log(price)
    }

    function getItemQuantity(id) {
        const quantity = cartItems.find(item => item.id === id)?.quantity;
        if (quantity === undefined) {
            return 0;
        } 
        return quantity;
    }

    function addItemToCart(id, itemName, itemImg, itemPrice) {
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

    function removeCategoryFromCart(id) {
        setCartItems(cartItems => cartItems.filter(item => item.id !== id))
    }

    function removeItemFromCart(id) {
        const quantity = getItemQuantity(id);

        if (quantity === 1) {
            removeCategoryFromCart(id);
        } else {
            setCartItems(cartItems.map(item => item.id === id 
                ? {...item, quantity: item.quantity - 1} 
                : item
                ))
        }
    }

    function emptyCart() {
        setCartItems([]);
        setIsCartEmpty(true);
    }

    const contextValue = {
        items: cartItems,
        fullPrice: totalPrice,
        setFullPrice,
        getFullPrice,
        addItemToCart,
        getItemQuantity,
        removeItemFromCart,
        removeCategoryFromCart,
        // Cart
        openCart: isCartVisible,
        clearedCart: isCartEmpty,
        setIsCartVisible,
        emptyCart,
        // Orders
        isAdminOpen: isAdminOpen,
        setIsAdminOpen,
    };

    return (
        <CartContext.Provider value={contextValue}>
            { children }
        </CartContext.Provider>
    );


}



