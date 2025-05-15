import React from "react";
import "./style.css";
import logo from "../Assets/img/Logo.png";
function Sidebar() {
  return (
    <div className="sidebar p-2">
      <div className="d-flex align-items-center justify-content-center m-2">
        <a href="#">
          <img className="logo me-2" src={logo} alt="Logo" />
        </a>
        {/* <span className="brand-name fs-4">Your Brand</span> */}
      </div>

      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a className="list-group-item py-2">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          <span>Dashboard</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-house fs-4 me-3"></i>
          <span>Home</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-table fs-4 me-3"></i>
          <span>Products</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-clipboard-data fs-5 me-3"></i>
          <span>Report</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-people fs-5 me-3"></i>
          <span>Customers</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-power fs-5 me-3"></i>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
