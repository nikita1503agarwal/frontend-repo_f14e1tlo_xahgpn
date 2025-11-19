import React from 'react'

export default function Footer() {
  return (
    <footer className="relative border-t border-emerald-400/10 bg-black/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-emerald-300/70">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} COGNICODE. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-emerald-200" href="#features">Features</a>
            <a className="hover:text-emerald-200" href="#login">Get Started</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
