import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { User, ChevronRight } from 'lucide-react'
import PageTransition from '../../components/PageTransition/PageTransition'
import FloatingShapes from '../../components/FloatingShapes/FloatingShapes'
import { useScrollTop } from '../../hooks/useScrollTop'
import './Test.css'

export default function TestPicker() {
  useScrollTop()
  const navigate = useNavigate()

  return (
    <PageTransition>
      <div className="test-page">
        <div className="test-picker">
          <FloatingShapes variant="hero" />
          <div className="test-picker__inner">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="test-picker__title">Discover Your Child's Personality</h1>
              <p className="test-picker__sub">Answer 20 quick questions to uncover your child's unique social-emotional strengths.</p>
            </motion.div>
            <motion.div
              className="test-picker__single"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <button className="test-picker__start-btn" onClick={() => navigate('/test/child')}>
                <span className="test-picker__start-icon">
                  <User size={28} strokeWidth={1.6} color="var(--color-violet)" />
                </span>
                <div>
                  <p className="test-picker__start-title">Start the Test</p>
                  <p className="test-picker__start-sub">5 sections · 20 questions · ~3 minutes</p>
                </div>
                <ChevronRight size={22} color="var(--color-violet)" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
