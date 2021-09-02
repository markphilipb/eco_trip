import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import carIcon from "../../imgs/icons/car.png";
import pickupIcon from "../../imgs/icons/pickuptruck.png";
import suvIcon from "../../imgs/icons/suv.png";
import SpringMeter from "../SpringMeter/SpringMeter";
import "./CarbonData.css";

export default function CarbonData(props) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [carDist, setCarDist] = useState(0);
  const [suvDist, setSuvDist] = useState(0);
  const [truckDist, setTruckDist] = useState(0);
  const [open, toggle] = useState(false);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    console.log(props.distance);
    if (0.3 * props.distance > 400) {
      let temp = props.distance / 400;
      let newDistance = props.distance / temp;

      setCarDist(150);
      setSuvDist(250);
      setTruckDist(350);
    } else {
      setCarDist((0.25 * props.distance) / 2.5);
      setSuvDist((0.27 * props.distance) / 1.5);
      setTruckDist(0.3 * props.distance);
    }
    sleep(6000);
    if (!open) {
      toggle(!open);
    }
  });

  function calculateGasCost() {}

  // 8887 grams of CO2 per 1 gallong

  return (
    <div className="carbonData justify-content-center">
      <Container fluid>
        <Row>
          <Col>
            <div className="distance">
              {(props.distance * 0.0006).toFixed(2)} miles
            </div>
          </Col>
        </Row>
        <Row className="vehicle w-150 justify-content-left mt-2">
          <Col md="auto">
            <img src={carIcon} height="50px" width="50px" alt="carIcon" />
          </Col>
          <Col md="auto">
            <SpringMeter
              open={open}
              width={carDist}
              carbonEmit={0.25 * props.distance}
              color="#32DF89"
            />
            {/* <div>Carbon emission is {0.25 * props.distance} grams</div> */}
          </Col>
          <Col md="auto" className="price">
            ${((props.distance / 34761.81) * 3).toFixed(2)} USD
          </Col>
        </Row>
        <Row className="vehicle w-150 justify-content-left mt-2">
          <Col md="auto">
            <img src={suvIcon} height="50px" width="50px" alt="suv" />
          </Col>
          <Col md="auto">
            <SpringMeter
              open={open}
              width={suvDist}
              carbonEmit={0.27 * props.distance}
              color="#32DF89"
            />
            {/* <div>Carbon emission is {0.27 * props.distance} grams</div> */}
          </Col>
          <Col md="auto" className="price">
            ${((props.distance / 32186.9) * 3).toFixed(2)} USD
          </Col>
        </Row>
        <Row className="vehicle w-150 justify-content-left mt-2">
          <Col md="auto">
            <img src={pickupIcon} height="50px" width="50px" alt="pickupIcon" />
          </Col>
          <Col md="auto">
            <SpringMeter
              open={open}
              width={truckDist}
              carbonEmit={0.3 * props.distance}
              color="#32DF89"
            />
            {/* <div>Carbon emission is {0.3 * props.distance} grams</div> */}
          </Col>
          <Col md="auto" className="price">
            ${((props.distance / 28968.2) * 3).toFixed(2)} USD
          </Col>
        </Row>
      </Container>
    </div>
  );
}
