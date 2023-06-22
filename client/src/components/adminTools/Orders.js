import OrderCard from "./OrderCard";
import "./admin.css";

const Orders = ({orders}) => {




    return (  
        <div className="order-bkg">
            <div className="order-container">
                <OrderCard orders={orders}/>
            </div>
        </div>
    );
}
 
export default Orders;