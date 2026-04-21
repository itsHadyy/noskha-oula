import { memo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './BookCard.css'

const BookCard = memo(function BookCard({ book }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/books/${book.id}`} className="book-card">
        <div className="book-card__cover-wrap">
          <img
            src={book.cover}
            alt={`Book cover: ${book.title}`}
            className="book-card__cover"
            loading="lazy"
            decoding="async"
            width="300"
            height="400"
          />
          <div className="book-card__arrow">
            <ArrowRight size={16} color="var(--color-violet)" />
          </div>
        </div>
        <div className="book-card__body">
          <span className="book-card__tag">Ages {book.ageRange}</span>
          <h3 className="book-card__title">{book.title}</h3>
          <p className="book-card__meta">by {book.author}</p>
          <p className="book-card__price">${book.price}</p>
        </div>
      </Link>
    </motion.div>
  )
})

export default BookCard
