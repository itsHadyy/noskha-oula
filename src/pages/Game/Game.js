import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Check } from 'lucide-react'
import PageTransition from '../../components/PageTransition/PageTransition'
import FloatingShapes from '../../components/FloatingShapes/FloatingShapes'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Button from '../../components/Button/Button'
import { game } from '../../data/game'
import { useCart } from '../../context/CartContext'
import { useScrollTop } from '../../hooks/useScrollTop'
import './Game.css'

export default function Game() {
  useScrollTop()
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  function handleGet() {
    addItem({ id: game.id, name: game.title, price: game.price, cover: game.cover })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
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
              <div className="game-hero__meta">
                <span className="game-hero__meta-item">Ages {game.ageRange}</span>
                <span className="game-hero__meta-item">{game.players} players</span>
                <span className="game-hero__meta-item">{game.duration}</span>
              </div>
              <div className="game-hero__actions">
                <Button variant="primary" size="lg" onClick={handleGet}>
                  {added ? <><Check size={18} /> Added to Cart</> : <><ShoppingCart size={18} /> Add to Cart</>}
                </Button>
                {added && (
                  <Link to="/cart" className="game-hero__view-cart">View cart →</Link>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="game-about">
          <div className="game-about__inner">
            <SectionHeader eyebrow="About the Game" title="What is Inside Me?" />
            <div className="game-about__content">
              {game.description.split('\n\n').map((para, i) => (
                <motion.p
                  key={i}
                  className="game-about__para"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        {game.images && game.images.length > 0 && (
          <section className="game-gallery">
            <div className="game-gallery__inner">
              <SectionHeader eyebrow="The Game" title="See it in action" />
              <div className="game-gallery__grid">
                {game.images.map((src, i) => (
                  <motion.div
                    key={i}
                    className="game-gallery__item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                  >
                    <img src={src} alt={`Inside Me game — photo ${i + 1}`} className="game-gallery__img" loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {game.videoUrl && (
          <section className="game-video">
            <div className="game-video__inner">
              <SectionHeader eyebrow="Tutorial" title="How to play" subtitle="Watch this short video to get started in minutes." />
              <div className="game-video__embed">
                <iframe
                  src={game.videoUrl}
                  title="Inside Me — How to Play"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        )}

        <section className="game-how">
          <div className="game-how__inner">
            <SectionHeader eyebrow="How to play" title="Four zones, one journey" subtitle="Move through each emotional zone and grow together." />
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

        <section className="game-cta-band">
          <FloatingShapes variant="subtle" />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="game-cta-band__title">Ready to play?</h2>
            <p className="game-cta-band__sub">Bring Inside Me home and start building emotional intelligence through play.</p>
            <Button variant="primary" size="lg" onClick={handleGet}>
              {added ? <><Check size={18} /> Added to Cart</> : <><ShoppingCart size={18} /> Add to Cart</>}
            </Button>
            {added && <Link to="/cart" className="game-cta-band__view-cart">View cart →</Link>}
          </motion.div>
        </section>
      </div>
    </PageTransition>
  )
}
