import { FaBroadcastTower } from "react-icons/fa";
import radioImg from "../assets/images/rd2.webp";
import radioBg from "../assets/images/hero-bg1.jpg";
const RadioPlayer = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat text-white pt-10"
      style={{ backgroundImage: `url(${radioBg})` }}
    >
      <div className="bg-black/70 px-4 py-20">
        {/* === Section Heading === */}
        <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-12 text-center">
          🎧 Radio
        </h3>

        <div className="max-w-6xl mx-auto space-y-12 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* === Left Side Image === */}
            <div className="flex justify-center">
              <img
                src={radioImg}
                alt="Live radio visual"
                className="w-full max-w-md rounded-3xl shadow-2xl object-cover"
              />
            </div>

            {/* === Right Side Content === */}
            <div className="text-center md:text-left space-y-6">
              <div className="flex justify-center md:justify-start items-center gap-3">
                <FaBroadcastTower className="text-[#df7307fd] text-4xl animate-pulse" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Live <span className="text-[#df7307fd]">Radio Stream</span>
                </h2>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                Tune in to our 24/7 live radio — where every beat matters.{" "}
                <br />
                Enjoy the freshest music, exclusive artist interviews, and
                trending talk shows. <br />
                Curated by passionate DJs and creators who know what moves you.{" "}
                <br />
                Whether you're working, relaxing, or partying — we've got your
                vibe. <br />
                Hit play and experience audio entertainment like never before.
              </p>

              {/* === Audio Player === */}
              <div className="flex justify-center md:justify-start">
                <audio
                  controls
                  className="w-full md:w-3/4 rounded-4xl focus:outline-none focus:ring-2 focus:ring-[#df7307fd] bg-white"
                >
                  <source src="/audio/emo.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadioPlayer;
