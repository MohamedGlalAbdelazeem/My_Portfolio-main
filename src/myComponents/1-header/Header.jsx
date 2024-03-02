import "./header.css";
import "../../index.css";
import { useState, useEffect } from "react";

const Header = () => {
  const [showModel, setShowModel] = useState(false);
  const storedTheme = localStorage.getItem("currentMode") || "dark";
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    const currentMode = localStorage.getItem("currentMode");
    if (currentMode) {
      setTheme(currentMode);
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
    localStorage.setItem("currentMode", theme);
  }, [theme]);

  return (
    <>
      <header className="flex">
        <button
          className="menu"
          onClick={() => {
            if (showModel === false) {
              setShowModel(true);
            } else {
              setShowModel(false);
            }
          }}
        >
         <i className="fa-solid fa-bars-staggered"></i>
        </button>
        <div />
        <nav>
          <ul className="flex">
            <li>
              <a href="#abou">About</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">ContactMe</a>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "light" ? (
         <i className="fa-solid fa-lightbulb ligthmode"></i>
          ) : (
            <span style={{ display: "flex", justifyContent: "end" }}>
              <img style={{ width: "36%" }} src="/animations/darkmode.gif" />{" "}
            </span>
          )}
        </button>
        {showModel && (
          <div className="fixed">
            <ul className="modal">
              <li style={{ textAlign: "right" }}>
                <button
                  style={{
                    color: "red",
                    border: "1px solid white",
                    padding: "1rem",
                    borderRadius: "50%",
                  }}
                
                  onClick={() => {
                    setShowModel(false);
                  }}
                >
                  <i className="fa-solid fa-circle-xmark"></i>
                  </button>
              </li>
              <li>
                <a href="#abou">About</a>
              </li>
              <div className="divider menu"></div>
              <li>
                <a href="#education">Education</a>
              </li>
              <div className="divider menu"></div>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <div className="divider menu"></div>

              <li>
                <a href="#projects">Projects</a>
              </li>
              <div className="divider menu"></div>
              <li>
                <a href="#contact">ContactMe</a>
              </li>
              <div className="divider menu"></div>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};
export default Header;
