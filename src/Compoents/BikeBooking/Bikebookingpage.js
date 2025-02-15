import React from 'react';
import './Bikebooking.css'
import BikeDetails from './Bike_details';
import BookingDetails from './BookingDetails';
import MainNavbar from '../GlobalCompoents/MainNavbar';
import Footer from '../HOMEPAGE/Footer';
const Bikebookingpage = () => {
  return (
    <div className='booking_page'>
      <MainNavbar/>
      <h1 id='order_summary'>Order Summary</h1>
      <div className='Booking_container'>
      <div className='bike_details'>
      <BikeDetails/>
      </div>
      <div className='Booking_detials'>
      <BookingDetails/>
      </div>
      
      </div>
      <Footer/>
    </div>
  );
}

export default Bikebookingpage;
