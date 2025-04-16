import React from "react";

const PlayItCool = () => {
  const features = [
    {
      title: "SKIP THE QUEUE",
      description: "No ticketing. Just load your card and go play.",
      icon: "https://playarena.in/wp-content/uploads/2024/05/Skip-the-Queue.svg",
    },
    {
      title: "TREATS ON US",
      description: "Get exclusive offers across our F&B outlets.",
      icon: "https://playarena.in/wp-content/uploads/2024/05/Treats-on-us.svg",
    },
    {
      title: "BIG DISCOUNTS",
      description: "The more you load the bigger your discounts.",
      icon: "https://playarena.in/wp-content/uploads/2024/05/Big-Discounts.svg",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-purple-900 to-blue-900 text-gray-300 relative pb-10">
      {/* Scrolling Banner */}
      <div className="bg-pink-600 text-gray-100 font-medium overflow-hidden whitespace-nowrap py-4">
        <div
          className="inline-block animate-scroll-left"
          style={{
            animation: "scroll-left 10s linear infinite",
          }}
        >
          {`For the love of play \u00A0\u00A0\u00A0\u00A0\u00A0`.repeat(6)}
        </div>
      </div>

      {/* Background Shapes */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-purple-900 to-blue-900"
        style={{ zIndex: -1 }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-pink-400 mb-4 p-10">
            Play it <span className="text-blue-400">cool</span>
          </h2>
          <p className="text-lg text-gray-400">
            We call this our Royalty Programme.
          </p>
          <button className="mt-6 bg-pink-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-pink-700 transition flex items-center justify-center mx-auto">
            Become a member
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center bg-purple-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-pink-400 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlayItCool;
