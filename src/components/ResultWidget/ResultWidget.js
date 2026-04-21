import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Share2, RotateCcw } from 'lucide-react'
import Button from '../Button/Button'
import BookCard from '../BookCard/BookCard'
import './ResultWidget.css'

const archetypeLabels = {
  explorer: 'The Explorer',
  storyteller: 'The Storyteller',
  builder: 'The Builder',
  dreamer: 'The Dreamer',
  nurturer: 'The Nurturer',
  coach: 'The Coach',
  guide: 'The Guide',
  companion: 'The Companion',
}

const RADIUS = 94
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function ResultWidget({ archetype, percentage, book, onReset }) {
  const [displayPct, setDisplayPct] = useState(0)
  const [toast, setToast] = useState(false)

  const offset = CIRCUMFERENCE - (displayPct / 100) * CIRCUMFERENCE

  useEffect(() => {
    let start = null
    const target = percentage
    const duration = 1600
    function step(ts) {
      if (!start) start = ts
      const prog = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - prog, 3)
      setDisplayPct(Math.round(eased * target))
      if (prog < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [percentage])

  function handleShare() {
    navigator.clipboard.writeText(window.location.href).catch(() => {})
    setToast(true)
    setTimeout(() => setToast(false), 2500)
  }

  return (
    <div className="result-widget">
      <div className="result-widget__ring-wrap">
        <svg className="result-widget__ring" width="220" height="220" viewBox="0 0 220 220">
          <defs>
            <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#53DBC7" />
              <stop offset="100%" stopColor="#7B55E5" />
            </linearGradient>
          </defs>
          <circle className="result-widget__ring-track" cx="110" cy="110" r={RADIUS} />
          <circle
            className="result-widget__ring-fill"
            cx="110"
            cy="110"
            r={RADIUS}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="result-widget__ring-label">
          <span className="result-widget__percentage">{displayPct}%</span>
          <span className="result-widget__ring-subtitle">match</span>
        </div>
      </div>

      <div>
        <p className="result-widget__profile">Your profile:</p>
        <p className="result-widget__archetype">{archetypeLabels[archetype] || archetype}</p>
      </div>

      {book && (
        <>
          <p className="result-widget__book-label">We recommend</p>
          <BookCard book={book} />
        </>
      )}

      <div className="result-widget__actions">
        <Button variant="ghost" onClick={onReset}>
          <RotateCcw size={15} /> Retake test
        </Button>
        <Button variant="secondary" onClick={handleShare}>
          <Share2 size={15} /> Share result
        </Button>
      </div>

      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          style={{
            position: 'fixed',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--color-ink)',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: 'var(--radius-pill)',
            fontSize: 14,
            fontWeight: 600,
            zIndex: 999,
          }}
        >
          Link copied to clipboard!
        </motion.div>
      )}
    </div>
  )
}
