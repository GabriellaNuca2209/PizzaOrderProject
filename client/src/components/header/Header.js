import Cart from "./Cart";

const Header = () => {
    return ( 
        <div className="header-container">
            <h1>Crustopia</h1>
            <div>
                <button>CART</button>
                <Cart/>
            </div>
        </div>
    )
}
 
export default Header;