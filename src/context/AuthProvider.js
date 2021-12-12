import React, { createContext } from 'react';
import useLogged from '../hooks/useLogged';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const allContexts = useLogged();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;