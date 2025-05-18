import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";

import Home from "./pages/Home/Home";
import Verification from './pages/verfication';
import Register from './pages/auth/Register';
import ProfilePage from './pages/profile/ProfilePage'
import EditProfilePage from './pages/profile/EditProfile'

import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  return (
    <div className="main-container">
      <Sidebar />
      <section className="page">
        <div className="bg-image-small"></div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/kyc" element={<Verification />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
        </Routes>
      </section>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();
  const hideLayoutRoutes = ['/register']; // routes without layout

  const isLayoutHidden = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {isLayoutHidden ? (
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <Layout />
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
