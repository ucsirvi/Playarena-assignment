import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-900 to-blue-900 text-purple-100 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-2xl font-semibold text-pink-400 mb-4">
            Stay Connected
          </h3>
          <p className="text-purple-200 mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex items-center bg-purple-800 rounded-lg overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-purple-900 outline-none"
            />
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 transition">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 9.172a4 4 0 010 5.656m0-5.656L21 3m-6.172 6.172L3 21"
                ></path>
              </svg>
            </button>
          </div>
        </div>


        <div>
          <h3 className="text-xl font-semibold text-pink-400 mb-4">
            Contact Us
          </h3>
          <p className="text-purple-200 leading-relaxed">
            Play Arena Sports & Adventure Pvt. Ltd.
            <br />
            Sy#75, Hosa Road, off Sarjapur Road,
            <br />
            Bangalore 560035
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <img
                src="https://playarena.in/wp-content/uploads/2024/05/Instagram.svg"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
            <a href="#" aria-label="YouTube" className="hover:opacity-80">
              <img
                src="https://playarena.in/wp-content/uploads/2024/05/YouTube.svg"
                alt="YouTube"
                className="w-6 h-6"
              />
            </a>
            <a href="#" aria-label="Facebook" className="hover:opacity-80">
              <img
                src="https://playarena.in/wp-content/uploads/2024/05/Facebook.svg"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
              <img
                src="https://playarena.in/wp-content/uploads/2024/05/LinkedIn.svg"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>


        <div>
          <h3 className="text-xl font-semibold text-pink-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Prime
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Pixel
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Studio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Union
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Junior
              </a>
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-pink-400 mt-8 mb-4">
            Food & Beverages
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Food Court
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Restaurant
              </a>
            </li>
          </ul>
        </div>


        <div>
          <h3 className="text-xl font-semibold text-pink-400 mb-4">
            Participate
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Up Your Game
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Events
              </a>
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-pink-400 mt-8 mb-4">
            Host
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Birthdays at PLaY
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Corporate Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Make an Enquiry
              </a>
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-pink-400 mt-8 mb-4">
            Contact
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                99000 999 22
              </a>
            </li>
            <li>
              <a
                href="mailto:info@playarena.in"
                className="hover:text-pink-400 transition"
              >
                info@playarena.in
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Get Directions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-purple-700 pt-6">
        <div className="text-center text-sm text-purple-200">
          <p className="mb-2">
            Copyright &copy; 2025 Play Arena. All rights reserved.
          </p>
          <p>
            <a href="#" className="hover:text-pink-400 transition">
              Disclaimer
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-pink-400 transition">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-pink-400 transition">
              About Us
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
