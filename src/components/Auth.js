import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../global/UserContext';

const Auth = ({ Element }) => {
    const [user] = useContext(UserContext);
    if (!user) return <Navigate to="/login" />
    return <Element />
}

export default Auth;