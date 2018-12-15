import React from 'react';
import '../screens/3-About.css';
import johnny from '../assets/images/johnny.jpg';
import ashley from '../assets/images/ashley.jpg';
import meeli from '../assets/images/meeli.jpg';
import gaylyn from '../assets/images/gaylyn.png'; 

const About = () => (
  <div className="aboutPage">
      <h1>Our World is a Beautiful Place</h1>

    <div className="website">
      <h2>The Website:</h2>

      <p className="info">A website to contemplate on pictures around the World</p>
    </div>

    <div className="team">
      <h2>The Team:</h2>
      <p className="info">"Our World Is So Beautiful" was started by a group of students called Team Nano Bytes as a team project. <br/> The team consists of four students: Johnny Rodriguez, Meeli Sonn, Ashley Warren, and GayLyn Jaramillo.</p> 
    </div>

       
      <h2>Team Members:</h2>
     <div className="members">
      <div id="member">
          <img className="johnny" src={johnny} alt="JohnnyRodrguez"  />
            <p id="name">Johnny Rodriguez</p>        
      </div>   
      <div id="info">            
            <p id="code">Front-End, Back-End, and Database</p> 
            <p id="about">Johnny plays chess and does woodworking in his freetime. </p>  
      </div> 

      <div id="member">   
          <img className="photo" alt="AshleyWarren" src={ashley}/>
            <p id="name">Ashley Warren</p>        
      </div>  
      <div id="info">                
            <p id="code">Back-End and Database</p>
            <p id="about">Ashley has been working in the music industry for 8 1/2 years. <br/>She looks to help the music industry and independent artists through knowledge gained by taking the Full Stack Development course at WOZ-U.</p> 
        </div>       
        
        
      <div id="member">
          <img className="photo"  alt="MeeliSonn" src={meeli}/>
            <p id="name">Meeli Sonn</p>        
      </div>    
      <div id="info">            
            <p id="code">Back-End and Database</p> 
            <p id="about">Meeli likes to write. She likes photography very much. <br/> She has two Master: in Education Geography and Biology and in Instruction Design. <br/> Web Developing she started in 2017 in Coder Camp (WOZ-U).</p> 
        </div>
       
        
      <div id="member">  
          <img className="photo" alt="GayLynJaramillo" src={gaylyn}/> 
            <p id="name">GayLyn Jaramillo</p>      
        <div id="info">            
            <p id="code">Front-End and Style</p>
            <p id="about">GayLyn began working with 3D modeling and photo editing programs as a hobby.<br/> Wanting to further her knowledge, in 2018 she began taking software development course with WOZ-U. </p>
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
