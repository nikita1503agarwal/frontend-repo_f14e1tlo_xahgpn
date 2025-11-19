import React from 'react'

const bubbles = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  size: 6 + Math.random() * 16,
  left: Math.random() * 100,
  duration: 6 + Math.random() * 10,
  delay: Math.random() * 6,
  blur: Math.random() > 0.5 ? 8 : 2,
  opacity: 0.35 + Math.random() * 0.5,
}))

export default function OrbitingSphere() {
  return (
    <div className="relative mx-auto h-[360px] w-[360px] sm:h-[420px] sm:w-[420px]">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.25),transparent_60%)] blur-2xl" />

      {/* Core sphere */}
      <div
        className="absolute inset-0 m-auto aspect-square w-[78%] rounded-full shadow-[0_0_120px_rgba(16,185,129,0.35)] animate-spin-slower"
        style={{
          background: `radial-gradient(closest-side at 35% 35%, rgba(34,197,94,0.95), rgba(16,185,129,0.55) 35%, rgba(6,95,70,0.35) 65%, rgba(0,0,0,0.2) 100%),
             radial-gradient(circle at 65% 65%, rgba(34,197,94,0.6), rgba(0,0,0,0) 40%)`,
          boxShadow:
            'inset -30px -30px 80px rgba(0,0,0,0.45), inset 18px 18px 40px rgba(34,197,94,0.25), 0 0 0 1px rgba(16,185,129,0.25)'
        }}
      >
        {/* Fake specular highlight */}
        <div className="absolute -top-4 left-8 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute top-10 right-12 h-8 w-20 rounded-full bg-white/10 blur-lg rotate-12" />
      </div>

      {/* Orbit lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[86%] w-[86%]">
          <div className="absolute inset-0 rounded-full border border-emerald-400/10" />
          <div className="absolute inset-0 rotate-45 rounded-full border border-emerald-400/10" />
          <div className="absolute inset-0 -rotate-45 rounded-full border border-emerald-400/10" />
        </div>
      </div>

      {/* Bubbles */}
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="absolute rounded-full bg-emerald-400/30 backdrop-blur-[2px] shadow-[0_0_20px_rgba(16,185,129,0.55)] animate-bubble"
          style={{
            left: `${b.left}%`,
            bottom: '-40px',
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            filter: `blur(${b.blur}px)`,
            opacity: b.opacity,
          }}
        />
      ))}

      {/* Small orbiters */}
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute left-0 right-0 top-1/2 mx-auto h-2 w-2 -translate-y-1/2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(34,197,94,0.9)]" />
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-200 shadow-[0_0_16px_rgba(34,197,94,0.9)]" />
        <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(34,197,94,0.8)]" />
      </div>
    </div>
  )
}
