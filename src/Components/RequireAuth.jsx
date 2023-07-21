import React from 'react';
import { useLocation, Navigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks';

const RequireAuth = (props) => {
    // const auth = localStorage.getItem('token');
    const auth = useAppSelector(state => state.user);
    
    console.log(auth)
    // const location = useLocation()
    if (!auth.user.email) {
        return <Navigate to="/login"/>
    }
    return props.children
}

export default RequireAuth