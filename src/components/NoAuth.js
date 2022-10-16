import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../global/UserContext';

const NoAuth = ({ Element }) => {
    const [user] = useContext(UserContext);
    if (user) return <Navigate to="/profile" />; 
    return <Element />
}

export default NoAuth