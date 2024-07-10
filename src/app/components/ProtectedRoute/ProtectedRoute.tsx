import React, { ReactElement } from 'react'
import { Navigate } from 'react-router-dom';


interface ProtectedRouteProps {
    user?: {
        username: string,
        password: string
    } | null
    children: ReactElement
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ user, children }) => {
    if(!user) {
        return <Navigate to="/Login" />;
        ;
    }

    return children;
};

export default ProtectedRoute