import Navbar from "../Navbar/Navbar";
import styles from './layout.module.css';

export default function Layout() {
    return (
        <div className={styles.main}>
            <h1>Anish Nagula</h1>
            <hr />
            <Navbar />
            <hr />
        </div>
    );
}
