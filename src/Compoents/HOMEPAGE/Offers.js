import React from 'react';
import './Offer.css';


const Offers = () => {
    return (
        <div className='Offer_page'>
            
            <h1>Our Offers</h1>
            <div className='Line'></div>
            <div className='Offer_Contianer'>
             <div className='Offer_section'>
                <div className='Offer_1'>
                    <div className='Heading'>
                    <h1>Easy Pickup</h1> 
                    </div>
                    <div className='Offer_Content'>
                        <img src={require('../Assests/Scooty.png')} alt='Scooty_image'/>
                        <h6>Get bike from nearest pickup point</h6>
                    </div>
                    
                </div>
                <div className='Offer_1'>
                    <div className='Heading'>
                       <h1>Flexible Booking</h1> 
                    </div>
                    <div className='Offer_Content'>
                        <img src={require('../Assests/CalnderScooty.png')} alt='Calander_image'/>
                        <h6>book any time with your flexiblity</h6>
                    </div>
                    
                </div>
                <div className='Offer_1'>
                    <div className='Heading'>
                       <h1>Affordable</h1>
                    </div>
                    <div className='Offer_Content'>
                        <img src={require('../Assests/rupee.png')} alt='rupee'/>
                        <h6>Get Bike with less as  199 per 3 hours</h6>
                    </div>
                    
                </div>
                
            </div>
            </div>
        </div>
    );
}

export default Offers;
