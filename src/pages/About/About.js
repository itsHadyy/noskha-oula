import { motion } from 'framer-motion'
import PageTransition from '../../components/PageTransition/PageTransition'
import FloatingShapes from '../../components/FloatingShapes/FloatingShapes'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import { useScrollTop } from '../../hooks/useScrollTop'
import './About.css'

const team = [
  { initials: 'LS', name: 'Layla Samir', role: 'Founder & Author' },
  { initials: 'RK', name: 'Dr. Rania Khalil', role: 'Child Psychologist' },
  { initials: 'OH', name: 'Omar Hafez', role: 'Creative Director' },
]

export default function About() {
  useScrollTop()

  return (
    <PageTransition>
      <div className="about-page">
        <section className="about-hero">
          <FloatingShapes variant="subtle" />
          <div className="about-hero__inner">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-violet)', background: 'var(--color-violet-soft)', padding: '6px 14px', borderRadius: 'var(--radius-pill)', marginBottom: 20 }}>Our story</span>
              <h1 className="about-hero__title">Books that know your child.</h1>
              <p className="about-hero__body">
                Al Noskha Al Oula was born from a simple frustration: walking into a bookstore with a child and leaving with the wrong book. We set out to fix that—with science, love, and great writing.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="about-story">
          <div className="about-story__inner">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="about-story__title">Why we exist</h2>
              <p className="about-story__text">
                Research shows that children who read books matched to their personality and learning style are significantly more likely to develop a lifelong love of reading. Yet most bookstores and libraries have no way to make that match. Parents rely on guesswork, recommendations from friends, or what happened to be on sale.
              </p>
              <p className="about-story__text">
                We partnered with child psychologists, educators, and the world's best children's authors to build something different: a curated collection of books, each designed for a specific kind of mind—and a quiz that finds the right match in three minutes.
              </p>
              <p className="about-story__text">
                Every book we publish goes through 18 months of development, child testing, and expert review. We don't publish many books. We publish the right ones.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="about-team">
          <div className="about-team__inner">
            <SectionHeader eyebrow="The team" title="The people behind the pages" subtitle="A small, passionate group of educators, authors, and parents." />
            <div className="about-team__grid">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  className="about-team-member"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <div className="about-team-member__avatar">{member.initials}</div>
                  <h3 className="about-team-member__name">{member.name}</h3>
                  <p className="about-team-member__role">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
