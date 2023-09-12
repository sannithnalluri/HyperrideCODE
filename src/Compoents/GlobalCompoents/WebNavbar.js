import React from 'react';
import './Webnavbar.css'
const WebNavbar = () => {
    return (
        <div>
            <div className='web_navbar'>
                <div className='web_logo'>
                    <img src={require('../Assests/Roundlogo.png')} alt='Company_logo'/>
                </div>
                <div className='nav'>
                    <ul>
                        <li><a href='#Home'>Home</a></li>
                        <li><a href='#Pricing'>Pricing</a></li>
                        <li><a href='#Faq'> Faq</a></li>
                        <li><a href='#Contact'>Contact Us</a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WebNavbar;
