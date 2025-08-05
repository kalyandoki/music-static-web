export default function Contact() {
  return (
    <section className="bg-[#000] px-6 py-20 text-white font-poppins">
      <h2 className="text-4xl font-semibold text-center mb-12 text-[#fff] drop-shadow-md">
        📬 Contact Us
      </h2>

      <form className="max-w-xl mx-auto space-y-6 bg-[#fff] p-8 rounded-2xl shadow-lg border border-[#333]">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-[#000]"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg bg-[#fff] border border-[#444] text-[#000] placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-[#000]"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Type your message here..."
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-[#fff] border border-[#444] text-[#000] placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none transition"
          ></textarea>
        </div>

        <button
          type="submit"
          className=" w-full md:w-1/3 py-3 bg-[#df7307fd] hover:bg-[#df7307fd] rounded-lg text-lg font-semibold transition duration-200 shadow-md hover:shadow-indigo-500/30"
        >
          🚀 Send Message
        </button>
      </form>
    </section>
  );
}
