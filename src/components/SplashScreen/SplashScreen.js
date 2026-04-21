import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './SplashScreen.css'

const title = 'Al Noskha Al Oula'

export default function SplashScreen() {
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)

  function skip() {
    sessionStorage.setItem('splashSeen', '1')
    navigate('/home', { replace: true })
  }

  useEffect(() => {
    const t1 = setTimeout(() => setProgress(100), 50)
    const t2 = setTimeout(skip, 2200)

    function onKey() { skip() }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onKey)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onKey)
    }
  }, [])

  return (
    <div className="splash" role="status" aria-label="Loading Al Noskha Al Oula">
      <div className="splash__logo-wrap">
        <motion.img
          src="/logo-mark.svg"
          alt="Al Noskha Al Oula logo"
          className="splash__logo"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          width="100"
          height="100"
        />

        <motion.h1
          className="splash__title"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
          aria-label={title}
        >
          {title.split('').map((char, i) => (
            <motion.span
              key={i}
              className="splash__char"
              variants={{
                hidden: { opacity: 0, y: 6 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="splash__subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Books that raise bright hearts.
        </motion.p>
      </div>

      <div className="splash__progress-wrap" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
        <div className="splash__progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
