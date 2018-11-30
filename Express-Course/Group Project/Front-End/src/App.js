import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import data from './data/data'
import logo from './logo.png';
import axios from 'axios';
import Pictures from './components/Pictures';
import EpicMenu from './components/EpicMenu';
// import Home from './screens/1-Home';
// import Portfolio from './screens/2-Portfolio';
// import About from './screens/3-About';
// import Contact from './screens/4-Contact';
// import Topics from './screens/Topics';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { render } from 'react-dom';


// const App2 = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
       
//         <li>
//           <Link to="/portfolio">Portfolio</Link>
//         </li>

//          <li>
//           <Link to="/about">About</Link>
//         </li>

//   <li>
//           <Link to="/contact">Contact</Link>
//         </li>

//         <li>
//           <Link to="/topics">Topics</Link>
//         </li>
//       </ul>

//       <hr />

//       <Route exact path="/" component={Home} />
//       <Route path="/portfolio" component={Portfolio} />
//       <Route path="/about" component={About} />
//       <Route path="/contact" component={Contact} />
//       <Route path="/topics" component={Topics} />
//     </div>
//   </Router>
// );

// render(<App2 />, document.getElementById('root'));


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
  }

 

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
   
    const {properties, property} = this.state;
    let links =   [
      { label: 'Home', link: '/home'},
      { label: 'About', link: '/about'},
      { label: 'Portfolio', link: '/portfolio'},
      { label: 'Contact Us', link: '/contact-us'},
]
   
    return (

<div className="App">

   <div className="container center">

<EpicMenu links={links} logo={logo} />>

    </div>
        
        <button 
          onClick={() => this.prevProperty()} 
          disabled={property.index === 0}
        >Prev</button>

        <button 
          onClick={() => this.nextProperty()} 
          disabled={property.index === data.properties.length-1}
        >Next</button>

        <div className="page">
                    
            <section>
                <h1> Pictures</h1>

    <Pictures uri="http://localhost:3001/staticPictures" />

            </section>
            <div className="col">
              <div className={`cards-slider active-slide-${property.index}`}>
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${property.index*(100/properties.length)}%)`
                }}>
                  {
                    properties.map(property => <Card key={property._id} property={property} />)
                  }
                </div>
              </div>
            </div>

        </div>
      </div>
    );
  }
}

export default App;

