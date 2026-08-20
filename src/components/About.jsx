import { useLang } from '../i18n.jsx'

function About() {
  const { t, tRaw } = useLang()
  const points = tRaw('about.points')

  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-visual">
          <img src="./images/saveclip-759574516.jpeg" alt="Inside Al Qosour Restaurant" />
          <img
            className="about-img-small"
            src="./images/fried-chicken.jpg"
            alt="Fried chicken plate"
          />
        </div>
        <div className="about-content">
          <span className="section-tag">{t('about.title')}</span>
          <h2 className="section-title">{t('about.subtitle')}</h2>
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
          <ul className="about-points">
            {Array.isArray(points) &&
              points.map((point, i) => (
                <li key={i}>
                  <span className="check">✔</span> {point}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
