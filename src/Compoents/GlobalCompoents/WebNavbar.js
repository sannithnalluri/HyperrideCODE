import React from 'react';
import './Webnavbar.css'
import { Link } from 'react-router-dom';
const WebNavbar = () => {
    return (
        <div>
            <div className='web_navbar'>
                <div className='web_logo'>
                    <Link><img src={require('../Assests/Roundlogo.png')} alt='Company_logo'/></Link>
                </div>
                <div className='nav'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/AboutUs'>About Us</Link></li>
                        <li><a href='/Contact'>Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WebNavbar;
