import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUsername, setLoggedInUsername] = useState('');

  return (
    <AuthContext.Provider value={{ loggedInUsername, setLoggedInUsername }}>
      {children}
    </AuthContext.Provider>
  );
};

// Adding prop types validation for children
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useAuth = () => {
  return useContext(AuthContext);
};
