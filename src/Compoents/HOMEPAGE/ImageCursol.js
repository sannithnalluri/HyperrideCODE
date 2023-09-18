import React from 'react';
import { useEffect,useState,useRef } from 'react';
import {motion} from 'framer-motion';
import './ImageCursol.css';
import { useNavigate } from 'react-router-dom';

const ImageCursol = ({bikedata}) => {
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
  const handlebooknow=(bikeid)=>{
    console.log(bikeid)
    sessionStorage.setItem('bike_id',bikeid);
    navigate('/UserDetails')
    
  }

  return (
    <div className='Bike_page'>
      <h1>Our Available Bike</h1>
      <motion.div className='Carusol'>
        <motion.div  drag="x" dragConstraints={{right:0,left: -(maxWidth)}} ref={containerRef}className='inner_carusol'>
          {bikedata.map(image =>{
            return(
              <motion.div  key={image._id}className='item'>
                <div>
                <img src={image.bikeImage} alt='imge'/>
                <h1>{image.bikename}</h1>
                <div className='Features'>
                <h6>{image.bikeFeatures1}</h6>
                <h6>{image.bikeFeatures2}</h6>
                <h6>{image.bikeFeatures3}</h6>
                            
                </div>
                <div className='bike_book_button'>
                  <button onClick={()=>{handlebooknow(image._id)}}>Book Now</button>
                </div>
                </div>
                
                
                
                </motion.div>

            )
          })}

        </motion.div>
      </motion.div>
      
    </div>
  );
}

export default ImageCursol;
