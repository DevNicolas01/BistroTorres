import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { to: '/', label: 'Início' },
    { to: '/cardapio', label: 'Cardápio' },
    { to: '/sobre', label: 'Nossa História' },
    { to: '/reservas', label: 'Reservas' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-creme/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none group">
          <span className="font-display text-xl font-bold text-espresso tracking-wide group-hover:text-caramel transition-colors">
            Grão <span className="text-caramel">&</span> Mar
          </span>
          <span className="font-body text-[9px] text-fumo uppercase tracking-[0.3em]">
            café bistrô · torres
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `font-body text-sm tracking-wide transition-colors ${
                  isActive ? 'text-caramel font-bold' : 'text-espresso/70 hover:text-espresso'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link to="/reservas" className="btn-dark text-xs py-2 px-5">
            Reservar Mesa
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-espresso p-1" onClick={() => setOpen(!open)}>
          {open
            ? <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          }
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-creme border-t border-espresso/10"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `font-body text-sm py-2 border-b border-espresso/10 ${
                      isActive ? 'text-caramel font-bold' : 'text-espresso/70'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
