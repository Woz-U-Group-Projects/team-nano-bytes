import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./screens/1-Home";
import Portfolio from "./screens/2-Portfolio";
import About from "./screens/3-About";
import Contact from "./screens/4-Contact";
import Topics from './screens/Topics';
import './App.css';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>

      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/topics" component={Topics} />

    </div>
  </Router>
);



export default App;