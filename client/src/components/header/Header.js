import { useContext, useState } from "react";
import Cart from "./Cart";
import "./header.css";
import { CartContext } from "../utils/cartContext";


const Header = () => {
    const cart = useContext(CartContext);
    const cartQuantity = cart.items.reduce((accumulator, value) => accumulator + value.quantity, 0);

    function scroll(element) {
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function handleOpen() {
        cart.setIsCartVisible(true)
        console.log(cart.openCart);
    }

    function handleMenu() {
        const element = document.querySelector('.products-container');
        scroll(element);
    }

    function handleHome() {
        const element = document.querySelector('.body-container');
        scroll(element);
    }

    function handleAbout() {
        const element = document.querySelector('.about-main-container');
        scroll(element);
    }

    return ( 
        <header>
            <div className="logo-container">
                <a href="#" className="logo"><img src="img/logo.png"/></a>
                {/* <h1>Crustopia</h1> */}
            </div>

            <nav className="navbar">
                <a href="#home" onClick={handleHome}>Home</a>
                <a href="#menu" onClick={handleMenu}>Menu</a>
                <a href="#about" onClick={handleAbout}>About</a>
                <a href="#contact">Contact</a>
                <button onClick={() => cart.setIsAdminOpen(true)}>Orders</button>
            </nav>

            <div className="icons">
                <button id="menu"><i className="fas fa-bars" ></i></button>

                <div className="cart-btn-container">
                    <button className="cart-btn" onClick={() => handleOpen()}><i className="fas fa-shopping-cart"></i></button>
                    
                    {cartQuantity > 0 && <div className="cart-quantity">{cartQuantity}</div>}
                </div>

            </div>
        </header>
    )
}
 
export default Header;