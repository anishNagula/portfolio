import Layout from '../Layout/Layout';
import styles from './resume.module.css';

export default function Resume() {
    return (
        <div className={styles.main}>
            <Layout />
            <div className={styles.innermain}>
                <iframe src="./Nagula_Anish_Resume.pdf" className={styles.pdfViewer} title="Resume" />
            </div>
        </div>
    );
}