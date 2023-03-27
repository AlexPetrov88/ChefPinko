import { Navigate } from "react-router-dom"
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext, useEffect } from "react";

export const Logout = () => {
    const { onLogoutSubmit } = useContext(GlobalContext);

    useEffect(() => {

        onLogoutSubmit();
        
    }, [onLogoutSubmit])


    return(
        <Navigate to={'/'} />
    );
}