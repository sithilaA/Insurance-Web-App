import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchBox from "../searchBox/searchBox";
function header() {
  return (
    <>
      <header className="top-nav-header d-flex align-items-center">
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            {/* Logo Wrapper */}
            <div className="col-xs-3">
             <SearchBox/>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default header;
