import React from 'react';
import './DisplayBike.css';
import { useNavigate } from 'react-router-dom';
const DisplayBike = ({ bikedata }) => {

    const navigate = useNavigate()
    const handlebooknow=(bikeid)=>{
        console.log(bikeid)
        sessionStorage.setItem('bike_id',bikeid);
        navigate('/UserDetails')
        
      }
  return (
    <div className='Dispaly_image'>
      <h1>Our Bikes</h1>
      <div className='display_container'>
        {bikedata.map((bike, index) => (
          <div key={index} className='bikeItem'>
            <div className='bikeImage'>
              <img src={bike.bikeImage} alt={bike.bikename} />
            </div>
            <div>
              <h2>{bike.bikename}</h2>
              {/* <div className='Featutes' >
                <h6>{bike.bikeFeatures1}</h6>
                <h6>{bike.bikeFeatures3}</h6>
              </div> */}
              <div id='Book_now_button'>
                <button onClick={()=>{handlebooknow(bike._id)}}>Book Now</button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayBike;
