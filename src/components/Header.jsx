import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-900 via-blue-900 to-pink-900 text-white p-5 relative z-50 flex">
      <div className="container mx-auto flex justify-between items-center">

        <div className="flex items-center mr-10">
          <img
            src="https://playarena.in/wp-content/themes/playarena.in/img/logo.svg"
            alt="Playarena Logo"
            className="h-10"
          />
        </div>


        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>


        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-gradient-to-r from-purple-900 via-blue-900 to-pink-900 md:static md:block ml-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left">

            <li className="relative group">
              <a
                href="#play"
                className="py-2 md:py-0 hover:text-pink-400 hover:underline decoration-pink-400 decoration-2 underline-offset-[25px] flex items-center"
              >
                Play
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
              <ul className="absolute hidden group-hover:flex bg-transparent text-white md:mt-6 z-50 w-full p-6 grid grid-cols-4 animate-scroll-left">

                <div className="bg-pink-500 p-4  shadow-lg">
                  <h3 className="text-lg font-bold mb-2">PIXEL</h3>
                  <ul className="space-y-1">
                    <li>Car Simulator</li>
                    <li>Cricket Simulator</li>
                    <li>Lazermaze</li>
                    <li>7D Theatre</li>
                    <li>VR Coaster</li>
                    <li>VR Xcape</li>
                    <li>Virtual Verve</li>
                    <li>Hyper Grid</li>
                  </ul>
                </div>


                <div className="bg-purple-500 p-4  shadow-lg">
                  <h3 className="text-lg font-bold mb-2">STUDIO</h3>
                  <ul className="space-y-1">
                    <li>Archery</li>
                    <li>Rope Course</li>
                    <li>Rocket Ejector</li>
                    <li>Wall Climbing</li>
                    <li>Bumper Cars</li>
                    <li>Trampoline Park</li>
                    <li>Shooting</li>
                    <li>Carnival Games</li>
                  </ul>
                </div>


                <div className="bg-blue-500 p-4  shadow-lg">
                  <h3 className="text-lg font-bold mb-2">UNION</h3>
                  <ul className="space-y-1">
                    <li>The Field</li>
                    <li>Badminton</li>
                    <li>Basketball</li>
                    <li>Cricket Nets</li>
                    <li>Swimming Pool</li>
                    <li>Skate Park</li>
                    <li>Gym</li>
                  </ul>
                </div>


                <div className="bg-pink-600 p-4  shadow-lg">
                  <h3 className="text-lg font-bold mb-2">PRIME</h3>
                  <ul className="space-y-1">
                    <li>Gokarting</li>
                    <li>Bowling</li>
                    <li>Lasertag</li>
                    <li>Paintball</li>
                    <li>Off Road ATV</li>
                  </ul>
                </div>
              </ul>
            </li>


            <li className="relative group">
              <a
                href="#participate"
                className="block py-2 md:py-0 hover:text-pink-400 hover:underline decoration-pink-400 decoration-2 underline-offset-[25px] flex items-center"
              >
                Participate
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
              <ul className="absolute hidden group-hover:block bg-purple-800 text-white md:mt-6 rounded-lg shadow-lg z-50 w-64">
                <li className="border-b border-purple-600">
                  <a
                    href="#events"
                    className="block px-4 py-3 hover:bg-pink-500"
                  >
                    <h3 className="text-pink-400 font-bold">Events</h3>
                    <p className="text-sm text-gray-300">
                      Explore exciting events and activities
                    </p>
                  </a>
                </li>
                <li>
                  <a
                    href="#up-your-game"
                    className="block px-4 py-3 hover:bg-pink-500"
                  >
                    <h3 className="text-pink-400 font-bold">Up Your Game</h3>
                    <p className="text-sm text-gray-300">
                      Enhance your skills with our programs
                    </p>
                  </a>
                </li>
              </ul>
            </li>


            <li className="relative group">
              <a
                href="#host"
                className="block py-2 md:py-0 hover:text-blue-400 hover:underline decoration-blue-400 decoration-2 underline-offset-[25px] flex items-center"
              >
                Host
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
              <ul className="absolute hidden group-hover:block bg-blue-800 text-white md:mt-6 rounded-lg shadow-lg z-50 w-64">
                <li className="border-b border-blue-600">
                  <a
                    href="#birthday"
                    className="block px-4 py-3 hover:bg-blue-500"
                  >
                    <h3 className="text-blue-400 font-bold">
                      Birthdays at PLaY
                    </h3>
                    <p className="text-sm text-gray-300">
                      Celebrate Memorable Birthdays Here!
                    </p>
                  </a>
                </li>
                <li className="border-b border-blue-600">
                  <a
                    href="#corporate"
                    className="block px-4 py-3 hover:bg-blue-500"
                  >
                    <h3 className="text-blue-400 font-bold">
                      Corporate Events
                    </h3>
                    <p className="text-sm text-gray-300">
                      Dynamic events and experiences
                    </p>
                  </a>
                </li>
                <li className="border-b border-blue-600">
                  <a
                    href="#perfect-dates"
                    className="block px-4 py-3 hover:bg-blue-500"
                  >
                    <h3 className="text-blue-400 font-bold">
                      Perfect Dates at PLaY
                    </h3>
                    <p className="text-sm text-gray-300">
                      Connecting with or without a reason to celebrate
                    </p>
                  </a>
                </li>
                <li>
                  <a
                    href="#plan-event"
                    className="block px-4 py-3 hover:bg-blue-500"
                  >
                    <h3 className="text-blue-400 font-bold">Plan Your Event</h3>
                    <p className="text-sm text-gray-300">
                      Fill out a form to make an enquiry
                    </p>
                  </a>
                </li>
              </ul>
            </li>


            <li className="relative group">
              <a
                href="#fnb"
                className="block py-2 md:py-0 hover:text-purple-400 hover:underline decoration-purple-400 decoration-2 underline-offset-[25px] flex items-center"
              >
                F&B
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
              <ul className="absolute hidden group-hover:block bg-purple-800 text-white md:mt-6 rounded-lg shadow-lg z-50 w-64">
                <li className="border-b border-purple-600">
                  <a
                    href="#menu"
                    className="block px-4 py-3 hover:bg-purple-500"
                  >
                    <h3 className="text-purple-400 font-bold">Menu</h3>
                    <p className="text-sm text-gray-300">
                      Discover our delicious offerings
                    </p>
                  </a>
                </li>
                <li>
                  <a
                    href="#offers"
                    className="block px-4 py-3 hover:bg-purple-500"
                  >
                    <h3 className="text-purple-400 font-bold">Offers</h3>
                    <p className="text-sm text-gray-300">
                      Check out our latest deals and discounts
                    </p>
                  </a>
                </li>
              </ul>
            </li>


            <li>
              <a
                href="#about"
                className="block py-2 md:py-0 hover:text-pink-400 hover:underline decoration-pink-400 decoration-2 underline-offset-[25px]"
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
