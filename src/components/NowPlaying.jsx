import React from "react";
import Slider from "react-slick"; // Install react-slick and slick-carousel for slider functionality
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NowPlaying = () => {
  const events = [
    {
      title: "Pop-a-bubble party",
      description:
        "Dive into bubbly fun this summer! Enjoy exciting bubble activities, laughter, and endless play from April 25th to 27th. Don’t miss out—let’s pop, play, and create magical memories!",
      cardDetails: "where every bubble brings a burst of giggles!",
      date: "25th – 27th April",
      image:
        "https://playarena.in/wp-content/uploads/2025/04/Pop-a-bubble-party.png",
      bgColor: "bg-pink-500",
    },
    {
      title: "The Perfect Shot",
      description:
        "Join our Photography Workshop from 7th–11th April & a special kids’ session on 12th April, 4 PM onwards.",
      cardDetails: "Snap it, frame it, perfect it!",
      date: "7th–11th April",
      image:
        "https://playarena.in/wp-content/uploads/2025/04/The-Perfect-Shot.png",
      bgColor: "bg-purple-500",
    },
    {
      title: "Egg & Seek",
      description:
        "Let the Easter adventure begin on 18th April, 12 PM onwards! Hunt for eggs, meet the Easter Bunny, and enjoy a day filled with surprises, laughter & festive fun!",
      cardDetails: "Let the easter adventure begin!",
      date: "18th April 2025",
      image: "https://playarena.in/wp-content/uploads/2025/04/Egg-Seek.png",
      bgColor: "bg-blue-500",
    },
    {
      title: "Paw-some day out",
      description:
        "Bring your furry friend for a fun-filled day on 11th April, 12 PM onwards! Enjoy games, treats, and tail-wagging fun because every pet deserves a special day out!",
      cardDetails: "a fun day out with your furry friend!",
      date: "11th April 2025",
      image:
        "https://playarena.in/wp-content/uploads/2025/04/Paw-some-day-out.png",
      bgColor: "bg-pink-600",
    },
    {
      title: "Glow it & Grow it",
      description:
        "Join us on 19th April 2025 for a creative gardening workshop, where little hands dig, plant, and craft nature-inspired fun,  Let’s get growing!",
      cardDetails: "a fun day out with your furry friend!",
      date: "19th April 2025",
      image:
        "https://playarena.in/wp-content/uploads/2025/04/Glow-it-Grow-it.png",
      bgColor: "bg-purple-600",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-b from-purple-900 to-blue-900 text-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-left mb-8 text-pink-400">
          NOW PLAYING
        </h2>
        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={index} className="px-4">
              {/* Event Card */}
              <div
                className={`rounded-lg shadow-lg overflow-hidden ${event.bgColor} hover:shadow-xl transition-transform transform hover:-translate-y-2`}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              {/* Event Details */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-pink-400">
                  {event.title}
                </h3>
                <p className="text-gray-400">{event.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default NowPlaying;
