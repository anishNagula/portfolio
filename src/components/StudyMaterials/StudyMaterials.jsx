import { useState } from "react";
import styles from "./studyMaterials.module.css";


const files = import.meta.glob("/public/materials/**/*.{pdf,pptx,docx}");

export default function StudyMaterials() {
const [password, setPassword] = useState("");
const [authenticated, setAuthenticated] = useState(false);

const SECRET_PASS = import.meta.env.VITE_SECRET_PASSWORD;

const handleLogin = () => {
    if (password === SECRET_PASS) {
        setAuthenticated(true);
    } else {
        alert("Wrong password!");
    }
};

if (!authenticated) {
    return (
        <div className={styles.container}>
        <h2>Enter-Password</h2>
        <div className={styles.passwordBox}>
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
        </div>
        </div>
    );
}
  

const materials = {};

Object.keys(files).forEach((path) => {
console.log("Processing path:", path);

const parts = path.split("/");
const sem = parts[3];
const fileName = parts[parts.length - 1];

console.log("Extracted fileName:", fileName);

if (!materials[sem]) materials[sem] = [];

let cleanName = fileName.replace(/\.\w+$/, "");

cleanName = cleanName.replace(/(OS)(Unit\d+)/i, "$1 $2");

materials[sem].push({
        name: cleanName,
        path: path.replace("/public", ""),
        extension: fileName.split(".").pop(),
    });
});

console.log("Final materials object:", materials);

return (
    <div className={styles.studyMaterials}>
        <h2>📚 Study Materials</h2>
        {Object.keys(materials).map((semester) => (
        <div key={semester}>
            <div className={styles.semester}>{semester.replace("Sem-", "Semester ")}</div>
            <ul>
            {materials[semester].map((file, index) => (
                <li key={index}>
                <a href={file.path} target="_blank">
                    {file.name} ({file.extension.toUpperCase()})
                </a>
                </li>
            ))}
            </ul>
        </div>
        ))}
    </div>
    );
}
