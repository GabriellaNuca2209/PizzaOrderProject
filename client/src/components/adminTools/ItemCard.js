const ItemCard = ({item}) => {
    return ( 
        
        <div className="order-products">
            { item.order.pizzas.map((i, index) => (
                <div key={index} className="order-data">
                    <div className="product-id"> <span>Product ID:</span> {i.id}</div>
                    <div className="order-quantity"> <span>Quantity:</span> {i.quantity}</div>
                </div>
            )) }
        </div>



        // <div className="order-products">
        //     <div className="product-id">{item.id}</div>
        //     <div className="product-quantity">{item}</div>
        // </div>
    );
}
 
export default ItemCard;