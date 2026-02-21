import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenters = useLoaderData();
  console.log(serviceCenters);
  const position = [23.685, 90.3565];
  return (
    <div>
      <h1 className="text-4xl text-secondary font-bold">
        We are available in 64 districts
      </h1>
      <div></div>
      <div className="border w-full h-[800px]">
        <MapContainer
          className="h-[800px]"
          center={position}
          zoom={8}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ></TileLayer>
          {
            serviceCenters.map(center=><Marker position={[center.latitude,center.longitude]}>
            <Popup>
             <strong>{center.district}</strong>
             Service Area: {center.covered_area.join(",")}
            </Popup>
          </Marker>)
          }
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
