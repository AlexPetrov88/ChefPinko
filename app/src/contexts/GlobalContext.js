import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStorage } from '../hooks/useStorage';

import * as appService  from '../services/appService'; 


export const GlobalContext = createContext();


export const GlobalProvider = ({
    children,
}) => {
    const [userState, setUserState] = useStorage('userData', {});
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [errorText, setErrorText] = useState();
    // const userService = userServiceFactory(userState.accessToken)

     // LOGIN
     const onLoginSubmit = async (data) => {
        if (data.email === '' || data.password === '') {
            setShowModal(true);
            setErrorText('All fealds are required!')
            return;
        } else {

            try {
                const result = await appService.login(data.email, data.password);
            
                setUserState(result);
            
                navigate('/catalog');
                return;
            } catch (error) {
                setShowModal(true);
                setErrorText(error.message);
            }
        }
    
    };

    // REGISTER
    const onRegisterSubmit = async (data) => {
        if (data.email === '' || data.password === '') {
            setShowModal(true);
            setErrorText('All fealds are required!')
            return;
        } 
        
        if (data.password !== data['confirm-password']) {
            setShowModal(true);
            setErrorText('Password don\'t match')
            return;
        }
    
            try {
                const result = await appService.register(data.email, data.password);

                setUserState(result);

                navigate('/catalog');
                return;
            } catch (error) {
                setShowModal(true);
                setErrorText(error.message);
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
        showModal,
        setShowModal,
        errorText,
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