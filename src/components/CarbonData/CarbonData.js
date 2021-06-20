import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";

class CarbonData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: "",
      destination: "",
    };
  }

  calculateCarbonFootprint() {}

  calculateGasCost() {}

  // 8887 grams of CO2 per 1 gallong
  //Use vehicle icons and react-spring for animations
  render() {
    return (
      <div>
        {/* flexbox */}
        <Container fluid>
          <div>Distance: {this.props.distance} meters</div>
          {/* passenger car */}
          <div>
            Average passenger car: Carbon emission is{" "}
            {0.25 * this.props.distance} grams
          </div>
          <div>
            Your trip costs ${((this.props.distance / 34761.81) * 3).toFixed(2)}{" "}
            USD
          </div>
          {/* suv */}
          <div>SUV: Carbon emission is {0.27 * this.props.distance} grams</div>
          <div>
            Your trip costs ${((this.props.distance / 32186.9) * 3).toFixed(2)}{" "}
            USD
          </div>
          {/* pickup truck */}
          <div>
            Pickup truck: Carbon emission is {0.3 * this.props.distance} grams
          </div>
          <div>
            Your trip costs ${((this.props.distance / 28968.2) * 3).toFixed(2)}{" "}
            USD
          </div>
        </Container>
      </div>
    );
  }
}

export default CarbonData;
