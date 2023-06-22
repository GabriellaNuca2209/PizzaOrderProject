import ItemCard from "./ItemCard";

const OrderCard = ({orders}) => {

    console.log(orders);

    return (  
        <div className="order-card">
            <div className="order-title">Order</div>

            {orders.map((item) => (
                <div key={item.id} className="items-container">
                    <div className="order-id">Order ID: {item.id}</div>
                    <ItemCard item={item}/>
                    <div className="customer-details">
                        <div className="customer-name">Name: {item.order.customer.name}</div>
                        <div className="customer-email">Email: {item.order.customer.email}</div>
                    </div>
                </div>
            ))}

            <div className="order-customer">

            </div>
        </div>
    );
}
 
export default OrderCard;