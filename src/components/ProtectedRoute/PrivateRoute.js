import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { logged, profile } = useAuth();
  const location = useLocation();

  if (logged.access) {
    if (profile.detail === 'Not found.' && location.pathname !== '/update-profile') {
      return <Navigate to="/update-profile" />;
    } else {
      return children;
    }
  }
  return <Navigate to="/signin" />;
};

export default PrivateRoute;