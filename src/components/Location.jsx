import { useLang } from '../i18n.jsx'

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.2892857175493!2d36.29743574082812!3d33.519863573472854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e700216aee43%3A0x5ae3ef7514968873!2z2KjYsdmI2LPYqtivINin2YTZgti12YjYsSDYtNin2LHYuSDYqNi62K_Yp9iv!5e0!3m2!1sen!2s!4v1787210226846!5m2!1sen!2s'

function Location() {
  const { t } = useLang()

  return (
    <section id="location" className="location">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">{t('location.title')}</span>
          <h2 className="section-title">{t('location.subtitle')}</h2>
        </div>
        <div className="location-card">
          <div className="map-wrap">
            <iframe
              src={MAP_SRC}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Al Qosour Restaurant location on Google Maps"
            />
          </div>
          <div className="location-info">
            <div className="address-box">
              <span className="pin">📍</span>
              <p>{t('location.address')}</p>
            </div>
            <div className="hours-box">
              <span className="pin">🕐</span>
              <div>
                <strong>{t('location.openTitle')}</strong>
                <p>
                  {t('location.openDays')} · {t('location.openHours')}
                </p>
              </div>
            </div>
            <a
              className="btn btn-primary"
              href="https://www.google.com/maps/place/33.519863573472854,36.29743574082812"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('location.getDirections')} →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location