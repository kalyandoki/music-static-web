import music1 from "../assets/images/now1.jpg";

export default function NowPlaying() {
  return (
    <section className="bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1e1e1e] px-4 py-20 text-white font-poppins">
      <h2 className="text-4xl font-bold text-center mb-12 tracking-tight text-indigo-400 drop-shadow-md">
        🎶 Now Playing
      </h2>

      <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a] p-8 sm:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-10 border border-[#3a3a3a] backdrop-blur-sm">
        {/* === Album Cover === */}
        <div className="w-full max-w-xs">
          <img
            src={music1}
            alt="Album Art"
            className="w-full h-auto rounded-2xl shadow-xl ring-2 ring-indigo-500/20 hover:scale-105 transition-transform duration-300 object-cover"
          />
        </div>

        {/* === Song Info + Audio Player === */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h3 className="text-3xl font-extrabold text-indigo-300 tracking-wide">
            Investigations
          </h3>
          <p className="text-sm text-gray-400 font-medium">by Kevin MacLeod</p>

          <audio
            controls
            className="w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-4"
          >
            <source src="/audio/music1A.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </section>
  );
}
