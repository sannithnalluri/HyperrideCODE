import React, { useEffect, useState } from 'react';

const BookingRecords = () => {
  const [bookingdata, setbookingdata] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://hyperwave-1-c8519996.deta.app/get_all_future_bookin_detials');
        
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setbookingdata(data);
        } else {
          console.error('Error fetching data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
    return (
        <div className='Booking_records'>
            <h1>BikeBooking records</h1>
            <div className="table-panel">
      <h2>Data Table</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>bikeId</th>
              <th>pickuptime</th>
              <th>endtime</th>
              <th>Price</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookingdata.map(item => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.bike_id}</td>
                <td>{item.pickuptime}</td>
                <td>{item.endtime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
}

export default BookingRecords;
