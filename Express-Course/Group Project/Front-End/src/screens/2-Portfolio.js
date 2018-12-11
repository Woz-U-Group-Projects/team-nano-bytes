import React, { Component } from "react";
import Card from "../screens/2.1-Card";
import data from "../data/data";
import "../screens/2-Portfolio.css";
import Pictures from "../components/Pictures";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    };
  }

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  render() {
    const { properties, property } = this.state;

    return (
      <div className="App">
        <div className="container center" />

        <button
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
        >
          Prev
        </button>

        <button
          onClick={() => this.nextProperty()}
          disabled={property.index === data.properties.length - 1}
        >
          Next
        </button>

        <section>
          <h1> Pictures</h1>

          <Pictures uri="http://localhost:3001/pictures" />
        </section>
        <div className="page">
          <div className="col">
            <div className={`cards-slider active-slide-${property.index}`}>
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${property.index *
                    (100 / properties.length)}%)`
                }}
              >
                {properties.map(property => (
                  <Card key={property._id} property={property} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
