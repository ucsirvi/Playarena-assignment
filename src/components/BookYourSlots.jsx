import React from "react";

const BookYourSlots = () => {
  return (
    <section className="bg-gradient-to-b from-purple-900 to-blue-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-pink-400 mb-4">
          Book your slots
        </h2>
        <p className="text-lg text-purple-200 mb-8">
          To find special offers, occupancy rates and free time
        </p>

        {/* Date and Info */}
        <div className="flex items-center justify-between bg-purple-800 text-white p-4 rounded-lg mb-6 shadow-lg">
          <span className="text-lg font-medium">Wednesday, 16 April 2025</span>
          <svg
            className="w-6 h-6 text-pink-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
        </div>

        {/* Plan Your Day */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          <div>
            <h3 className="text-lg font-bold text-pink-400">
              PLAN YOUR <br /> DAY AT PLAY
            </h3>
          </div>
          <div>
            <h3 className="text-lg font-bold text-pink-400">Activities</h3>
            <p className="text-blue-400 text-sm">6:00 AM – 11:00 PM</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-pink-400">F&B Timings</h3>
            <p className="text-blue-400 text-sm">10:00 AM – 11:00 PM</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-pink-400">
              Personal Vehicles
            </h3>
            <p className="text-blue-400 text-sm">Parking available</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-pink-400">Nearest metro</h3>
            <p className="text-blue-400 text-sm">Silk Board (Yellow Line)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookYourSlots;
