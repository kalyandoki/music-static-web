export default function Contact() {
  return (
    <section className="bg-[#ffffffee] px-6 py-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#000] drop-shadow-md">
        📬 Contact Us
      </h2>

      <form className="max-w-2xl mx-auto space-y-6 bg-gradient-to-br from-[#1c1c1c] to-[#2b2b2b] p-8 rounded-2xl shadow-lg border border-[#333]">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-[#444] text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Type your message here..."
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-[#444] text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none transition"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-lg font-semibold transition duration-200 shadow-md hover:shadow-indigo-500/30"
        >
          🚀 Send Message
        </button>
      </form>
    </section>
  );
}
