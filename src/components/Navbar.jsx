import { useState } from 'react'
import { useLang } from '../i18n.jsx'

const LINKS = [
  { id: 'home', key: 'nav.home' },
  { id: 'about', key: 'nav.about' },
  { id: 'features', key: 'nav.features' },
  { id: 'location', key: 'nav.location' },
  { id: 'contact', key: 'nav.contact' },
  { id: 'welcome', key: 'nav.welcome' },
]

function Navbar() {
  const { t, toggleLang } = useLang()
  const [open, setOpen] = useState(false)

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <button className="brand" onClick={() => go('home')}>
          <img
            className="brand-logo"
            src="./images/saveclip-753546383.jpeg"
            alt={t('brand')}
          />
          <span className="brand-text">{t('brand')}</span>
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((l) => (
            <button key={l.id} className="nav-link" onClick={() => go(l.id)}>
              {t(l.key)}
            </button>
          ))}
        </nav>

        <div className="navbar-actions">
          <button className="lang-toggle" onClick={toggleLang}>
            🌐 {t('nav.switchLang')}
          </button>
          <button className="btn btn-primary order-btn" onClick={() => go('contact')}>
            {t('nav.orderNow')}
          </button>
          <button
            className="hamburger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
