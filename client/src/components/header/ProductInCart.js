const ProductInCart = ({item}) => {
    return (  
        <>
            <img src={item.url} alt="product" className="product-img"/>
            <div className="product-name">{item.name}</div>
            <div className="product-quantity">Amount: {item.quantity}</div>
            <div className="product-cost">Cost: ${item.price * item.quantity}</div>
        </>
    );
}
 
export default ProductInCart;