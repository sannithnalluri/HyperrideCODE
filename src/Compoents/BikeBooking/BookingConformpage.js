import React, { useEffect, useState, useCallback } from 'react';
import MainNavbar from '../GlobalCompoents/MainNavbar';
import './BookingStatus.css';
import axios from 'axios';

const BookingConformpage = () => {
  const [Transactionid, setTransactionid] = useState('');
  const [paymentstatus, setPaymentstatus] = useState(false);
  const [amount, setAmount] = useState('');
  const bookingdata = sessionStorage.getItem('bookingdetials');
  const parsedBookingData = JSON.parse(bookingdata);
  parsedBookingData.transactionId = Transactionid;

  console.log(parsedBookingData);

  const getpaymentstatus = useCallback(async () => {
    try {
      const response = await fetch(`https://paymentapi-1-t9346200.deta.app/fetch-transaction-details/${Transactionid}`);
      if (response.ok) {
        const data = await response.json();
        console.log('Response Data:', data);
        console.log(data.response_code);
        console.log(data.amount);
        setAmount(data.amount);

        setPaymentstatus(data.response_code);

        if (data.response_code === 'SUCCESS') {
            try {
                const response = await axios.post('https://hyperwave-1-c8519996.deta.app/bookbikenow', parsedBookingData);
                console.log(response.data);
              } catch (error) {
                console.error(error);
              }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [Transactionid,parsedBookingData]);

  

  useEffect(() => {
    const Id = sessionStorage.getItem('Transaction_id');
    setTransactionid(Id);

    const intervalId = setInterval(() => {
      getpaymentstatus();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [Transactionid, getpaymentstatus]);

  return (
    <div className='BookingStatusPage'>
      <MainNavbar />
      <h1>Payment Status</h1>

      {paymentstatus === 'SUCCESS' ? (
        <div className='BookingStatus_container'>
          <h1>Payment Status</h1>
          <h3>Transaction Id: {Transactionid}</h3>
          <h3>Transaction Status: SUCCESSFUL</h3>
          <h3>Amount: {amount / 100}</h3>

          <h2>Take Screen Shot Future Requirement</h2>
        </div>
      ) : (
        <div className='BookingStatus_container'>
          <h1>Payment Status</h1>
          <h3>Transaction Id: {Transactionid}</h3>
          <h3>Transaction Status: Initiate</h3>
          <h2>Checking Payment Status <img src={require('../Assests/loading.gif')} alt="loading" /></h2>
          <p>An external Payment page is opened... Please complete your payment.</p>
        </div>
      )}
    </div>
  );
};

export default BookingConformpage;
