import React from 'react';
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks';

const RequireAuth = (props) => {
    const auth = useAppSelector(state => state.user);
    
    if (!auth.user.email) {
        return <Navigate to="/login"/>
    }
    return props.children
}

export default RequireAuth