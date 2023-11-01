import Header from "./Components/Header";
import Body from "./Components/Body-Section"

import Login from './Components/auth/Login'
import Register from './Components/auth/Register'

import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route, } from 'react-router-dom';

function App() {
  return <div>
    
    <Router>
    <Header/>
      <div>
        <section>                              
            <Routes>                                                                        
            <Route path="/register" element={<Register/>}/>
            <Route path="/home" element={<Body/>}/>
            <Route path="/login" element={<Login/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
    </div>
}

export default App