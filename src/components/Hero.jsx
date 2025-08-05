import heroImg from "../assets/images/logo-h.png";
import heroBg from "../assets/images/hero-bg.jpg";
import CarouselComponent from "./CarouselComponent";

export default function Hero() {
  return (
    <div className="pt-20">
      <CarouselComponent />

      <section
        style={{ backgroundImage: `url(${heroBg})` }}
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center font-poppins"
      >
        <div className="w-full max-w-7xl xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white rounded-xl">
          {/* === Left Text Content === */}
          <div className="space-y-6 text-center md:text-left px-2 font-poppins">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Welcome to <span className="text-[#df7307fd]">Voice Of NRI</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300">
              Dive into music, radio, podcasts, and more — all in one place.
            </p>
            <a href="/radio?autoplay=true">
              <button className="px-6 py-3 bg-[#df7307fd] hover:bg-[#966f49fd] text-2xl transition rounded-2xl font-bold shadow-md text-white">
                Download App
              </button>
            </a>
          </div>

          {/* === Right Image === */}
          <div className="flex justify-center md:justify-end px-2">
            <img
              src={heroImg}
              alt="Music Streaming"
              className="w-full max-w-[360px] sm:max-w-md md:max-w-md lg:max-w-xl rounded-3xl shadow-2xl object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
