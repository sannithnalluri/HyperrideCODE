import React from 'react';
import Addbike from './BIkeInformationCompent/Addbike';

const BikeInformation = () => {
    return (
        <div>
            <h1>Bike_information</h1>
            <div  className='Bike_details_portal'>
                <ul >
                    <li><button>Add Bike</button></li>
                    <li><button>Del Bike</button></li>
                    <li><button>Hold Bike</button></li>
                    <li><button>Resume Bike</button></li>
                    <li><button>Get_All_Bike_data</button></li>
                    <li><button>Update bike details</button></li>
                    <li><button>Update bike Booking status</button></li>

                    
                </ul>
            </div>
            <div className='Updating_container'>
                <div>
                    <Addbike/>
                </div>

            </div>
        </div>
    );
}

export default BikeInformation;
