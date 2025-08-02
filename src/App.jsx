import React from "react";
import MainHeader from "./components/MainHeader";
import Hero from "./components/Hero";
import NowPlaying from "./components/NowPlaying";
import Episodes from "./components/Episodes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RadioPlayer from "./components/RadioPlayer";
import Podcast from "./components/Podcast";
import AudioRoom from "./components/AudioRoom";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      <MainHeader />
      <Hero />
      <RadioPlayer />
      <Podcast />
      <AudioRoom />
      {/* <NowPlaying /> */}
      {/* <Episodes /> */}
      <Contact />
      <Footer />
    </div>
  );
}
