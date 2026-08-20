import { useLang } from '../i18n.jsx'

function Welcome() {
  const { t } = useLang()
  const paragraphs = t('welcome.text').split('\n\n')

  return (
    <section id="welcome" className="welcome">
      <div className="container welcome-grid">
        <div className="welcome-visual">
          <img src="./images/saveclip-765116470.webp" alt="Al Qosour Restaurant meal" loading="lazy" />
          <img
            className="welcome-img-2"
            src="./images/saveclip-775442143.jpeg"
            alt="Al Qosour Restaurant dining"
            loading="lazy"
          />
        </div>
        <div className="welcome-content">
          <span className="section-tag">{t('welcome.title')}</span>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.ctaMenu')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Welcome