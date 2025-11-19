import React from 'react'
import { Rocket, Sparkles, Laptop2, Workflow } from 'lucide-react'

const features = [
  {
    title: 'Instant Previews',
    desc: 'See your changes live with hot reloading and a smooth editing flow.',
    icon: Rocket,
  },
  {
    title: 'AI Collaboration',
    desc: 'Describe what you want; the workspace builds and iterates with you.',
    icon: Sparkles,
  },
  {
    title: 'Modern Stack',
    desc: 'React, Tailwind, FastAPI, MongoDB — all wired up and ready to go.',
    icon: Laptop2,
  },
  {
    title: 'Ship Faster',
    desc: 'From idea to live prototype in minutes with a guided flow.',
    icon: Workflow,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-emerald-300 sm:text-4xl">
          Why COGNICODE
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-emerald-100/80">
          A focused workspace that helps you think, create, and iterate — fast.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-emerald-400/20 bg-gradient-to-b from-emerald-950/50 to-black/60 p-5 shadow-[inset_0_1px_0_rgba(16,185,129,0.15),0_10px_30px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-emerald-400/30 bg-black/40 p-2 text-emerald-300">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-emerald-200">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-emerald-300/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
