import React from 'react';
import { useEffect,useState,useRef } from 'react';
import {motion} from 'framer-motion';
import './ImageCursol.css';
import { useNavigate } from 'react-router-dom';

const ImageCursol = () => {
  const navigate = useNavigate()
  const containerRef = useRef(null);
  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    // Calculate and set the maximum width of the carousel container
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      setMaxWidth(containerWidth);
    }
  }, []);
  const handlebooknow=({bikeid})=>{
    sessionStorage.setItem('bike_id', bikeid);
    navigate('/UserDetails')
    
  }

  const image=[
    {
      id:1,
      Imageurl:'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/honda-select-model-matte-magnificent-copper-metallic-1669199420143.png?q=80',
      bikename:'Active',
      feature1:'Top Speed : 110km/h',
      feature2:'Fuel Tank: 15L',
    },
    {
      id:2,
      Imageurl:'https://bd.gaadicdn.com/upload/userfiles/images/5e1f5483c9da0.png',
      bikename:'Active',
      feature1:'Top Speed : 110km/h',
      feature2:'Fuel Tank: 15L',
    },
    {
      id:3,
      Imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVMcK41rNrwR0Cp8_JJl51lLpiT-6HTZNWkmmBM5110_KHhfrqmTWnCAdCXjl_rpY04VE&usqp=CAU',
      bikename:'Active',
      feature1:'Top Speed : 110km/h',
      feature2:'Fuel Tank: 15L',
    },
    {
      id:4,
      Imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVMcK41rNrwR0Cp8_JJl51lLpiT-6HTZNWkmmBM5110_KHhfrqmTWnCAdCXjl_rpY04VE&usqp=CAU',
      bikename:'Active',
      feature1:'Top Speed : 110km/h',
      feature2:'Fuel Tank: 15L',
    },
  ]
  return (
    <div className='Bike_page'>
      <h1>Our Available Bike</h1>
      <motion.div className='Carusol'>
        <motion.div  drag="x" dragConstraints={{right:0,left: -(maxWidth+1000)}} ref={containerRef}className='inner_carusol'>
          {image.map(image =>{
            return(
              <motion.div className='item'>
                <div>
                <h1>{image.bikename}</h1>
                <div className='Features'>
                <h6>{image.feature1}</h6>
                <h6>{image.feature2}</h6>
                </div>
                <div className='bike_book_button'>
                  <button onClick={()=>{handlebooknow(image.id)}}>Book Now</button>
                </div>
                </div>
                <img src={image.Imageurl} alt='imge'/>
                
                
                </motion.div>

            )
          })}

        </motion.div>
      </motion.div>
      
    </div>
  );
}

export default ImageCursol;
