import { useState ,useEffect} from "react";
import React from 'react';
import { Link,useNavigate } from "react-router-dom";

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
   
    // const initiatePayment = async () => {
    //   try {
    //     const formDataString = JSON.stringify(formData);
    //     sessionStorage.setItem('bookingdetials', formDataString);
    //     const transactionDetials = {
    //         'amount':cost,
    //         'userId':bookingRequest.name
    //     }
    //     console.log(transactionDetials)
    //     const response = await axios.post('https://paymentapi-1-t9346200.deta.app/initiate-payment',transactionDetials);
    //     console.log(response.data.pay_page_url)
    //     console.log(response.data.Transaction_id)
    //     sessionStorage.setItem('Transaction_id',response.data.Transaction_id) 
    //     window.open(response.data.pay_page_url)
    //     navigate('/BookingStatus')    
    //   } catch (error) {
    //     console.error(error);
       
    //   }
    // };
    
    const initiatePayment2 = async () => {
        const url = 'https://paymentapi-1-t9346200.deta.app/initiate-payment';
        const transactionDetials = {
            'amount':1,
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
                <input
                 checked={isChecked}
                 onChange={handleCheckboxChange}
                  type="checkbox"/>
                <label><Link to='/terms'> Accept All Terms and Condition </Link></label>
            </div>
           <div className="booknowbutton">
            <button onClick={initiatePayment2} style={{color:isChecked?'':'orange'}} disabled={!isChecked}>Pay Now</button>
            
           </div>
        </div>
    );
}

export default BookingDetails;
