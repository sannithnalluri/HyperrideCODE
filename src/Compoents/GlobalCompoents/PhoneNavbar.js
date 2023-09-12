import React, { useState,useEffect} from 'react';
import { CgClose, CgMenu } from "react-icons/cg";
import './PhoneNavbar.css';
import {motion} from "framer-motion"
const PhoneNavbar = () => {


    const [menuClicked,setmenuClicked] = useState(false)
    function handleMenuClick(){
        setmenuClicked(!menuClicked)
    }
    useEffect(() => {
        // Apply the 'locked-screen' class to the body when the menu is open
        if (menuClicked) {
          document.body.classList.add('locked-screen');
        } else {
          // Remove the 'locked-screen' class when the menu is closed
          document.body.classList.remove('locked-screen');
        }
    
        // Cleanup by removing the class when the component unmounts
        return () => {
          document.body.classList.remove('locked-screen');
        };
      }, [menuClicked]);
    return (
        <div>
            <div className='Mobiel_Navbar'>
                <div className='Mobile_navbar'>
                <div className='Mobile_logo'>
                    <img src={require('../Assests/Roundlogo.png')} alt='Company_logo'/>
                </div>
                    <div className='Mobile_Menu'>
        
                        <CgMenu style={{display:menuClicked?'none':'block'}} onClick={handleMenuClick} size={40} color='white'/>
                        <CgClose style={{display:menuClicked?'block':'none'}} onClick={handleMenuClick}  size={40} color='white'/>
                    </div>
               
                </div>

            </div>
            <motion.div 
            initial={{
                x:"100vw",
                opacity:0,

            }}
            animate={{
                x:menuClicked ?0:'100vw',
                opacity:1
            }}
            transition={{
                duration:.5,
                stiffness:100
            }}
            style={{display:menuClicked?'':'none'}}
           
            className='Mobile_navlink'>
                <ul>
                    <li><a href='#Home'>Home</a></li>
                    <li><a href='Pricing'>Pricing</a></li>
                    <li><a href='Faq'>Faq</a></li>
                    <li><a href='Contactus'>Contact Us</a></li>
                </ul>
            </motion.div>
        </div>
    );
}

export default PhoneNavbar;
