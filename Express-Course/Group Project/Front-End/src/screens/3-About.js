import React from 'react';
import '../screens/3-About.css';
import johnny from '../assets/images/johnny.png';
import ashley from '../assets/images/ashley.png';
import meeli from '../assets/images/meeli.png';
import gaylyn from '../assets/images/gaylyn.png'; 

const About = () => (
  <div className="aboutPage">
      <h1>Our World is a Beautiful Place</h1>

    <div className="website">
      <h2>The Website:</h2>

       

      <div id="member">
          <img className="photo" src={johnny} alt="JohnnyRodrguez"  />
            <p id="name">Johnny Rodriguez</p>        
      </div>   
      <div id="info">            
            <p id="code">Front-End and Style</p> 
            <p id="about">Some information about Johnny goes here.</p>  
      </div> 

<<<<<<< HEAD
          <p>Meeli Sonn</p>
          < p > Back - End and Database < br / > She likes to write
          < br / > She likes photography very much
          < br / > She has two Masters: in Education Geography and Biology and in Instructional Design.
          < br / > Web Developing she started 2017 in Coder Camp (WOZ - U).
 </p>      
        
        <img id="gaylyn" width= "200" height= "235" alt="GayLynJaramillo" src={gaylyn}/>           
          <p>GayLyn Jaramillo</p>
          <p>Front-End and Style <br/> Began working with 3D modeling and photo editing programs as a hobby.
          <br/> Wanting to further her knowledge, in 2018 she began taking software development course with Woz U. </p>
=======
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
>>>>>>> 7cf8de0408d99fc06fabc28c94f620e4c2687bea
      </div>

      
      

    <div className="contact">
      <h2>Contact Info:</h2> 
        <p>Email: wozunano@gmail.com</p>
    </div>

  </div>
);

export default About;
