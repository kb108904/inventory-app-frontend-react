import Header from "./Components/Header";
import Body from "./Components/Body-Section";

import Login from "./Components/auth/Login";
import Logout from "./Components/auth/Logout";
import Register from "./Components/auth/Register";

import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import UnderConstruction from "./Components/error/Under-Construction";
import Footer from "./Components/Footer";
import './App.css'

const config = {
  mode: import.meta.env.MODE,
  under_construction: import.meta.env.VITE_APP_UNDER_CON === "true",
};

function App() {
  if (config.under_construction && config.mode != "development") {
    return <UnderConstruction></UnderConstruction>;
  } else {
    return (
      <div className="container">
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Body />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </main>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
