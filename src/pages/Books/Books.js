import { motion } from 'framer-motion'
import PageTransition from '../../components/PageTransition/PageTransition'
import FloatingShapes from '../../components/FloatingShapes/FloatingShapes'
import BookCard from '../../components/BookCard/BookCard'
import { books } from '../../data/books'
import { useScrollTop } from '../../hooks/useScrollTop'
import './Books.css'

export default function Books() {
  useScrollTop()

  return (
    <PageTransition>
      <div className="books-page">
        <section className="books-hero">
          <FloatingShapes variant="subtle" />
          <div className="books-hero__inner">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-violet)', background: 'var(--color-violet-soft)', padding: '6px 14px', borderRadius: 'var(--radius-pill)', marginBottom: 16 }}>Our collection</span>
              <h1 className="books-hero__title">All Books</h1>
              <p className="books-hero__sub">Beautifully crafted stories for curious kids and thoughtful parents.</p>
            </motion.div>
          </div>
        </section>

        <div className="books-grid-section">
          <div className="books-page-grid">
            {books.map((book, i) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <BookCard book={book} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
