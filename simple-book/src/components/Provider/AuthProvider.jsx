import React, { createContext } from 'react';

const AuthContext = createContext(null)

const AuthProvider = () => {

    const authInfo = {
        name: 'md rabby'
    }

    return (
        <AuthContext.Provider value={authInfo}>


        </AuthContext.Provider>
    );
};

export default AuthProvider;