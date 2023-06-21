import ProductCard from "./ProductCard";

const Products = ({ pizzaData, drinksData, dessertsData, filterValue }) => {

    let filterPizza = pizzaData.filter(pizza => {
        if (filterValue !== 'all') {
            return !pizza.allergens.includes(parseInt(filterValue));
        } else {
            return pizza;
        }
    })

    return (  
        <div className="products-container">
            { 
            filterPizza.map((pizza, index) => (
                <div className="pizza-container" key={index}>
                    <ProductCard item={pizza}/>
                </div>
            ))
            }
            { 
            drinksData.map((drink, index) => (
                <div className="drink-container" key={index}>
                    <ProductCard item={drink}/>
                </div>
            ))
            }
            { 
            dessertsData.map((dessert, index) => (
                <div className="dessert-container" key={index}>
                    <ProductCard item={dessert}/>
                </div>
            ))
            }
        </div>
    );
}
 
export default Products;