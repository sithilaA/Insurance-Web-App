import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "./assets/img/logopic.png"

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Sidebar />
        <section className="page">
          <img src={bgImage} className="bg-image-small"/>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
