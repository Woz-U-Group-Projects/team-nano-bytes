import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import React from 'react';
// inport {render} from 'react-dom';
// import Home from './screens/Home';
// import About from './screens/About';
// import Portfolio from './screens/Portfolio';
// import Contact from './screens/Contact';
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";

// const App = () => (
//  <Router>
//    <div>
//      <ul>
//        <li>
//           <Link to="/">Home</Link>
//        </li>
//        <li>
//           <Link to="/about">About</Link>
//        </li>
//        <li>
//           <Link to="/contact">Contact</Link>
//        </li>
//        <li>
//           <Link to="/portfolio">Portfolio</Link>
//        </li>
//      </ul>

//   <hr />
//   <Route path="/" component={Home} />
//   <Route path="/about" component={About} />
//   <Route path="/contact" component={Contact} />
//   <Route path="/protfolio" component={Portfolio} />
//    </div>
//  </Router>
// );

// render(
//   <App />,
//     document.get ElementById('root')
// );

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
