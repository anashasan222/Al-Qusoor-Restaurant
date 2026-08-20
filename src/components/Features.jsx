import { useLang } from '../i18n.jsx'

const IMAGES = [
  './images/fried-chicken.jpg',
  './images/fries-red-box.jpg',
  './images/fried-chicken-bucket.jpg',
  './images/chicken-bucket.jpg',
  './images/saveclip-753546383.jpeg',
  './images/saveclip-756535855.jpeg',
]

function Features() {
  const { t, tRaw } = useLang()
  const items = tRaw('features.items')

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">{t('features.title')}</span>
          <h2 className="section-title">{t('features.subtitle')}</h2>
        </div>
        <div className="features-grid">
          {Array.isArray(items) &&
            items.map((f, i) => (
              <article className="feature-card" key={i}>
                <div className="feature-media">
                  <img src={IMAGES[i % IMAGES.length]} alt={f.title} loading="lazy" />
                </div>
                <div className="feature-body">
                  <span className="feature-icon">{f.icon}</span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Features