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

      // Prevent default browser jump to anchor
      window.history.replaceState(null, "", `#${newHash}`);
      setHash(newHash);

      // Scroll to the element smoothly
      setTimeout(() => {
        const target = document.getElementById(newHash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  // Scroll to top for terms/privacy pages
  useEffect(() => {
    if (hash === "terms" || hash === "privacy") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  const showMainSections = hash !== "terms" && hash !== "privacy";

  return (
    <div className="bg-black text-white w-full max-w-[100vw] overflow-x-hidden font-poppins">
      {/* Header always visible */}
      <MainHeader />

      {/* Main sections visible only for home */}
      {showMainSections && (
        <>
          <main className="scroll-smooth">
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
          </main>
        </>
      )}

      {/* Show Terms */}
      {!showMainSections && hash === "terms" && (
        <section className="min-h-screen flex items-center justify-center px-4 py-20 mt-8">
          <Terms />
        </section>
      )}

      {/* Show Privacy */}
      {!showMainSections && hash === "privacy" && (
        <section className="min-h-screen flex items-center justify-center px-4 py-20 mt-8">
          <Privacy />
        </section>
      )}

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}
