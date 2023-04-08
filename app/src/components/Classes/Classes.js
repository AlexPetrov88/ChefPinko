import { ClassesItem } from './ClassesItem/ClassesItem';
// import { useContext } from 'react';

import styles from './Classes.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ClassContext } from '../../contexts/ClassContext';

export const Classes = () => {
    const { classes } = useContext(ClassContext);

    return(
        <section className={styles["recipes"]}>

            <form id={styles["search"]} >
                <div className={styles["searchContainer"]}>
                    <label htmlFor="leg-title">Classes</label>
                    {/* <i className="fas fa-search"></i>
                    <input type="search" id="searchRecipe" name="search" placeholder="Search classes" /> */}
                    <Link to={`/createClassPage`}className="link"><button className="btn">CreateNewClasses</button></Link>
                </div>
            </form>
            
            <div className={styles["recipeContainer"]}>
                
                {classes.map(c => <ClassesItem key={c._id} {...c}/>)}

                {classes.length === 0 && (<h3 className={styles["nostyles[-articles"]}>No articles yet</h3>)}

            </div>
        </section>
    );
}