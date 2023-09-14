import React, { createContext, useContext, useState } from 'react';

// Create a UserContext
const UserContext = createContext();

// Create a custom hook to use the UserContext
export const useUserContext = () => {
  return useContext(UserContext);
};

// Create a UserProvider component
export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    age: '',
    address: '',
    phone: '',
    email: '',
  });

  // Function to update user details
  const updateUserDetails = (newDetails) => {
    setUserDetails(newDetails);
  };

  return (
    <UserContext.Provider value={{ userDetails, updateUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};
