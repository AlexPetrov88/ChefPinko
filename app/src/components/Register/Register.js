import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContext.js';
import { useForm } from '../../hooks/useForm.js';

// import * as recipesServece from '../../services/appService.js';

import styles from "./Register.module.css"

export const Register = () => {
        const { onRegisterSubmit, showModal, setShowModal, errorText, } = useContext(GlobalContext);
        const { formValues, onChangeHandler, onSubmit } = useForm({
            email: '',
            password: '',
            'confirm-password': '',
        }, onRegisterSubmit);

    // const [ userData, setUserData ] = useState({
    //     email: '',
    //     password: '',
    //     'confirm-password': '',
    // });

    // const navigate = useNavigate();

    // const onChangeHandler = (e) => {
    //     setUserData(state => ({...state, [e.target.name]: e.target.value}));
    // }

    // const onRegisterAccount = () => {
    //     console.log(userData);
    //     if (userData.email === '' || userData.password === '') {
    //         alert('All fealds are required!');
    //         return null;
    //     } 

    //     if (userData.password !== userData['confirm-password']) {
    //         alert('Password don\'t match');
    //         return null;
    //     }
       
    //     return recipesServece.register(userData.email, userData.password); 
    // }
    
    // const onSubmit = async (e) => {
    //     e.preventDefault();

    //    const result = await onRegisterAccount(userData);
    //     if(result !== null) {
    //         navigate('/');
    //     }
    // }

    const onModalClick = () => {
        setShowModal(!showModal);
    }

    return(
    <>
        {showModal && 
        <>
            <div className={styles["modal"]}>
            <div className={styles["modal-content"]}>
                <h2>{errorText}</h2>
                <button className="btn" onClick={onModalClick}>OK</button>
            </div>
            </div>    
    
            <div className={styles["bgOpacity"]}></div>
        </>
        }
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input value={formValues.email} onChange={onChangeHandler} type="email" id="email" name="email" placeholder="maria@email.com" />

                    <label htmlFor="pass">Password:</label>
                    <input value={formValues.password} onChange={onChangeHandler} type="password" name="password" id="register-password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input value={formValues["confirm-password"]} onChange={onChangeHandler} type="password" name="confirm-password" id="confirm-password" />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">Here!</Link></span>
                    </p>
                </div>
            </form>
        </section>
    </>
    );
}



// import { register } from "../../services/gameService";

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export const Register = () => {

//       const navigate = useNavigate();

//       const [ values, setValues ] = useState({
//         email: '',
//         password: '',
//         'confirm-password': '',
//       })  

//       const onChangeSubmitHandler = (e) => {
//           setValues(state => ({...state, [e.target.name]: e.target.value}))
//       }
      
//       const onRegisterHandler =  (data) => {
//         if (data.email === '' || data.password === '') {
//             alert('All fealds are required!');
//             return null;
//         }
//         if (data.password !== data[ 'confirm-password']) {
//             alert('Password don\'t match');
//             return null;
//         }

//         return register(data.email, data.password);
//       }
      
//       const onSubmit = async (e) => {
//         e.preventDefault();

//        const result =  await onRegisterHandler(values);
//        if (result !== null) {
//            navigate('/catalog');      
//     }
//       }

//     return(
//         <section id="register-page" className="content auth">
//             <form id="register" onSubmit={onSubmit}>
//                 <div className="container">
//                     <div className="brand-logo"></div>
//                     <h1>Register</h1>

//                     <label htmlFor="email">Email:</label>
//                     <input value={values["email"]} onChange={onChangeSubmitHandler} type="email" id="email" name="email" placeholder="maria@email.com" />

//                     <label htmlFor="pass">Password:</label>
//                     <input value={values["password"]} onChange={onChangeSubmitHandler} type="password" name="password" id="register-password" />

//                     <label htmlFor="con-pass">Confirm Password:</label>
//                     <input value={values["confirm-password"]} onChange={onChangeSubmitHandler} type="password" name="confirm-password" id="confirm-password" />

//                     <input className="btn submit" type="submit" value="Register" />

//                     <p className="field">
//                         <span>If you already have profile click <Link to="/login">here</Link></span>
//                     </p>
//                 </div>
//             </form>
//         </section>
//     );
// }


