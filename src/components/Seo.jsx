import { Helmet } from 'react-helmet-async'
import { useLang } from '../i18n.jsx'

const site = 'https://al-qosour-restaurant.example.com'

function Seo({ title, description, image, lang }) {
  const { t } = useLang()

  return (
    <Helmet htmlAttributes={{ lang: lang ?? 'en' }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={t('brand')} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image ?? `${site}/images/saveclip-756846602.jpeg`} />
      <meta property="og:url" content={site} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image ?? `${site}/images/saveclip-756846602.jpeg`} />
      <link rel="canonical" href={site} />
    </Helmet>
  )
}

export default Seo
