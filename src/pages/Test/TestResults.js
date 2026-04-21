import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../../components/PageTransition/PageTransition'
import FloatingShapes from '../../components/FloatingShapes/FloatingShapes'
import ResultWidget from '../../components/ResultWidget/ResultWidget'
import { useTest } from '../../context/TestContext'
import { getRecommendedBook } from '../../data/books'
import { useScrollTop } from '../../hooks/useScrollTop'
import './Test.css'

export default function TestResults() {
  useScrollTop()
  const navigate = useNavigate()
  const { state, dispatch } = useTest()

  useEffect(() => {
    if (!state.archetype) {
      navigate('/test', { replace: true })
    }
  }, [state.archetype])

  if (!state.archetype) return null

  const book = getRecommendedBook(state.archetype)

  function handleReset() {
    dispatch({ type: 'RESET' })
    navigate('/test')
  }

  return (
    <PageTransition>
      <div className="test-page">
        <div className="test-results">
          <FloatingShapes variant="section" />
          <div className="test-results__inner">
            <motion.div
              className="test-results__header"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="test-results__title">Your results are in! 🎉</h1>
              <p className="test-results__sub">Here's what we learned about you.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <ResultWidget
                archetype={state.archetype}
                percentage={state.percentage}
                book={book}
                onReset={handleReset}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
