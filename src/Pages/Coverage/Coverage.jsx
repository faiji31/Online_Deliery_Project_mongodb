import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);

  const position = [23.685, 90.3565];

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;

    const district = serviceCenters.find((center) =>
      center.district.toLowerCase().includes(location.toLowerCase())
    );

    if (district && mapRef.current) {
      const coor = [district.latitude, district.longitude];
      mapRef.current.flyTo(coor, 14);
    }
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
      
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl text-secondary font-bold my-6 text-center">
        We are available in 64 districts
      </h1>

      <p className="text-gray-600 mb-6 text-center">
        We deliver almost all over Bangladesh
      </p>

      {/* Search */}
      <form onSubmit={handleSearch} className="flex justify-center mb-6">
        <label className="input input-bordered flex items-center gap-2 w-full max-w-md">
          <svg
            className="h-5 w-5 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            name="location"
            type="search"
            className="grow"
            placeholder="Search district..."
          />
        </label>
      </form>

      {/* Map Container */}
      <div className="w-full h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          className="h-full w-full"
          center={position}
          zoom={8}
          scrollWheelZoom={true}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center) => (
            <Marker
              key={center._id || center.district}
              position={[center.latitude, center.longitude]}
            >
              <Popup>
                <strong>{center.district}</strong>
                <br />
                Service Area: {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;