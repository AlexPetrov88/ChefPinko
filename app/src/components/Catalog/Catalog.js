import { CatalogItem } from './CatalogItem/CatalogItem';
// import { useContext } from 'react';

import styles from './Catalog.module.css';
import { Link } from 'react-router-dom';

export const Catalog = ({
    recipes,
}) => {
    return(
            <section className={styles["recipes"]}>

                <form id={styles["search"]} >
                    <div className={styles["searchContainer"]}>
                        <label htmlFor="leg-title">Recipes:</label>
                        <i className="fas fa-search"></i>
                        <input type="search" id="searchRecipe" name="search" placeholder="Search for food recipes" />
                        <Link to={`/createPage`}className="link"><button className="btn">CreateNewRecipe</button></Link>
                    </div>
                </form>
                
                <div className={styles["recipeContainer"]}>
                    
                    {recipes.map(r => <CatalogItem key={r._id} {...r}/>)}

                    {recipes.length === 0 && (<h3 className={styles["nostyles[-articles"]}>No articles yet</h3>)}

                </div>
            </section>

    );
}


// import { CatalogItem } from "./CatalogItem/CatalogItem";
// import { useContext } from 'react'; 
// import { GlobalContext } from '../../contexts/GlobalContext';
// import styles from './Catalog.module.css'


// export const Catalog = () => {
//     const { games } = useContext(GlobalContext);
    
//     return (
//         <section id="catalog-page" >
//             <h1 className={styles.moduleCss}>All Games</h1>
//             {games.map(x =>  <CatalogItem key={x._id} {...x} />)}
           

//             {/* <!-- Display paragraph: If there is no games  --> */}
//             {games.length === 0 && ( <h3 className="no-articles">No articles yet</h3>)}
           
//         </section>
//     );
// }