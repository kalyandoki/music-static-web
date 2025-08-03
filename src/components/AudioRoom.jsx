// import { FaBroadcastTower } from "react-icons/fa";
// import { GiWifiRouter } from "react-icons/gi";
import { GiAerialSignal } from "react-icons/gi";
import React, { useState } from "react";
import img1 from "../assets/images/ce1.jpg";
import img2 from "../assets/images/ce2.jpg";
import img3 from "../assets/images/ce1.jpg";
import img4 from "../assets/images/ce1.jpg";
import img5 from "../assets/images/ce1.jpg";
import img6 from "../assets/images/ce1.jpg";
import img7 from "../assets/images/ce1.jpg";
import img8 from "../assets/images/ce1.jpg";
import img9 from "../assets/images/ce1.jpg";
import img10 from "../assets/images/ce1.jpg";

import ep1 from "../assets/images/morn3.jpg";
import ep2 from "../assets/images/even1.jpg";
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
  {
    title: "Carefree",
    artist: "Kevin MacLeod",
    url: "/audio/Care.mp3",
    cover: ep1,
  },
];

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
export default function AudioRoom() {
  const [showAll, setShowAll] = useState(false);

  const firstFive = images.slice(0, 6);
  const remaining = images.length - 5;
  return (
    <section className="bg-black px-4 py-20 text-white pt-30">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#fff] drop-shadow-md flex items-center justify-center gap-2">
        <span role="img" aria-label="Radio" className="text-4xl">
          📻
        </span>
        <span>Audio Room</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {episodes.map((ep, i) => (
          <div
            key={i}
            className="bg-[#fff] p-6 rounded-2xl shadow-lg border border-[#333] hover:shadow-indigo-500/20 transition duration-300"
          >
            <div className="flex gap-4 items-start">
              {/* Album Art (optional) */}
              <div className="flex flex-col md:flex-col items-center gap-4">
                {/* Album Art */}
                <div className="w-20 h-20 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                  <img
                    src={ep.cover}
                    alt={ep.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Live Radio Indicator */}
                <div className="flex items-center gap-1 text-[#000]">
                  <div className="relative w-10 h-10">
                    {/* Horizontal Signal (rotated 90°) */}
                    <GiAerialSignal className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-60 text-[#000] text-xl animate-pulse" />
                  </div>
                  Live Stream
                </div>
              </div>

              {/* Episode Details */}
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-semibold text-[#000]">
                  {ep.title}
                </h3>
                <p className="text-sm text-gray-800">by {ep.artist}</p>
              </div>

              {/* <div className="w-20 h-20 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                <img
                  src={ep.cover || ep.cover} // optional album image
                  alt={ep.title}
                  className="w-full h-full object-cover"
                />
              </div> */}
              <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-2 mt-4 md:w-25">
                {firstFive.map((img, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full overflow-hidden border border-gray-600"
                  >
                    <img
                      src={img}
                      alt={`preview-${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                {remaining > 0 && (
                  <div
                    className="w-10 h-10 rounded-lg overflow-hidden bg-[#222] text-white flex items-center justify-center text-sm font-semibold border border-gray-600 cursor-pointer hover:bg-[#333]"
                    onClick={() => setShowAll(true)}
                  >
                    +{remaining}
                  </div>
                )}

                {/* === Popup for Remaining Images === */}
                {showAll && (
                  <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center px-4">
                    <button
                      onClick={() => setShowAll(false)}
                      className="absolute top-6 right-6 text-white text-2xl font-bold"
                    >
                      ✕
                    </button>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-w-5xl">
                      {images.map((img, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-xl overflow-hidden border border-gray-700"
                        >
                          <img
                            src={img}
                            alt={`full-${i}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
