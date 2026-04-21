import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import SplashScreen from './components/SplashScreen/SplashScreen'

const Home = lazy(() => import('./pages/Home/Home'))
const Books = lazy(() => import('./pages/Books/Books'))
const BookDetail = lazy(() => import('./pages/BookDetail/BookDetail'))
const Game = lazy(() => import('./pages/Game/Game'))
const TestPicker = lazy(() => import('./pages/Test/TestPicker'))
const TestFlow = lazy(() => import('./pages/Test/TestFlow'))
const TestResults = lazy(() => import('./pages/Test/TestResults'))
const About = lazy(() => import('./pages/About/About'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

const PAGES_WITH_FOOTER = ['/home', '/books', '/game', '/about']

export default function App() {
  const location = useLocation()
  const isSplash = location.pathname === '/'
  const splashSeen = sessionStorage.getItem('splashSeen')
  const showFooter = PAGES_WITH_FOOTER.some(p => location.pathname.startsWith(p))

  if (isSplash) {
    return splashSeen ? <Navigate to="/home" replace /> : <SplashScreen />
  }

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--gradient-brand-soft)' }} />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/home" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:bookId" element={<BookDetail />} />
            <Route path="/game" element={<Game />} />
            <Route path="/test" element={<TestPicker />} />
            <Route path="/test/child" element={<TestFlow type="child" />} />
            <Route path="/test/parent" element={<TestFlow type="parent" />} />
            <Route path="/test/results" element={<TestResults />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      {showFooter && <Footer />}
    </>
  )
}
