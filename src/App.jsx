import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";

import { useTheme } from "./hooks/useTheme";

function App() {
  const [count, setCount] = useState(0);

  const { changeTheme, mode } = useTheme();

  /*   const [mode, setMode] = useState("light");

  function changeTheme() {
    const html = document.documentElement;
    console.log(html);

    if (mode == "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  }

useEffect(()=>{
  const currentMode=localStorage.getItem("mode") || "light";
  document.documentElement.classList.add(currentMode)
  setMode(currentMode)
},[])
 */

  return (
    <div className="text-black dark:text-white">
      <div>
        <button
          onClick={changeTheme}
          className=" btn btn-circle btn-outline hover:bg-white hover:text-black dark:border-white dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white"
        >
          <span className="hover:-rotate-90">
            {mode === "dark" ? <FaSun size={30} /> : <MdDarkMode size={30} />}
          </span>
        </button>
      </div>
      <div className="flex justify-between">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="mt-8">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
