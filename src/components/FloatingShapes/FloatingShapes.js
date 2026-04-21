import './FloatingShapes.css'

const heroShapes = [
  { type: 'blob', color: 'mint', size: 280, top: '-8%', left: '-6%', delay: '0s', duration: '10s', blur: '1px' },
  { type: 'blob', color: 'violet', size: 200, top: '60%', right: '-5%', delay: '2s', duration: '12s', blur: '0px' },
  { type: 'circle', color: 'mint-soft', size: 120, top: '20%', right: '8%', delay: '1s', duration: '8s', blur: '0px' },
  { type: 'circle', color: 'violet-soft', size: 80, bottom: '10%', left: '15%', delay: '3s', duration: '9s', blur: '1px' },
  { type: 'star', color: 'violet', size: 40, top: '35%', left: '5%', delay: '0.5s', duration: '11s', blur: '0px' },
  { type: 'book', top: '70%', right: '12%', delay: '1.5s', duration: '13s' },
]

const sectionShapes = [
  { type: 'blob', color: 'mint-soft', size: 200, top: '-5%', right: '-4%', delay: '0s', duration: '11s', blur: '1px' },
  { type: 'circle', color: 'violet-soft', size: 100, bottom: '5%', left: '-3%', delay: '2s', duration: '9s', blur: '0px' },
  { type: 'star', color: 'mint', size: 32, top: '50%', right: '6%', delay: '1s', duration: '12s', blur: '0px' },
  { type: 'squiggle', color: 'violet', top: '20%', left: '5%', delay: '0.5s', duration: '14s' },
]

const subtleShapes = [
  { type: 'circle', color: 'mint-soft', size: 120, top: '10%', right: '5%', delay: '0s', duration: '10s', blur: '1px' },
  { type: 'blob', color: 'violet-soft', size: 160, bottom: '5%', left: '3%', delay: '3s', duration: '13s', blur: '1px' },
  { type: 'star', color: 'violet', size: 28, top: '50%', right: '12%', delay: '1.5s', duration: '11s', blur: '0px' },
]

const variantMap = { hero: heroShapes, section: sectionShapes, subtle: subtleShapes }

function StarSVG({ size, color }) {
  const c = color === 'mint' ? 'var(--color-mint)' : color === 'violet' ? 'var(--color-violet)' : 'var(--color-mint-soft)'
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={c} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  )
}

function SquiggleSVG({ color }) {
  const c = color === 'mint' ? 'var(--color-mint)' : 'var(--color-violet)'
  return (
    <svg width="80" height="30" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 15 Q14 4 24 15 Q34 26 44 15 Q54 4 64 15 Q74 26 80 15" stroke={c} strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export default function FloatingShapes({ variant = 'section' }) {
  const shapes = variantMap[variant] || sectionShapes

  return (
    <div className="floating-shapes" aria-hidden="true">
      {shapes.map((s, i) => {
        const style = {
          animationDelay: s.delay,
          animationDuration: s.duration,
          top: s.top,
          bottom: s.bottom,
          left: s.left,
          right: s.right,
          filter: s.blur ? `blur(${s.blur})` : undefined,
        }

        if (s.type === 'star') {
          return (
            <div key={i} className={`shape shape--star`} style={style}>
              <StarSVG size={s.size} color={s.color} />
            </div>
          )
        }

        if (s.type === 'squiggle') {
          return (
            <div key={i} className="shape shape--squiggle" style={style}>
              <SquiggleSVG color={s.color} />
            </div>
          )
        }

        if (s.type === 'book') {
          return (
            <div key={i} className="shape shape--book" style={style}>📚</div>
          )
        }

        return (
          <div
            key={i}
            className={`shape shape--${s.type} shape--${s.color}`}
            style={{ ...style, width: s.size, height: s.size }}
          />
        )
      })}
    </div>
  )
}
