import React, { useState } from 'react';
import Addbike from './BIkeInformationCompent/Addbike';
import DeleteBike from './BIkeInformationCompent/DeleteBike';
import BikeDetailsPage from './BIkeInformationCompent/GetAllbikedata';
import HoldBike from './BIkeInformationCompent/HoldBike';
import ReleaseBike from './BIkeInformationCompent/ReleaseBike';

const BikeInformation = () => {
  const [showAddBike, setShowAddBike] = useState(false);
  const [showDelBike, setShowDelBike] = useState(false);
  const [showGetAllBikeData, setShowGetAllBikeData] = useState(false);
  const [holdBike,setHoldBike] = useState(false);
  const [relasebike,setrelase] = useState(false);
  const handleButtonClick = (section) => {
    // Reset all section states
    setShowAddBike(false);
    setShowDelBike(false);
    setShowGetAllBikeData(false);
    setHoldBike(false);
    setrelase(false);

    // Set the state of the clicked section to true
    switch (section) {
      case 'Add Bike':
        setShowAddBike(true);
        break;
      case 'Del Bike':
        setShowDelBike(true);
        break;
      case 'Get_All_Bike_data':
        setShowGetAllBikeData(true);
        break;
      case 'Hold_bike':
        setHoldBike(true);
        break;
      case 'Release_bike':
         setrelase(true)
         break;
      default:
        break;
    }
  };

  return (
    <div className='Bike_Info_container'>
      <div className='Bike_details_portal'>
        <ul>
          <li>
            <button onClick={() => handleButtonClick('Add Bike')}>Add Bike</button>
          </li>
          <li>
            <button onClick={() => handleButtonClick('Del Bike')}>Del Bike</button>
          </li>
          <li>
            <button onClick={() => handleButtonClick('Get_All_Bike_data')}>Get_All_Bike_data</button>
          </li>
          <li>
            <button onClick={() => handleButtonClick('Hold_bike')}>Hold_Bike</button>
          </li>
          <li>
            <button onClick={() => handleButtonClick('Release_bike')}>Release_bike</button>
          </li>
        </ul>
      </div>
      <div className='Updating_container'>
        <div>
          {showAddBike && <Addbike />}
        </div>
        <div>
          {showDelBike && <DeleteBike/>}
        </div>
        <div>
          {showGetAllBikeData && <BikeDetailsPage/>}
        </div>
        <div>
          {holdBike && <HoldBike/>}
        </div>
        <div>
          {relasebike && <ReleaseBike/>}
        </div>
      </div>
    </div>
  );
}

export default BikeInformation;
