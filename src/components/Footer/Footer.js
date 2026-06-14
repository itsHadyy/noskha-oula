import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div>
            <Link to="/home" className="footer__brand-logo" aria-label="Al Noskha Al Oula home">
              <img src="/logo-splash02.png" alt="" className="footer__brand-logo-img" width="100" height="100" />
            </Link>
            <p className="footer__brand-desc">
              Books that raise bright hearts. Helping parents and children find the stories that match who they are.
            </p>
          </div>

          <div>
            <p className="footer__col-title">Explore</p>
            <nav className="footer__links" aria-label="Explore navigation">
              <Link to="/home" className="footer__link">Home</Link>
              <Link to="/books" className="footer__link">All Books</Link>
              <Link to="/game" className="footer__link">Inside Me Game</Link>
              <Link to="/test" className="footer__link">Take the Test</Link>
            </nav>
          </div>

          <div>
            <p className="footer__col-title">Resources</p>
            <nav className="footer__links" aria-label="Resources navigation">
              <Link to="/about" className="footer__link">About Us</Link>
              <a href="#" className="footer__link">Parenting Blog</a>
              <a href="#" className="footer__link">Gift a Book</a>
              <a href="#" className="footer__link">Reading Guides</a>
            </nav>
          </div>

          <div>
            <p className="footer__col-title">Follow</p>
            <nav className="footer__links" aria-label="Social navigation">
              <a href="#" className="footer__link">Instagram</a>
              <a href="#" className="footer__link">Facebook</a>
              <a href="#" className="footer__link">TikTok</a>
              <a href="#" className="footer__link">Newsletter</a>
            </nav>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Al Noskha Al Oula. <a href="https://byhady.com" target="_blank" rel="noopener noreferrer">All rights reserved | HK</a></span>
          <span>Made with care for curious families.</span>
        </div>
      </div>
    </footer>
  )
}
