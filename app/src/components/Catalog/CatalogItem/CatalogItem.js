// import { Link } from "react-router-dom";
// import { GlobalContext } from "../../../contexts/GlobalContext";
// import { useContext } from "react";

import styles from '../Catalog.module.css';

import { Link } from "react-router-dom";

    export const CatalogItem = ({
            _id,
            imageUrl,
            recipeName,
    }) => {

    return(
            <div className={styles["card"]}>
                <div className={styles["card__imgContainer"]}>
                    <img src={imageUrl} alt="" className={styles["card__imgContainer__img"]} />
                </div>
                <div className={styles["card__content"]}>
                    <h2 className={styles["card__content__title"]}>{recipeName}</h2>
                    <Link to={`/catalog/${_id}`}className="link"><button className="btn">Details</button></Link>
                    
                </div>
            </div>
    );
}

// import { Link } from "react-router-dom";

// export const CatalogItem = ({
//     _id,
//     title,
//     imageUrl,
//     category,
// }) => {
//     return(
//         <div className="allGames">
//                 <div className="allGames-info">
//                     <img src={imageUrl} />
//                     <h6>{category}</h6>
//                     <h2>{title}</h2>
//                     <Link to={`/catalog/${_id}`}className="details-button">Details</Link>
//                 </div>
//          </div>
//     );
// }