import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const commands = {
  help: "Commands: cd about, cd projects, cd blog, contact, clear, ls, sudo rm -rf /, neofetch",
  portfolio: "Opening Portfolio... <a href='/portfolio'>Click here</a>",
  projects: "Opening Projects... <a href='/projects'>Click here</a>",
  blog: "Opening Blog... <a href='/blog'>Click here</a>",
  about: "Hi, I'm Anish. I'm a BTech student who builds cool stuff.",
  contact: "Email: anish@example.com | Twitter: @anish",
  clear: () => [],
  "sudo su": "Nice try, but you’re not root here. 😏",
  "sudo rm -rf /": "System wipe initiated... Just kidding! 😂",
  neofetch: "OS: AnishOS\nKernel: Custom\nShell: Anish Terminal\nCPU: 100% Passion",
  ls: "home  projects  blog.txt  about.txt",
  cd: (arg) => (arg === "home" || arg === "projects" ? `Changing directory to ${arg}` : `cd: no such directory: ${arg}`),
};

const bootLines = [
  "Booting anishnagula.com...",
  "Loading external modules...",
  "Establishing secure connection...",
  "Ready."
];

const asciiArt = [
  "░█████╗░███╗░░██╗██╗░██████╗██╗░░██╗",
  "██╔══██╗████╗░██║██║██╔════╝██║░░██║",
  "███████║██╔██╗██║██║╚█████╗░███████║",
  "██╔══██║██║╚████║██║░╚═══██╗██╔══██║",
  "██║░░██║██║░╚███║██║██████╔╝██║░░██║",
  "╚═╝░░╚═╝╚═╝░░╚══╝╚═╝╚═════╝░╚═╝░░╚═╝"
];

const description1 = "Hi👋, I'm Anish Nagula, Full-Stack Web Developer; Coding Enthusiast.";
const description2 = "A college student who loves breaking and building things! I tinker with web projects, dive into operating systems, and geek out over computer architecture. If it runs code, I probably want to mess with it."

const getFakeCPUUsage = () => (Math.random() * 50 + 30).toFixed(1);
const getFakeMemoryUsage = () => (Math.random() * 40 + 50).toFixed(1);


function RightSidebar() {
  const [cpuUsage, setCpuUsage] = useState(getFakeCPUUsage());
  const [memoryUsage, setMemoryUsage] = useState(getFakeMemoryUsage());
  const [uptime, setUptime] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const updateStats = () => {
      setCpuUsage(getFakeCPUUsage());
      setMemoryUsage(getFakeMemoryUsage());
    };
  
    const statsInterval = setInterval(updateStats, 5000);
    const uptimeInterval = setInterval(() => setUptime((prev) => prev + 1), 1000);
    const timeInterval = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
  
    return () => {
      clearInterval(statsInterval);
      clearInterval(uptimeInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const data = [
    { name: "CPU", usage: cpuUsage },
    { name: "Memory", usage: memoryUsage },
  ];

  return (
    <div className="rightSidebar w-1/4 border-green-500 border-2 p-4">
      <h2 className="text-green-300">System Info</h2>
      <p className="right-p"><strong>Time:</strong> {currentTime}</p>
      <p className="right-p"><strong>Uptime:</strong> {Math.floor(uptime / 60)}m {uptime % 60}s</p>
      <p className="right-p"><strong>User:</strong> anish</p>

      <h2 className="text-green-300 mt-4">Performance</h2>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 100]} />
          <Bar dataKey="usage" fill="#fab387" barSize={30} />
        </BarChart>
      </ResponsiveContainer>

      <p className="right-p"><strong>CPU:</strong> {cpuUsage}%</p>
      <p className="right-p"><strong>Memory:</strong> {memoryUsage}%</p>

      <h2 className="text-green-300 mt-4">Top Processes</h2>
      <ul className="list-none">
        <li>&#10095; node  —  {Math.floor(cpuUsage / 2)}% CPU</li>
        <li>&#10095; chrome —  {Math.floor(memoryUsage / 3)}% MEM</li>
        <li>&#10095; bash  —  0.1% CPU</li>
      </ul>

      <p className="right-p">RTFM. Always. 📖</p>
    </div>
  );
}


export default function Terminal() {
  const [bootOutput, setBootOutput] = useState([]);
  const [userOutput, setUserOutput] = useState([]);
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);
  const [showAscii, setShowAscii] = useState(false);
  const [bootComplete, setBootComplete] = useState(false);
  const [showBottomContainer, setShowBottomContainer] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (index < bootLines.length) {
      const timer = setTimeout(() => {
        setBootOutput(prev => [...prev, bootLines[index]]);
        setIndex(prev => prev + 1);
      }, 140);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setShowAscii(true);
        setBootComplete(true);
        setUserOutput(["> help", commands.help]);
        setShowSidebar(true);
        setShowBottomContainer(true);
      }, 1000);
    }
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      let cmd = input.trim().toLowerCase();
      setHistory([...history, cmd]);
      setHistoryIndex(-1);
      setInput("");
  
      setUserOutput(prev => {
        let newOutput = [...prev, `> ${cmd}`];
  
        if (commands[cmd]) {
          if (typeof commands[cmd] === "function") {
            if (cmd === "clear") return [`> clear`, commands.help]; // Clears output
            newOutput.push(commands[cmd]());
          } else {
            newOutput.push(commands[cmd]);
          }
        } else if (cmd.startsWith("cd ")) {
          const arg = cmd.split(" ")[1];
          if (["projects", "portfolio", "blog", "about"].includes(arg)) {
            navigate(`/${arg}`);
          } else {
            newOutput.push(`cd: no such directory: ${arg}`);
          }
        } else {
          newOutput.push("Command not found. Type 'help' for a list of commands.");
        }
  
        return newOutput;
      });
    } else if (e.key === "Tab") {
      e.preventDefault();
      const possibleCommands = Object.keys(commands).filter(c => c.startsWith(input));
      if (possibleCommands.length === 1) {
        setInput(possibleCommands[0]);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0 && historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };
  

  return (
    <div className="flex h-screen bg-black text-green-400 font-mono p-4">
      <div className="main-container w-3/4 border-green-500 border-2 flex flex-col">
        <div className="leftSidebar">
          <div className="topContainer flex-1 p-4 overflow-hidden">
            {bootOutput.map((line, idx) => (
              <div key={idx}><span className="cmd-path-text">anish@AnishLp [{time}]$ </span>{line}</div>
            ))}
            {showAscii && (
              <pre className="name-logo text-blue-500 mt-4 glitch-effect">
                {asciiArt.join("\n")}
              </pre>
            )}
            {showAscii && (
              <>
                <p className="mt-4 text-green-300">{description1}</p>
                <p className="mt-4 text-green-300">{description2}</p>
              </>
            )}
          </div>

          {showBottomContainer && (
            <div className="bottomContainer p-4 overflow-y-auto border-t border-green-500">
              {userOutput.map((line, idx) => (
                <div key={idx}><span className="cmd-path-text">anish@AnishLp [{time}]$ </span>{line}</div>
              ))}
              {bootComplete && (
                <div className="flex">
                  <span className="cmd-path-text">anish@AnishLp [{time}]$ </span>
                  <input
                    type="text"
                    className="terminal-imput bg-transparent border-none outline-none text-green-400 ml-2 w-full"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    autoFocus
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {showSidebar && (
          <RightSidebar />
        )}
      </div>
    </div>
  );
}
