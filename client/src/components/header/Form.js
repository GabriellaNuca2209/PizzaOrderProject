import { useContext, useState } from "react";
import { CartContext } from "../utils/cartContext";

const Form = ({setIsFormVisible}) => {

    const cart = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    

    function handleSubmit(e) {
        e.preventDefault();
        setIsFormVisible(false);
        cart.emptyCart()
        const pizzas = [];
        const date = new Date()
        cart.items.map(item => {
            pizzas.push({id: item.id, quantity: item.quantity});
        })
        console.log(pizzas);
        
        const subForm = {
            pizzas: pizzas,
            date: {
                year: date.getFullYear(),
                month: date.getMonth(),
                day: date.getDate(),
                hour: date.getHours(),
                minutes: date.getMinutes()
            },
            customer: {
                name,
                email,
                address: {
                    street,
                    city
                },
                phone
            }
        }

        fetch('http://localhost:5000/submit', {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(subForm)
        })




    }

    return (  
        <div className="form-blur">
            <div className="main-form-container">
                <div className="order-header">
                    <div className="order-title">Order Form</div>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name: </label>
                            <input 
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>    

                        <div>

                            <label>E-mail: </label>
                            <input 
                                type="text" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label>Street: </label>
                            <input 
                                type="text" 
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label>City: </label>
                            <input 
                                type="text" 
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label>Phone: </label>
                            <input 
                                type="text" 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>

                        <div className="checkbox-container">
                            <input className="checkbox" type="checkbox"/> 
                            <p>I have read and agree to Crustopia's User Agreement and Privacy Policy.</p>
                        </div>


                        <button type="submit">Submit order</button>
                    </form>
                </div>
                

                <div></div>
            </div>
        </div>
    );
}
 
export default Form;