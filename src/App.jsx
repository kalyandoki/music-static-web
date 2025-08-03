// import React from "react";
// import MainHeader from "./components/MainHeader";
// import Hero from "./components/Hero";
// import NowPlaying from "./components/NowPlaying";
// import Episodes from "./components/Episodes";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import RadioPlayer from "./components/RadioPlayer";
// import Podcast from "./components/Podcast";
// import AudioRoom from "./components/AudioRoom";

// export default function App() {
//   return (
//     <div className="bg-black text-white font-sans">
//       <MainHeader />

//       <section id="home">
//         <Hero />
//       </section>

//       <section id="radio">
//         <RadioPlayer />
//       </section>

//       <section id="podcast">
//         <Podcast />
//         <Episodes />
//       </section>

//       <section id="audio-room">
//         <AudioRoom />
//       </section>

//       <section id="contact-us">
//         <Contact />
//       </section>
//       <Footer />
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import MainHeader from "./components/MainHeader";
import Hero from "./components/Hero";
import RadioPlayer from "./components/RadioPlayer";
import Podcast from "./components/Podcast";
import Episodes from "./components/Episodes";
import AudioRoom from "./components/AudioRoom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";

export default function App() {
  const [hash, setHash] = useState("home");

  useEffect(() => {
    const updateHash = () => {
      const newHash = window.location.hash.replace("#", "") || "home";

      // Prevent browser default scroll to anchor
      window.history.replaceState(null, "", `#${newHash}`);

      setHash(newHash);

      // Smooth scroll to top after delay
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const showMainSections = hash !== "terms" && hash !== "privacy";

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header always visible */}
      <MainHeader />

      {/* Main sections visible only for home */}
      {showMainSections && (
        <>
          <section id="home">
            <Hero />
          </section>

          <section id="radio">
            <RadioPlayer />
          </section>

          <section id="podcast">
            <Podcast />
            <Episodes />
          </section>

          <section id="audio-room">
            <AudioRoom />
          </section>

          <section id="contact-us">
            <Contact />
          </section>
        </>
      )}

      {/* Show Terms */}
      {!showMainSections && hash === "terms" && (
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <Terms />
        </section>
      )}

      {/* Show Privacy */}
      {!showMainSections && hash === "privacy" && (
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <Privacy />
        </section>
      )}

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}
