
import React, { Component } from 'react';
import '../screens/3-About.css';
<<<<<<< HEAD
/*import johnny from './assets/images/johnny.png';
import ashley from './assets/images/ashley.png';
import meeli from './assets/images/meeli.png';
import gaylyn from './assets/images/gaylyn.png'; */
=======
import johnny from '../assets/images/johnny.png';
import ashley from '../assets/images/ashley.png';
import meeli from '../assets/images/meeli.png';
import gaylyn from '../assets/images/gaylyn.png'; 
>>>>>>> 587bacddb895657665023631c671f536b9102417

const About = () => (
  <div className="aboutPage">
      <h1>About "Our World is a Beautiful Place"</h1>

    <div className="website">
      <h2>The Website:</h2>

      <p>Something about the site here.</p>
    </div>

    <div className="team">
      <h2>The Team:</h2>
      <p>"Our World Is So Beautiful" was started by a group of students called Team Nano Bytes as a team project. The team consists of four students: Johnny Rodriguez, Meeli Sonn, Ashley Warren, and GayLyn Jaramillo.</p> 
    </div>

    <div className="members">
    
      <h2>Team Members:</h2>
       <img src={johnny} alt="JohnnyRodrguez" width= "200" height= "235" />      
          <p>Johnny Rodriguez</p>
          <p>Front-End and Style</p>        
        
        <img id="ashley" width= "200" height= "235" alt="AshleyWarren" src={ashley}/>    
          <p>Ashley Warren</p>
          <p>Back-End and Database</p>        
        
        

        <img id="meeli" width= "200" height= "235" alt="MeeliSonn" src={meeli}/>  

          <p>Meeli Sonn</p>
          <p>Back-End and Database</p>      
        
        <img id="gaylyn" width= "200" height= "235" alt="GayLynJaramillo" src={gaylyn}/>           
          <p>GayLyn Jaramillo</p>
          <p>Front-End and Style <br/> Began working with 3D modeling and photo editing programs as a hobby.<br/> Wanting to further her knowledge, in 2018 she began taking software development course with Woz U. </p>
      </div>

    <div className="contact">
      <h2>Contact Info:</h2> 
        <p>Email: wozunano@gmail.com</p>
    </div>

  </div>
);

export default About;