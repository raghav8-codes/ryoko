import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/auth';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;