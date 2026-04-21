import { motion } from 'framer-motion'
import './TestimonialCard.css'

export default function TestimonialCard({ testimonial, delay = 0 }) {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="testimonial-card__quote">{testimonial.quote}</p>
      <div className="testimonial-card__author">
        <div className={`testimonial-card__avatar testimonial-card__avatar--${testimonial.avatarColor}`}>
          {testimonial.avatar}
        </div>
        <div>
          <p className="testimonial-card__name">{testimonial.name}</p>
          <p className="testimonial-card__role">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  )
}
