import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchBox from "../searchBox/searchBox";
import userImg from '../../assets/img/user.png';
function header() {
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
                <i class="bi bi-globe icon"></i>
              </button>
              <button className="btn rounded-circle">
                <i className="bi bi-bell icon"></i>
              </button>
              <div className="userProfileWrapper">
                <div className="myProfile d-flex align-items-center">
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img src={userImg} />
                    </span>
                  </div>
                  <div className="userInfo">
                    <h4>Ishan P</h4>
                    <p className="mb-0">@ishan04</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default header;
