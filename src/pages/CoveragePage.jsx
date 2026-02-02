import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import districts from '../../public/bd-districts.json';

function MapController({ district }) {
  const map = useMap();

  useEffect(() => {
    if (district) {
      map.flyTo([district.latitude, district.longitude], 10, { duration: 1.5 });
    }
  }, [district, map]);

  return null;
}

export default function CoveragePage() {
  const [search, setSearch] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const handleSearch = () => {
    const found = districts.find(
      (d) => d.district.toLowerCase() === search.toLowerCase()
    );
    setSelectedDistrict(found);
  };
  console.log(districts);
  return (
    <>
      <div className="bg-white rounded-2xl my-5 p-10">
        <div>
          <h1 className="text-5xl font-bold">
            We are available in 64 districts
          </h1>
          <div className="join border border-gray-300 mt-5 rounded-full pl-3 max-w-md ">
            <div>
              <label className="input border-none join-item focus-within:outline-none">
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
                  type="text"
                  placeholder="Search here"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
            </div>
            <button
              className="btn bg-[#CAEB66] rounded-full join-item"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          {search && !selectedDistrict && (
            <p className="text-red-500 mt-2">District not found</p>
          )}
        </div>

        <div className="border-b border-gray-300 my-10"></div>

        <div>
          <h1 className="text-xl font-bold">
            We deliver almost all over Bangladesh
          </h1>

          <MapContainer
            center={[23.685, 90.3563]}
            zoom={6}
            scrollWheelZoom={false}
            style={{ height: '400px', width: '100%' }}
            className="my-5"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {/* 🔥 Auto zoom */}
            <MapController district={selectedDistrict} />
            {districts.map((district, index) => (
              <Marker
                key={index}
                position={[district?.latitude, district?.longitude]}
              >
                <Popup>{district?.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </>
  );
}
