import {React,useState,useEffect} from 'react';
import MainNavbar from '../GlobalCompoents/MainNavbar';
import './Homepage.css';
import Offers from './Offers';
import Pricing from './Pricing';
import CustomerReview from './CustomerReview';
import Faq from './Faq';
import Footer from './Footer';
import DisplayBike from './DisplayBike';
import LoadingAnimation from '../GlobalCompoents/Loading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const HomePage = () => {
  const RevealingAnimation = ({ children }) => {
    const [ref, inView] = useInView({ // Trigger animation once when the component enters the viewport
      threshold: 0.3, // Adjust this threshold as needed
    });
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1.2 }}
      >
        {children}
      </motion.div>
    );
  };
    const currentDate = new Date();

    // Format the date in YYYY-MM-DD format, which is the required format for input[type="date"]
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedCurrentDate = `${year}-${month}-${day}`;
    const currentHours = String(currentDate.getHours()).padStart(2, '0');
    const currentMinutes = String(currentDate.getMinutes()).padStart(2, '0');
    const currentSeconds = String(currentDate.getSeconds()).padStart(2,'0')
    const [selectedTime, setSelectedTime] = useState(`${currentHours}:${currentMinutes}:${currentSeconds}`);
   
   
    const [showbike,setshowbike] = useState(false)
    const handleShowavailabe=()=>{
      setshowbike(true)
      fetchData();
      sessionStorage.setItem('bikebookingdetials',bikebookingdata)
    }


    const handleTimeChange = (e) => {
        const inputTime = e.target.value;
        // Check if the input time is earlier than the minimum time
        if (inputTime < `${currentHours}:${currentMinutes}`) {
          setSelectedTime(`${currentHours}:${currentMinutes}:${currentSeconds}`);
        } else {
    
          setSelectedTime(inputTime);
        }
      };


   
    //   store the seleed timeand date in the compent in the state and funtion to handle 
      const [selectedPlan, setSelectedPlan] = useState('None');
      const handleSelectChange = (event) => {
        setSelectedPlan(event.target.value);
      };

      // store the store the date
      const [selectedDate, setSelectedDate] = useState('');

     const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  
    const [isLoading,setloading] = useState(true)
    const [bikedata,setBikedata] = useState([])
    const[IsAvailable,setIsAvailable] = useState(false)
    const bikebookingdata = [selectedDate,selectedTime,selectedPlan]
  
    useEffect(() => {
      const checkAvailability = () => {
        if (selectedDate && selectedPlan !== 'None' &&selectedTime) {
          setIsAvailable(true);
        } else {
          setIsAvailable(false);
        }
      };
      checkAvailability();
    }, [selectedDate, selectedPlan,selectedTime]);
    const fetchData = async () => {
      try {
     
      const response = await fetch(`http://https://hyperwave-1-c8519996.deta.app/Showavaible_bike?pickupdate=${selectedDate}&pickuptime=${selectedTime}&plan=2`); // Corrected the URL, added "http://"
        
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setBikedata(data);
          setloading(false)
        } else {
          console.error('Network response was not ok.');
        }
      } catch (e) {
        console.error('Error:', e);
      }
    }
    return (
        <div>
            <MainNavbar/>
            <div className='hero_section'>
                <motion.div initial={{x:-100,opacity:.5}}
                    animate={{x:0,opacity:1}}
                    transition={{
                      duration:1.5,
                      stiffness:100
                    }} className='hero_Section_img'>
                <motion.img
                  src={require('../Assests/mainscooty1.png')} alt='hero_image'/>
                </motion.div>
                <motion.div
                initial={{x:100}}
                animate={{x:0}}
                transition={{duration:1}}
                className='Date_picking_Section'>
                    <motion.div 
                    
                    className='logo_Container'>
                        <img src={require('../Assests/hyperride2.png')} alt='hero_image'/>
                    </motion.div>
                    <div className='PickUP_selection_section'>
                        <div className='Pickup_Data'>
                        <h2>Pickup Data</h2>
                        <input
                        name='Data'
                        type='Date'
                        min={formattedCurrentDate}
                        value={selectedDate}
                        onChange={handleDateChange}
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
                    <select value={selectedPlan} onChange={handleSelectChange}>
                        <option value='None'>None</option>
                         <option value="3">3 Hours 159/-</option>
                         <option value="5">5 Hours 220/-</option>
                         <option value="7">7 Hours 280/-</option>
                         <option value="24">24 Hours 399/-</option>
                         <option value="30">7/30 Days 199/Perday</option>
                    </select>
                    </div>
                    <div className='Show_avail_Button'>
                        <button onClick={handleShowavailabe} disabled={!IsAvailable}><a href='#displaybike'>Show Available</a></button>
                    </div>
                </motion.div>
            </div>
            {/* <div style={{display:showbike?'':'none'}} className='Display_Bike'>

            <ImageCarousel bikedata={bikedata}/>
            </div> */}
            <div id='displaybike' style={{display:showbike?'':'none'}} >
              <div style={{display:isLoading?'block':'none'}}>
              <LoadingAnimation />
              </div>
             
              <DisplayBike bikedata={bikedata}/>
            </div>
            <RevealingAnimation>
            <Offers/>
            </RevealingAnimation>
            
            <div id='Pricing'>
              <RevealingAnimation>
              <Pricing/>
              </RevealingAnimation>
            
            </div>
            <RevealingAnimation>
            <CustomerReview/>
            </RevealingAnimation>
            
         
            <div id='Faq'>
              <RevealingAnimation>
              <Faq/>
              </RevealingAnimation>
           
            </div>
            <div>
                <Footer/>
            </div>
            
        </div>
    );
}

export default HomePage;
