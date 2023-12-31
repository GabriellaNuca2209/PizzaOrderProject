import { useContext, useState } from "react";
import useFetch from "../utils/useFetch";
import Products from "./Products";

import "./main.css";
import { CartContext } from "../utils/cartContext";
import Cart from "../header/Cart";
import Form from "../header/Form";
import Orders from "../adminTools/Orders";
import Slider from "../slider/Slider";

const MainPage = () => {

    const pizzaUrl = "http://localhost:5000/pizza";
    const drinksUrl = "http://localhost:5000/drinks";
    const dessertsUrl = "http://localhost:5000/desserts";
    const allergensUrl = "http://localhost:5000/allergens";
    // const ordersUrl = "http://localhost:5000/orders";

    const { data: pizzaData } = useFetch(pizzaUrl);
    const { data: drinksData } = useFetch(drinksUrl);
    const { data: dessertsData } = useFetch(dessertsUrl);
    const { data: allergensData } = useFetch(allergensUrl);
    // const { data: ordersData } = useFetch(ordersUrl);

    const [filterValue, setFilterValue] = useState('Allergens');
    const [isFormVisible, setIsFormVisible] = useState(false);

    const cart = useContext(CartContext);

    // console.log(ordersData);

    function handleFilterChange(allergenID) {
        setFilterValue(allergenID);
    }

    return (  

        <div className="body-container">
            {cart.openCart && <Cart setIsFormVisible={setIsFormVisible}/>}
            {isFormVisible && <Form setIsFormVisible={setIsFormVisible}/>}
            {cart.isAdminOpen && <Orders />}
            <Slider/>
            <div className='main-page-container'>
            
                <div className="menu-container">
                    <div className="filter">
                        <select onChange={(event) => handleFilterChange(event.target.value)}>
                            <option value="Allergens">Allergens</option>
                            {
                                allergensData && allergensData.map((allergen, index) => (
                                    <option key={index} value={allergen.id}>{allergen.name.charAt(0).toUpperCase() + allergen.name.slice(1)}</option>
                                ))
                            }
                        </select>
                    </div>
                    {pizzaData && drinksData && dessertsData && allergensData && <Products filterValue={filterValue} pizzaData={pizzaData} drinksData={drinksData} dessertsData={dessertsData}/>}
                </div>
                
            </div>
        </div>
    );
}
 
export default MainPage;