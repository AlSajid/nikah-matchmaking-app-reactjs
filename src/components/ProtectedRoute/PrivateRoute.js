import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { logged,  } = useAuth();
    let location = useLocation();

    if (logged.access) {
        return children;
    }
    return <Navigate to="/signin" state={{ from: location }} />;
};

export default PrivateRoute;