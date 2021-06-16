import React, { Component } from "react";

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
        <div>Distance: {this.props.distance} meters</div>
        <div>Carbon emission is {0.25 * this.props.distance} grams</div>
        <div>
          Your trip costs ${((this.props.distance / 34761.81) * 3).toFixed(2)}{" "}
          USD
        </div>
      </div>
    );
  }
}

export default CarbonData;
