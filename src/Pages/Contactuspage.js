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
                    <span className="contact-label">Email:</span> Hyprride@gmail.com
                </p>
                <p className="contact-detail">
                    <span className="contact-label">Phone:</span> +91 7032887133
                </p>
                <p className="contact-detail">
                    <span className="contact-label">Address:</span> Beside Neera Residency,Pillar No C1762,Vittal Rao Nagar,Madhapur,Hyderabad
                </p>
            </div>
        </div>
        </div>
    );
}

export default Contactuspage;
