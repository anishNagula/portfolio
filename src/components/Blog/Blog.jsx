import Layout from '../Layout/Layout'
import styles from './blog.module.css';

export default function Blog() {
    return (
        <div className={styles.main}>
            <Layout />
            <div className={styles.innermain}>
                <h1>Coming Soon...</h1>
            </div>
        </div>
    );
}
