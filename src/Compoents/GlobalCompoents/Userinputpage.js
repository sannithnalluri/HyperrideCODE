import React, { useState, useEffect } from 'react';
import MainNavbar from './MainNavbar';
import './Userinputpage.css';
import { useNavigate } from 'react-router-dom';

function UserDataForm() {
    const navigate = useNavigate();
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    location: '',
    license: '',
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
      <h2>Please Provide The Details</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        License:
        <input
          type="text"
          name="license"
          value={formData.license}
          onChange={handleChange}
        />
      </label>
      <br />
      <button onClick={handleSave}>Save And Next</button>
    </div>
    </div>
    </div>
   
  );
}

export default UserDataForm;
