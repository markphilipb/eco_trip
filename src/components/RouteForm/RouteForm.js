import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
// eslint-disable-next-line import/no-webpack-loader-syntax

export default function RouteForm(props) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  //Mapbox autocomplete geocoder input field. Not using for now -MB
  // componentDidMount() {
  //   mapboxgl.accessToken =
  //     "pk.eyJ1IjoibWFya2JhbGEiLCJhIjoiY2tucGVyeHNjMDFzMDJ3cnl2czQwaHBuOCJ9.bNY9rxYVfVIJM74SxBjb7Q";
  //   var geocoder = new MapboxGeocoder({
  //     accessToken: mapboxgl.accessToken,
  //   });
  //   // geocoder.addTo("#originField");
  // }

  function handleSubmit(e) {
    props.handleClick(origin, destination);
    props.transitionFunc();
    // props.showCarbon();
  }

  function onOriginInput(e) {
    setOrigin(e.target.value);
  }

  function onDestinationInput(e) {
    setDestination(e.target.value);
  }

  return (
    <Form>
      <Form.Group controlId="formOrigin">
        <Form.Label>Origin</Form.Label>
        <Form.Control
          type="text"
          placeholder="Choose starting point"
          onChange={onOriginInput}
          value={origin}
        />
      </Form.Group>

      <Form.Group controlId="formDestination">
        <Form.Label>Destination</Form.Label>
        <Form.Control
          type="text-muted"
          placeholder="Choose Destination"
          onChange={onDestinationInput}
          value={destination}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
