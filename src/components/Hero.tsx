export function Hero() {
  return (
    <section className="text-center py-20 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Explore the Possibilities of{" "}
        <span className="text-indigo-400">AI Book Writing</span> with BookAI
      </h1>
      <p className="text-xl mb-8">
        Unleash the power of AI to create captivating books in minutes.
        Download, Distribute wherever you want. Generate unlimited free books
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
          Get Started
        </button>
        <button className="bg-transparent border border-indigo-400 text-indigo-400 px-6 py-3 rounded-lg">
          Get API Access
        </button>
      </div>
    </section>
  );
}
