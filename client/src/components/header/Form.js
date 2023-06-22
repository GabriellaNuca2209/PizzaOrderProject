import { useContext, useState } from "react";
import { CartContext } from "../utils/cartContext";

const Form = ({setIsFormVisible}) => {

    const cart = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    

    function handleSubmit(e) {
        e.preventDefault();
        setIsFormVisible(false);
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
            }
        }

        fetch('http://localhost:5000/submit', {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(subForm)
        })
        .then(cart.emptyCart())




    }

    console.log(name);


    return (  
        <div className="form-blur">
            <div className="main-form-container">
                <div>
                    <h2>Order Form</h2>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <label>Name: </label>
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label>e-mail</label>
                        <input 
                            type="text" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button type="submit">Submit order</button>
                    </form>
                </div>
                

                <div></div>
            </div>
        </div>
    );
}
 
export default Form;