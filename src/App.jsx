import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/Home/Home";
import Header from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Sidebar />
        <section className="page">
          <div className="bg-image-small"></div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Home />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
