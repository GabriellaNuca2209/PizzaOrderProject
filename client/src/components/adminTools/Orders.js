import useFetch from "../utils/useFetch";
import OrderCard from "./OrderCard";
import "./admin.css";

const Orders = () => {

    const ordersUrl = "http://localhost:5000/orders";
    const { data: ordersData } = useFetch(ordersUrl);



    return (  
        <div className="order-bkg">
            <div className="order-container">
                {ordersData && <OrderCard orders={ordersData.crustopia}/>}
            </div>
        </div>
    );
}
 
export default Orders;