import './contact.css';

const Contact = () => {
    return (  
        <div className='contact-main-container'>
            <div className='contact-container'>
                <div className='customer-care contact'>
                    <div className='customer-care-title contact-title'>Customer Care</div>
                    <div className='contact-info'>Contact Us</div>
                    <div className='contact-info'>FAQ</div>
                    <div className='contact-info'>Cancelling or Changing an Order</div>
                    <div className='contact-info'>Privacy Policy</div>
                </div>

                <div className='account contact'>
                    <div className='account-title contact-title'>Account</div>
                    <div className='contact-info'>Sign in/Register</div>
                    <div className='contact-info'>My cart</div>
                    <div className='contact-info'>Subscriptions</div>
                    <div className='contact-info'>Coupons</div>
                </div>

                <div className='top-searches contact'>
                    <div className='top-searches-title contact-title'>Top Searches</div>
                    <div className='contact-info'>Promotions</div>
                    <div className='contact-info'>Free</div>
                    <div className='contact-info'>Tiramisu</div>

                </div>

                <div className='franchise contact'>
                    <div className='franchise-title contact-title'>Franchise</div>
                    <div className='contact-info'>Locations</div>
                    <div className='contact-info'>History</div>
                    <div className='contact-info'>About Company</div>
                </div>

                <div className='social contact'>
                    <div className='social-title contact-title'>Social</div>
                    <div><i className="fa-brands fa-facebook-f" style={{color: "#ffffff"}}></i></div>
                    <div><i className="fa-brands fa-twitter" style={{color: "#ffffff"}}></i></div>
                    <div><i className="fa-brands fa-instagram" style={{color: "#ffffff"}}></i></div>
                    <div><i className="fa-brands fa-tiktok" style={{color: "#ffffff"}}></i></div>
                </div>
            </div>

            <footer>@Credits go entirely to Tatiana Mamaliga, Dan Ionescu and Gabriella Nuca.</footer>
        </div>
    );
}
 
export default Contact;