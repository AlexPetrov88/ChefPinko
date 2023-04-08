import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useStorage } from '../hooks/useStorage';

import * as appService  from '../services/appService'; 


export const BasketContext = createContext();


export const BasketProvider = ({
    children,
}) => {
    const [numberОfPurchases, setNumberОfPurchases] = useState(0);
    const [basketItems, setBasketItems] = useState([]);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        appService.getAllGadjets()
        .then(result => {
            setItems(result)
        })
      }, []);

      const onCreateGadjet = async (data) => {
        // create newGame on server
        const newClass = await appService.postCreateGadjet(data);

        // update App state
        setItems(state => [...state, newClass])

        // redirect to catalog
        navigate('/tools');
    }
    
    const contextValues = {
        items,
        setItems,
        basketItems,
        setBasketItems,
        numberОfPurchases,
        setNumberОfPurchases,
        onCreateGadjet,
    };
 

    return (
        <>
            <BasketContext.Provider value={contextValues}>
                {children}
            </BasketContext.Provider>
        </>
    )
};





// const [userState, setUserState] = useStorage('userData', {});
//     const navigate = useNavigate();
//     const [showModal, setShowModal] = useState(false);
//     const [errorText, setErrorText] = useState();
//     // const userService = userServiceFactory(userState.accessToken)

//      // LOGIN
//      const onLoginSubmit = async (data) => {
//         if (data.email === '' || data.password === '') {
//             setShowModal(true);
//             setErrorText('All fealds are required!')
//             return;
//         } else {

//             try {
//                 const result = await appService.login(data.email, data.password);
            
//                 setUserState(result);
            
//                 navigate('/catalog');
//                 return;
//             } catch (error) {
//                 setShowModal(true);
//                 setErrorText(error.message);
//             }
//         }
    
//     };

//     // REGISTER
//     const onRegisterSubmit = async (data) => {
//         if (data.email === '' || data.password === '') {
//             setShowModal(true);
//             setErrorText('All fealds are required!')
//             return;
//         } 
        
//         if (data.password !== data['confirm-password']) {
//             setShowModal(true);
//             setErrorText('Password don\'t match')
//             return;
//         }
    
//             try {
//                 const result = await appService.register(data.email, data.password);

//                 setUserState(result);

//                 navigate('/catalog');
//                 return;
//             } catch (error) {
//                 setShowModal(true);
//                 setErrorText(error.message);
//             }
            
//         };  

//     // LOGOUT

//     const onLogoutSubmit = async () => {
//         await appService.logout();
//         setUserState({});
        
//     } 