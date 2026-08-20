import { useLang } from '../i18n.jsx'

function Hero() {
  const { t } = useLang()

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero">
      <div className="hero-deco hero-deco-1" />
      <div className="hero-deco hero-deco-2" />
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="badge">★ {t('hero.badge')}</span>
          <h1 className="hero-title">{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => go('contact')}>
              🍔 {t('hero.ctaOrder')}
            </button>
            <button className="btn btn-outline" onClick={() => go('welcome')}>
              {t('hero.ctaMenu')}
            </button>
            <button className="btn btn-ghost" onClick={() => go('location')}>
              📍 {t('hero.ctaLocation')}
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <strong>{t('hero.stat1Value')}</strong>
              <span>{t('hero.stat1Label')}</span>
            </div>
            <div className="stat">
              <strong>{t('hero.stat2Value')}</strong>
              <span>{t('hero.stat2Label')}</span>
            </div>
            <div className="stat">
              <strong>{t('hero.stat3Value')}</strong>
              <span>{t('hero.stat3Label')}</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-img-main">
            <img src="./images/saveclip-756846602.jpeg" alt="Al Qosour Restaurant signature dish" />
          </div>
          <img
            className="hero-img-float"
            src="./images/fried-chicken-bucket.jpg"
            alt="Fried chicken bucket"
          />
          <img
            className="hero-img-float hero-img-float-2"
            src="./images/fries-red-box.jpg"
            alt="Crispy french fries"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
