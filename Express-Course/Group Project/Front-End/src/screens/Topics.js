import React from 'react';
import Topic from './Topic';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../../../Front-End/src/screens/Topics.css';



const Topics = ({ match }) => (  
  <div className= "Topic">
    <h2>Topics</h2>
    <ul className= "Link" >
      <li >
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

<div className= "result">
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />

      </div>
  
  </div>
);

export default Topics;