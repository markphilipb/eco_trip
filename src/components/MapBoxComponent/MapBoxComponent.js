import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import Card from "react-bootstrap/Card";

import "./MapBoxComponent.css";

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

    map.current.setPadding({
      left: 50,
      right: 50,
      top: 50,
      bottom: 50,
    });

    setMaps(map);
    props.setMap(map);
  }, [lng, lat, zoom, props]);

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
      {}
    </div>
  );
}
