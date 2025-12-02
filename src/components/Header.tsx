import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import logoImage from '../assets/ZOE Logo.jpg'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  
  // Home page has dark hero, other pages have light backgrounds
  const isHomePage = location.pathname === '/'
  const shouldUseWhiteText = isHomePage && !isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    // Set initial scroll state
    setIsScrolled(window.scrollY > 20)
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About Us' },
    { path: '/our-approach', label: 'Treatment' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/education', label: 'Education' },
    { path: '/blog', label: 'News' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white/90 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <img
                src={logoImage}
                alt="ZOE REVIVE TRUST Logo"
                className="h-16 sm:h-20 w-auto"
              />
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  shouldUseWhiteText
                    ? location.pathname === link.path
                      ? 'text-white'
                      : 'text-white/90 hover:text-white'
                    : location.pathname === link.path
                      ? 'text-sage-700'
                      : 'text-neutral-600 hover:text-sage-700'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      shouldUseWhiteText ? 'bg-white' : 'bg-sage-600'
                    }`}
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-sage-600 rounded-full hover:bg-sage-700 transition-colors duration-200 shadow-lg shadow-sage-600/25 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-offset-2"
            >
              Get Help Now
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              shouldUseWhiteText
                ? 'text-white hover:text-white/80'
                : 'text-neutral-600 hover:text-sage-700'
            }`}
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-neutral-200"
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block text-base font-medium transition-colors duration-200 py-2 ${
                location.pathname === link.path
                  ? 'text-sage-700 border-l-4 border-sage-600 pl-4'
                  : 'text-neutral-600 hover:text-sage-700 pl-4'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block mt-4 px-6 py-3 text-sm font-semibold text-center text-white bg-sage-600 rounded-full hover:bg-sage-700 transition-colors duration-200"
          >
            Get Help Now
          </Link>
        </div>
      </motion.div>
    </motion.header>
  )
}

export default Header
