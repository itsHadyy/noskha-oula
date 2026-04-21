import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../Button/Button'
import './TestPickerCard.css'

export default function TestPickerCard({ title, description, emoji, variant = 'mint', to }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ flex: 1 }}
    >
      <Link to={to} className={`test-picker-card test-picker-card--${variant}`}>
        <div className="test-picker-card__illustration">{emoji}</div>
        <h3 className="test-picker-card__title">{title}</h3>
        <p className="test-picker-card__desc">{description}</p>
        <Button variant={variant === 'mint' ? 'primary' : 'secondary'}>Start</Button>
      </Link>
    </motion.div>
  )
}
