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
];

export default function Episodes() {
  return (
    <section className="bg-black px-4 py-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-md">
        📻 Latest Episodes
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {episodes.map((ep, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-[#1e1e1e] to-[#292929] p-4 sm:p-6 rounded-2xl shadow-lg border border-[#333] hover:shadow-indigo-500/20 transition duration-300"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              {/* Album Art */}
              <div className="w-full sm:w-32 h-32 sm:h-35 rounded-lg overflow-hidden shadow-md">
                <img
                  src={ep.cover || ep.cover}
                  alt={ep.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Episode Details */}
              <div className="flex-1 w-full md:pl-6">
                <h3 className="text-lg pl-2 sm:text-xl font-semibold text-indigo-300 mt-2 sm:mt-0">
                  {ep.title}
                </h3>
                <p className="text-sm pl-2 text-gray-400 mb-3">
                  by {ep.artist}
                </p>

                <audio
                  controls
                  className="w-full md:w-10/12 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <source src={ep.url} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
