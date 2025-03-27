import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext';



export const PrivateRoutes = () => {
    const { isLoggedIn } = useContext(AuthContext);


    return isLoggedIn
        ? <Outlet />
        : <Navigate to='/signin' />
};