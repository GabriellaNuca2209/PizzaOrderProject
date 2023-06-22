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

            <div className="pizza-box">
                <div className="pizza-title title">Pizza</div>
                <div className="pizza">
                    { 
                    filterPizza.map((pizza, index) => (
                        <div className="pizza-container" key={index}>
                            <ProductCard item={pizza}/>
                        </div>
                    ))
                    }
                </div>
            </div>

            <div className="drinks-box">
                <div className="drinks-title title">Drinks</div>
                <div className="drinks">
                    { 
                    drinksData.map((drink, index) => (
                        <div className="drink-container" key={index}>
                            <ProductCard item={drink}/>
                        </div>
                    ))
                    }
                </div>
            </div>

            <div className="desserts-box">
                <div className="desserts-title title">Desserts</div>
                <div className="desserts">
                    { 
                    dessertsData.map((dessert, index) => (
                        <div className="dessert-container" key={index}>
                            <ProductCard item={dessert}/>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Products;