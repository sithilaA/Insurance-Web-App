import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <section className="page">
        <div className="bg-image-small"></div>
        <Home />
      </section>
    </div>
  );
}

export default App;
