import React, { Component, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import Card from "react-bootstrap/Card";

import "./MapBoxComponent.css";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken =
  "pk.eyJ1IjoibWFya2JhbGEiLCJhIjoiY2tucGVyeHNjMDFzMDJ3cnl2czQwaHBuOCJ9.bNY9rxYVfVIJM74SxBjb7Q";

export default function Map(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [zoom, setZoom] = useState(15);

  const [originCords, setOrigin] = useState(props.originCords);
  const [destCords, setDest] = useState(props.destCords);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [result, setResult] = useState(props.result);
  const [cords, setCords] = useState(props.cords);
  const [maps, setMaps] = useState(null);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  }, [lat, lng, zoom]);

  useEffect(() => {
    if (!map.current) return;
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
    map.current.setPadding({
      left: 50,
      right: 50,
      top: 50,
      bottom: 50,
    });

    setMaps(map);
    props.setMap(map);
  }, [props]);

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
      {}
    </div>
  );
}
