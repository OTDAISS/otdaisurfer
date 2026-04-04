export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-10 bg-black text-white">
      <h1 className="text-5xl font-bold mb-6 tracking-wide">
        🌊 Ocean Tide Drop
      </h1>

      <p className="text-xl max-w-2xl leading-relaxed opacity-90">
        Welcome, Realmwalker.  
        Step into the neon‑ocean universe where survival, storycraft, and skill mastery merge into one living realm.
      </p>

      <div className="mt-10">
        <a
          href="/founders"
          className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all duration-300 shadow-lg"
        >
          Enter the Realm
        </a>
      </div>
    </div>
  );
}
