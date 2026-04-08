export default function Island() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-10 bg-black text-white">
      <h1 className="text-5xl font-bold mb-6 tracking-wide">
        🏝️ The Island
      </h1>

      <p className="text-xl max-w-2xl leading-relaxed opacity-90">
        The Island is your first realm — a sanctuary, a proving ground, and the
        opening chapter of your Ocean Tide Drop journey.
      </p>

      <div className="mt-10">
        <a
          href="/founders"
          className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all duration-300 shadow-lg"
        >
          Continue the Journey
        </a>
      </div>
    </div>
  );
}
