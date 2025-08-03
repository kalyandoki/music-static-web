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

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {episodes.map((ep, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-[#1e1e1e] to-[#292929] p-6 rounded-2xl shadow-lg border border-[#333] hover:shadow-indigo-500/20 transition duration-300"
          >
            <div className="flex gap-4 items-start">
              {/* Album Art (optional) */}
              <div className="w-50 h-50 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                <img
                  src={ep.cover || ep.cover} // optional album image
                  alt={ep.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Episode Details */}
              <div className="flex-1 space-y-1 w-25 p-2">
                <h3 className="text-xl font-semibold ml-2 text-indigo-300">
                  {ep.title}
                </h3>
                <p className="text-sm ml-2 text-gray-400">by {ep.artist}</p>
                <audio
                  controls
                  className="w-full mt-10 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <source src={ep.url} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>

            {/* Audio Player */}
            {/* <audio
              controls
              className="w-1/2 mt-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <source src={ep.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio> */}
          </div>
        ))}
      </div>
    </section>
  );
}
