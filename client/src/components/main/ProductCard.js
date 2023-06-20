const ProductCard = ({pizza}) => {
    return (  
        <div className="product-card-container">
            <img src="#" alt="pizzaHere" />
            <h2 className="name">{pizza.name}</h2>

        </div>
    );
}
 
export default ProductCard;