import { useContext, useState } from "react";
import useFetch from "../utils/useFetch";
import Products from "./Products";

import "./main.css";
import { CartContext } from "../utils/cartContext";
import Cart from "../header/Cart";
import Form from "../header/Form";

const MainPage = () => {

    const pizzaUrl = "http://localhost:5000/pizza";
    const drinksUrl = "http://localhost:5000/drinks";
    const dessertsUrl = "http://localhost:5000/desserts";
    const allergensUrl = "http://localhost:5000/allergens";

    const { data: pizzaData } = useFetch(pizzaUrl);
    const { data: drinksData } = useFetch(drinksUrl);
    const { data: dessertsData } = useFetch(dessertsUrl);
    const { data: allergensData } = useFetch(allergensUrl);

    const [filterValue, setFilterValue] = useState('all');
    const [isFormVisible, setIsFormVisible] = useState(false);

    const cart = useContext(CartContext);

    function handleFilterChange(allergenID) {
        setFilterValue(allergenID);
    }

    return (  
        <div className='main-page-container'>
        {cart.openCart && <Cart setIsFormVisible={setIsFormVisible}/>}
        {isFormVisible && <Form setIsFormVisible={setIsFormVisible}/>}

            <div className="filter">
                <button>Filter</button>
                <select name="" id="" placeholder="" onChange={(event) => handleFilterChange(event.target.value)}>
                    <option value="all">All</option>
                    {
                        allergensData && allergensData.map((allergen, index) => (
                            <option key={index} value={allergen.id}>{allergen.name}</option>
                        ))
                    }
                </select>
            </div>
            {pizzaData && drinksData && dessertsData && allergensData && <Products filterValue={filterValue} pizzaData={pizzaData} drinksData={drinksData} dessertsData={dessertsData}/>}
        </div>
    );
}
 
export default MainPage;