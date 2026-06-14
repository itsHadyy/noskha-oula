import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Check } from 'lucide-react'
import PageTransition from '../../components/PageTransition/PageTransition'
import FloatingShapes from '../../components/FloatingShapes/FloatingShapes'
import Button from '../../components/Button/Button'
import BookCard from '../../components/BookCard/BookCard'
import { books, getBookById } from '../../data/books'
import { useCart } from '../../context/CartContext'
import { useScrollTop } from '../../hooks/useScrollTop'
import './BookDetail.css'

export default function BookDetail() {
  useScrollTop()
  const { bookId } = useParams()
  const book = getBookById(bookId)
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  if (!book) return <Navigate to="/books" replace />

  const others = books.filter(b => b.id !== book.id).slice(0, 3)

  function handleAddToCart() {
    addItem({ id: book.id, name: book.title, price: book.price, cover: book.cover })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const details = {
    Pages: book.details.pages,
    Language: book.details.language,
    Publisher: book.details.publisher,
    ISBN: book.details.isbn,
  }

  return (
    <PageTransition>
      <div className="book-detail">
        <FloatingShapes variant="subtle" />

        <div className="book-detail__inner">
          <motion.div
            className="book-detail__cover-wrap"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {book.featured && <span className="book-detail__featured-badge">Featured</span>}
            <img
              src={book.cover}
              alt={`Book cover: ${book.title}`}
              className="book-detail__cover"
              width="380"
              height="507"
              loading="eager"
              decoding="async"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="book-detail__tags">
              {book.tags.map(t => <span key={t} className="book-detail__tag">{t}</span>)}
            </div>
            <h1 className="book-detail__title">{book.title}</h1>
            {book.arabicTitle && <p className="book-detail__arabic-title">{book.arabicTitle}</p>}
            <p className="book-detail__subtitle">{book.subtitle}</p>
            <p className="book-detail__author">by {book.author}</p>

            <div className="book-detail__ctas">
              <Button variant="primary" size="lg" onClick={handleAddToCart}>
                {added ? <><Check size={18} /> Added to Cart</> : <><ShoppingCart size={18} /> Add to Cart</>}
              </Button>
              {added && <Link to="/cart" className="book-detail__view-cart">View cart →</Link>}
              <Link to="/test"><Button variant="secondary">Find my match</Button></Link>
            </div>

            <h2 className="book-detail__desc-title">About this book</h2>
            {book.description.split('\n\n').map((para, i) => (
              <p key={i} className="book-detail__desc">{para}</p>
            ))}

            <h2 className="book-detail__desc-title">Details</h2>
            <div className="book-detail__details">
              {Object.entries(details).filter(([, v]) => v).map(([k, v]) => (
                <div key={k} className="book-detail__detail-row">
                  <span className="book-detail__detail-key">{k}</span>
                  <span className="book-detail__detail-val">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="book-detail__also">
          <div className="book-detail__also-inner">
            <h2 className="book-detail__also-title">You might also like</h2>
            <div className="book-detail__also-grid">
              {others.map(b => <BookCard key={b.id} book={b} />)}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
