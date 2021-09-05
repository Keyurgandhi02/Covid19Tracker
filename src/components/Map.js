import React from "react";
import "./Map.css";
import { shoeDataOnMap } from "./utils";
import { MapContainer, TileLayer } from "react-leaflet";
function Map({ center, zoom, countries, casesType }) {
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shoeDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
}

export default Map;
