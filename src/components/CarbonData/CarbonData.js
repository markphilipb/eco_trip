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

  render() {
    return (
      <div>
        <Container fluid>
          <div>Distance: {this.props.distance} meters</div>
          <div>
            Average passenger car: Carbon emission is{" "}
            {0.25 * this.props.distance} grams
          </div>
          <div>
            Your trip costs ${((this.props.distance / 34761.81) * 3).toFixed(2)}{" "}
            USD
          </div>
          <div>SUV: Carbon emission is {this.props.distance} grams</div>
          <div>
            Your trip costs ${((this.props.distance / 64373.8) * 3).toFixed(2)}{" "}
            USD
          </div>
          <div>
            Pickup truck: Carbon emission is {this.props.distance} grams
          </div>
          <div>
            Your trip costs &{((this.props.distance / 33796.2) * 3).toFixed(2)}{" "}
            USD
          </div>
        </Container>
      </div>
    );
  }
}

export default CarbonData;
