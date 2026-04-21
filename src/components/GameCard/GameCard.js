import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './GameCard.css'

export default function GameCard({ game }) {
  return (
    <motion.div
      className="game-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="game-card__artwork">
        <img
          src={game.cover}
          alt={`${game.title} game cover`}
          className="game-card__cover"
          loading="lazy"
          decoding="async"
          width="480"
          height="380"
        />
        <span className="game-card__badge">NEW!</span>
      </div>
      <div className="game-card__body">
        <span className="game-card__eyebrow">Featured Game</span>
        <h3 className="game-card__title">{game.title}</h3>
        <p className="game-card__tagline">{game.tagline}</p>
        <div className="game-card__meta">
          <span className="game-card__meta-item">Ages {game.ageRange}</span>
          <span className="game-card__meta-item">{game.players} players</span>
          <span className="game-card__meta-item">{game.duration}</span>
        </div>
        <Link to="/game" className="game-card__cta">
          Learn more <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  )
}
