import React, { useState } from "react";
import ce1 from "../assets/images/ce1.jpg";
import ce2 from "../assets/images/ce2.jpg";
import ce3 from "../assets/images/ce3.webp";
import ce4 from "../assets/images/ce4.jpeg";
import ce5 from "../assets/images/ce5.jpeg";

const podcastData = [
  {
    name: "Virat Kohli",
    image: ce1,
    description:
      "Virat shares insights on fitness, focus, and his cricket journey.",
    episodes: [
      { title: "Captain Mindset", audio: "/audio/virat1.mp3" },
      { title: "Power of Discipline", audio: "/audio/virat2.mp3" },
    ],
  },
  {
    name: "Priyanka Chopra",
    image: ce5,
    description:
      "From Bollywood to Hollywood, Priyanka’s journey is inspiring.",
    episodes: [
      { title: "Breaking Barriers", audio: "/audio/priyanka1.mp3" },
      { title: "The Global Stage", audio: "/audio/priyanka2.mp3" },
    ],
  },
  {
    name: "A.R. Rahman",
    image: ce2,
    description: "Rahman talks music, spirituality, and creative freedom.",
    episodes: [
      { title: "Soulful Sounds", audio: "/audio/rahman1.mp3" },
      { title: "Inside the Studio", audio: "/audio/rahman2.mp3" },
    ],
  },
  {
    name: "Sundar Pichai",
    image: ce3,
    description: "Sundar on tech innovation and AI's future.",
    episodes: [
      { title: "Tech for Good", audio: "/audio/sundar1.mp3" },
      { title: "AI & Beyond", audio: "/audio/sundar2.mp3" },
    ],
  },
  {
    name: "Deepika Padukone",
    image: ce4,
    description: "Mental health, acting, and staying real in the spotlight.",
    episodes: [
      { title: "The Inner Journey", audio: "/audio/deepika1.mp3" },
      { title: "Cinema & Self", audio: "/audio/deepika2.mp3" },
    ],
  },
];

const Podcast = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-[#0f0f0f] text-white py-16 px-4 pt-30">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        🎙️ Podcasts
      </h2>

      {!selected ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {podcastData.map((celeb, i) => (
            <div
              key={i}
              onClick={() => setSelected(celeb)}
              className="cursor-pointer hover:scale-105 transition duration-300"
            >
              <img
                src={celeb.image}
                alt={celeb.name}
                className="w-full h-60 object-cover rounded-xl shadow-lg"
              />
              <p className="mt-2 text-center text-lg font-semibold">
                {celeb.name}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* === Left Side Image === */}
          <div className="flex justify-center">
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full max-w-md h-120 rounded-3xl shadow-2xl object-cover"
            />
          </div>

          {/* === Right Side Content === */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-[#f97316]">
              {selected.name}
            </h3>
            <p className="text-gray-300">{selected.description}</p>

            <h4 className="mt-6 text-xl font-semibold">🎙️ Episodes</h4>
            <div className="space-y-4">
              {selected.episodes.map((ep, i) => (
                <div key={i}>
                  <p className="text-gray-200 font-medium">{ep.title}</p>
                  <audio controls className="w-full rounded">
                    <source src={ep.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelected(null)}
              className="mt-6 px-6 py-2 bg-[#f97316] rounded-full text-white hover:bg-orange-600"
            >
              ← Back to All Podcasts
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Podcast;
