import React, { Component, useState } from "react";
import Container from "react-bootstrap/esm/Container";

export default function CarbonData(props) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  function calculateCarbonFootprint() {}

  function calculateGasCost() {}

  // 8887 grams of CO2 per 1 gallong
  //Use vehicle icons and react-spring for animations

  return (
    <div>
      {/* flexbox */}
      <Container fluid>
        <div>Distance: {props.distance} meters</div>
        {/* passenger car */}
        <div>
          Average passenger car: Carbon emission is {0.25 * props.distance}{" "}
          grams
        </div>
        <div>
          Your trip costs ${((props.distance / 34761.81) * 3).toFixed(2)} USD
        </div>
        {/* suv */}
        <div>SUV: Carbon emission is {0.27 * props.distance} grams</div>
        <div>
          Your trip costs ${((props.distance / 32186.9) * 3).toFixed(2)} USD
        </div>
        {/* pickup truck */}
        <div>Pickup truck: Carbon emission is {0.3 * props.distance} grams</div>
        <div>
          Your trip costs ${((props.distance / 28968.2) * 3).toFixed(2)} USD
        </div>
      </Container>
    </div>
  );
}
