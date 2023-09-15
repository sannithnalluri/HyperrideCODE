import React, { useState } from 'react';
import MainNavbar from '../../GlobalCompoents/MainNavbar';
import './Adminpage.css';
import BookingRecords from './BookingRecords';
import PricingRecords from './PricingRecords';
import BikeInformation from './BikeInformation';
import { useUserContext } from './userContext';
import LoginPage from '../Authatication/Login';
const AdminPage = () => {
        const { user, logout } = useUserContext();
        const [BookignRecords,setBookingRecords] = useState(true)
        const [BikeRecords,setBikeRecords] = useState(false)
        const [Pricing,setPricing] = useState(false)
        const [showMobileNav, setShowMobileNav] = useState(false);
        function handleBookingClick(){
            setBookingRecords(true)
            setBikeRecords(false)
            setPricing(false)

        }
        function handleBikeClick(){
            setBookingRecords(false)
            setBikeRecords(true)
            setPricing(false)

        }
        function handlePricingClick(){
            setBookingRecords(false)
            setBikeRecords(false)
            setPricing(true)

        }
    return (
        <div>
            <div style={{display:user?'none':'block'}}>
                <LoginPage />
            </div>
            <div style={{display:user?'block':'none'}}>
            <MainNavbar/>
            <h1>AdminPage</h1>
            <div className='Admin_portal'>
                <div className='Logout_btn'>
                <button onClick={logout}>logout</button>
                </div>
             
                <div  className='Admin_section'>
                    {/* <div className='admin_nav'>
                        <h1 onClick={handleBookingClick} style={{color:BookignRecords?'orange':''}}>Booking records</h1>
                        <hr/>
                        <h1 onClick={handleBikeClick} style={{color:BikeRecords?'orange':''}}>Bike records</h1>
                        <hr/>
                        <h1 onClick={handlePricingClick} style={{color:Pricing?'orange':''}}>Price records records</h1>
                        <hr/>
                    </div> */}
                    <button
                    onClick={() => setShowMobileNav(!showMobileNav)}
                    className="mobile-menu-button"
                    >
                    Menu
                    </button>
                    <div className={`admin_nav ${showMobileNav ? 'show-mobile' : ''}`}>
                    <h1 onClick={handleBookingClick} style={{color:BookignRecords?'orange':''}}>Booking records</h1>
                        <hr/>
                        <h1 onClick={handleBikeClick} style={{color:BikeRecords?'orange':''}}>Bike records</h1>
                        <hr/>
                        <h1 onClick={handlePricingClick} style={{color:Pricing?'orange':''}}>Price records records</h1>
                        <hr/>
                    </div>
                    <div className="admim_working_profile">
        {/* Your content here */}
                     </div>
                    
                     <div className='admim_working_profile'>
                            <div style={{display:BookignRecords?'block':'none'}}>
                                <BookingRecords/>
                            </div>
                            <div style={{display:BikeRecords?'block':'none'}}>
                                <BikeInformation/>
                            </div>
                            <div style={{display:Pricing?'block':'none'}}>
                           <PricingRecords/>
                            </div>
                    </div> 
                </div>
            </div>
            
        </div>
        </div>
        
    );
}

export default AdminPage;
