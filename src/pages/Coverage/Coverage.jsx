import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  console.log(serviceCenters);

  return (
    <div className="w-10/12 mx-auto my-20">
      <h2 className="text-5xl text-primary text-center font-semibold mb-10">
        We are available in 64 districts
      </h2>
      <div className=" mb-10">
        <form>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
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
            <input type="search" required placeholder="Search" />
          </label>
        </form>
      </div>

      {/* map container */}
      <div className="w-full h-150 border">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-150"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center, index) => (
            <Marker position={[center.latitude, center.longitude]} key={index}>
              <Popup>
                <strong>{center.district}</strong> <br />
                Service Area : {center.covered_area.join(", ")}{" "}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
