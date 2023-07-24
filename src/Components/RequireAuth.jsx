import React, { HTMLProps, HtmlHTMLAttributes, ReactChild, ReactComponentElement, ReactElement, ReactHTMLElement, ReactNode } from 'react';
import { useLocation, Navigate } from 'react-router-dom'
import { useAppSelector } from '../Store/hooks';

const RequireAuth = (props) => {
    const auth = useAppSelector(state => state.user);
  
    if (!auth.user.email) {
        return <Navigate to="/login"/>
    }

    return props.children
}

export default RequireAuth