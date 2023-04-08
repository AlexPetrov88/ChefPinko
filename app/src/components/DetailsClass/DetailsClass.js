import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from 'react'; 
import { GlobalContext } from '../../contexts/GlobalContext';


import * as appService from "../../services/appService";

// import { AddComment } from './AddComment/AddComment';
// import { reducer } from '../../reducer/reducer';
import { ClassContext } from "../../contexts/ClassContext";

import styles from "./DetailsClass.module.css";
import ReactPlayer from 'react-player';
import React, { useRef, useState } from 'react';

export const DetailsClass = () => {
    const { onDeleteClass } = useContext(ClassContext);
    const { detailsId } = useParams();
    const { userId } = useContext(GlobalContext);
    // const [ recipeData, setRecipeData ] = useState({});
    const [masterClass, setMasterClass] = useState({});
    const [currlikes, setLikes] = useState({});

    useEffect(() => {
            appService.getClassById(detailsId)
       .then(res => {
        setMasterClass(res);
            })
        }, [detailsId])

    useEffect(() => {
        appService.getLikesById(detailsId)
        .then(res => {
            setLikes(res);
             })
         }, [detailsId])
   
//     useEffect(() => {
//         Promise.all([
//             appService.getClassById(detailsId),
//             appService.getLikesById(detailsId),
//         ]).then(([classesData, likes]) => {
//             console.log(classesData);
//             console.log(likes);
//             const recipeState = {
//                 classesData,
//                 likes,
//             };
//         // console.log(recipeState);
            
//         setMasterClass(recipeState.classesData);
//         setLikes(recipeState.likes);
//     });
// }, [detailsId]);

   console.log(masterClass);
    const isOwner = masterClass._ownerId === userId;

    const VIDEO_PATH = masterClass.video;

    const playerRef = useRef(null);

        const [expanded, setExpanded] = useState(false);

        const toggleExpanded = () => {
        setExpanded(!expanded);
        }
    console.log(masterClass);
    return(
        <>
        <h1 className={styles["title"]}>{masterClass.title}</h1>
        <div className={styles["topContainer"]}>

            <div>
                <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
            </div>
            
            <div className={styles["textContainer"]}>
            <div className={styles[`${expanded ? "read-more" : "read-less"}`]}>
                <p className={styles["paragraph"]}>{masterClass.summary}</p>
            </div>
                <button onClick={toggleExpanded} className="btn">{expanded ? 'Read Less' : 'Read More'}</button>
            </div>
       </div>
       {/* {!isOwner && <span>Like <i className="far fa-thumbs-up"></i></span>} */}
       {isOwner && (
                        <div className={styles["btnContainer"]}>
                        <button className="btn" onClick={() => onDeleteClass(detailsId)}>Delete</button>
                        <Link to={`/classes/${detailsId}/editClassPage`} className="link" ><button className="btn">Edit</button></Link>
                        </div>
                    )}
    </>

    );
}

// const VIDEO_PATH = 'https://www.youtube.com/watch?v=LuG7zrU-Uw0';
// export function Tools() {
//         const playerRef = useRef(null);

//         const [expanded, setExpanded] = useState(false);

//         const toggleExpanded = () => {
//         setExpanded(!expanded);
// }
//    return (
//     <>
//         <h1 className={styles["title"]}>Knife Sharpening</h1>
//         <div className={styles["topContainer"]}>

//             <div>
//                 <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
//             </div>
            
//             <div className={styles["textContainer"]}>
//             <div className={styles[`${expanded ? "read-more" : "read-less"}`]}>
//                 <p className={styles["paragraph"]}>Remember your first truly sharp knife? That bad boy cut clean and clear through tomatoes and onions and salmon and steak, shaming its dull drawermates. With a good knife, once-mundane tasks become suddenly pleasurable and satisfying. You can chop and slice for hours, comfortable and cramp-free like the kitchen ninja you were born to be.

// But if you want that knife to continue working at peak performance, you have to show it some love. That means cleaning it properly, storing it properly, honing it regularly, and sharpening it to maintain the blade. In this class, you’ll find all the information you need to learn to hone and sharpen like a pro. Which pro? How about blade sage Daniel O’Malley, owner of the epic knife emporium the Epicurean Edge in Kirkland, Washington, and a foremost expert on selecting and maintaining the world’s best chopping-and-slicing tools. Through video demos and clever tips and tricks, O’Malley walks us through the theory and technique of sharpening knives using Japanese waterstones—the badass little blocks that master bladesmiths have used for hundreds of years.

// Yes, you can always outsource your sharpening, but where’s the fun in that? We wager that once you’ve tried blade shaping on your own, you’ll fall in love with this ancient, relaxing ritual, as well the sense of satisfaction that comes with caring for your own steel.

// Knives are, without a doubt, our most important tools in the kitchen. If you want them to last a lifetime, you need to treat them right. We’re here to show you how..</p>
//             </div>
//                 <button onClick={toggleExpanded} className="btn">{expanded ? 'Read Less' : 'Read More'}</button>
//             </div>
//        </div>
//     </>
//    )
// };




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