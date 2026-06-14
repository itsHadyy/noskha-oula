import { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ShoppingCart, Check } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import './BookCard.css'

const BookCard = memo(function BookCard({ book }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  function handleAdd(e) {
    e.preventDefault()
    e.stopPropagation()
    addItem({ id: book.id, name: book.title, price: book.price, cover: book.cover })
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="book-card">
        <Link to={`/books/${book.id}`} className="book-card__link-area">
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
            {book.arabicTitle && <p className="book-card__arabic-title">{book.arabicTitle}</p>}
            <p className="book-card__meta">by {book.author}</p>
            {book.price != null && <p className="book-card__price">{book.currency || '$'}{book.price.toFixed(2)}</p>}
          </div>
        </Link>
        <div className="book-card__footer">
          <button className={`book-card__add-btn${added ? ' book-card__add-btn--added' : ''}`} onClick={handleAdd}>
            {added
              ? <><Check size={14} /> Added</>
              : <><ShoppingCart size={14} /> Add to Cart</>
            }
          </button>
        </div>
      </div>
    </motion.div>
  )
})

export default BookCard
