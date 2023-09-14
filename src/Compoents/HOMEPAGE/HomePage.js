import {React,useState} from 'react';
import MainNavbar from '../GlobalCompoents/MainNavbar';
import './Homepage.css';
import Offers from './Offers';
import Pricing from './Pricing';
import CustomerReview from './CustomerReview';
import Faq from './Faq';
import ImageCarousel from './ImageCursol';
import Footer from './Footer';
const HomePage = () => {
    const currentDate = new Date();

    // Format the date in YYYY-MM-DD format, which is the required format for input[type="date"]
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedCurrentDate = `${year}-${month}-${day}`;
    const currentHours = String(currentDate.getHours()).padStart(2, '0');
    const currentMinutes = String(currentDate.getMinutes()).padStart(2, '0');
    const [selectedTime, setSelectedTime] = useState(`${currentHours}:${currentMinutes}`);
    const handleTimeChange = (e) => {
        const inputTime = e.target.value;
        
        // Check if the input time is earlier than the minimum time
        if (inputTime < `${currentHours}:${currentMinutes}`) {
          // If so, reset the input value to the minimum time
          setSelectedTime(`${currentHours}:${currentMinutes}`);
        } else {
          // Otherwise, update the selected time state
          setSelectedTime(inputTime);
        }
      };

      const [showbike,setshowbike] = useState(false)
      const handleShowavailabe=()=>{
        setshowbike(true)
      }
    return (
        <div>
            <MainNavbar/>
            <div className='hero_section'>
                <div className='hero_Section_img'>
                <img  src={require('../Assests/mainscooty1.png')} alt='hero_image'/>
                </div>
                <div className='Date_picking_Section'>
                    <div className='logo_Container'>
                        <img src={require('../Assests/hyperride2.png')} alt='hero_image'/>
                    </div>
                    <div className='PickUP_selection_section'>
                        <div className='Pickup_Data'>
                        <h2>Pickup Data</h2>
                        <input
                        name='Data'
                        type='Date'
                        min={formattedCurrentDate}
                        />
                        </div>
                        <div className='Pickup_Time'>
                        <h2>Pickup Time</h2>
                        <input
                       name='Time'
                       type='time'
                       onChange={handleTimeChange}
                       value={selectedTime}
                       id='timeInput'/>
            
                       
                    </div>
                    </div>
                    <div className='Plan_selection_input'>
                        <h2>Select the Plan</h2>
                    <select>
                        <option value='None'>None</option>
                         <option value="3_hours">3 Hours 159/-</option>
                         <option value="5_hours">5 Hours 220/-</option>
                         <option value="7_hours">7 Hours 280/-</option>
                         <option value="24_hours">24 Hours 399/-</option>
                         <option value="7 Day">7/30 Days 199/Perday</option>
                    </select>
                    </div>
                    <div className='Show_avail_Button'>
                        <button onClick={handleShowavailabe} >Show Available</button>
                    </div>
                </div>
            </div>
            <div style={{display:showbike?'':'none'}} className='Display_Bike'>

            <ImageCarousel/>
            </div>
            
            <Offers/>
            <div id='Pricing'>
            <Pricing/>
            </div>
            
            <CustomerReview/>
            <div id='Faq'>
            <Faq/>
            </div>
            <div>
                <Footer/>
            </div>
            
        </div>
    );
}

export default HomePage;
