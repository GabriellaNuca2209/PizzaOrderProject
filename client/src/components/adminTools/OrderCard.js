import { useContext } from "react";
import ItemCard from "./ItemCard";
import { CartContext } from "../utils/cartContext";

const OrderCard = ({orders}) => {

    console.log(orders);
    const cart = useContext(CartContext);

    return (  
        <div className="order-card">
            <div>
                <div className="order-main-title">
                <button className="back" onClick={() => cart.setIsAdminOpen(false)}><i className="fa-sharp fa-solid fa-arrow-left" style={{color: "#ffffff"}}></i></button>
                    Admin Menu</div>
            </div>

            <div className="container-for-orders">
                <div className="main-order-container">
                    {orders.map((item) => (
                        <div key={item.id} className="items-container">
                            <div className="card-title">Order Card</div>
                            <div className="order-id"> <span>Order ID:</span> {item.id}</div>
                            <div>
                                <ItemCard item={item}/>
                            </div>
                            <div className="customer-details">
                                <div className="card-title">Customer details</div>
                                <div className="customer-name detail"> <span>Name:</span> {item.order.customer.name}</div>
                                <div className="customer-email detail"> <span>Email:</span> {item.order.customer.email}</div>
                                <div className="customer-address detail"> <span>Address:</span> {item.order.customer.address.street}, {item.order.customer.address.city}</div>
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