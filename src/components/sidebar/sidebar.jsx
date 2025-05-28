import React, { useEffect, useRef, useState } from "react";
import "./sidebar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../../assets/img/Logopic.png";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isDark, setIsDark] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const searchRef = useRef(null);

  // Collapse sidebar on small screens
  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle dark mode class on body
  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  // Expand sidebar when clicking on search box
  useEffect(() => {
    const handleSearchClick = () => setIsCollapsed(false);
    const searchBox = searchRef.current;

    if (searchBox) {
      searchBox.addEventListener("click", handleSearchClick);
    }

    return () => {
      if (searchBox) {
        searchBox.removeEventListener("click", handleSearchClick);
      }
    };
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => {
      const newState = !prev;
      if (newState) {
        setActiveSubmenu(null); // Close submenu when collapsing
      }
      return newState;
    });
  };
  

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  const toggleSubmenu = (menuName) => {
    setActiveSubmenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <nav className={`sidebar ${isCollapsed ? "close" : ""}`}>
      <header>
        <div className="image-text">
          <span className="image">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </span>
          <Link className="logo-link" to="/">
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
          <ul className="menu-links">
            <li className="nav-link">
              <Link to="/dashboard">
                <i className="bi bi-speedometer2 icon"></i>
                <span className="text nav-text">Dashboard</span>
              </Link>
            </li>

            <li
              className={`nav-link has-submenu ${
                activeSubmenu === "products" ? "open" : ""
              }`}
            >
              <div
                className="submenu-toggle"
                onClick={() => toggleSubmenu("products")}
              >
                <i className="bi bi-boxes icon"></i>
                <span className="text nav-text">Products</span>
                {!isCollapsed && (
                  <i className="bi bi-chevron-down submenu-arrow"></i>
                )}
              </div>

              <ul
                className={`submenu ${
                  activeSubmenu === "products" ? "show" : ""
                }`}
              >
                <li className="submenuItem">
                  <Link to="/products/insurance">Insurance</Link>
                </li>
                <li className="submenuItem">
                  <Link to="/products/wellness">Wellness Plans</Link>
                </li>
                <li className="submenuItem">
                  <Link to="/products/financial">Financial Services</Link>
                </li>
              </ul>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bi bi-heart-pulse icon"></i>
                <span className="text nav-text">Health & Wellness</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bi bi-person-raised-hand icon"></i>
                <span className="text nav-text">Help and Support</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bi bi-buildings icon"></i>
                <span className="text nav-text">About Us</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bi bi-pin-map icon"></i>
                <span className="text nav-text">Contact Us</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li>
            <a href="#">
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
