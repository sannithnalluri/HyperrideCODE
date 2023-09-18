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
  const bikebookingdetials = sessionStorage.getItem('bikebookingdetials')
  const bikepickdate  = bikebookingdetials.substring(0,10)
  const bikepicktime = bikebookingdetials.substring(11,19)
  const plan = bikebookingdetials.substring(20)
  const pickupdateandtime = bikepickdate+' '+bikepicktime
  const [bike_details, setBikeDetails] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [end_time,setendtime] = useState('')
  const [cost,setcost] = useState('')
  const [booking,setbooking]  = useState(false)
  useEffect(() => {
    const fetchBikeDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/get_bike_details?bikeId=${id}`);

        if (response.ok) {
          const data = await response.json();
          setBikeDetails(data[0]);
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchBikeDetails(); // Call the function inside useEffect
    const fetchbookingDetials = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/get_booking_data?pickuptime=${pickupdateandtime}&plan=${plan}`);

        if (response.ok) {
          const data = await response.json();
          setendtime(data[0])
          setcost(data[1])
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchbookingDetials();
  }, [id,pickupdateandtime,plan]); // Include 'id' in the dependency array to re-fetch when 'id' changes

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

 


  const Booknow=async ()=>{
    try{
      setbooking(true)
      const response = await fetch(`http://127.0.0.1:8000/BookBike?pickuptime=${pickupdateandtime}&plan=${plan}&bike_id=${id}`)
     if(response.ok)
       alert('succesfully')
       const data = await response.json();
        console.log(data)
        setbooking(false)
        navigate('/')
    }
    catch(e){
      console.log(e)
    }
  }


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
