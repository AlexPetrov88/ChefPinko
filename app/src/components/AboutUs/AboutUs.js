import styles from './AboutUs.module.css';
import { useContext } from 'react';
import { RecipeContext } from '../../contexts/RecipeContext';

export const AboutUs = () => {
    const { recipes } = useContext(RecipeContext);
    return(
<>
    <div className={styles["title-disc"]}>
        <h2 className={styles["title-aboutUS"]}>Who We Are</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    
    <section className={styles["aboutUsContainer"]}>

        <div className={styles["recipeContainer"]}>
            
            <div className={styles["card"]}>
            <div className={styles["card__imgContainer"]}>
                <img src="/images/pinkoBlue.png" alt="pinkoBlue" className={styles["card__imgContainer__img"]} />
            </div>
            <div className={styles["card__content"]}>
                <h2 className={styles["card__content__title"]}>{recipes.recipeName}</h2>
                <span className={styles["Blue"]}>Chef Blue</span>
                
            </div>
            </div>
        </div>

        <div className={styles["recipeContainer"]}>
            
            <div className={styles["card"]}>
            <div className={styles["card__imgContainer"]}>
                <img src={"/images/pinkoPink.png"} alt="pinkoPink" className={styles["card__imgContainer__img"]} />
            </div>
            <div className={styles["card__content"]}>
                <h2 className={styles["card__content__title"]}>{recipes.recipeName}</h2>
                <span className={styles["Pink"]}>Head Chef Pink</span>
                
            </div>
            </div>
        </div>

        <div className={styles["recipeContainer"]}>
            
            <div className={styles["card"]}>
            <div className={styles["card__imgContainer"]}>
                <img src="/images/pinkoGreen.png" alt="pinkoGreen" className={styles["card__imgContainer__img"]} />
            </div>
            <div className={styles["card__content"]}>
                <h2 className={styles["card__content__title"]}>{recipes.recipeName}</h2>
                <span className={styles["Green"]}>Head Sommelier Green</span>
                
            </div>
            </div>
        </div>
    </section>
</>
            

    );
}