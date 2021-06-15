import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
// eslint-disable-next-line import/no-webpack-loader-syntax
import Card from "react-bootstrap/Card";

import "./MapBoxComponent.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFya2JhbGEiLCJhIjoiY2tucGVyeHNjMDFzMDJ3cnl2czQwaHBuOCJ9.bNY9rxYVfVIJM74SxBjb7Q";

export default function Map(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [zoom, setZoom] = useState(15);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [maps, setMaps] = useState(null);

  const containerStyle = {
    width: "600px",
    height: "600px",
  };

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/markbala/ckpxh58br5h0m17llp7j0rsix",
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
      <Card
        className="shadow-lg p-3 mb-5 bg-white rounded"
        border="light"
        style={containerStyle}
      >
        <Card.Body>
          <div ref={mapContainer} className="map-container" />
        </Card.Body>
      </Card>
    </div>
  );
}
