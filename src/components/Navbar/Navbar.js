import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import Button from '../Button/Button'
import { useCart } from '../../context/CartContext'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import './Navbar.css'

const links = [
  { to: '/home', label: 'Home' },
  { to: '/books', label: 'Books' },
  { to: '/game', label: 'Game' },
  { to: '/test', label: 'Test' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const menuRef = useRef(null)
  const { count } = useCart()

  useLockBodyScroll(menuOpen)

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 40) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  function isActive(to) {
    if (to === '/home') return location.pathname === '/home' || location.pathname === '/'
    return location.pathname.startsWith(to)
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar__inner">
          <Link to="/home" className="navbar__logo" aria-label="Al Noskha Al Oula home">
            <img src="/logo-mark.png" alt="" className="navbar__logo-img" width="36" height="36" />
            {/* <span className="navbar__logo-text">Al Noskha Al Oula</span> */}
          </Link>

          <div className="navbar__nav">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`navbar__link${isActive(link.to) ? ' navbar__link--active' : ''}`}
              >
                {link.label}
                {isActive(link.to) && (
                  <motion.div
                    className="navbar__underline"
                    layoutId="nav-underline"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="navbar__cta">
            <Link to="/cart" className="navbar__cart" aria-label={`Cart (${count} items)`}>
              <ShoppingCart size={20} strokeWidth={1.8} />
              {count > 0 && (
                <motion.span
                  key={count}
                  className="navbar__cart-badge"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                >
                  {count}
                </motion.span>
              )}
            </Link>
            <Link to="/test">
              <Button variant="primary" size="sm">Take the Test</Button>
            </Link>
          </div>

          <button
            className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                <Link
                  to={link.to}
                  className={`navbar__mobile-link${isActive(link.to) ? ' navbar__mobile-link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              className="navbar__mobile-cta"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.06 + 0.05 }}
            >
              <Link to="/test">
                <Button variant="primary">Take the Test</Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
