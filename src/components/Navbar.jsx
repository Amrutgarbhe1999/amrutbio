import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assests/images/logo.png"

function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="logo" src={logo} alt="" />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/projects">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="njs-sticky-side body-append image_button_cover placement-right now-show">
        <button className="toggle" onClick={toggleTheme}>
          {theme === "light" ? (
            <i className="fa-regular fa-sun"></i>
          ) : (
            <i className="fa-regular fa-moon"></i>
          )}
        </button>
      </div>
    </>
  );
}

export default Navbar;
