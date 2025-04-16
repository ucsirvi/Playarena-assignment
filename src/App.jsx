import React from "react";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import PlayYourWay from "./components/PlayYourWay.jsx";
import BookYourSlots from "./components/BookYourSlots.jsx";
import NowPlaying from "./components/NowPlaying.jsx";
import PlayItCool from "./components/PlayItCool.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <PlayYourWay />
      <NowPlaying />
      <BookYourSlots />
      <PlayItCool />
      <Footer />
    </div>
  );
};

export default App;
