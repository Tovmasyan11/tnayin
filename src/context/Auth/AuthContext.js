import { createContext } from 'react';

const initialAuthContext = {
    user: null,
    isLoggedIn: false,
    signIn: () => { },
    signOut: () => { },
};

export const AuthContext = createContext(initialAuthContext);