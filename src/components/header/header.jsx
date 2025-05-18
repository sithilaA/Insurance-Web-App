import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchBox from "../searchBox/searchBox";
import userImg from "../../assets/img/user.png";
import { Dropdown } from "react-bootstrap";

function Header() {
  return (
    <>
      <header className="top-nav-header d-flex align-items-center">
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            {/* Logo Wrapper */}
            <div className="col-sm-3 d-flex align-items-center pl-4">
              <SearchBox />
            </div>
            <div className="col-sm-7 d-flex align-items-center justify-content-end">
              <button className="btn rounded-circle">
                <i className="bi bi-globe icon"></i>
              </button>
              <button className="btn rounded-circle">
                <i className="bi bi-bell icon"></i>
              </button>

              {/* React-Bootstrap Dropdown for User */}
              <Dropdown className="userProfileWrapper">
                <Dropdown.Toggle as="div" className="myProfile d-flex align-items-center" id="dropdown-custom-components">
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img src={userImg} alt="User" />
                    </span>
                  </div>
                  <div className="userInfo">
                    <h4>Ishan P</h4>
                    <p className="mb-0">@ishan04</p>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu align="end">
                  <Dropdown.Item as={Link} to="/profile">My Profile</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/edit-profile">Edit Profile</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/kyc">Verify Me - KYC</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
