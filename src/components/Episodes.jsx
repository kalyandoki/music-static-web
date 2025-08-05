import React, { useRef, useContext } from "react";
import ep1 from "../assets/images/morn3.jpg";
import ep2 from "../assets/images/even1.jpg";

import { RadioContext } from "../context/RadioContext";

const episodes = [
  {
    title: "Carefree",
    artist: "Kevin MacLeod",
    url: "/audio/Care.mp3",
    cover: ep1,
  },
  {
    title: "Flow",
    artist: "Luke Bergs",
    url: "/audio/Luke.mp3",
    cover: ep2,
  },
];

export default function Episodes() {
  const audioRefs = useRef([]);
  const { radioRef } = useContext(RadioContext);

  const handlePlay = (index) => {
    // Pause radio audio if playing
    if (radioRef.current && !radioRef.current.paused) {
      radioRef.current.pause();
      radioRef.current.currentTime = 0;
    }

    // Pause other episode audios
    audioRefs.current.forEach((audio, i) => {
      if (i !== index && audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  };

  return (
    <section className="bg-black px-4 py-20 text-white font-poppins">
      <h2 className="text-4xl font-semibold text-center mb-12 drop-shadow-md">
        📻 Latest Episodes
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {episodes.map((ep, i) => (
          <div
            key={i}
            className="bg-[#ffffffa9] p-4 sm:p-6 rounded-2xl shadow-lg border border-[#333] hover:shadow-indigo-500/20 transition duration-300"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              {/* Album Art */}
              <div className="w-full sm:w-32 h-32 sm:h-35 rounded-lg overflow-hidden shadow-md">
                <img
                  src={ep.cover}
                  alt={ep.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Episode Details */}
              <div className="flex-1 w-full md:pl-6">
                <h3 className="text-lg pl-2 sm:text-xl font-semibold text-[#000] mt-2 sm:mt-0">
                  {ep.title}
                </h3>
                <p className="text-sm pl-2 text-[#000] mb-3 mt-2">
                  by {ep.artist}
                </p>

                <audio
                  ref={(el) => (audioRefs.current[i] = el)}
                  controls
                  onPlay={() => handlePlay(i)}
                  className="w-full md:w-10/12 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 md:mt-6"
                >
                  <source src={ep.url} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        audio::-webkit-media-controls-play-button {
          background-color: orange;
          border-radius: 50%;
        }

        /* For Firefox (limited styling available) */
        audio::-moz-media-controls-play-button {
          background-color: orange;
        }

        audio.custom-audio {
          background-color: #f5f5f5;
          border-radius: 12px;
        }
      `}</style>
    </section>
  );
}
