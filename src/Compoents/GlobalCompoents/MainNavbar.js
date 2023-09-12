import React from 'react';
import WebNavbar from './WebNavbar';
import PhoneNavbar from './PhoneNavbar';
import './MainNavbar.css'
const MainNavbar = () => {
    return (
        <div>
            <div className='Web_nav'>
                <WebNavbar/>
              
            </div>
            <div className='Phone_nav'>
            <PhoneNavbar/>
            </div>
        </div>
    );
}

export default MainNavbar;
