import React from 'react'
import { Mail } from 'lucide-react'

export default function Signup() {
  return (
    <section id="signup" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-xl rounded-2xl border border-emerald-400/20 bg-gradient-to-b from-emerald-950/50 to-black/60 p-8 shadow-[inset_0_1px_0_rgba(16,185,129,0.15),0_10px_30px_rgba(0,0,0,0.35)]">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-emerald-300">Create your COGNICODE account</h2>
          <p className="mt-2 text-emerald-100/80">Use your email to sign up and get started.</p>
        </div>

        <form className="mt-8 grid gap-4">
          <div>
            <label className="mb-1 block text-sm text-emerald-300/80">Email</label>
            <input type="email" required className="w-full rounded-lg border border-emerald-400/40 bg-black/40 px-4 py-3 text-emerald-100 placeholder-emerald-300/40 outline-none transition focus:border-emerald-400" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-1 block text-sm text-emerald-300/80">Password</label>
            <input type="password" required className="w-full rounded-lg border border-emerald-400/40 bg-black/40 px-4 py-3 text-emerald-100 placeholder-emerald-300/40 outline-none transition focus:border-emerald-400" placeholder="••••••••" />
          </div>
          <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-3 font-semibold text-black shadow-[0_10px_30px_rgba(16,185,129,0.45)] transition hover:bg-emerald-400">
            <Mail className="h-5 w-5" />
            Create account
          </button>
        </form>
      </div>
    </section>
  )
}
