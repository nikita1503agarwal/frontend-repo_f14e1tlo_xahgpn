import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-emerald-100">
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(16,185,129,0.35),transparent)]" />

      {/* Nav */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="inline-flex items-center gap-3">
            <div className="h-3.5 w-3.5 rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(16,185,129,0.9)]" />
            <span className="text-sm font-semibold tracking-widest text-emerald-400">VIBE</span>
            <span className="text-sm font-semibold tracking-widest text-white">CODING</span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-emerald-200/80 sm:flex">
            <a className="hover:text-emerald-100" href="#features">Features</a>
            <a className="hover:text-emerald-100" href="#get-started">Get Started</a>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <Hero />
        <Features />

        <section id="get-started" className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-2xl border border-emerald-400/20 bg-gradient-to-b from-emerald-950/50 to-black/60 p-8 text-center shadow-[inset_0_1px_0_rgba(16,185,129,0.15),0_10px_30px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-bold text-emerald-300">Start vibing with code</h2>
            <p className="mx-auto mt-2 max-w-2xl text-emerald-100/80">Open the chat on the left, describe what you want, and watch the workspace come alive with a spinning 3D core and floating bubbles.</p>
            <div className="mt-6">
              <a href="#" className="rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-black shadow-[0_10px_30px_rgba(16,185,129,0.45)] transition hover:bg-emerald-400">Launch Workspace</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Ambient particles */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/4 top-20 h-24 w-24 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-1/4 top-40 h-24 w-24 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute left-1/2 bottom-20 h-24 w-24 rounded-full bg-emerald-600/10 blur-3xl" />
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 14s linear infinite; }
        @keyframes spin-slower { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slower { animation: spin-slower 28s linear infinite; }
        @keyframes bubble { 0% { transform: translateY(0) scale(1); opacity: 0; } 10% { opacity: 1; } 100% { transform: translateY(-420px) scale(1.2); opacity: 0; } }
        .animate-bubble { animation: bubble 9s ease-in infinite; }
      `}</style>
    </div>
  )
}

export default App
