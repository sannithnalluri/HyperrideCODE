import React, { useState } from 'react';
import './Login.css';
import MainNavbar from '../../GlobalCompoents/MainNavbar';
import { useUserContext } from '../Mainadminportal/userContext';

function LoginPage() {
    const {login } = useUserContext()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    // You can validate the username and password here
    // For simplicity, we're not implementing the actual login functionality
    login(true)

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
        <button type="submit">Login</button>
      </form>
    </div>
        </div>
      
    </div>
    
  );
}

export default LoginPage;
