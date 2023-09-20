import React, { useEffect, useState } from 'react';
import MainNavbar from '../GlobalCompoents/MainNavbar';
import './Bikebooking.css';
import {FaGasPump} from 'react-icons/fa';
import {MdEventSeat} from 'react-icons/md';
import {SlSpeedometer} from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
const Bikebookingpage = () => {
  const navigate = useNavigate();
  const id = sessionStorage.getItem('bike_id');
  console.log(id)
  const bikebookingdetials = sessionStorage.getItem('bikebookingdetials')
  const bikepickdate  = bikebookingdetials.substring(0,10)
  const bikepicktime = bikebookingdetials.substring(11,19)
  const plan = bikebookingdetials.substring(20)
  const pickupdateandtime = bikepickdate+' '+bikepicktime
  const [bike_details, setBikeDetails] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [end_time,setEndtime] = useState('')
  const [cost,setCost] = useState('')
  const [booking,setBooking]  = useState(false)
  useEffect(() => {
    const fetchBikeDetails = async () => {
      try {
        const response = await fetch(`https://hyperwave-1-c8519996.deta.app/get_single_bike_data?bike_id=${id}`);
  
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setBikeDetails(data);
        }
      } catch (e) {
        console.error(e);
      }
    };
  
    fetchBikeDetails();
  
   
  }, [id]);


  useEffect(()=>{
    const fetchBookingDetails = async () => {
      try {
        console.log(pickupdateandtime,plan)
        const uri = `https://hyperwave-1-c8519996.deta.app/get_booking_data?pickuptime=${pickupdateandtime}&plan=${plan}`;
        const response = await fetch(uri);
  
        if (response.ok) {
          const data = await response.json();
          setEndtime(data[0]);
          setCost(data[1]);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchBookingDetails();
  },[pickupdateandtime,plan])

  
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  
  const Booknow = async () => {
    try {
      setBooking(true);
      const response = await fetch(`https://hyperwave-1-c8519996.deta.app/BookBike?pickuptime=${pickupdateandtime}&plan=${plan}&bike_id=${id}`);
      
      if (response.ok) {
        alert('Successfully booked');
        const data = await response.json();
        setBooking(false);
        navigate('/');
      } else {
        alert('Booking failed');
      }
    } catch (e) {
      console.error(e);
      alert('An error occurred during booking');
      setBooking(false);
    }
  };
  


  return (
    <div>
      <MainNavbar />
      <div className='Booking_page'>
        <div className='booking_container'>
          <div className='bike_info'>
            
            <div className='Bike_image'>
              <img src={bike_details.bikeImage} alt='bikeimg' />
            </div>
            <div className='Bike_details'>
            <div className='Bike_name'>
              <h1>{bike_details.bikename}</h1>
            </div>  
            <p>Note: This image is for representation purpose only. The colour of the actual vehicle may differ.</p>
            <ul>
          
            <li><FaGasPump/>{bike_details.bikeFeatures1}</li>
            <li><MdEventSeat/>{bike_details.bikeFeatures2}</li>
            <li><SlSpeedometer/>{bike_details.bikeFeatures3}</li>
            </ul>
          
            </div>
          </div>
          <div className='Payment_summary'>
            <div className='Booking_detials'>
              <h1>Bookign Details</h1>
              <h5>pickup date and time:{pickupdateandtime}</h5><br/>
              <h5>Drop date and time:{end_time}</h5><br/>
              <h5>Pickanddrop location:Madhapur,Hyderabad</h5>

            </div>
            <div className='Summary_Container'>
              <h3>Payment_summary</h3>
              <label>Rent Cost : </label><label>{cost}</label><br/>
              <label>Discount : </label><label>10%</label>
              <hr/>
              <label>Total Cost:</label><label>{cost-10/100-10}</label>
            </div>
            <div className='terms_and_condition'>
              <input type='checkbox' 
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span>I Accept the all the <a href='ww.evvs'>terms and Conditions</a></span>
            </div>
            <div className='Payment_checkout'>
              <button 
              onClick={Booknow}
                style={{ backgroundColor: !isChecked ? 'orange' : '' }}
                disabled={!isChecked}
              >
              <div style={{display:booking?'block':'none'}}>
              <div className="loading-spinner">
               <div className="spinner"></div>
              </div>
              </div>
               Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bikebookingpage;
