import { useState ,useEffect} from "react";
import React from 'react';
import { Link,useNavigate } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
const BookingDetails = () => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
      };
    
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
   
   
    
    const initiatePayment2 = async () => {
        const url = 'https://paymentapi-1-t9346200.deta.app/initiate-payment';
        const transactionDetials = {
            'amount':cost,
            'userId':bookingRequest.name
        }
    
        try {
            const formDataString = JSON.stringify(formData);
           sessionStorage.setItem('bookingdetials', formDataString);
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(transactionDetials),
          });
    
          const result = await response.json();
          console.log(result.pay_page_url)
          window.open(result.pay_page_url, '_blank', 'noopener,noreferrer');
          sessionStorage.setItem('Transaction_id',result.Transaction_id) 
          navigate('/BookingStatus')
        
        } catch (error) {
          console.error('Error initiating payment:', error);
        }
      };
    

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
                <div className="pickuptime">
                    <div style={{display:'flex'}}>
                    <FaRegCircle size={30}/> 
                     <h1 style={{marginLeft:10}}>Pickup</h1>
                    </div>
               
                <div className="ride_pick">
                <div style={{display:'flex'}}>
                    <FaRegCalendarAlt size={20}/>  <h3 style={{marginLeft:10}}>Date_time:</h3>
                    <h4> {pickdatetime}</h4>
                    </div>
                    <div style={{display:'flex'}}>
                    <IoLocationOutline size={20}/>  <h3 style={{marginLeft:10}}>  <h4>location: Madhapur,Hyderabad</h4></h3>
                    </div>
                </div>
                </div>


                <div className="pickuptime" style={{marginTop:"4vh"}}>
                    <div style={{display:'flex'}}>
                    <FaCircle size={30}/> 
                     <h1 style={{marginLeft:10}}>Drop Off</h1>
                    </div>
               
                <div className="ride_pick">
                <div style={{display:'flex'}}>
                    <FaRegCalendarAlt size={20}/>  <h3 style={{marginLeft:10}}>Date_time:</h3>
                    <h4> {endtime}</h4>
                    </div>
                    <div style={{display:'flex'}}>
                    <IoLocationOutline size={20}/>  <h3 style={{marginLeft:10}}>  <h4>location: Madhapur,Hyderabad</h4></h3>
                    </div>
                </div>
                </div>
                

            </div>
            <div className="booking_summary">
                <div style={{display:'flex'}}>
                    <h1>Cost</h1>
                    <MdCurrencyRupee  style={{marginTop:9}} size={27}/>
                </div>
                
                <div>
                    <h6>Rent Cost:{cost}/-</h6>
                    <h6>Caution Depoist:1000 /-</h6><p style={{color:"blueviolet"}}>(Refundable)</p>
                    <hr/>
                    <h4>TotalAmount : {cost}</h4>
                </div>
            </div>
            <div className="Checkbox">
                <input
                 checked={isChecked}
                 onChange={handleCheckboxChange}
                  type="checkbox"/>
                <label><Link to='/terms'> Accept All Terms and Condition </Link></label>
            </div>
           <div className="booknowbutton">
            <button onClick={initiatePayment2} style={{color:isChecked?'':'yellow'}} disabled={!isChecked}>Pay Now</button>
            
           </div>
           
           
          
        </div>
    );
}

export default BookingDetails;
