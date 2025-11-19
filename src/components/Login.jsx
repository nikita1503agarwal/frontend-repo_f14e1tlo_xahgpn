import React from 'react'
import { Mail, Github, Chrome } from 'lucide-react'

export default function Login({ embedded = false }) {
  const Container = ({ children }) => (
    embedded ? <div className="mx-auto max-w-xl">{children}</div> : (
      <section id="login" className="relative mx-auto max-w-7xl px-6 py-20">
        {children}
      </section>
    )
  )

  return (
    <Container>
      <div className="mx-auto max-w-xl rounded-2xl border border-emerald-400/20 bg-gradient-to-b from-emerald-950/50 to-black/60 p-8 shadow-[inset_0_1px_0_rgba(16,185,129,0.15),0_10px_30px_rgba(0,0,0,0.35)]">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-emerald-300">Welcome to COGNICODE</h2>
          <p className="mt-2 text-emerald-100/80">Sign in to continue or create a new account.</p>
        </div>

        <div className="mt-8 grid gap-3">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 font-semibold text-black transition hover:bg-white/90">
            <Chrome className="h-5 w-5" />
            Continue with Google
          </button>
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#24292F] px-4 py-3 font-semibold text-white transition hover:bg-[#2f3841]">
            <Github className="h-5 w-5" />
            Continue with GitHub
          </button>
          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-400/40 px-4 py-3 font-semibold text-emerald-100 transition hover:border-emerald-400/70 hover:bg-emerald-950/40">
            <Mail className="h-5 w-5" />
            Continue with Email
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-emerald-300/70">
          Don&apos;t have an account?{' '}
          <button onClick={() => {
            const evt = new CustomEvent('cogni-switch-auth', { detail: { tab: 'signup' } })
            window.dispatchEvent(evt)
          }} className="font-semibold text-emerald-300 underline decoration-emerald-400/50 underline-offset-4 hover:text-emerald-200">
            Sign up
          </button>
        </div>
      </div>
    </Container>
  )
}
