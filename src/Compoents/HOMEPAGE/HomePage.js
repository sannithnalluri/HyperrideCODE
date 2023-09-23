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
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedCurrentDate = `${year}-${month}-${day}`;
    const [selectedDate, setSelectedDate] = useState('None');



    const currentHours = String(currentDate.getHours()).padStart(2, '0');
    const currentMinutes = String(currentDate.getMinutes()).padStart(2, '0');
    const [selectedTime, setSelectedTime] = useState(`${currentHours}:${currentMinutes}`);

    
    //the state of the currentpage
    const [isLoading,setloading] = useState(true)
    const [bikedata,setBikedata] = useState([])
    const[IsAvailable,setIsAvailable] = useState(false)
   const [showbike,setshowbike] = useState(false)
   const [selectedPlan, setSelectedPlan] = useState('None');
   const pickdateandtime = selectedDate+' '+selectedTime+':00'
   
   
   //function to handle in the page
    const handleShowavailabe=()=>{
     setshowbike(true)
      fetchData();
      const bookingdataofike  = [pickdateandtime,selectedPlan]
      sessionStorage.setItem('bikebookingdetials',bookingdataofike)
    }
    const handleTimeChange = (e) => {
      const inputTime = e.target.value;
      console.log(inputTime)
      setSelectedTime(inputTime);
    };
    //   store the seleed timeand date in the compent in the state and funtion to handle 
    
      const handleSelectChange = (event) => {
        setSelectedPlan(event.target.value);
      };
      // store the store the date
     const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  
  
   
  
    useEffect(() => {
      const checkAvailability = () => {
        if (selectedDate && selectedPlan !== 'None' &&selectedTime) {
          setIsAvailable(true);
        
        } else {
          setIsAvailable(false);
        }
      };
      checkAvailability();
    }, [selectedDate, selectedPlan,selectedTime,pickdateandtime]);




    const fetchData = async () => {
      try {
      setloading(true)
      const uri =`https://hyperwave-1-c8519996.deta.app/show_avaible?pickup_time=${pickdateandtime}&plan=${selectedPlan}`
      const response = await fetch(uri); // Corrected the URL, added "http://"
        
        if (response.ok) {
          const data = await response.json();
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
                       step={900}
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
            <div style={{display:showbike?'block':'none'}} id='displaybike'>
              <div style={{display:isLoading?'block':'none'}}>
              <LoadingAnimation/>
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
