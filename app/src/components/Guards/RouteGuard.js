import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { GlobalContext } from "../../contexts/GlobalContext";

export const RouteGuard = ({
    children,
}) => {
    const { isAuthenticated } = useContext(GlobalContext);
    
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children ? children : <Outlet />
};
