import React from "react";

const HeroSection = () => {
  const cards = [
    {
      title: "Prime",
      description: "Strategy and action sports for the squad",
      bgColor: "bg-pink-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20.41"
          height="20"
          viewBox="0 0 20.41 20"
        >
          {" "}
          <g
            id="Group_560"
            data-name="Group 560"
            transform="translate(-494.665 5545.366)"
          >
            {" "}
            <path
              id="Path_96"
              data-name="Path 96"
              d="M13.672,427.634l-1.632,7.85-1.87,1.073L8.3,437.635.7,435.1,3.781,429.8l3.3,2.673.553-.315.55-.32-.649-4.2Z"
              transform="translate(493.977 -5973)"
            ></path>{" "}
            <path
              id="Path_97"
              data-name="Path 97"
              d="M54.8,453.272l-5.98-5.34.006-2.156V443.62l6-5.32,3.05,5.326-3.964,1.518,0,.637,0,.636,3.959,1.538Z"
              transform="translate(457.197 -5981.151)"
            ></path>{" "}
            <path
              id="Path_98"
              data-name="Path 98"
              d="M.665,472.6l7.6-2.547,1.869,1.074,1.872,1.07,1.646,7.847-6.138.008.647-4.2-.551-.319-.554-.314-3.3,2.676Z"
              transform="translate(494 -6005.415)"
            ></path>{" "}
          </g>{" "}
        </svg>
      ),
      button: true,
    },
    {
      title: "Studio",
      description: "Short format, big thrills served a la carte",
      bgColor: "bg-purple-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20.002"
          height="20"
          viewBox="0 0 20.002 20"
        >
          {" "}
          <g
            id="Group_559"
            data-name="Group 559"
            transform="translate(-494.666 5759.183)"
          >
            {" "}
            <path
              id="Path_92"
              data-name="Path 92"
              d="M10.674,221.1v.167l-2.54,2.54H.677v-9.992a10.166,10.166,0,0,1,10,7.285"
              transform="translate(493.992 -5973)"
            ></path>{" "}
            <path
              id="Path_93"
              data-name="Path 93"
              d="M53.081,213.817a10.208,10.208,0,0,1-7.23,10.008H45.6l.017-.017-2.476-2.479-.061-.061v-7.452Z"
              transform="translate(461.588 -5973)"
            ></path>{" "}
            <path
              id="Path_94"
              data-name="Path 94"
              d="M53.087,256.265v9.992a10.166,10.166,0,0,1-10-7.285v-.189l2.517-2.517Z"
              transform="translate(461.579 -6005.439)"
            ></path>{" "}
            <path
              id="Path_95"
              data-name="Path 95"
              d="M10.669,258.728V266.2h-10A10.208,10.208,0,0,1,7.9,256.194h.231l2.476,2.473.064.064Z"
              transform="translate(494 -6005.386)"
            ></path>{" "}
          </g>{" "}
        </svg>
      ),
      button: true,
    },
    {
      title: "Union",
      description: "Classic favourites for the recreational sport",
      bgColor: "bg-blue-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19.855"
          height="20"
          viewBox="0 0 19.855 20"
        >
          {" "}
          <g
            id="Group_561"
            data-name="Group 561"
            transform="translate(-498.772 5331.946)"
          >
            {" "}
            <path
              id="Path_99"
              data-name="Path 99"
              d="M24.627,645.563v-4.509h-7.4a2.528,2.528,0,0,1-5.057,0h-7.4v4.509a5.491,5.491,0,0,0,5.49,5.491,5.492,5.492,0,0,0-5.49,5.49v4.509h7.4a2.528,2.528,0,0,1,5.057,0h7.4v-4.509a5.492,5.492,0,0,0-5.49-5.49,5.491,5.491,0,0,0,5.49-5.491M14.7,653.579a2.527,2.527,0,1,1,2.528-2.526,2.526,2.526,0,0,1-2.528,2.526"
              transform="translate(494 -5973)"
            ></path>{" "}
          </g>{" "}
        </svg>
      ),
      button: true,
    },
    {
      title: "Junior",
      description: "Toddler-sized fun for little champs",
      bgColor: "bg-pink-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20.003"
          viewBox="0 0 20 20.003"
        >
          {" "}
          <g
            id="Group_562"
            data-name="Group 562"
            transform="translate(-498.772 5121.579)"
          >
            {" "}
            <path
              id="Path_100"
              data-name="Path 100"
              d="M22.744,861.428a5.662,5.662,0,1,0-7.974-7.979A5.661,5.661,0,1,0,6.8,861.428a5.658,5.658,0,1,0,7.971,7.971,5.66,5.66,0,1,0,7.974-7.971m-5.518,2.447H12.318v-4.9h4.907Z"
              transform="translate(494 -5973)"
            ></path>{" "}
          </g>{" "}
        </svg>
      ),
      button: true,
    },
    {
      title: "Pixel",
      description: "Shoot, race and more in the gamer’s den",
      bgColor: "bg-purple-600",
      icon: (
        <svg
          id="Pixel_Symbol"
          data-name="Pixel Symbol"
          xmlns="http://www.w3.org/2000/svg"
          width="40.638"
          height="40"
          viewBox="0 0 40.638 40"
        >
          {" "}
          <path
            id="Path_164"
            data-name="Path 164"
            d="M40.638,20.319H25.38V15.257H15.263v5.062H0a20.319,20.319,0,0,1,40.638,0"
            transform="translate(0 0)"
          ></path>{" "}
          <path
            id="Path_165"
            data-name="Path 165"
            d="M40.638,62.764H0A20.333,20.333,0,0,1,15.241,43.083a.034.034,0,0,0,.022-.005v5.061H25.38V43.078a.022.022,0,0,0,.017.005A20.333,20.333,0,0,1,40.638,62.764"
            transform="translate(0 -22.764)"
          ></path>{" "}
        </svg>
      ),
      button: true,
    },
  ];

  return (
    <section id="hero" className="relative h-[80vh] flex flex-col justify-end">

      <video
        className="absolute inset-0 w-full object-cover max-h-[70vh]"
        autoPlay
        loop
        muted
      >
        <source
          src="https://playarena.in/wp-content/uploads/2024/08/pixel-10sec-2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>


      <div className="absolute inset-0 bg-black bg-opacity-50"></div>


      <div className="relative z-10 text-white text-center px-4 flex flex-col justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Play Arena
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Experience the ultimate gaming and entertainment destination.
        </p>
        <div className="space-x-4">
          <a
            href="#features"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Explore Features
          </a>
          <a
            href="#participate"
            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg"
          >
            Participate Now
          </a>
        </div>
      </div>


      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-0 p-0 bg-gradient-to-r from-purple-900 via-blue-900 to-pink-900">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-4 shadow-lg transform transition-transform hover:-translate-y-8 ${card.bgColor} relative`}
          >
            <div className="flex items-center space-x-2 mb-2">
              {card.icon}
              <h3 className="text-3xl font-bold text-white">{card.title}</h3>
            </div>
            <p className="text-gray-200 text-sm font-medium mb-9">
              {card.description}
            </p>
            {card.button && (
              <a
                href="#"
                className="mt-9 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 absolute bottom-4 left-4 opacity-0 transition-opacity duration-300 hover:opacity-100"
              >
                View All 7 Activities
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
