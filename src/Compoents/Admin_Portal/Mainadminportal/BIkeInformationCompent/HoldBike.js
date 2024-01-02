import React, { useState } from 'react';

const HoldBike = () => {
  const [bikeId, setBikeId] = useState('');
  const [message, setMessage] = useState('');

  const handleHoldBike = async () => {
    try {
      const response = await fetch(` https://hyperwave-1-c8519996.deta.app/hold_bike?bike_id=${bikeId}`);
      if (response.ok) {
        setMessage('Successfully held bike with ID: ' + bikeId);
      } else {
        setMessage('Failed to hold bike. Please check the bike ID.');
      }
    } catch (err) {
      setMessage('Error: ' + err.message);
    }
  };

  const handleBikeIdChange = (event) => {
    setBikeId(event.target.value);
  };

  return (
    <div>
      <h1>Hold Bike</h1>
      <div>
        <label>Bike_id:</label>
        <input type="text" value={bikeId} onChange={handleBikeIdChange} />
      </div>
      <button id='holdButton' onClick={handleHoldBike}>Hold Bike</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default HoldBike;
