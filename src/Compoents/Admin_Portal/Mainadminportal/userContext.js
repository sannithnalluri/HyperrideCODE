// UserContext.js

import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(false);

  const login = (userData) => {
    // Perform your login logic here and set the user state
    setUser(userData);
  };

  const logout = () => {
    // Perform your logout logic here and reset the user state
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
