
import React from 'react';
import '../screens/3-About.css';
//import Johnny from './assets/images/Johnny';
//import Ashley from './assets/images/Ashley';
//import Meeli from './assets/images/Meeli';
//import gaylyn from '../assets/images/gaylyn.png';

const About = () => (
  <div className="aboutPage">
      <h1>About "Our World is a Beautiful Place"</h1>

    <div className="website">
      <h2>The Website:</h2>

      <p>Something about the site here.</p>
    </div>

    <div className="team">
      <h2>The Team:</h2>
      <p>"Our World Is So Beautiful" was started by a group of students called Team nano Bytes as a team project. The team consists of four students, Johnny Rodriguez, Meeli Sonn, Ashley Warren, and Amy Jaramillo.</p> 
    </div>

    <div className="members">
      <h2>Team Members:</h2>
       
        <img id="gaylyn" width= "200" height= "235" alt="GayLynJaramillo" src="../assets/images/gaylyn.png"></img>        
          <p>Johnny Rodriguez</p>
          <p>Front-End and Style</p>        
        
          <img id="gaylyn" width= "200" height= "235" alt="GayLynJaramillo" src="../assets/images/gaylyn.png"></img>        
          <p>Ashley Warren</p>
          <p>Back-End and Database</p>        
        
          <img id="gaylyn" width= "200" height= "235" alt="GayLynJaramillo" src="../assets/images/gaylyn.png"></img>         
          <p>Meeli Sonn</p>
          <p>Back-End and Database</p>      
        
          <img id="gaylyn" width= "200" height= "235" alt="GayLynJaramillo" src="../assets/images/gaylyn.png"></img>            
          <p>GayLyn Jaramillo</p>
          <p>Front-End and Style</p>
      </div>

    <div className="contact">
      <h2>Contact Info:</h2> 
        <p>Email: wozunano@gmail.com</p>
    </div>

  </div>
);

export default About; 

/*import React, { Component } from 'react';

class About extends Component {
  render() {
     return (
         <div>
          <h2>About</h2>
        </div>
    );
   }
 }
 export default About; */