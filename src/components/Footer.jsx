import { useLang } from '../i18n.jsx'

function Footer() {
  const { t } = useLang()

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            className="brand-logo"
            src="./images/saveclip-753546383.jpeg"
            alt={t('brand')}
          />
          <strong>{t('brand')}</strong>
          <p>{t('footer.tagline')}</p>
        </div>
        <div className="footer-col">
          <h4>{t('footer.quickLinks')}</h4>
          <button onClick={() => go('home')}>{t('nav.home')}</button>
          <button onClick={() => go('about')}>{t('nav.about')}</button>
          <button onClick={() => go('features')}>{t('nav.features')}</button>
          <button onClick={() => go('welcome')}>{t('nav.welcome')}</button>
        </div>
        <div className="footer-col">
          <h4>{t('footer.findUs')}</h4>
          <p>{t('location.address')}</p>
          <p>{t('location.openHours')}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {t('brand')}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}

export default Footer