import React from "react";
import "./searchBox.css"
function searchBox() {
    return (
      <div className="searchBox position-relative d-flex align-items-center">
        <i className="bi bi-search mr-2"></i>
        <input type="text" placeholder="Search here..." />
      </div>
    );
}

export default searchBox;
