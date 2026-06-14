import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Zap, Heart, Clock, ShieldCheck } from 'lucide-react'
import PageTransition from '../../components/PageTransition/PageTransition'
import FloatingShapes from '../../components/FloatingShapes/FloatingShapes'
import QuestionCard from '../../components/QuestionCard/QuestionCard'
import { useTest } from '../../context/TestContext'
import { childTest } from '../../data/testChild'
import { parentTest } from '../../data/testParent'
import { useScrollTop } from '../../hooks/useScrollTop'
import './Test.css'

const sectionIconMap = { Users, Zap, Heart, Clock, ShieldCheck }

function SectionIcon({ name }) {
  const Icon = sectionIconMap[name]
  return Icon ? <Icon size={52} strokeWidth={1.4} color="var(--color-violet)" /> : null
}

function computeResult(testData, answers) {
  const archetypes = testData.archetypes
  const scores = Object.fromEntries(archetypes.map(a => [a, 0]))
  const sectionQuestionCounts = Object.fromEntries(
    testData.sections.map(s => [s.id, s.questions.length])
  )

  testData.sections.forEach(section => {
    section.questions.forEach(q => {
      const answerIdx = answers[q.id]
      if (answerIdx !== undefined) {
        const chosen = q.options[answerIdx]
        archetypes.forEach(a => {
          scores[a] = (scores[a] || 0) + (chosen.weights[a] || 0)
        })
      }
    })
  })

  const winner = archetypes.reduce((best, a) => scores[a] > scores[best] ? a : best, archetypes[0])
  const winnerSectionCount = sectionQuestionCounts[winner] ?? 4
  const maxPossible = winnerSectionCount * 3
  const pct = Math.round((scores[winner] / maxPossible) * 100)
  return { archetype: winner, percentage: Math.min(pct, 99) }
}

export default function TestFlow({ type }) {
  useScrollTop()
  const navigate = useNavigate()
  const { state, dispatch } = useTest()
  const [showSectionCard, setShowSectionCard] = useState(false)
  const [pendingSectionIdx, setPendingSectionIdx] = useState(null)

  const testData = type === 'child' ? childTest : parentTest

  const allQuestions = testData.sections.flatMap(s =>
    s.questions.map(q => ({ ...q, sectionTitle: s.title, sectionEmoji: s.emoji, sectionId: s.id }))
  )

  useEffect(() => {
    if (state.type !== type) {
      dispatch({ type: 'START', testType: type })
    }
  }, [type])

  const currentQ = allQuestions[state.currentIndex]
  const selectedIndex = currentQ ? state.answers[currentQ.id] : undefined

  function handleSelect(optIdx) {
    if (!currentQ) return
    dispatch({ type: 'ANSWER', questionId: currentQ.id, optionIndex: optIdx })

    setTimeout(() => {
      const nextIdx = state.currentIndex + 1
      if (nextIdx >= allQuestions.length) {
        const { archetype, percentage } = computeResult(testData, {
          ...state.answers,
          [currentQ.id]: optIdx,
        })
        dispatch({ type: 'COMPLETE', archetype, percentage })
        navigate('/test/results')
        return
      }

      const currSection = currentQ.sectionId
      const nextSection = allQuestions[nextIdx]?.sectionId
      if (nextSection && nextSection !== currSection) {
        setPendingSectionIdx(nextIdx)
        setShowSectionCard(true)
        setTimeout(() => {
          setShowSectionCard(false)
          dispatch({ type: 'NEXT' })
          setPendingSectionIdx(null)
        }, 1800)
      } else {
        dispatch({ type: 'NEXT' })
      }
    }, 400)
  }

  function handleBack() {
    dispatch({ type: 'BACK' })
  }

  if (!currentQ) return null

  const nextSection = pendingSectionIdx !== null ? allQuestions[pendingSectionIdx] : null

  return (
    <PageTransition>
      <div className="test-page">
        <div className="test-flow">
          <FloatingShapes variant="subtle" />
          <div className="test-flow__inner">
            <AnimatePresence mode="wait">
              {showSectionCard && nextSection ? (
                <motion.div
                  key="section-transition"
                  className="section-transition"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="section-transition__emoji">
                    <SectionIcon name={nextSection.sectionEmoji} />
                  </div>
                  <p className="section-transition__label">Next up</p>
                  <h2 className="section-transition__title">{nextSection.sectionTitle}</h2>
                  <p className="section-transition__sub">5 more questions — you're doing great!</p>
                </motion.div>
              ) : (
                <QuestionCard
                  key={currentQ.id}
                  question={currentQ}
                  sectionTitle={currentQ.sectionTitle}
                  sectionEmoji={currentQ.sectionEmoji}
                  questionNumber={state.currentIndex + 1}
                  totalQuestions={allQuestions.length}
                  selectedIndex={selectedIndex}
                  onSelect={handleSelect}
                  onBack={handleBack}
                  canGoBack={state.currentIndex > 0}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
