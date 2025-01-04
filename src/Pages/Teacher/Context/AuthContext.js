import React, { createContext, useState } from 'react';

// Create the context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@yusmu.edu",
    avatar: "https://images.websim.ai/avatar/johndoe",
    bio: "Professor of Computer Science with 10 years of teaching experience.",
  });

  // Login and logout methods
  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
