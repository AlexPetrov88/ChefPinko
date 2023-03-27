import { Link } from "react-router-dom";
import styles from './Footer.module.css';

export const Footer = () => {

    return(
        <footer>
        <div className={styles["flexCont"]}>
            <section className={styles["features"]}>
                <h3 className={styles["titleFooter"]}>ChefPinko</h3>
            </section>
            
            <section className={styles["features"]}>
                <ul className={styles["list"]} role="list">
                    <li className={styles["item"]}><Link className="link" to="/">Home</Link></li>
                    <li className={styles["item"]}><Link className="link" to="/about us">About us</Link></li>
                </ul>
            </section>

            <section className={styles["features"]}>
                <ul className={styles["list"]} role="list">
                    <li className={styles["item"]}><Link className="link" to="/catalog">Recipes</Link></li>
                    <li className={styles["item"]}><Link className="link" to="/tools">Guides & Tools</Link></li>
                    <li className={styles["item"]}><Link className="link" to="/classes">Classes</Link></li>
                </ul>
            </section>
            <section className={styles["features"]}>
                <p>Follow us on</p>
                <ul className={styles["icons"]} role="list">
                    <li className={styles["icon"]}><i className="fab fa-instagram i"></i></li>
                    <li className={styles["icon"]}><i className="fab fa-facebook-f f"></i></li>
                    <li className={styles["icon"]}><i className="fab fa-twitter t"></i></li>
                </ul>
            </section>
        </div>
    </footer>
    )
}