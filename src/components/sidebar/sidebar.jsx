import React, { useEffect, useRef, useState } from "react";
import "./sidebar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../../assets/img/Logopic.png";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [isDark, setIsDark] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const searchRef = useRef(null); // for search box
  const sidebarRef = useRef(null); // for sidebar element

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsCollapsed(true); // Collapse sidebar on small screens
      } else {
        setIsCollapsed(false); // Expand sidebar on large screens
      }
    };

    // Initial check on mount
    handleResize();

    // Add listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isDark) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const searchBox = searchRef.current;
    if (searchBox) {
      searchBox.addEventListener("click", handleSearchClick);
    }

    // Clean up on unmount
    return () => {
      if (searchBox) {
        searchBox.removeEventListener("click", handleSearchClick);
      }
    };
  }, []);

  const handleSearchClick = () => {
    setIsCollapsed(false); // removes 'close' class
  };

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <nav ref={sidebarRef} className={`sidebar ${isCollapsed ? "close" : ""}`}>
      <header>
        <div className="image-text">
          <span className="image">
            <Link to={"/"}>
              <img src={Logo} alt="logo" />
            </Link>
          </span>
          <Link className="logo-link" to={"/"}>
            <div className="text header-text">
              <span className="name">SafeNest Life</span>
              <br />
              <span className="slogan">Your Life, Our Promise.</span>
            </div>
          </Link>
        </div>
        <i className="bi bi-caret-right toggle" onClick={toggleSidebar}></i>
      </header>

      <div className="menu-bar">
        <div className="menu">
          {/* <li className="search-box" ref={searchRef}>
            <i className="bi bi-search icon"></i>
            <input type="text" placeholder="Search..." />
          </li> */}
          <ul className="menu-links">
            <li className="nav-link">
              <Link to="/dashboard">
                <i className="bi bi-speedometer2 icon"></i>
                <span className="text nav-text">Dashboard</span>
              </Link>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bi bi-bar-chart-line icon"></i>
                <span className="text nav-text">Revenue</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bi bi-bell icon"></i>
                <span className="text nav-text">Notifications</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bi bi-pie-chart icon"></i>
                <span className="text nav-text">Analytics</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bi bi-heart icon"></i>
                <span className="text nav-text">Likes</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bi bi-wallet icon"></i>
                <span className="text nav-text">Wallets</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li>
            <a href="/register">
              <i className="bi bi-power icon"></i>
              <span className="text nav-text">Logout</span>
            </a>
          </li>

          <li className="mode">
            <div className="moon-sun">
              <i className="bi bi-moon icon moon"></i>
              <i className="bi bi-sun icon sun"></i>
            </div>
            <span className="mode-text text">
              {isDark ? "Light Mode" : "Dark Mode"}
            </span>

            <div className="toggle-switch" onClick={toggleDarkMode}>
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
}
