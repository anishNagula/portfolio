import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>
                    <a href="https://an1.anishnagula.me" target="_blank" rel="noopener noreferrer">
                        AN1
                    </a>
                </li>
            </ul>
        </nav>
    );
}
