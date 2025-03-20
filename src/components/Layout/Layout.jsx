import Navbar from "../Navbar/Navbar";
import styles from './layout.module.css';
import logo from "../../assets/anish_pfp.jpg"

export default function Layout() {
    return (
        <div className={styles.main}>
            <div className={styles.main_inner}>
                <img src={logo}></img>
                <h1>Anish Nagula</h1>
            </div>
            <hr />
            <Navbar />
            <hr />
        </div>
    );
}
