import React from 'react'
import { Code, Zap, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Generative Builder',
    desc: 'Describe ideas, get production-ready code with live preview and instant iteration.'
  },
  {
    icon: Zap,
    title: 'Realtime Workspace',
    desc: 'Hot reload, AI-assisted edits, and a fast toolchain tuned for flow.'
  },
  {
    icon: Sparkles,
    title: 'Smart Components',
    desc: 'Reusable UI parts that adapt to your product style with one prompt.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-emerald-400/10 bg-gradient-to-b from-emerald-950/60 to-black/60 p-6 shadow-[inset_0_1px_0_rgba(16,185,129,0.15),0_10px_30px_rgba(0,0,0,0.35)] transition hover:border-emerald-400/30"
            >
              <div className="mb-4 inline-flex rounded-lg bg-emerald-500/10 p-3 text-emerald-400 ring-1 ring-inset ring-emerald-400/20">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-emerald-200">{f.title}</h3>
              <p className="text-emerald-100/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
