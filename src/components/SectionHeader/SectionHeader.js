import { motion } from 'framer-motion'
import './SectionHeader.css'

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <motion.div
      className={`section-header${align === 'left' ? ' section-header--left' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <span className="section-header__eyebrow">{eyebrow}</span>}
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </motion.div>
  )
}
