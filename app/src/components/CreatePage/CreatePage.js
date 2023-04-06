import { useContext, useState } from "react";
import { RecipeContext } from "../../contexts/RecipeContext";
// import { useContext } from "react";
// import { Navigate } from "react-router";
// import { GlobalContext } from "../../contexts/GlobalContext";

export const CreatePage = () => {
    const { onCreateRecipe } = useContext(RecipeContext);
    const [createValues, setCreateValues] = useState({
        recipeName: '',
        chef: '',
        time: '',
        imageUrl: '',
        summary: '',
    });
    // const { onCreateRecipe } = useContext(GlobalContext);
    const onChangeHandler = (e) => {
        setCreateValues(state => ({...state, [e.target.name]: e.target.value}));
    } 

    const onSubmit = (e) => {
        e.preventDefault();

        onCreateRecipe(createValues);
    } 

    return(
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="recipeName">Recipe name:</label>
                    <input value={createValues.recipeName} onChange={onChangeHandler} type="text" id="recipeName" name="recipeName" />

                    <label htmlFor="recipeChef">Chef:</label>
                    <input value={createValues.chef} onChange={onChangeHandler} type="text" id="recipeChef" name="chef" />

                    <label htmlFor="leg-title">Time for cooking:</label>
                    <input value={createValues.time} onChange={onChangeHandler} type="text" id="title" name="time" />

                    <label htmlFor="recipeImg">Image:</label>
                    <input value={createValues.imageUrl} onChange={onChangeHandler} type="text" id="imageUrl" name="imageUrl" />

                    <label htmlFor="summary">Summary:</label>
                    <textarea value={createValues.summary} onChange={onChangeHandler} name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Recipe" />
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