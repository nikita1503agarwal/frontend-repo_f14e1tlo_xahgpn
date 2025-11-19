import React, { useEffect, useRef } from 'react'

// Animated neural network background using Canvas
// - Glowing emerald nodes + connecting edges
// - Gentle drift and parallax on mouse
export default function NeuralBackground({ density = 0.0018, maxConnections = 4 }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)
  const mouse = useRef({ x: 0, y: 0, active: false })
  const particlesRef = useRef([])
  const dpiRef = useRef(1)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let width = canvas.clientWidth
    let height = canvas.clientHeight

    const setSize = () => {
      // Handle high-DPI displays
      const dpr = window.devicePixelRatio || 1
      dpiRef.current = dpr
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initParticles()
    }

    const rand = (min, max) => Math.random() * (max - min) + min

    const initParticles = () => {
      const count = Math.max(60, Math.floor(width * height * density))
      const parts = []
      for (let i = 0; i < count; i++) {
        parts.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: rand(-0.2, 0.2),
          vy: rand(-0.2, 0.2),
          r: rand(1.1, 2.6),
          pulse: rand(0.8, 1.4),
        })
      }
      particlesRef.current = parts
    }

    const onMove = (e) => {
      mouse.current.active = true
      const rect = canvas.getBoundingClientRect()
      mouse.current.x = (e.clientX - rect.left)
      mouse.current.y = (e.clientY - rect.top)
    }
    const onLeave = () => { mouse.current.active = false }

    const tick = () => {
      const parts = particlesRef.current
      ctx.clearRect(0, 0, width, height)

      // Background subtle vignette
      const grad = ctx.createRadialGradient(width/2, height*0.35, 0, width/2, height*0.35, Math.max(width, height))
      grad.addColorStop(0, 'rgba(16,185,129,0.06)')
      grad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0,0,width,height)

      // Update positions
      for (let p of parts) {
        p.x += p.vx
        p.y += p.vy

        // gentle wrap
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        if (p.y > height + 10) p.y = -10

        // mouse parallax attraction
        if (mouse.current.active) {
          const dx = mouse.current.x - p.x
          const dy = mouse.current.y - p.y
          const dist2 = dx*dx + dy*dy
          const radius = 120
          if (dist2 < radius*radius) {
            p.vx += (dx / Math.sqrt(dist2 + 0.001)) * 0.002
            p.vy += (dy / Math.sqrt(dist2 + 0.001)) * 0.002
            // clamp
            p.vx = Math.max(-0.35, Math.min(0.35, p.vx))
            p.vy = Math.max(-0.35, Math.min(0.35, p.vy))
          }
        }
      }

      // Draw connections
      const maxDist = 110
      for (let i = 0; i < parts.length; i++) {
        let connections = 0
        for (let j = i + 1; j < parts.length; j++) {
          if (connections >= maxConnections) break
          const a = parts[i], b = parts[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx*dx + dy*dy
          if (d2 < maxDist*maxDist) {
            const alpha = 0.45 * (1 - Math.sqrt(d2) / maxDist)
            ctx.strokeStyle = `rgba(16,185,129,${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
            connections++
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i]
        // glow
        ctx.fillStyle = 'rgba(16,185,129,0.12)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2)
        ctx.fill()

        // core
        ctx.fillStyle = 'rgba(16,185,129,0.95)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    setSize()
    window.addEventListener('resize', setSize)
    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('mouseleave', onLeave)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', setSize)
      canvas.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('mouseleave', onLeave)
    }
  }, [density, maxConnections])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <canvas ref={canvasRef} className="h-full w-full" />
      {/* Subtle gradient overlay to blend with black theme */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(16,185,129,0.08),transparent_60%)]" />
    </div>
  )
}
