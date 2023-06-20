import useFetch from "../utils/useFetch";
import Products from "./Products";

const MainPage = () => {

    const pizzaUrl = "http://localhost:5000/pizza";
    const { data: pizzaData } = useFetch(pizzaUrl);

    console.log(pizzaData);

    

    return (  
        <div className='main-page-container'>
            {pizzaData &&  <Products pizzaData={pizzaData}/>}
        </div>
    );
}
 
export default MainPage;