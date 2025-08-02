import heroImg from "../assets/images/hero-music.jpg";
import heroBg from "../assets/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      style={{ backgroundImage: `url(${heroBg})` }}
      className="min-h-screen bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-12 py-12 flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white rounded-xl">
        {/* === Left Text Content === */}
        <div className="space-y-6 text-center md:text-left px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Welcome to <span className="text-indigo-400">Music Cast</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300">
            Dive into music, radio, podcasts, and more — all in one place.
          </p>
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-full font-semibold shadow-md text-white">
            Start Listening
          </button>
        </div>

        {/* === Right Image === */}
        <div className="flex justify-center md:justify-end px-2">
          <img
            src={heroImg}
            alt="Music Streaming"
            className="w-full max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-xl rounded-3xl shadow-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
