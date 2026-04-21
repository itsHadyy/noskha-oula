import { motion } from 'framer-motion'
import PageTransition from '../../components/PageTransition/PageTransition'
import FloatingShapes from '../../components/FloatingShapes/FloatingShapes'
import TestPickerCard from '../../components/TestPickerCard/TestPickerCard'
import { useScrollTop } from '../../hooks/useScrollTop'
import './Test.css'

export default function TestPicker() {
  useScrollTop()

  return (
    <PageTransition>
      <div className="test-page">
        <div className="test-picker">
          <FloatingShapes variant="hero" />
          <div className="test-picker__inner">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="test-picker__title">Who's taking the test?</h1>
              <p className="test-picker__sub">Choose your path to find the perfectly matched book.</p>
            </motion.div>
            <div className="test-picker__cards">
              <TestPickerCard
                title="I'm a child"
                description="Discover your learning style and find a book that's made for your amazing mind."
                emoji="🧒"
                variant="mint"
                to="/test/child"
              />
              <TestPickerCard
                title="I'm a parent"
                description="Find out your parenting style and get a book that'll help you connect with your child."
                emoji="👨‍👩‍👧"
                variant="violet"
                to="/test/parent"
              />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
