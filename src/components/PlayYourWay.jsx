import React from "react";

const PlayYourWay = () => {
  const cards = [
    {
      title: "Birthday Bashes",
      description:
        "Thrilling activities, exciting games, and delicious food—our custom packages ensure unforgettable experiences for all ages!",
      image: "https://playarena.in/wp-content/uploads/2024/12/BIRTHDAY-1.webp",
      icon: "https://playarena.in/wp-content/uploads/2024/01/Birthday-Bashes-Icon.svg",
    },
    {
      title: "Corporate Events",
      description:
        "Nothing like a game to get the teamwork going. Talk to us to find out more about our corporate packages for offsites, team building and more.",
      image:
        "https://playarena.in/wp-content/uploads/2024/12/corporate-1-1.webp",
      icon: "https://playarena.in/wp-content/uploads/2023/12/Corporate-Events-Icon.svg",
    },
    {
      title: "Play Dates",
      description:
        "Experience Play Dates, any day of the week, enjoy this special offer and quality time with your partner. Perfect for fun and connection!",
      image:
        "https://playarena.in/wp-content/uploads/2024/12/PERFECT-DATE-1.webp",
      icon: "https://playarena.in/wp-content/uploads/2023/12/Perfect-Dates-Icon.svg",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-purple-900 to-blue-900 py-12">
      <div className="container m-auto px-6 md:px-12 lg:px-20">

        <h2 className="text-5xl font-extrabold text-pink-400 mb-6 text-left">
          Play, Your Way
        </h2>
        <p className="text-lg text-purple-200 mb-10 text-justify leading-relaxed">
          When it comes to get-togethers, the more is always the merrier. You
          bring the people, we’ll take care of the rest. Call us for customized
          birthdays, farewells, anniversaries, and other events or group
          packages with entertainment, music, and a fantastic range of F&B to
          choose from.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-purple-800 rounded-lg overflow-hidden transform transition-transform hover:-translate-y-4 shadow-lg hover:shadow-xl"
            >

              <div className="flex gap-3 items-center p-6">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-16 h-16 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-pink-400 mb-4">
                  {card.title}
                </h3>
              </div>

              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <p className="text-purple-200 text-sm font-medium mb-6 leading-relaxed text-justify">
                  {card.description}
                </p>
                <a
                  href="#"
                  className="text-pink-400 font-medium text-sm flex items-center justify-center border border-pink-400 py-2 rounded-md hover:bg-pink-400 hover:text-purple-900 transition-colors"
                >
                  Find out more
                  <svg
                    className="w-4 h-4 ml-2"
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
                </a>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-12 text-center">
          <a
            href="#"
            className="text-pink-400 font-medium text-lg flex items-center justify-center hover:underline"
          >
            Have an offbeat idea? Create your own event, fully customised!
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlayYourWay;
