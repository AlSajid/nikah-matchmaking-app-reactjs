import React from 'react';
import { Navigate, } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const PublicRoute = ({ children, ...rest }) => {
    const { logged } = useAuth();

    if (logged.access) {
        return <Navigate to="/base" />
    }

    return children;
};

export default PublicRoute;