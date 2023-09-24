import React, { useState, useEffect } from 'react';
import './BikeDetailspage.css'
const BikeDetailsPage = () => {
  const [bikeDetails, setBikeDetails] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    async function fetchData() {
      try {
        const response = await fetch(' https://hyperwave-1-c8519996.deta.app/Get_all_bike_details');
        
        if (response.ok) {
          const data = await response.json();
          setBikeDetails(data);
        } else {
          console.error('Failed to fetch data from the API');
        }
      } catch (error) {
        console.error(`Network or other unexpected error: ${error.message}`);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="BikeDetailsPage">
      <h1>Bike Details</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Pickup Time</th>
            <th>Expiry Time</th>
            <th>Features 1</th>
            <th>Features 2</th>
            <th>Features 3</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {bikeDetails.map((bike) => (
            <tr key={bike._id}>
              <td>{bike._id}</td>
              <td>{bike.bikename}</td>
              <td>{bike.bikebookingstatus ? 'Booked' : 'Available'}</td>
              <td>{bike.currentpickuptime}</td>
              <td>{bike.currentexpirytime}</td>
              <td>{bike.bikeFeatures1}</td>
              <td>{bike.bikeFeatures2}</td>
              <td>{bike.bikeFeatures3}</td>
              <td>
                <img src={bike.bikeImage} alt={`${bike.bikename}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BikeDetailsPage;
