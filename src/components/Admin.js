import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../global/UserContext';

const Admin = ({ Element }) => {
    const [user] = useContext(UserContext);
    if (!user) return <Navigate to="/login" />
    if(!user.isAdmin) return <Navigate to="/profile" />
    return <Element />
}

export default Admin;