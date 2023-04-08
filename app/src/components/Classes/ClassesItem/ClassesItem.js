import styles from '../Classes.module.css';

import { Link } from "react-router-dom";

    export const ClassesItem = ({
            _id,
            imageUrl,
            title,
    }) => {

    return(
            <div className={styles["card"]}>
                <div className={styles["card__imgContainer"]}>
                    <img src={imageUrl} alt="" className={styles["card__imgContainer__img"]} />
                </div>
                <div className={styles["card__content"]}>
                    <h2 className={styles["card__content__title"]}>{title}</h2>
                    <Link to={`/classes/${_id}`}className="link"><button className="btn">Details</button></Link>
                    {/* <span>Likes: 10</span> */}
                    
                </div>
            </div>
    );
}