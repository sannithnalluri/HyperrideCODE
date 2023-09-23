import React, { useEffect, useState } from 'react';

const BikeDetails = () => {
    const id = sessionStorage.getItem('bike_id');
    const [bikedata, setBikedata] = useState({}); // Initialize bikedata as an object, not an array

    
    useEffect(() => {
        const fetch_bike_details = async () => { // Make this function async to use await with fetch
            try {
                const response = await fetch(`https://hyperwave-1-c8519996.deta.app/get_single_bike_data?bike_id=${id}`);
    
                if (response.ok) {
                    const data = await response.json();
                    setBikedata(data);
                } else {
                    console.error('Failed to fetch bike data');
                }
            } catch (error) {
                console.error(error);
            }
        };
       fetch_bike_details();
    }, [id]);

    return (
        <div>
            <div className='bike_information'>
                <img src={bikedata.bikeImage} alt='Bike_Image' /> {/* You need to provide a source for the image */}
                <h1>{bikedata.bikename}</h1>
                <div className='Bike_features'>
                    <ul>
                        <li>{bikedata.bikeFeatures1}</li>
                        <li>{bikedata.bikeFeatures2}</li>
                        <li>{bikedata.bikeFeatures3}</li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default BikeDetails;
