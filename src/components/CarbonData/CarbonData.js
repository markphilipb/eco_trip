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
    return <div>Carbon emission is {0.25 * this.props.distance} grams</div>;
  }
}

export default CarbonData;
