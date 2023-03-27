import { useState, useEffect, useReducer } from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from 'react'; 
import { GlobalContext } from '../../contexts/GlobalContext';


import * as appService from "../../services/appService";

import { AddComment } from './AddComment/AddComment';
import { reducer } from '../../reducer/reducer';

export const Details = ({
    onDeleteRecipe,
}) => {
    const { detailsId } = useParams();
    const { userId, isAuthenticated, userEmail } = useContext(GlobalContext);
    // const [ recipeData, setRecipeData ] = useState({});
    const [recipe, dispatch] = useReducer(reducer, {});


    // useEffect(() => {
    //     appService.getRecipeById(detailsId)
    //     .then(res => {
    //         setRecipeData(res);
    //     })
    // }, [detailsId])

    useEffect(() => {
        Promise.all([
            appService.getRecipeById(detailsId),
            appService.getCommentsById(detailsId),
        ]).then(([recipeData, comments]) => {
            // console.log(recipeData);
            // console.log(comments);
            const recipeState = {
                ...recipeData,
                comments,
            };
            // console.log(recipeState);
            
            dispatch({type: 'RECIPE_FETCH', payload: recipeState})
        });
    }, [detailsId]);

    const onCommentSubmit = async (values) => {
        const response = await appService.postCreateCommets(detailsId, values.comment);
        console.log(response);
        dispatch({
            type: 'COMMENT_ADD',
            payload: response,
            userEmail,
        });
    };
   
    const isOwner = recipe._ownerId === userId;
    console.log(recipe);
    return(
        <section className="details">

            <div className="detailsContainer">
                <div className="detailImgContainer">
                    <img src={recipe.imageUrl} alt="" className="daetailImg" />
                </div>
                <div className="detailContent">
                    <h2 className="recipeTitle">Recipe Details</h2>
                    <h3 className="recipeName">{recipe.recipeName}</h3>
                    <span className="recipeChef">{recipe.chef}</span>
                    <p className="recipeTimeForCooking">{recipe.time}</p>
                    <p className="recipeSummary">{recipe.summary}</p>
                    {isOwner && (
                        <>
                        <button className="btn" onClick={() => onDeleteRecipe(detailsId)}>Delete</button>
                        <Link to={`/catalog/${detailsId}/editPage`} className="link" ><button className="btn">Edit</button></Link>
                        </>
                    )}
                    {isAuthenticated && (
                        <button className="btn">Rating</button>
                    )}
                </div>
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul role="list">
                        {recipe.comments && recipe.comments.map(x => (
                    <>
                            <li key={x._id} className="comment" >
                                <p>{x.author.email}: {x.comment}</p>
                            </li>
                    </>
                        ))}
                    </ul>

                    {!recipe.comments?.length && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>
                {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
            </div>
            

        </section>
    );
}





// export const Details = () => {
//     const { onDeleteGame, onEditHandler } = useContext(GlobalContext);  
//     const [username, setUsername] =useState('');
//     const [comment, setComment] = useState('');
//     const [comments, setComments] = useState([]);
//     const {detailsId} = useParams();
//     const [game, setGame] = useState({});
    
//     useEffect(() => {
//         getRecipeById(detailsId)
//         .then(res => {
//             setGame(res);
//             return getCommentsById(detailsId)
//         })
//         .then(result => {
//             setComments(result)
//         })
//     }, [detailsId]);

//   const onCommentSubmit =async (e) => {
//         e.preventDefault();

//       await postCreateRecipe({
//             detailsId,
//             username,
//             comment,
//         })
//         setUsername('');
//         setComment('');
//     }

//   const onUsernameChange = (e) => {
//       setUsername(e.target.value);
//   }

//   const onCommentChange = (e) => {
//       setComment(e.target.value)
//   }
//   console.log(game);
//     return(
//         <section id="game-details">
//             <h1>Game Details</h1>
//             <div className="info-section">

//                 <div className="game-header">
//                     <img className="game-img" src={game.imageUrl} />
//                     <h1>{game.title}</h1>
//                     <span className="levels">MaxLevel: {game.maxLevel}</span>
//                     <p className="type">{game.category}</p>
//                 </div>

//                 <p className="text">
//                     {game.summary}
//                 </p>




//                 {/* <!-- Bonus ( for Guests and Users ) --> */}
//                 <div className="details-comments">
//                     <h2>Comments:</h2>
//                     <ul>
//                         {/* <!-- list all comments for current game (If any) --> */}
//                         {comments.map(x => (
//                             <li key={x._id} className="comment">
//                             <p>{x.username}: {x.comment}</p>
//                         </li>
//                         ))}
//                     </ul>
                    
//                     {/* <!-- Display paragraph: If there are no games in the database --> */}
//                     {comments.length === 0 && (
//                          <p className="no-comment">No comments.</p>
//                     )}
//                 </div>




//                 {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
//                 <div className="buttons">
//                     <Link className="button" onClick={() => onEditHandler(detailsId)}>Edit</Link>
//                     <Link to="/catalog"  className="button" onClick={() => onDeleteGame(detailsId)}>Delete</Link>
//                 </div>
//             </div>

//             {/* <!-- Bonus --> */}
//             {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
//             <article className="create-comment">
//                 <label>Add new comment:</label>
//                 <form className="form" onSubmit={onCommentSubmit}>
//                     <input type="text" name="username" placeholder="Pesho" value={username} onChange={onUsernameChange}/>
//                     <textarea name="comment" placeholder="Comment......" value={comment} onChange={onCommentChange}></textarea>
//                     <input className="btn submit" type="submit" value="Add Comment" />
//                 </form>
//             </article>

//         </section>
//     );
// }