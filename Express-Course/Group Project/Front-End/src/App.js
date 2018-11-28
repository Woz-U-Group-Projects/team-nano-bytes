import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import data from './data/data'
import logo from './logo.png';
import axios from 'axios';
import Pictures from './components/Pictures';
import EpicMenu from './components/EpicMenu';
// import About from './components/About';
// import Portfolio from './components/Portfolio';
// Hello Meeli


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

