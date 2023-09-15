import React from 'react';

const BookingRecords = () => {
    const data = [
        { id: 1, name: 'Item 1', price: 10,time:30 },
        { id: 2, name: 'Item 2', price: 15 ,time:30},
        { id: 3, name: 'Item 3', price: 20,time:30 },
        // Add more data as needed
      ];
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
              <th>Name</th>
              <th>Phone No</th>
              <th>License No</th>
              <th>Price</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.time}</td>
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
