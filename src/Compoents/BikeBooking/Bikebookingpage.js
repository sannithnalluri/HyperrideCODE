import React from 'react';
import './Bikebooking.css'
import BikeDetails from './Bike_details';
import BookingDetails from './BookingDetails';
import MainNavbar from '../GlobalCompoents/MainNavbar';
const Bikebookingpage = () => {
  return (
    <div className='booking_page'>
      <MainNavbar/>
      <div className='Booking_container'>
      <div className='bike_details'>
      <BikeDetails/>
      </div>
      <div className='Booking_detials'>
      <BookingDetails/>
      </div>
      </div>

    </div>
  );
}

export default Bikebookingpage;
