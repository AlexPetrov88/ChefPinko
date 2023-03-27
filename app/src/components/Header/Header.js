import { Link } from "react-router-dom";
import styles from './Header.module.css'
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";

export const Header = () => {
    const { isAuthenticated, userEmail } = useContext(GlobalContext);

    return(
    <header>
        <nav className={styles["navigation"]}>
            <div className={styles["logoContainer"]}>
                <h1 className={styles["logoTitle"]}>ChefPinko</h1>
                <img className={styles["logo"]} src="/images/logo.png" alt="logo.png" width="50" hidden="50"/>
            </div>
            <ul className={styles["listNav"]} role="list">
                <li className={styles["item"]}><Link className="link" to="/">Home</Link></li>
                <li className={styles["item"]}><Link className="link" to="/aboutUs">About us</Link></li>
                <li className={styles["item"]}><Link className="link" to="/catalog">Recipes</Link></li>
                <li className={styles["item"]}><Link className="link" to="/tools">Guides and Tools</Link></li>
                <li className={styles["item"]}><Link className="link" to="/classes">Classes</Link></li>
                {isAuthenticated && (
                    <div>
                        <span>{userEmail}</span>
                        <Link className="link" to={'/logout'}><button className="btn">Logout</button></Link>
                    </div>
                 )}
                {!isAuthenticated && (
                    <div>
                        <Link className="link" to={'/login'}><button className="btn">Login</button></Link>
                        <Link className="link" to={'/register'}><button className="btn">Register</button></Link>
                    </div>
                )}
                
            </ul>
        </nav>
    </header>
    );
}