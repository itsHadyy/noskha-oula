import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageTransition from '../../components/PageTransition/PageTransition'
import FloatingShapes from '../../components/FloatingShapes/FloatingShapes'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Button from '../../components/Button/Button'
import BookCard from '../../components/BookCard/BookCard'
import GameCard from '../../components/GameCard/GameCard'
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard'
import Marquee from '../../components/Marquee/Marquee'
import { books } from '../../data/books'
import { game } from '../../data/game'
import { testimonials } from '../../data/testimonials'
import { useScrollTop } from '../../hooks/useScrollTop'
import './Home.css'

function useCountUp(target, duration = 2000) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const observed = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !observed.current) {
        observed.current = true
        let start = null
        function step(ts) {
          if (!start) start = ts
          const progress = Math.min((ts - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return [value, ref]
}

function StatItem({ target, suffix = '', label }) {
  const [val, ref] = useCountUp(target)
  return (
    <motion.div
      className="stats__item"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <p className="stats__number">{val}{suffix}</p>
      <p className="stats__label">{label}</p>
    </motion.div>
  )
}

export default function Home() {
  useScrollTop()

  return (
    <PageTransition>
      <div className="home">

        {/* Hero */}
        <section className="hero">
          <FloatingShapes variant="hero" />
          <div className="hero__inner">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="hero__eyebrow">For curious kids & thoughtful parents</span>
              <h1 className="hero__headline">
                Books that raise<br /><span>bright hearts.</span>
              </h1>
              <p className="hero__body">
                Discover books that match your child's unique personality—and yours. Take our 3-minute test to find the perfect match.
              </p>
              <div className="hero__ctas">
                <Link to="/test"><Button variant="primary" size="lg">Take the Test</Button></Link>
                <Link to="/books"><Button variant="secondary" size="lg">Browse Books</Button></Link>
              </div>
            </motion.div>

            <motion.div
              className="hero__illustration"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src="/images/hero/hero-illustration.svg" alt="A stack of colorful books floating with sparkles" width="480" height="480" />
            </motion.div>
          </div>
        </section>

        {/* Marquee */}
        <Marquee />

        {/* Stats */}
        <section className="stats">
          <div className="stats__inner">
            <StatItem target={6} label="Books published" />
            <StatItem target={50000} suffix="+" label="Families helped" />
            <StatItem target={98} suffix="%" label="Happy readers" />
          </div>
        </section>

        {/* Featured Test CTA */}
        <section className="test-cta">
          <FloatingShapes variant="subtle" />
          <div className="test-cta__card">
            <div className="test-cta__text">
              <p className="test-cta__eyebrow">Personality test</p>
              <h2 className="test-cta__headline">Discover the book your child needs in 3 minutes</h2>
              <p className="test-cta__sub">20 questions. 4 sections. One perfectly matched book recommendation.</p>
            </div>
            <div className="test-cta__visual">
              <div className="test-cta__ring"><img src='/logo-mark02.png' alt='logo' /></div>
            </div>
            <Link to="/test">
              <Button variant="primary" size="lg" className="btn btn--primary btn--sm">Start the Test →</Button>
            </Link>
          </div>
        </section>

        {/* Game showcase */}
        <section className="games-section">
          <FloatingShapes variant="subtle" />
          <div className="games-section__inner">
            <SectionHeader eyebrow="Featured Game" title="Play & learn together" subtitle="A beautiful card game that builds vocabulary and sparks stories." />
            <GameCard game={game} />
          </div>
        </section>

        {/* Books showcase */}
        <section className="books-section">
          <FloatingShapes variant="section" />
          <div className="books-section__inner">
            <div className="books-section__header">
              <SectionHeader eyebrow="Our collection" title="Books they'll love" align="left" />
              <Link to="/books" className="books-section__see-all">See all books <ArrowRight size={14} /></Link>
            </div>
            <div className="books-grid">
              {books.slice(0, 4).map((book, i) => (
                <motion.div key={book.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}>
                  <BookCard book={book} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="how-it-works">
          <FloatingShapes variant="subtle" />
          <div className="how-it-works__inner">
            <SectionHeader eyebrow="How it works" title="Find your match in 3 steps" subtitle="Our quiz was designed with child development experts to give you a real recommendation—not a generic one." />
            <div className="how-it-works__steps">
              {[
                { n: 1, title: 'Answer 20 questions', desc: 'Fun, thoughtful questions about how your child (or you!) thinks, plays, and learns.' },
                { n: 2, title: 'Get your profile', desc: 'We calculate your archetype—Explorer, Dreamer, Builder, or Storyteller—with a match percentage.' },
                { n: 3, title: 'Receive a book recommendation', desc: 'One hand-picked book that matches your profile, with a personal reason why.' },
              ].map((step, i) => (
                <motion.div
                  key={step.n}
                  className="how-step"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.45 }}
                >
                  <div className="how-step__number">{step.n}</div>
                  <h3 className="how-step__title">{step.title}</h3>
                  <p className="how-step__desc">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <FloatingShapes variant="subtle" />
          <div className="testimonials-section__inner">
            <SectionHeader eyebrow="What families say" title="Stories from our readers" />
            <div className="testimonials-grid">
              {testimonials.map((t, i) => <TestimonialCard key={t.id} testimonial={t} delay={i * 0.1} />)}
            </div>
          </div>
        </section>

        {/* Footer CTA band */}
        <section className="footer-cta">
          <FloatingShapes variant="subtle" />
          <div className="footer-cta__inner">
            <h2 className="footer-cta__headline">Ready to find your perfect book?</h2>
            <p className="footer-cta__sub">Join thousands of families who've found their match. Takes 3 minutes.</p>
            <Link to="/test"><Button variant="primary" size="lg">Take the Test →</Button></Link>
          </div>
        </section>

      </div>
    </PageTransition>
  )
}
