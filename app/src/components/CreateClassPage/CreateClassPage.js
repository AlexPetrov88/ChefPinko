import { useContext, useState } from "react";
import { ClassContext } from "../../contexts/ClassContext";
// import { useContext } from "react";
// import { Navigate } from "react-router";
// import { GlobalContext } from "../../contexts/GlobalContext";

export const CreateClassPage = () => {
    const { onCreateClass } = useContext(ClassContext);
    const [currentValue, setCurrentVAlue] = useState({
        _id: '',
        title: '',
        video: '',
        imageUrl: '',
        summary: '',
    })
    const[ formErrors, setFormErrors ] = useState({
		_id: '',
        title: '',
        video: '',
        imageUrl: '',
        summary: '',
	})

    const onFormValidateBlur = (e) => {

		const value = e.target.value;
		const name = e.target.name;
		const errors = {};

        const regexYouTubeVideo = /^https:\/\/.+/;
		if (name === 'video' && (!regexYouTubeVideo.test(value))) {
			setFormErrors(errors.video = 'Video is not valid! Video must start with "http://"!');
		} else {
            setFormErrors(errors.video = '')
        }

        const regexImgUrl = /^\/images\/+/; 
		if (name === 'imageUrl' && (!regexImgUrl.test(value))) {
			setFormErrors(errors.imageUrl = 'ImageUrl is not valid! ImageUrl must start with "http://"!');
		} else {
            setFormErrors(errors.imageUrl = '')
        }
        

        console.log(errors);
        setFormErrors(errors);
	}

    const onChangeHandler = (e) => {
        setCurrentVAlue(state => ({...state, [e.target.name]: e.target.value}));
    } 

    const onSubmit = (e) => {
        e.preventDefault();

        onCreateClass(currentValue);
    } 

    return(
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Create New Class</h1>
                    <label htmlFor="title">Class title:</label>
                    <input value={currentValue.title} onChange={onChangeHandler} type="text" id="recipeName" name="title" />

                    <label htmlFor="video">YouTubeVideoURL:</label>
                    <input value={currentValue.video} onChange={onChangeHandler} type="text" id="recipeChef" name="video" onBlur={onFormValidateBlur} />
                    {formErrors.video &&
                        <p className="form-error">
                        {formErrors.video}
                        </p>
                    }

                    <label htmlFor="imageUrl">ImageURL:</label>
                    <input value={currentValue.imageUrl} onChange={onChangeHandler} type="text" id="imageUrl" name="imageUrl" onBlur={onFormValidateBlur} />
                    {formErrors.imageUrl &&
                        <p className="form-error">
                        {formErrors.imageUrl}
                        </p>
                    }

                    <label htmlFor="summary">Summary:</label>
                    <textarea value={currentValue.summary} onChange={onChangeHandler} name="summary" id="summary"></textarea>
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