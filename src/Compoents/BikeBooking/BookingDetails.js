import { useState ,useEffect} from "react";
import React from 'react';
import axios from 'axios'

const BookingDetails = () => {
    const storedData = sessionStorage.getItem('bikebookingdetials');
    const id = sessionStorage.getItem('bike_id')
    const pickdatetime = storedData.substring(0,18);
    const plan = storedData.substring(20);
    const [cost,setCost]= useState('');
    const [endtime,setendtime] =useState('')
    const bookingRequest = JSON.parse(sessionStorage.getItem('userdata'));
    const formData={
        name:bookingRequest.name,
        email:bookingRequest.email,
        phone:bookingRequest.phone,
        location:bookingRequest.location,
        license_number:bookingRequest.license,
        bike_id:id,
        pickup_date_and_time: pickdatetime,
        end_time: endtime,
        cost:cost.toString(),    
    }
    console.log(formData)
    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://hyperwave-1-c8519996.deta.app/bookbikenow', formData);
            console.log(response)
    
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        const fecthbookingdetails=async ()=>{
            try {
                const response = await fetch(`https://hyperwave-1-c8519996.deta.app/get_booking_data?pickuptime=${pickdatetime}&plan=${plan}`);
    
                if (response.ok) {
                    const data = await response.json();
                     setendtime(data[0])
                     setCost(data[1])
                } else {
                    console.error('Failed to fetch bike data');
                }
            } catch (error) {
                console.error(error);
            }
        };
        fecthbookingdetails();
        
    },[pickdatetime,plan]);
    
    return (
        <div>
            <div className="bookingDetails">
           <h4> Ride-Pick-Date-time:{pickdatetime}</h4>
           <h4> Ride-End-Date-time:{endtime}</h4>
           <h4>Pickup-location: Madhapur,Hyderabad</h4>
               
            </div>
            <div className="booking_summary">
                <h1>Summmary</h1>
                <div>
                    <h6>Rent Cost:{cost+100}/-</h6>
                    <h6>Caution Depoist:1000 /-</h6>
                    <h6>Discount : 25%</h6>
                    <hr/>
                    <h5>TotalAmount : {cost}</h5>
                </div>
            </div>
            <div className="Checkbox">
                <input type="checkbox"/>
                <label><a href="/">Accept All Terms and Condition</a></label>
            </div>
           <div>
            <button onClick={handleSubmit}>book now</button>
            
           </div>
        </div>
    );
}

export default BookingDetails;
