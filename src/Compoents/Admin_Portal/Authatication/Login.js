import React, { useState } from 'react';
import './Login.css';
import MainNavbar from '../../GlobalCompoents/MainNavbar';
import { useUserContext } from '../Mainadminportal/userContext';
import axios from 'axios';
function LoginPage() {
    const {login } = useUserContext()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message,setMessage] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault();

    // Create an object with the username and password
    const userData = {
      userid: username,
      password: password,
    };

    try {
      // Make the POST request to your API endpoint
      const response = await axios.post('https://hyperwave-1-c8519996.deta.app/login', userData);

      // Handle the response data here
      console.log('Response data:', response.data);
      login(true)

      // You can also redirect or perform other actions based on the response
    } catch (error) {
      setMessage(true)
      // Handle any errors that occur during the request
      console.error('Error:', error);
    }
  };

  return (
    <div>
        <MainNavbar/>
        <div className='login_page'>
        <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={{display:message?'block':'none'}}>
          <h1>Invalid Username or Password</h1>
        </div>
        <button id='Submit_button' type="submit">Login</button>
      </form>
    </div>
        </div>
      
    </div>
    
  );
}

export default LoginPage;
