import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SidePanel from "../SidePanel/SidePanel";
import NavBar from "../NavBar/NavBar";
import Map from "../MapBoxComponent/MapBoxComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      polyline: null,
      origin: "",
      originCords: null,
      destination: "",
      destCords: null,
      map: null,
      coords: null,
      distance: null,
    };

    this.handleSetMap = this.handleSetMap.bind(this);
  }

  handleSetMap(mb) {
    this.setState({
      map: mb,
    });
  }

  handleMapSubmit = async (origin, destination) => {
    var urlreq =
      "http://localhost:3002/submit/" +
      origin.split(" ").join("+") +
      "/" +
      destination.split(" ").join("+");
    var data = await axios.get(urlreq);
    var test = JSON.stringify(data);
    var parsed = JSON.parse(test);
    console.log("parsed", parsed.data);
    console.log(parsed.data.routes[0].geometry.coordinates);

    this.setState({
      result: parsed.data,
      originCords: parsed.data.waypoints[0].location,
      destCords: parsed.data.waypoints[1].location,
      coords: parsed.data.routes[0].geometry.coordinates,
      distance: parsed.data.routes[0].distance,
    });

    this.flyTo(this.state.originCords, this.state.destCords, this.state.map);
    this.displayLine(this.state.coords, this.state.map);
  };

  flyTo(originCords, destCords, map) {
    map.current.fitBounds([originCords, destCords]);
  }

  displayLine(coords, map) {
    let geojson = {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: coords,
        },
      },
    };

    if (map.current.getSource("route")) {
      map.current.removeLayer("route");
      map.current.removeSource("route");
    }
    map.current.addSource("route", geojson);
    map.current.addLayer({
      id: "route",
      type: "line",
      source: "route",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#0ca84d",
        "line-width": 8,
      },
    });
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <NavBar />
          </Row>
          <Row className="w-100 justify-content-center mt-5">
            <Col md="auto">
              <SidePanel
                handleClick={this.handleMapSubmit}
                distance={this.state.distance}
              />
            </Col>
            <Col md="auto">
              <Map
                result={this.state.result}
                originCords={this.state.originCords}
                destCords={this.state.destCords}
                setMap={this.handleSetMap}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
