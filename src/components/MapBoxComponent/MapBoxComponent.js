import React, { Component } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
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
    // map.fitBounds([this.state.originCords, this.state.destCords]);

    this.setState({
      maps: map,
    });

    this.props.setMap(map);
    // map.on("load", function () {
    //   map.addSource("route", {
    //     type: "geojson",
    //     data: {
    //       type: "Feature",
    //       properties: {},
    //       geometry: {
    //         type: "LineString",
    //         coordinates: [
    //           [-122.483696, 37.833818],
    //           [-122.483482, 37.833174],
    //           [-122.483396, 37.8327],
    //           [-122.483568, 37.832056],
    //           [-122.48404, 37.831141],
    //           [-122.48404, 37.830497],
    //           [-122.483482, 37.82992],
    //           [-122.483568, 37.829548],
    //           [-122.48507, 37.829446],
    //           [-122.4861, 37.828802],
    //           [-122.486958, 37.82931],
    //           [-122.487001, 37.830802],
    //           [-122.487516, 37.831683],
    //           [-122.488031, 37.832158],
    //           [-122.488889, 37.832971],
    //           [-122.489876, 37.832632],
    //           [-122.490434, 37.832937],
    //           [-122.49125, 37.832429],
    //           [-122.491636, 37.832564],
    //           [-122.492237, 37.833378],
    //           [-122.493782, 37.833683],
    //         ],
    //       },
    //     },
    //   });
    //   map.addLayer({
    //     id: "route",
    //     type: "line",
    //     source: "route",
    //     layout: {
    //       "line-join": "round",
    //       "line-cap": "round",
    //     },
    //     paint: {
    //       "line-color": "#888",
    //       "line-width": 8,
    //     },
    //   });
    // });
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
