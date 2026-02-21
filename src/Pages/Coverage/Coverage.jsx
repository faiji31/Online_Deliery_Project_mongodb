import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);
 
  const position = [23.685, 90.3565];

const handleserarch =e=>{
      e.preventDefault()
      const location = e.target.location.value;
      const district =serviceCenters.find(center=>center.district.toLowerCase().includes(location.toLowerCase()))
      if (district){
            const coor =[district.latitude,district.longitude]
            console.log(district,coor)
            mapRef.current.flyTo(coor,15)
      }
}

  return (
    <div>
      <h1 className="text-4xl text-secondary font-bold">
        We are available in 64 districts
      </h1>
      <form onSubmit={handleserarch}>
            <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input name="location" type="search" className="grow" placeholder="Search" />
 
</label>
      </form>
      <div></div>
      <div className="border w-full h-[800px]">
        <MapContainer
          className="h-[800px]"
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          ref={mapRef}
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
