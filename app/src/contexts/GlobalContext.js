import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStorage } from '../hooks/useStorage';

import * as appService  from '../services/appService'; 


export const GlobalContext = createContext();


export const GlobalProvider = ({
    children,
}) => {
    const [userState, setUserState] = useStorage('user', {});
    const navigate = useNavigate();

    // const userService = userServiceFactory(userState.accessToken)

     // LOGIN
     const onLoginSubmit = async (data) => {
        if (data.email === '' || data.password === '') {
            alert('All fealds are required!');
            return;
        }
    try {
        const result = await appService.login(data.email, data.password);
    
        setUserState(result);
    
        navigate('/catalog');
    } catch (error) {
        alert(`error: ${error}`);
    }
    };

    // REGISTER
    const onRegisterSubmit = async (data) => {
        if (data.email === '' || data.password === '') {
            alert('All fealds are required!');
            return;
        } 
        
        if (data.password !== data['confirm-password']) {
            alert('Password don\'t match');
            return;
        }
    
            try {
                const result = await appService.register(data.email, data.password);

                setUserState(result);

                navigate('/catalog');
            } catch (error) {
                alert(`error: ${error}`);
            }
            
        };  

    // LOGOUT

    const onLogoutSubmit = async () => {
        await appService.logout();
        setUserState({});
        
    } 
    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogoutSubmit,
        userId: userState.id,
        token: userState.token,
        userEmail: userState.email,
        isAuthenticated: !!userState.token,
    };
 

    return (
        <>
            <GlobalContext.Provider value={contextValues}>
                {children}
            </GlobalContext.Provider>
        </>
    )
};

export const useAuthContext = () => {
    const context = useContext(GlobalContext);

    return context;
}









// // where we set context
//         import { GlobalContext } from './GlobalContext';

//         const contextValues = {
//             onChangeHandler,
//             values,
//         };

//         return (
//             <GlobalContext.Provider value={contextValues}>
//             <Header /> 

//             <CreatePage />
//             </GlobalContext.Provider>
//         )


// // where we use context
//         import { useContext } from 'react'; 
//         import { GlobalContext } from './GlobalContext';


// // write in component where we use context above return
//         const { name, age, onChangeHandler } = useContext(GlobalContext);       