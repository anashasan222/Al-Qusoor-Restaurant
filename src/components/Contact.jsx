import { useLang } from '../i18n.jsx'

function Contact() {
  const { t } = useLang()

  const socials = [
    {
      id: 'whatsapp',
      name: t('contact.whatsapp'),
      msg: t('contact.whatsappMsg'),
      icon: '💬',
      img: './images/whatsapp-logo.jpg',
      href: 'https://wa.me/963000000000',
      cls: 'whatsapp',
    },
    {
      id: 'instagram',
      name: t('contact.instagram'),
      msg: t('contact.instagramMsg'),
      icon: '📸',
      img: './images/instagram-logo.jpg',
      href: 'https://instagram.com/',
      cls: 'instagram',
    },
    {
      id: 'facebook',
      name: t('contact.facebook'),
      msg: t('contact.facebookMsg'),
      icon: '👍',
      img: './images/facebook-logo.jpg',
      href: 'https://facebook.com/',
      cls: 'facebook',
    },
    {
      id: 'x',
      name: t('contact.x'),
      msg: t('contact.xMsg'),
      icon: '𝕏',
      img: './images/x-logo.jpg',
      href: 'https://x.com/',
      cls: 'x',
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">{t('contact.title')}</span>
          <h2 className="section-title">{t('contact.subtitle')}</h2>
        </div>
        <div className="social-grid">
          {socials.map((s) => (
            <a
              key={s.id}
              className={`social-card ${s.cls}`}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.img ? (
                <span className="social-icon">
                  <img src={s.img} alt={s.name} className="social-img" />
                </span>
              ) : (
                <span className="social-icon">{s.icon}</span>
              )}
              <strong>{s.name}</strong>
              <span className="social-msg">{s.msg}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact