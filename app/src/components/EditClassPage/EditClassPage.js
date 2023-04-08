import { useContext, useState } from "react"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClassContext } from "../../contexts/ClassContext";
import * as appService from '../../services/appService';
// import { GlobalContext } from "../../contexts/GlobalContext";
// import { useContext } from "react";
// onGameEditSubmit,
// }) => {
//     const { gameId } = useParams();
//     const gameService = useService(gameServiceFactory);
//     const { values, changeHandler, onSubmit, changeValues } = useForm({
//         _id: '',
//         title: '',
//         category: '',
//         maxLevel: '',
//         imageUrl: '',
//         summary: '',
//     }, onGameEditSubmit);

//     useEffect(() => {
//         gameService.getOne(gameId)
//             .then(result => {
//                 changeValues(result);
//             });
//     }, [gameId]);

export const EditClassPage = () => {
    const { onEditClass } = useContext(ClassContext);
    const { detailsId } = useParams();
    
    const [currentValue, setCurrentVAlue] = useState({
        _id: '',
        title: '',
        video: '',
        imageUrl: '',
        summary: '',
    })

    useEffect(() => {
        appService.getClassById(detailsId)
            .then(result => {
                setCurrentVAlue(result);
            });
    }, [detailsId]);

    const onChangeHandler = (e) => {
        setCurrentVAlue(state => ({...state, [e.target.name]: e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        onEditClass(currentValue._id, currentValue);
    }


    return(
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Edit Class</h1>
                    <label htmlFor="title">Class title:</label>
                    <input value={currentValue.title} onChange={onChangeHandler} type="text" id="recipeName" name="title" />

                    <label htmlFor="video">VideoURL:</label>
                    <input value={currentValue.video} onChange={onChangeHandler} type="text" id="recipeChef" name="video" />

                    <label htmlFor="imageUrl">ImageURL:</label>
                    <input value={currentValue.imageUrl} onChange={onChangeHandler} type="text" id="imageUrl" name="imageUrl" />

                    <label htmlFor="summary">Summary:</label>
                    <textarea value={currentValue.summary} onChange={onChangeHandler} name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Edit Class" />

                </div>
            </form>
        </section>
    );
}






// import { useState } from "react"
// import { GlobalContext } from "../../contexts/GlobalContext";
// import { useContext } from "react";

// export const EditPage = () => {
//     const { onEditGameSubmit, pramsEditUserData } = useContext(GlobalContext);
//     const [values, setValues] = useState({
//         title: pramsEditUserData.title,
//         category: pramsEditUserData.category,
//         maxLevel: pramsEditUserData.maxLevel,
//         imageUrl: pramsEditUserData.imageUrl,
//         summary: pramsEditUserData.summary,
//     })

//     const onChangeHandler = (e) => {
//         setValues(state => ({...state, [e.target.name]: e.target.value}))
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();

//         onEditGameSubmit(pramsEditUserData._id, values);
//     }
//     return(
//         <section id="edit-page" className="auth">
//             <form id="edit" onSubmit={onSubmit}>
//                 <div className="container">

//                     <h1>Edit Game</h1>
//                     <label htmlFor="leg-title">Legendary title:</label>
//                     <input value={values.title} onChange={onChangeHandler} type="text" id="title" name="title" />

//                     <label htmlFor="category">Category:</label>
//                     <input value={values.category} onChange={onChangeHandler} type="text" id="category" name="category" />

//                     <label htmlFor="levels">MaxLevel:</label>
//                     <input value={values.maxLevel} onChange={onChangeHandler} type="number" id="maxLevel" name="maxLevel" min="1" />

//                     <label htmlFor="game-img">Image:</label>
//                     <input value={values.imageUrl} onChange={onChangeHandler} type="text" id="imageUrl" name="imageUrl" />

//                     <label htmlFor="summary">Summary:</label>
//                     <textarea value={values.summary} onChange={onChangeHandler} name="summary" id="summary"></textarea>
//                     <input className="btn submit" type="submit" value="Edit Game" />

//                 </div>
//             </form>
//         </section>
//     );
// }



