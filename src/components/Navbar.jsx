import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/sakthi-dental-clinic-logo.png'
import '../styles/navbar.css'

const navigationLinks = [
  { label: 'Home', to: '/', end: true },
  { label: 'About Us', to: '/about' },
  { label: 'Treatments', to: '/treatments' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact Us', to: '/contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="navbar">
        <Link
          className="navbar-brand"
          to="/"
          aria-label="Sakthi Dental Clinic home"
          onClick={closeMenu}
        >
          <img
            className="navbar-logo"
            src={logo}
            alt="Sakthi Dental Clinic"
          />
        </Link>

        <button
          className="navbar-menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          className={`navbar-navigation${isMenuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          <div className="navbar-links">
            {navigationLinks.map(({ label, to, end }) => (
              <NavLink
                className={({ isActive }) =>
                  `navbar-link${isActive ? ' is-active' : ''}`
                }
                end={end}
                key={to}
                onClick={closeMenu}
                to={to}
              >
                {label}
              </NavLink>
            ))}
          </div>
          <Link
            className="button button-primary navbar-appointment"
            onClick={closeMenu}
            to="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
