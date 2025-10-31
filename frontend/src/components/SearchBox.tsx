import { useState } from "react";
import { MapPin, Search, Globe, Clock } from "lucide-react";

const  LocationSearchBar = () => {
  const [location, setLocation] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLocationClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
            .then((res) => res.json())
            .then((data) => {
              setLocation(data.address.city || data.display_name);
              setShowDropdown(false);
            });
        },
        () => alert("Unable to fetch current location.")
      );
    }
  };

  return (
    <div className="flex items-center justify-center bg-white shadow-md rounded-full w-full max-w-3xl mx-auto p-2 relative">
      {/* Keyword Search */}
      <input
        type="text"
        placeholder="Search events"
        className="flex-1 px-4 py-2 text-gray-700 bg-transparent focus:outline-none"
      />

      {/* Divider */}
      <div className="h-6 w-px bg-gray-300 mx-2"></div>

      {/* Location Dropdown */}
      <div className="relative">
        <div
          onClick={handleLocationClick}
          className="flex items-center space-x-2 cursor-pointer text-gray-500 hover:text-gray-700"
        >
          <MapPin className="w-5 h-5" />
          <input
            type="text"
            placeholder="Location"
            className="bg-transparent focus:outline-none cursor-pointer placeholder-gray-400 text-sm"
          />
        </div>

        {showDropdown && (
          <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-xl z-10">
            <button
              onClick={handleUseCurrentLocation}
              className="flex items-center gap-3 px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100"
            >
              <Globe className="w-5 h-5 text-blue-500" /> Use my current location
            </button>

            <button className="flex items-center gap-3 px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100">
              <Search className="w-5 h-5 text-purple-500" /> Browse online events
            </button>

            <div className="border-t my-1"></div>

            <button
              onClick={() => {
                setLocation("Meerut, Uttar Pradesh");
                setShowDropdown(false);
              }}
              className="flex items-center gap-3 px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100"
            >
              <Clock className="w-5 h-5 text-gray-500" /> Meerut, Uttar Pradesh
            </button>
          </div>
        )}
      </div>

      {/* Search Button */}
      <button className="ml-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
        <Search className="w-5 h-5" />
      </button>
    </div>
  );
}

export default LocationSearchBar