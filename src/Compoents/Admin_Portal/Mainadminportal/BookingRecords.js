import React, { useEffect, useState } from 'react';

const BookingRecords = () => {
  const [bookingdata, setbookingdata] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(' https://hyperwave-1-c8519996.deta.app/get_all_booking_details');
        
        if (response.ok) {
          const data = await response.json();
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
              <th>Order ID</th>
              <th>BikeId</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>License NO</th>
              <th>Address </th>
              <th>Pickup_time</th>
              <th>End_time </th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {bookingdata.map(item => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.bike_id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.license_number}</td>
                <td>{item.location}</td>
                <td>{item.pickup_datetime}</td>
                <td>{item.end_datetime}</td>
                <td>{item.cost}</td>

                
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
