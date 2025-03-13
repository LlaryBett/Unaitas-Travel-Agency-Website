import React from "react";

const SearchSection = () => {
  return (
    <div className="w-full bg-blue-600 py-10">
      <form className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-screen-xl mx-auto px-4 mt-6">
        {/* Destination */}
        <div className="mt-4">
          <label className="block text-white font-medium text-lg">Destination</label>
          <input 
            type="text" 
            placeholder="Enter destination" 
            className="w-full bg-white text-gray-700 text-lg border border-gray-300 rounded-full px-5 py-4 focus:ring-2 focus:ring-black focus:border-black focus:outline-none"
          />
        </div>

        {/* Pax Number */}
        <div className="mt-4">
          <label className="block text-white font-medium text-lg">Pax Number</label>
          <input 
            type="number" 
            min="1" 
            placeholder="Number of people" 
            className="w-full bg-white text-gray-700 text-lg border border-gray-300 rounded-full px-5 py-4 focus:ring-2 focus:ring-black focus:border-black focus:outline-none"
          />
        </div>

        {/* Check-in Date */}
        <div className="mt-4">
          <label className="block text-white font-medium text-lg">Check-in Date</label>
          <input 
            type="date" 
            className="w-full bg-white text-gray-700 text-lg border border-gray-300 rounded-full px-5 py-4 focus:ring-2 focus:ring-black focus:border-black focus:outline-none"
          />
        </div>

        {/* Check-out Date */}
        <div className="mt-4">
          <label className="block text-white font-medium text-lg">Check-out Date</label>
          <input 
            type="date" 
            className="w-full bg-white text-gray-700 text-lg border border-gray-300 rounded-full px-5 py-4 focus:ring-2 focus:ring-black focus:border-black focus:outline-none"
          />
        </div>

        {/* Inquire Now Button */}
        <div className="flex items-end mt-4">
          <button 
            type="submit" 
            className="w-full bg-white text-blue-600 font-semibold text-lg px-5 py-4 rounded-full hover:bg-gray-200 transition-all focus:ring-2 focus:ring-black focus:outline-none"
          >
            Inquire Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchSection;
 