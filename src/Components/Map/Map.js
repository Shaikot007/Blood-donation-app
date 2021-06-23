import React, { useState, useEffect } from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from "react-leaflet";

function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
};

function LeafletMap() {

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [address, setAddress] = useState("Address not found");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        fetch("https://nominatim.openstreetmap.org/reverse?format=geojson&lat=" + position.coords.latitude + "&lon=" + position.coords.longitude)
          .then(response => response.json())
          .then(result => {

            console.log(result.features[0].geometry.coordinates);

            setLatitude(result.features[0].geometry.coordinates[1]);
            setLongitude(result.features[0].geometry.coordinates[0]);
            setAddress(result.features[0].properties.display_name);
          }
        );
      });
    } else {
      console.error("Geolocation is not supported by this browser!");
    }
  }, []);

  return (
    <div>
      <MapContainer zoomControl={false} className="Map" zoom={15} center={[latitude, longitude]}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>{address}</Popup>
        </Marker>

        <ChangeMapView coords={[latitude, longitude]} />

        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
