import React, { Component } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import Card from "react-bootstrap/Card";

import "./MapBoxComponent.css";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken =
  "pk.eyJ1IjoibWFya2JhbGEiLCJhIjoiY2tucGVyeHNjMDFzMDJ3cnl2czQwaHBuOCJ9.bNY9rxYVfVIJM74SxBjb7Q";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originCords: this.props.originCords,
      destCords: this.props.destCords,
      lng: -70.9,
      lat: 42.35,
      zoom: 15,
      result: this.props.result,
      cords: this.props.cords,
      maps: null,
    };
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      //center: [-73.871421, 40.738596],

      zoom: zoom,
    });

    map.setPadding({
      left: 50,
      right: 50,
      top: 50,
      bottom: 50,
    });

    this.setState({
      maps: map,
    });

    this.props.setMap(map);
  }

  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        <div ref={this.mapContainer} className="map-container" />
        {}
      </div>
    );
  }
}

export default Map;
