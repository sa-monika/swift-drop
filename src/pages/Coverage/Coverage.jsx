import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  // console.log(serviceCenters);
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase()),
    );

    if (district) {
      const coord = [district.latitude, district.longitude];
      console.log(district, coord);
      // fly to the location
      mapRef.current.flyTo(coord, 11);
    }
  };

  return (
    <div className="w-10/12 mx-auto mb-20 mt-10 ">
      <h2 className="text-5xl text-primary text-center font-semibold mb-10">
        We are available in 64 districts
      </h2>

      {/* form  */}
      <div className=" mb-10">
        <form onSubmit={handleSearch}>
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
            <input
              type="search"
              required
              name="location"
              placeholder="Search"
            />
          </label>
        </form>
      </div>

      {/* map container */}
      <div>
        <h1 className="text-4xl mt-8 mb-5 font-bold ">
          We Deliver Almost All Over Bangladesh
        </h1>
        <div className="w-full h-150 border">
          <MapContainer
            center={position}
            zoom={8}
            scrollWheelZoom={false}
            className="h-150"
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {serviceCenters.map((center, index) => (
              <Marker
                position={[center.latitude, center.longitude]}
                key={index}
              >
                <Popup>
                  <strong>{center.district}</strong> <br />
                  Service Area : {center.covered_area.join(", ")}{" "}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
