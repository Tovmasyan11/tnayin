import { useEffect, useState } from "react";
import { findUser } from '../data/users';
import { useNavigate } from "react-router-dom";


export const useAuth = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({ isLoggedIn: false, user: null });

    useEffect(() => {
        const loggedUser = localStorage.getItem('auth');

        if (loggedUser) {
            setUserData(JSON.parse(loggedUser));
            navigate('/')
        } else {
            navigate('signin');
        }

    }, []);


    console.log({ userData });


    const signIn = (username, password) => {
        const user = findUser(username);

        if (user) {
            const storeUser = { isLoggedIn: true, user: user };

            localStorage.setItem('auth', JSON.stringify(storeUser));

            setUserData(storeUser);

            return user;

        }
        return null;

    };

    const signOut = () => {
        localStorage.clear();
        setUserData({ isLoggedIn: false, user: null });

        navigate('/signin');
    };


    return {
        auth: userData,
        signIn,
        signOut,
    };
};