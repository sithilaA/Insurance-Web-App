import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./Home";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container-fluid gradient-bg min-vh-100 p-0 m-0">
      {toggle && <Sidebar />}{" "}
      {/* Sidebar is fixed, so don't put inside row/col */}
      <div className={`main-content ${toggle ? "with-sidebar" : ""}`}>
        <div className="bg-image-small"></div>
        <Home Toggle={Toggle} />
      </div>
    </div>
  );
}

export default App;
