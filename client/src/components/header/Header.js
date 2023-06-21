import Cart from "./Cart";

const Header = () => {


    return ( 
        // <div className="header-container">
        //     <h1>Crustopia</h1>
        //     <div>
        //         <button>CART</button>
        //         <Cart/>
        //     </div>
        // </div>

        

        <header>

            <a href="#" className="logo"><img src="img/logo.png"/></a>

            <nav className="navbar">
                <a href="#home" className="active">Home</a>
                <a href="#menu">Menu</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>

            <div className="icons">
                <button id="menu"><i className="fas fa-bars" ></i></button>
                <button><i className="fas fa-shopping-cart"></i></button>
            </div>

        </header>


    )
}
 
export default Header;