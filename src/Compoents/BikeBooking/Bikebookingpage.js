import React, { useState } from 'react';
import MainNavbar from '../GlobalCompoents/MainNavbar';
import './Bikebooking.css'
const Bikebookingpage = () => {
    
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
      };
    return (
        <div>
            <MainNavbar/>
            <div>
                <div className='booking_container'>
                    <div className='bike_info'>
                    <div>
                        <h1>Activa 5g</h1>
                    </div>
                    <div className='Bike_image'>
                        <img src='https://bd.gaadicdn.com/upload/userfiles/images/5e1f5483c9da0.png' alt='bikeimg'/>

                    </div>
                    </div>
                    <div className='Payment_summary'>
                        <div className='Summary_Container'>
                            <h3>Payment_summary</h3>
                            <label>Rent Cost : </label><label>200</label><br/>
                            <label>Discount : </label><label>10%</label>
                            <hr/>
                            <label>TOtal Cost:</label><label>289</label>
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
                        style={{backgroundColor:!isChecked?'orange':''}}
                        disabled={!isChecked}>Checkout</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Bikebookingpage;
