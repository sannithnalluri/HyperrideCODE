import React, { useState, useEffect } from 'react';
import MainNavbar from './MainNavbar';
import './Userinputpage.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../HOMEPAGE/Footer';

function UserDataForm() {
    const navigate = useNavigate();
  const initialFormData = {
    name: '',
    lastname:'',
    email: '',
    phone: '',
    location: '',
    license: '',
    pincode:'',
    city:'',
    country:'',
    dateofbirth:"",
  };

  const [formData, setFormData] = useState(initialFormData);

  // Load saved data from session storage when the component mounts
  useEffect(() => {
    const savedData = sessionStorage.getItem('userdata');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Save formData to session storage
    navigate('/BikeBooking')
    sessionStorage.setItem('userdata', JSON.stringify(formData));

    // Optionally, you can provide feedback to the user
  };

  return (
    <div className='User_details_page' >
        <MainNavbar/>    
         <div className='userinputpage'>
            <div className='UserForm'>
      <h2>Driver Information</h2>
      <hr id='Driver_margin'/>
      <div className='input_block'>
      <label>
       First Name:<br/>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br id='break'/>
      <label id='last_label'>
        Last Name:<br/>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
      </label>
      </div>
      <div className='input_block'>
      <label>
       Email:<br/>
        <input
          type="text"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label id='last_label'>
        Phone:<br/>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      </div>



      <div className='input_block'>
      <label>
       Location:<br/>
        <input
          type="text"
          name="location"
          required
          value={formData.location}
          onChange={handleChange}
        />
      </label>
      <label id='last_label'>
        Pin Code:<br/>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
        />
      </label>
      </div>
      <div className='input_block'>
      <label>
       City:<br/>
        <input
          type="text"
          name="city"
          required
          value={formData.city}
          onChange={handleChange}
        />
      </label>
      <label id='last_label'>
        Country:<br/>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </label>
      </div>
      <div className='input_block'>
      <label>
       License:<br/>
        <input
          type="text"
          name="license"
          required
          value={formData.license}
          onChange={handleChange}
        />
      </label>
      <label id='last_label'>
      Date Of Birth:<br/>
        <input
          type="text"
          name="dateofbirth"
          value={formData.dateofbirth}
          onChange={handleChange}
        />
      </label>
      </div>
      
   
     
    

      <br />
      <div id='save_button'>
      <button  onClick={handleSave}>Save And Next</button>
      </div>
      
    </div>
    </div>
    <Footer/>
    </div>
   
  );
}

export default UserDataForm;
