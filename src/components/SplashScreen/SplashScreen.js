import { motion } from 'framer-motion'
import './SplashScreen.css'

export default function SplashScreen({ isFading = false }) {
  return (
    <div className={`splash ${isFading ? 'splash--fade-out' : ''}`} role="status" aria-label="Loading Al Noskha Al Oula">
      <div className="splash__logo-wrap">
        <motion.img
          src="/logo-splash.png"
          alt="Al Noskha Al Oula logo"
          className="splash__logo"
          initial={{ scale: 0.88, opacity: 0, y: 14 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          width="280"
          height="140"
        />
      </div>
    </div>
  )
}
