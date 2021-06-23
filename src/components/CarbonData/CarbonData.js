import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import carIcon from "../../imgs/icons/car.png";
import pickupIcon from "../../imgs/icons/pickuptruck.png";
import suvIcon from "../../imgs/icons/suv.png";
import SpringMeter from "../SpringMeter/SpringMeter";

export default function CarbonData(props) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [carDist, setCarDist] = useState(0);
  const [suvDist, setSuvDist] = useState(0);
  const [truckDist, setTruckDist] = useState(0);

  function calculateCarbonFootprint() {
    // if (props.distance > 400) {
    //   let temp = props.distance / 400;
    //   let newDistance = props.distance / temp;
    //   setCarDist(0.25 * newDistance);
    //   setSuvDist(0.27 * newDistance);
    //   setTruckDist(0.3 * newDistance);
    // } else {
    //   setCarDist(0.25 * props.distance);
    //   setSuvDist(0.27 * props.distance);
    //   setTruckDist(0.3 * props.distance);
    // }
  }

  useEffect(() => {
    console.log(props.distance);
    if (0.3 * props.distance > 400) {
      let temp = props.distance / 400;
      let newDistance = props.distance / temp;

      setCarDist(150);
      setSuvDist(250);
      setTruckDist(350);
    } else {
      setCarDist((0.25 * props.distance) / 3);
      setSuvDist((0.27 * props.distance) / 2);
      setTruckDist(0.3 * props.distance);
    }
  });

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
            <SpringMeter width={carDist} color="#32DF89" />
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
            <SpringMeter width={suvDist} color="#32DF89" />
            <div>Carbon emission is {0.27 * props.distance} grams</div>
          </Col>
          <div>
            Your trip costs ${((props.distance / 32186.9) * 3).toFixed(2)} USD
          </div>
        </Row>

        <Row className="w-100 justify-content-center mt-2">
          <Col md="auto">
            <img src={pickupIcon} height="50px" width="50px" alt="pickupIcon" />
          </Col>
          <Col md="auto">
            <SpringMeter width={truckDist} color="#32DF89" />
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
