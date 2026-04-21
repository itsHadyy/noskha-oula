import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Users, Star, Heart } from 'lucide-react'
import PageTransition from '../../components/PageTransition/PageTransition'
import FloatingShapes from '../../components/FloatingShapes/FloatingShapes'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Button from '../../components/Button/Button'
import { game } from '../../data/game'
import { useScrollTop } from '../../hooks/useScrollTop'
import './Game.css'

const iconMap = { BookOpen, Users, Star, Heart }

export default function Game() {
  useScrollTop()
  const [toast, setToast] = useState(false)

  function handleGet() {
    setToast(true)
    setTimeout(() => setToast(false), 2500)
  }

  return (
    <PageTransition>
      <div className="game-page">

        <section className="game-hero">
          <FloatingShapes variant="subtle" />
          <div className="game-hero__inner">
            <motion.img
              src={game.cover}
              alt={`${game.title} game cover`}
              className="game-hero__cover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              width="500"
              height="380"
            />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
              <h1 className="game-hero__title">{game.title}</h1>
              <p className="game-hero__tagline">{game.tagline}</p>
              <Button variant="primary" size="lg" onClick={handleGet}>Get the Game →</Button>
            </motion.div>
          </div>
        </section>

        <section className="game-how">
          <div className="game-how__inner">
            <SectionHeader eyebrow="How to play" title="Ready in under a minute" subtitle="The rules fit on one card. The fun lasts all evening." />
            <div className="game-steps">
              {game.howToPlay.map((step, i) => (
                <motion.div
                  key={step.step}
                  className="game-step"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <div className="game-step__num">{step.step}</div>
                  <h3 className="game-step__title">{step.title}</h3>
                  <p className="game-step__desc">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="game-features">
          <div className="game-features__inner">
            <SectionHeader eyebrow="Features" title="Everything you need" />
            <div className="game-features__grid">
              {game.features.map((f, i) => {
                const Icon = iconMap[f.icon] || Star
                return (
                  <motion.div
                    key={f.title}
                    className="game-feature"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    <div className="game-feature__icon">
                      <Icon size={22} color="var(--color-violet)" />
                    </div>
                    <h3 className="game-feature__title">{f.title}</h3>
                    <p className="game-feature__desc">{f.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="game-cta-band">
          <FloatingShapes variant="subtle" />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="game-cta-band__title">Ready to play?</h2>
            <p className="game-cta-band__sub">Order Wonder Words and make your next family night unforgettable.</p>
            <Button variant="primary" size="lg" onClick={handleGet}>Get the Game</Button>
          </motion.div>
        </section>

        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', background: 'var(--color-ink)', color: '#fff', padding: '12px 24px', borderRadius: 'var(--radius-pill)', fontSize: 14, fontWeight: 600, zIndex: 999 }}
            >
              🎮 Coming soon — we'll notify you!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  )
}
