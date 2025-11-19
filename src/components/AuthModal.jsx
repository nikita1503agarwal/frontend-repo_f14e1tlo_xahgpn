import React, { useEffect, useRef, useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import { X } from 'lucide-react'

export default function AuthModal({ open, onClose, defaultTab = 'login' }) {
  const [tab, setTab] = useState(defaultTab)
  const backdropRef = useRef(null)

  useEffect(() => {
    setTab(defaultTab)
  }, [defaultTab, open])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose?.()
    }
    function onSwitch(e) {
      const next = e?.detail?.tab
      if (next === 'login' || next === 'signup') setTab(next)
    }
    if (open) {
      document.addEventListener('keydown', onKey)
      window.addEventListener('cogni-switch-auth', onSwitch)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('cogni-switch-auth', onSwitch)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div ref={backdropRef} className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose?.()
        }}
      />

      {/* Modal Card */}
      <div className="relative z-10 mx-4 w-full max-w-xl overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-b from-emerald-950/70 to-black/80 shadow-[0_20px_60px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(16,185,129,0.15)]">
        <div className="flex items-center justify-between px-5 py-4">
          <div className="inline-flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
            <span className="text-xs font-bold tracking-widest text-emerald-200">COGNICODE</span>
          </div>
          <button
            aria-label="Close"
            onClick={onClose}
            className="rounded-md p-1 text-emerald-200/80 hover:bg-emerald-900/40 hover:text-emerald-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="mx-5 mb-1 mt-1 grid grid-cols-2 rounded-lg border border-emerald-400/20 p-1 text-sm">
          <button
            className={`rounded-md px-3 py-2 font-semibold transition ${
              tab === 'login' ? 'bg-emerald-500 text-black shadow-[0_10px_20px_rgba(16,185,129,0.35)]' : 'text-emerald-200 hover:text-emerald-100'
            }`}
            onClick={() => setTab('login')}
          >
            Sign in
          </button>
          <button
            className={`rounded-md px-3 py-2 font-semibold transition ${
              tab === 'signup' ? 'bg-emerald-500 text-black shadow-[0_10px_20px_rgba(16,185,129,0.35)]' : 'text-emerald-200 hover:text-emerald-100'
            }`}
            onClick={() => setTab('signup')}
          >
            Create account
          </button>
        </div>

        <div className="max-h-[80vh] overflow-y-auto px-5 pb-6 pt-2">
          {tab === 'login' ? <Login embedded /> : <Signup embedded />}
        </div>
      </div>
    </div>
  )
}
