import './about.css';

const About = () => {
    return (  
        <div className="about-main-container">
            <div className="about-title">About</div>

            <div className="about-container">
                <div className='staff-container'>
                    <div className='staff-pic'>
                        <img src="./img/chef.jpg" alt="" />
                    </div>
                    <p>Meet our <span>chef</span>, bringing premium knowledge directly on your plate. <br />  </p>
                </div>

                <div className='staff-container'>
                    <div className='staff-pic'>
                        <img src="./img/staff.jpg" alt="" />
                    </div>
                    <p>Meet our special <span>staff</span>, delivering quality and quantity right on time. <br />  </p>
                </div>

                <div className='staff-container'>
                    <div className='staff-pic'>
                        <img src="./img/flour.jpg" alt="" />
                    </div>
                    <p>We pride ourselves with the quality and freshness of the <span>ingredients</span>. <br />  </p>
                </div>
            </div>
        </div>
    );
}
 
export default About;