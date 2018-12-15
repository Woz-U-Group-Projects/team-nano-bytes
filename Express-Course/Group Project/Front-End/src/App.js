import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./screens/1-Home";
import Portfolio from "./screens/2-Portfolio";
import About from "./screens/3-About";
import './App.css';
import './1-Navbar.css';
/*import johnny from './assets/images/johnny.png';
import ashley from './assets/images/ashley.png';
import meeli from './assets/images/meeli.png';
import gaylyn from './assets/images/gaylyn.png'; */


const App = () => (
  <Router>
    <div  >
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
       

      </ul>

    

      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />

    </div>
  </Router>
);



export default App;