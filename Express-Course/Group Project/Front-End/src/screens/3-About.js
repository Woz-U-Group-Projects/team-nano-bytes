
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

      <p className="info">Something about the site here.</p>
    </div>

    <div className="team">
      <h2>The Team:</h2>
      <p className="info">"Our World Is So Beautiful" was started by a group of students called Team Nano Bytes as a team project. The team consists of four students: Johnny Rodriguez, Meeli Sonn, Ashley Warren, and GayLyn Jaramillo.</p> 
    </div>

    <div className="members">   
      <h2>Team Members:</h2>

      <div id="member">
          <img src={johnny} alt="JohnnyRodrguez"  />
            <p id="name">Johnny Rodriguez</p>        
        <div id="info">            
            <p id="code">Front-End and Style</p> 
            <p id="about">Some information about Johnny goes here.</p>  
        </div> 
      </div>   
     

      <div id="member">   
          <img id="ashley"  alt="AshleyWarren" src={ashley}/>
            <p id="name">Ashley Warren</p>        
        <div id="info">                
            <p id="code">Back-End and Database</p>
            <p id="about">Some information about Ashley goes here.</p> 
        </div>       
      </div>  
        
      <div id="member">
          <img id="meeli"  alt="MeeliSonn" src={meeli}/>
            <p id="name">Meeli Sonn</p>        
        <div id="info">            
            <p id="code">Back-End and Database</p> 
            <p id="about">Some information about Meeli goes here.</p> 
        </div>
      </div>    
        
      <div id="member">  
          <img id="gaylyn" alt="GayLynJaramillo" src={gaylyn}/> 
            <p id="name">GayLyn Jaramillo</p>      
        <div id="info">            
            <p id="code">Front-End and Style</p>
            <p id="about">Began working with 3D modeling and photo editing programs as a hobby.<br/> Wanting to further her knowledge, in 2018 she began taking software development course with Woz U. </p>
        </div>
      </div>

      </div>

    <div className="contact">
      <h2>Contact Info:</h2> 
        <p>Email: wozunano@gmail.com</p>
    </div>

  </div>
);

export default About;