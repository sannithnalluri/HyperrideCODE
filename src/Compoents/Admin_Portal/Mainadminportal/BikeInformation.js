import React, { useState } from 'react';
import Addbike from './BIkeInformationCompent/Addbike';
import DeleteBike from './BIkeInformationCompent/DeleteBike';
import BikeDetailsPage from './BIkeInformationCompent/GetAllbikedata';

const BikeInformation = () => {
  const [showAddBike, setShowAddBike] = useState(false);
  const [showDelBike, setShowDelBike] = useState(false);
  const [showGetAllBikeData, setShowGetAllBikeData] = useState(false);

  const handleButtonClick = (section) => {
    // Reset all section states
    setShowAddBike(false);
    setShowDelBike(false);
    setShowGetAllBikeData(false);

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
      </div>
    </div>
  );
}

export default BikeInformation;
