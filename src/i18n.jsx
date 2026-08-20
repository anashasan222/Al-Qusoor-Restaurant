import { createContext, useContext, useEffect, useState } from 'react'

const translations = {
  en: {
    brand: 'Al Qosour Restaurant',
    nav: {
      home: 'Home',
      about: 'About Us',
      features: 'Features',
      location: 'Location',
      contact: 'Contact',
      welcome: 'Welcome',
      orderNow: 'Order Now',
      switchLang: 'العربية',
    },
    hero: {
      badge: 'Damascus · Baghdad Street',
      title: 'Where Every Dish Tells a Story',
      subtitle:
        'Authentic Arabian flavours, crafted with precision and served with warm hospitality in the heart of Damascus.',
      ctaOrder: 'Order Now',
      ctaMenu: 'Reserve a Table',
      ctaLocation: 'Find Us',
      stat1Value: '15+',
      stat1Label: 'Years of Flavour',
      stat2Value: '60+',
      stat2Label: 'Signature Dishes',
      stat3Value: '10K+',
      stat3Label: 'Happy Guests',
    },
    about: {
      title: 'About Us',
      subtitle: 'A palace of taste in the heart of Damascus',
      p1: 'Al Qosour Restaurant brings together the finest of Arabian cuisine with modern cooking techniques. Every dish tells a story, and every flavour is crafted with precision.',
      p2: 'From our famous fried chicken to crispy golden fries, we serve food that blends art and taste — an experience you will not forget.',
      p3: 'We look forward to welcoming you in person to delight your palates with the finest cuisine, and to brighten your moments with the warmth of authentic Arabian hospitality.',
      points: [
        'Family-run and proudly Syrian',
        'Fresh ingredients, every single day',
        'Authentic recipes passed down generations',
      ],
    },
    features: {
      title: 'Why Choose Us',
      subtitle: 'Everything you love about a great restaurant, in one place',
      items: [
        {
          icon: '🛵',
          title: 'Fast Delivery',
          text: 'Hot, fresh food delivered straight to your door — order in a tap and enjoy it while it is still steaming.',
        },
        {
          icon: '👨‍👩‍👧',
          title: 'Family Friendly',
          text: 'A welcoming space for families with a kids corner and family combos made for sharing.',
        },
        {
          icon: '🎁',
          title: 'Rewards & Offers',
          text: 'Loyalty points and exclusive weekly deals for our regular guests, just like the big chains.',
        },
        {
          icon: '📱',
          title: 'Easy Online Ordering',
          text: 'Browse our menu and reserve your table online, or order ahead for a quick pickup.',
        },
        {
          icon: '🥩',
          title: 'Fresh Ingredients',
          text: 'Quality is our promise — everything is prepared fresh every single day, never frozen.',
        },
        {
          icon: '🍗',
          title: 'The Big Meal',
          text: 'A generous feast for the whole table — crispy fried chicken, golden fries and fresh sides, made to share and made to remember.',
        },
      ],
    },
    location: {
      title: 'Find Us',
      subtitle: 'Come and visit — we are waiting for you',
      address: 'G79X+XRC, Baghdad street, Damascus, Syria',
      openTitle: 'Opening Hours',
      openDays: 'Open every day',
      openHours: '10:00 AM – 12:00 AM',
      getDirections: 'Get Directions',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Reach out on your favourite platform — we reply fast',
      whatsapp: 'WhatsApp',
      whatsappMsg: 'Chat with us instantly',
      instagram: 'Instagram',
      instagramMsg: 'Follow our daily specials',
      facebook: 'Facebook',
      facebookMsg: 'Like our page & reviews',
      x: 'X (Twitter)',
      xMsg: 'Follow us for news',
    },
    welcome: {
      title: 'Welcome to Al Qosour',
      text: '🍽️ Thank you for honouring us with your visit to our website.\n\nAt our restaurant, every dish tells a story, and every flavour is crafted with precision. We believe that food is not just a meal, but an experience that blends art and taste.\n\nWe look forward to welcoming you in person to delight your palates with the finest cuisine, and to brighten your moments with the warmth of authentic Arabian hospitality.\n\nUntil then, feel free to browse our menu and reserve your table, so together we can create unforgettable memories.',
    },
    footer: {
      tagline: 'Where every dish tells a story.',
      quickLinks: 'Quick Links',
      findUs: 'Find Us',
      rights: 'All rights reserved.',
      madeWith: 'Made with',
    },
  },
  ar: {
    brand: 'مطعم القصور',
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      features: 'مميزاتنا',
      location: 'الموقع',
      contact: 'تواصل معنا',
      welcome: 'أهلاً بكم',
      orderNow: 'اطلب الآن',
      switchLang: 'English',
    },
    hero: {
      badge: 'دمشق · شارع بغداد',
      title: 'حيث تحكي كل وجبة قصة',
      subtitle:
        'نكهات عربية أصيلة، أُعدت بدقة متناهية وتُقدَّم بدفء الضيافة العربية في قلب دمشق.',
      ctaOrder: 'اطلب الآن',
      ctaMenu: 'احجز طاولة',
      ctaLocation: 'موقعنا',
      stat1Value: '+15',
      stat1Label: 'عاماً من النكهة',
      stat2Value: '+60',
      stat2Label: 'طبقاً مميزاً',
      stat3Value: '+10 آلاف',
      stat3Label: 'ضيف سعيد',
    },
    about: {
      title: 'من نحن',
      subtitle: 'قصر من الطعم في قلب دمشق',
      p1: 'يجمع مطعم القصور بين أجود ما في المطبخ العربي وتقنيات الطهي الحديثة. كل طبق يحكي قصة، وكل نكهة صُنعت بدقة.',
      p2: 'من دجاجنا المقلي الشهير إلى بطاطسنا المقلية الذهبية المقرمشة، نقدم طعاماً يمزج بين الفن والذوق — تجربة لن تنسوها.',
      p3: 'نتطلع إلى استقبالكم شخصياً لإبهار أذواقكم بأجود الأطباق، وإلى إشراق لحظاتكم بدفء الضيافة العربية الأصيلة.',
      points: [
        'مشروع عائلي ونفخر بكونه سورياً',
        'مكونات طازجة، كل يوم',
        'وصفات أصيلة توارثناها جيلاً بعد جيل',
      ],
    },
    features: {
      title: 'لماذا تختارنا',
      subtitle: 'كل ما تحبه في مطعم رائع، في مكان واحد',
      items: [
        {
          icon: '🛵',
          title: 'توصيل سريع',
          text: 'طعام ساخن وطازج يصل حتى بابك — اطلب بلمسة واستمتع به وهو ما يزال يفوح بالبخار.',
        },
        {
          icon: '👨‍👩‍👧',
          title: 'مناسب للعائلات',
          text: 'مساحة ترحيبية للعائلات مع ركن للأطفال وعروض عائلية مصممة للمشاركة.',
        },
        {
          icon: '🎁',
          title: 'مكافآت وعروض',
          text: 'نقاط ولاء وعروض أسبوعية حصرية لضيوفنا الدائمين، تماماً مثل كبرى السلاسل.',
        },
        {
          icon: '📱',
          title: 'طلب إلكتروني سهل',
          text: 'تصفح قائمتنا واحجز طاولتك عبر الإنترنت، أو اطلب مسبقاً لتجهيز طلبك بسرعة.',
        },
        {
          icon: '🥩',
          title: 'مكونات طازجة',
          text: 'الجودة وعدنا — كل شيء يُحضّر طازجاً كل يوم، لا يُجمّد أبداً.',
        },
        {
          icon: '🍗',
          title: 'الوجبة الكبيرة',
          text: 'وليمة سخية لكل المائدة — دجاج مقرمش، بطاطس ذهبية وأطباق جانبية طازجة، صُنعت للمشاركة ولتبقى في الذاكرة.',
        },
      ],
    },
    location: {
      title: 'موقعنا',
      subtitle: 'تفضلوا بزيارتنا — نحن بانتظاركم',
      address: 'G79X+XRC، شارع بغداد، دمشق، سوريا',
      openTitle: 'ساعات العمل',
      openDays: 'مفتوح يومياً',
      openHours: '10:00 صباحاً – 12:00 منتصف الليل',
      getDirections: 'احصل على الاتجاهات',
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'تواصلوا معنا عبر منصتكم المفضلة — نرد بسرعة',
      whatsapp: 'واتساب',
      whatsappMsg: 'راسلنا مباشرة',
      instagram: 'إنستغرام',
      instagramMsg: 'تابعوا عروضنا اليومية',
      facebook: 'فيسبوك',
      facebookMsg: 'أعجب بصفحتنا وتقييماتنا',
      x: 'إكس (تويتر)',
      xMsg: 'تابعونا لآخر الأخبار',
    },
    welcome: {
      title: 'أهلاً بكم في القصور',
      text: '🍽️ شكراً لتفضلكم بتشريفنا بزيارة موقعنا.\n\nفي مطعمنا، يحكي كل طبق قصة، وكل نكهة صُنعت بدقة. نؤمن بأن الطعام ليس مجرد وجبة، بل تجربة تمزج بين الفن والذوق.\n\nنتطلع إلى استقبالكم شخصياً لإبهار أذواقكم بأجود الأطباق، وإلى إشراق لحظاتكم بدفء الضيافة العربية الأصيلة.\n\nوإلى ذلك الحين، لا تترددوا في تصفح قائمتنا وحجز طاولتكم، لنصنع معاً ذكريات لا تُنسى.',
    },
    footer: {
      tagline: 'حيث تحكي كل وجبة قصة.',
      quickLinks: 'روابط سريعة',
      findUs: 'موقعنا',
      rights: 'جميع الحقوق محفوظة.',
      madeWith: 'صُنع بـ',
    },
  },
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  const t = (key) => {
    const keys = key.split('.')
    let val = translations[lang]
    for (const k of keys) val = val?.[k]
    return typeof val === 'string' ? val : key
  }

  const tRaw = (key) => {
    const keys = key.split('.')
    let val = translations[lang]
    for (const k of keys) val = val?.[k]
    return val ?? key
  }

  const toggleLang = () => setLang((l) => (l === 'en' ? 'ar' : 'en'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, tRaw }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
