import Header from "./Components/Header";
import Body from "./Components/Body-Section";

import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";

import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import UnderConstruction from "./Components/error/Under-Construction";

const config = {
  mode: import.meta.env.MODE,
  under_construction: import.meta.env.VITE_APP_UNDER_CON==='true',
};

function App() {
  if (config.under_construction && config.mode!='dev') {
    return (
      <UnderConstruction></UnderConstruction>
    )
  } else {
    return (
      <div>
        <Router>
          <Header />
          <div>
            <section>
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Body />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </section>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
