import React from 'react';
import './Contactpage.css'
import MainNavbar from '../Compoents/GlobalCompoents/MainNavbar';

const Contactuspage = () => {
    return (
        <div>
            <MainNavbar/>
            
            <div className="contact-us-container">
            <div className='rideimage'>
                <img src={require('../Compoents/Assests/hyperride2.png')} alt='imageid'/>
            </div>
            <h1>Contact Us</h1>
            <div className="contact-info">
                <p className="contact-detail">
                    <span className="contact-label">Email:</span> contact@example.com
                </p>
                <p className="contact-detail">
                    <span className="contact-label">Phone:</span> +1 (123) 456-7890
                </p>
                <p className="contact-detail">
                    <span className="contact-label">Address:</span> 123 Main Street, City, Country
                </p>
            </div>
        </div>
        </div>
    );
}

export default Contactuspage;
