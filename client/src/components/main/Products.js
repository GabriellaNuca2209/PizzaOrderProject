import ProductCard from "./ProductCard";

const Products = ({ pizzaData }) => {
    return (  
        <div className="products-container">
            <h2>Pizzas</h2>
            { 
            pizzaData.map((pizza) => (
                <div className="product-container">
                    <ProductCard pizza={pizza}/>
                </div>
            ))
            }
        </div>
    );
}
 
export default Products;