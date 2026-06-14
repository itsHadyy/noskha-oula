import { memo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, Users, Zap, Heart, Clock, ShieldCheck } from 'lucide-react'
import ProgressBar from '../ProgressBar/ProgressBar'
import './QuestionCard.css'

const letters = ['A', 'B', 'C', 'D']

const sectionIconMap = { Users, Zap, Heart, Clock, ShieldCheck }

function SectionIcon({ name, size = 16 }) {
  const Icon = sectionIconMap[name]
  return Icon ? <Icon size={size} strokeWidth={1.8} /> : null
}

const QuestionCard = memo(function QuestionCard({
  question,
  sectionTitle,
  sectionEmoji,
  questionNumber,
  totalQuestions,
  selectedIndex,
  onSelect,
  onBack,
  canGoBack,
}) {
  const [showHint, setShowHint] = useState(false)

  useEffect(() => {
    if (selectedIndex !== null && selectedIndex !== undefined) {
      setShowHint(true)
      const t = setTimeout(() => setShowHint(false), 1500)
      return () => clearTimeout(t)
    }
  }, [selectedIndex])

  const progress = ((questionNumber - 1) / totalQuestions) * 100

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        className="question-card"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="question-card__section">
          <SectionIcon name={sectionEmoji} size={14} /> {sectionTitle}
        </p>

        <div className="question-card__progress">
          <ProgressBar
            value={progress}
            label={`Question ${questionNumber}`}
            sublabel={`of ${totalQuestions}`}
          />
        </div>

        <h2 className="question-card__text">{question.text}</h2>

        <div className="question-card__options" role="radiogroup" aria-label="Answer options">
          {question.options.map((opt, i) => (
            <button
              key={i}
              className={`question-card__option${selectedIndex === i ? ' question-card__option--selected' : ''}`}
              role="radio"
              aria-checked={selectedIndex === i}
              onClick={() => onSelect(i)}
            >
              <span className="question-card__option-letter">{letters[i]}</span>
              <span className="question-card__option-text">{opt.text}</span>
            </button>
          ))}
        </div>

        {showHint && (
          <p className="question-card__hint">Tap another option to change your answer</p>
        )}

        <div className="question-card__nav">
          <button className="question-card__back" onClick={onBack} disabled={!canGoBack} aria-label="Go back">
            <ChevronLeft size={16} /> Back
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
})

export default QuestionCard
