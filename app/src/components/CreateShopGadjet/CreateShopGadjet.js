import { useContext, useState } from "react";
import { BasketContext } from "../../contexts/BasketContext";
// import { useContext } from "react";
// import { Navigate } from "react-router";
// import { GlobalContext } from "../../contexts/GlobalContext";

export const CreateShopGadjet = () => {
    const { onCreateGadjet } = useContext(BasketContext);
    const [currentValue, setCurrentVAlue] = useState({
        _id: '',
        name: '',
        imageUrl: '',
        price: '',
    })
    const onChangeHandler = (e) => {
        setCurrentVAlue(state => ({...state, [e.target.name]: e.target.value}));
    } 

    const onSubmit = (e) => {
        e.preventDefault();

        onCreateGadjet(currentValue);
    } 

    return(
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Create New Gadjet</h1>
                    <label htmlFor="name">Gadjet name:</label>
                    <input value={currentValue.name} onChange={onChangeHandler} type="text" id="recipeName" name="name" />

                    <label htmlFor="price">Price:</label>
                    <input value={currentValue.price} onChange={onChangeHandler} type="text" id="recipeChef" name="price" />

                    <label htmlFor="imageUrl">ImageURL:</label>
                    <input value={currentValue.imageUrl} onChange={onChangeHandler} type="text" id="imageUrl" name="imageUrl" />

                    <input className="btn submit" type="submit" value="Edit Class" />

                </div>
            </form>
        </section>
    );
}


// import { useState } from "react";
// import { useContext } from 'react'; 
// import { GlobalContext } from '../../contexts/GlobalContext';
// export const CreatePage = () => {
//     const { onCreateGameSubmit } = useContext(GlobalContext);
//     const [values, setValues] = useState({
//             title: '',
//             category: '',
//             maxLevel: '',
//             imageUrl: '',
//             summary: '',
//     })

//     const onChangeHandler = (e) => {
//         setValues(state => ({...state, [e.target.name]: e.target.value}))
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();

//         onCreateGameSubmit(values);
//     }
//     return(
//         <section id="create-page" className="auth">
//             <form id="create" onSubmit={onSubmit}>
//                 <div className="container">

//                     <h1>Create Game</h1>
//                     <label htmlFor="leg-title">Legendary title:</label>
//                     <input value={values.title} onChange={onChangeHandler} type="text" id="title" name="title" placeholder="Enter game title..." />

//                     <label htmlFor="category">Category:</label>
//                     <input value={values.category} onChange={onChangeHandler} type="text" id="category" name="category" placeholder="Enter game category..." />

//                     <label htmlFor="levels">MaxLevel:</label>
//                     <input value={values.maxLevel} onChange={onChangeHandler} type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

//                     <label htmlFor="game-img">Image:</label>
//                     <input value={values.imageUrl} onChange={onChangeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

//                     <label htmlFor="summary">Summary:</label>
//                     <textarea value={values.summary} onChange={onChangeHandler} name="summary" id="summary"></textarea>
//                     <input className="btn submit" type="submit" value="Create Game" />
//                 </div>
//             </form>
//         </section>
//     );
// }