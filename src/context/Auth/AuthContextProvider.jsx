import { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';

import { findUser } from "../../data/users";

export const AuthContextProvider = ({ children }) => {

    const [auth, setAuth] = useState({ isLoggedIn: false, user: null });

    useEffect(() => {
        const loggedUser = localStorage.getItem('auth');

        if (loggedUser) {
            setAuth(JSON.parse(loggedUser));
        }
    }, []);

    const signIn = (username, password) => {
        const user = findUser(username);

        if (user) {
            const storeUser = { isLoggedIn: true, user: user };


            localStorage.setItem('auth', JSON.stringify(storeUser));


            setAuth(storeUser);

            return user;
        }

        return null;
    };

    const signOut = () => {
        localStorage.clear();
        setAuth({ isLoggedIn: false, user: null });
    };

    return (
        <AuthContext.Provider
            value={{
                user: auth.user,
                isLoggedIn: auth.isLoggedIn,
                signOut,
                signIn
            }}
        >
            {children}
        </AuthContext.Provider>
    );

};