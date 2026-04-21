import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../../components/PageTransition/PageTransition'
import FloatingShapes from '../../components/FloatingShapes/FloatingShapes'
import Button from '../../components/Button/Button'
import './NotFound.css'

export default function NotFound() {
  return (
    <PageTransition>
      <div className="not-found">
        <FloatingShapes variant="hero" />
        <div className="not-found__inner">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
          >
            <p className="not-found__number">404</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.4 }}>
            <h1 className="not-found__title">This page flew away 📚</h1>
            <p className="not-found__sub">We couldn't find what you were looking for. Maybe the books can help?</p>
            <Link to="/home">
              <Button variant="primary" size="lg">Let's go home</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
