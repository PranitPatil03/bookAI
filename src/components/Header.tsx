export function Header() {
  return (
    <header className="p-4 flex justify-between items-center bg-purple-800 text-white">
      <div className="flex items-center">
        <img
          src="/path-to-logo.png"
          alt="BookAI Logo"
          className="h-8 w-8 mr-2"
        />
        <span className="text-xl font-bold">BookAI</span>
      </div>
      <nav className="hidden md:flex space-x-4">
        <a href="#features" className="hover:text-indigo-400">
          Features
        </a>
        <a href="#how-it-works" className="hover:text-indigo-400">
          How It Works
        </a>
        <a href="#roadmap" className="hover:text-indigo-400">
          Roadmap
        </a>
        <a href="#api" className="hover:text-indigo-400">
          API
        </a>
        <a href="#price" className="hover:text-indigo-400">
          Price
        </a>
        <a href="#models" className="hover:text-indigo-400">
          Models
        </a>
      </nav>
      <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded">
        Login / Sign Up
      </button>
    </header>
  );
}
