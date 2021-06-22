import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import carIcon from "../../imgs/icons/car.png";
import pickupIcon from "../../imgs/icons/pickuptruck.png";
import suvIcon from "../../imgs/icons/suv.png";

export default function CarbonData(props) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  function calculateCarbonFootprint() {}

  function calculateGasCost() {}

  // 8887 grams of CO2 per 1 gallong
  //Use vehicle icons and react-spring for animations

  return (
    <div>
      <Container fluid>
        <div>Distance: {props.distance} meters</div>

        <Row className="w-100 justify-content-center mt-5">
          <Col md="auto">
            <img src={carIcon} height="50px" width="50px" alt="carIcon" />
          </Col>
          <Col md="auto">
            <div>Carbon emission is {0.25 * props.distance} grams</div>
          </Col>
          <div className="mt-2">
            Your trip costs ${((props.distance / 34761.81) * 3).toFixed(2)} USD
          </div>
        </Row>

        <Row className="w-100 justify-content-center mt-2">
          <Col md="auto">
            <img src={suvIcon} height="50px" width="50px" alt="suv" />
          </Col>
          <Col md="auto">
            <div>Carbon emission is {0.27 * props.distance} grams</div>
          </Col>
          <div>
            Your trip costs ${((props.distance / 32186.9) * 3).toFixed(2)} USD
          </div>
        </Row>

        <Row className="w-100 justify-content-center mt-2">
          <Col md="auto">
            <img src={pickupIcon} height="40px" width="40px" alt="pickupIcon" />
          </Col>
          <Col md="auto">
            <div>Carbon emission is {0.3 * props.distance} grams</div>
          </Col>
          <div>
            Your trip costs ${((props.distance / 28968.2) * 3).toFixed(2)} USD
          </div>
        </Row>
      </Container>
    </div>
  );
}
