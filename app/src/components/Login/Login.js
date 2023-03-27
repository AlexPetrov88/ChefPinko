import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"

import { GlobalContext } from '../../contexts/GlobalContext.js';
import { useContext } from 'react';

import { useForm } from '../../hooks/useForm.js';

import * as appService from '../../services/appService.js'

export const Login = () => {
    const { onLoginSubmit } = useContext(GlobalContext);
    const { formValues, onChangeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);

    // const [userData, setUserData] = useState({
    //     email: '',
    //     password: '',
    // });
    // const { onLoginSubmit } = useContext(GlobalContext);
    // const navigate = useNavigate();

    // const onChangeHandler = (e) => {
    //     setUserData(state => ({...state, [e.target.name]: e.target.value}));
    // }

    // const onLoginAccount =  (data) => {

    //     if (data.email === '' || data.password === '') {
    //         alert('All fealds are required!');
    //         return;
    //     }
    //    return appService.login(data.email, data.password);
    // }

    // const onSubmit = async (e) => {
    //     e.preventDefault();

    //     await onLoginAccount(userData);
    //     navigate('/')
    // }


    return(
    <section id="login-page" className="auth">
            <form id="login" method='post' onSubmit={onSubmit}>

                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input value={formValues.email} onChange={onChangeHandler} type="email" id="email" name="email" placeholder="alex@gmail.com" />

                    <label htmlFor="login-pass">Password:</label>
                    <input value={formValues.password} onChange={onChangeHandler}  type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">Here!</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}



// import { useState } from "react"
// import { Link, useNavigate } from "react-router-dom"


// import { login } from "../../services/gameService"

// export const Login = () => {

//     const navigate = useNavigate();

//     const [values, setValues] = useState({
//         email: '',
//         password: '',
// })

// const onChangeHandler = (e) => {
//     setValues(state => ({...state, [e.target.name]: e.target.value}))
// }

// const onCreateGameSubmit = (data) => {
//     if (data.email === '' || data.password === '') {
//         alert('All fealds are required!');
//         return;
//     } 
//      return login(data.email, data.password);
// }

// const onSubmit = async (e) => {
//     e.preventDefault();

//        await onCreateGameSubmit(values);
//         navigate('/catalog');
// }

//     return(
//         <section id="login-page" className="auth">
//             <form id="login" onSubmit={onSubmit}>

//                 <div className="container">
//                     <div className="brand-logo"></div>
//                     <h1>Login</h1>
//                     <label htmlFor="email">Email:</label>
//                     <input value={values.email} onChange={onChangeHandler} type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

//                     <label htmlFor="login-pass">Password:</label>
//                     <input value={values.password} onChange={onChangeHandler} type="password" id="login-password" name="password" />
//                     <input type="submit" className="btn submit" value="Login" />
//                     <p className="field">
//                         <span>If you don't have profile click <Link to="/register">here</Link></span>
//                     </p>
//                 </div>
//             </form>
//         </section>
//     );
// }
