
import React, { Component } from 'react';
import '../screens/3-About.css';
import johnny from '../assets/images/johnny.png';
import ashley from '../assets/images/ashley.png';
import meeli from '../assets/images/meeli.png';
import gaylyn from '../assets/images/gaylyn.png'; 

const About = () => (
  <div className="aboutPage">
      <h1>About "Our World is a Beautiful Place"</h1>

    <div className="website">
      <h2>The Website:</h2>

      < p > < br / We may live in stone buildings and use plastic and metal.
      < br / But the breathing, living world outside, and even inside, is still part of us.
      < br / Our heart, our bodies, are entwined forever with the life of this planet,
      < br / and it fills our heart with glee to see our world at its most beautiful!
      < br / Enjoy these stunning photos of our beautiful world! < /p>
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
          < p > Back - End and Database < br / > I like to write
          < br / > I like photography
          < br / > I have two Masters: in Education Geography.Biology: and in Instructional Design.
          < br / > Web Developing I started two years ago in Coder Camp what later got name WOZ - U.
 </p>      
        
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