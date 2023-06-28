import ItemCard from "./ItemCard";

const OrderCard = ({orders}) => {

    console.log(orders);

    return (  
        <div className="order-card">
            <div className="order-main-title">Orders</div>

            <div className="container-for-orders">
                <div className="main-order-container">
                    {orders.map((item) => (
                        <div key={item.id} className="items-container">
                            <div className="order-id"> <span>Order ID:</span> {item.id}</div>
                            <ItemCard item={item}/>
                            <div className="customer-details">
                                <div className="customer-name"> <span>Name:</span> {item.order.customer.name}</div>
                                <div className="customer-email"> <span>Email:</span> {item.order.customer.email}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="order-customer">

            </div>
        </div>
    );
}
 
export default OrderCard;