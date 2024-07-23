import React, { ReactElement } from 'react'
import { Navigate } from 'react-router-dom';
import { User } from '../../../types/userTypes'


interface ProtectedRouteProps {
    user?: User | null
    children: ReactElement
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ user, children }) => {
    if(!user)
        return <Navigate to="/Login" />;
    return children;
};

export default ProtectedRoute