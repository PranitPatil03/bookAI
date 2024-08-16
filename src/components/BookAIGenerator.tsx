export function BookAIGenerator() {
  return (
    <section className="max-w-4xl mx-auto bg-purple-800 rounded-lg p-6 mb-20">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <img
            src="/path-to-book-cover.png"
            alt="AI Book Generator"
            className="w-full rounded-lg"
          />
          <input
            type="text"
            placeholder="Book Topic"
            className="w-full mt-4 p-2 rounded bg-purple-700 text-white"
          />
          <input
            type="number"
            placeholder="Target Word Count"
            className="w-full mt-2 p-2 rounded bg-purple-700 text-white"
          />
          <button className="w-full mt-2 bg-indigo-600 text-white p-2 rounded">
            Generate Book
          </button>
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">AI Book Generator</h2>
          <textarea
            className="w-full h-48 p-2 rounded bg-purple-700 text-white"
            placeholder="Generated content will appear here..."
          ></textarea>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold">Word Count</h3>
              <p>440</p>
            </div>
            <div>
              <h3 className="font-bold">Readability Score</h3>
              <p>183 (Flesch-Kincaid)</p>
            </div>
            <div>
              <h3 className="font-bold">Genre Classification</h3>
              <p>Sci-Fi</p>
            </div>
            <div>
              <h3 className="font-bold">Sentiment Analysis</h3>
              <p>Negative</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
