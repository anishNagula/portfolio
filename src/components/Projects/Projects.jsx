import Layout from '../Layout/Layout';
import styles from './projects.module.css';
import calenderIcon from '../../assets/calendar.svg'

function ProjectCard({ title, description, started, lastWorkedon, link }) {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={styles.card_bottom}>
                <div className={styles.card_date}>
                    <img src={calenderIcon} alt="calendar icon" />
                    <p>{started} - {lastWorkedon}</p>
                </div>
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        Visit <sup>&#8599;</sup>
                    </a>
                )}
            </div>
        </div>
    );
}

export default function Projects() {
    const completedProjects = [
        { title: "LeetCode-Backend", description: "A simple backend system built in Go, designed to emulate core features of platforms like LeetCode. This project includes user authentication, running code in python, and managing coding problems with test cases.", started: "Oct 2024", lastWorkedon: "Oct 2024", link: "https://github.com/anishNagula/Leetcode-Backend" },
        { title: "Simple-User-and-Product-Management-System", description: "This is a basic C program that helps manage user and product information. The program uses hash tables for organizing products and binary trees to keep track of what user purchases. Every time a user purchases a product he will be automatically recommended related products using hashtables.", started: "Sep 2024", lastWorkedon: "Sep 2024", link: "https://github.com/anishNagula/Simple-User-and-Product-Management-System" },
        { title: "Bash-PassMgr", description: "A minimal password manager that securely stores your credentials using AES-256 encryption with OpenSSL. No cloud storage, no third-party dependencies—just a lightweight, local password manager.", started: "Apr 20205", lastWorkedon: "Apr 2024", link: "https://github.com/anishNagula/Bash-PassMgr" },
        { title: "Amazon-Clone", description: "Built as a projects when learning basic front-end development. Used languages such as HTML/CSS/JavaScript", started: "Mar 2024", lastWorkedon: "Apr 2024", link: "https://github.com/anishNagula/Amazon-Clone" },
    ];

    const workingOnProjects = [
        { title: "Smart Door Security System", description: "Uses sensors to detect intrusions", started: "Mar 2025", lastWorkedon: "Mar 2025", link: "" },
        { title: "QuickBang", description: "A simple and lightweight search tool with custom bang shortcuts (!bang) for quick redirections to various search engines and websites. Supports dropdown suggestions, arrow key navigation, and auto-search on selection.", started: "Jan 2025", lastWorkedon: "Mar 2025", link: "https://quickbang.netlify.app" },
        { title: "Whisper", description: "A private, real-time chat app with disappearing messages and secure friend-to-friend conversations.", started: "Mar 2025", lastWorkedon: "Mar 2025", link: "https://anishnagula.me/projects" },
        { title: "DevLink", description: "A MERN stack application where developers can collaborate, share projects, and engage in discussions. Users can showcase their work, connect with others, and contribute to open-source initiatives. ", started: "Nov 2024", lastWorkedon: "Mar 2025", link: "" },
    ];

    const futureProjects = [
        { title: "Custom Linux Kernel", description: "A minimal OS running on QEMU", started: "yet", lastWorkedon: "to start", link: "" },
        { title: "FormulaOne", description: "An application that allows users to track races, drivers, and team standings in real time. Users can view race results, explore driver stats, and engage with the latest F1 updates.", started: "yet", lastWorkedon: "to start", link: "" },
        { title: "Tetris in Assembly", description: "A low-level implementation of the classic Tetris game using assembly language. It focuses on optimizing performance, managing graphics, and handling input at the hardware level.", started: "yet", lastWorkedon: "to start", link: "" },
    ];

    return (
        <div className={styles.main}>
            <Layout />
            <div className={styles.columns}>
                <div className={styles.column}>
                    <h2>Complete</h2>
                    {completedProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
                <div className={styles.column}>
                    <h2>Currently Working On</h2>
                    {workingOnProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
                <div className={styles.column}>
                    <h2>To Do in Future</h2>
                    {futureProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
