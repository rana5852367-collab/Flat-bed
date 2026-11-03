export const metadata = {
  title: "من نحن | سطحة القنفذة لنقل وسحب السيارات",
  description: "تعرف على سطحة القنفذة، خدمة نقل وسحب سيارات متاحة على مدار الساعة داخل القوز والقنفذة وبين مدن المملكة.",
  keywords: ["عن سطحة القنفذة", "سطحة القنفذة", "نقل سيارات القنفذة"],
};

const phone = "+966551424294";
const phoneDisplay = "+966 55 142 4294";
const whatsapp = "966551424294";

export default function AboutPage() {
  return <main className="inner-page" dir="rtl">
    <header className="site-header"><a href="/" className="brand"><img className="brand-logo" src="/brand-logo.svg" alt="" width="40" height="40"/><span>سطحة <b>القنفذة</b></span></a><nav className="nav inner-nav"><a href="/">الرئيسية</a><a href="/about">من نحن</a><a href="/services">خدماتنا</a><a href="/contact">تواصل معنا</a></nav><a className="header-call" href={`tel:${phone}`}><span>اتصال فوري</span><b>{phoneDisplay}</b></a></header>
    <section className="inner-hero about-hero"><div className="container"><p className="eyebrow">نعرف قيمة الطريق</p><h1>نقل آمن يبدأ من <span>الثقة.</span></h1><p>سطحة القنفذة هي وجهتك لخدمات سحب ونقل السيارات الاحترافية. نصل إليك بسرعة، ونتعامل مع مركبتك بالعناية التي تستحقها.</p><div className="hero-actions"><a href={`https://wa.me/${whatsapp}`} className="button button-primary">تواصل عبر واتساب <span className="arrow">←</span></a><a href="/services" className="button button-ghost">استكشف خدماتنا</a></div></div><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/></section>
    <section className="container about-story"><div className="story-image"><img src="https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=85" alt="فريق نقل سيارات محترف"/><span>24<br/><small>ساعة</small></span></div><div><p className="eyebrow">قصتنا</p><h2>خدمة صُممت <span>لتطمئنك.</span></h2><p>نعلم أن تعطل السيارة أو الحاجة إلى نقلها قد يأتي في وقت غير مناسب. لذلك بنينا خدمتنا حول الاستجابة السريعة والتواصل الواضح والنقل المدروس من لحظة اتصالك حتى تسليم المركبة.</p><p>نخدم القوز والقنفذة والمناطق المجاورة، مع توفير نقل السيارات بين المدن عند الحاجة. فريقنا مجهز للتعامل مع المركبات العادية، الفاخرة، والمنخفضة، والحالات الطارئة بعد الحوادث.</p><a href={`tel:${phone}`} className="text-link">تحدث مع فريقنا الآن <span className="arrow">←</span></a></div></section>
    <section className="values"><div className="container"><div className="section-heading centered"><p className="eyebrow">وعدنا لك</p><h2>معاييرنا لا تتغير <span>في كل رحلة.</span></h2></div><div className="values-grid"><article><b>01</b><h3>السلامة أولاً</h3><p>نستخدم أساليب تثبيت وتجهيز مدروسة للحفاظ على السيارة أثناء التحميل والنقل.</p></article><article><b>02</b><h3>تواصل واضح</h3><p>نبقيك على اطلاع بوقت الوصول والخطوات التالية، دون أي غموض.</p></article><article><b>03</b><h3>استجابة مسؤولة</h3><p>نقدّر وقتك ونرتّب الخدمة بأسرع صورة ممكنة حسب موقعك وحالة الطريق.</p></article><article><b>04</b><h3>خدمة باحترام</h3><p>نتعامل مع كل طلب باهتمام، لأننا نعرف أهمية سيارتك وراحة بالك.</p></article></div></div></section>
    <section className="container about-coverage"><div><p className="eyebrow">نصل أبعد</p><h2>من القوز إلى <span>وجهتك.</span></h2><p>خدمة محلية سريعة داخل القوز، ونقل موثوق إلى الورش ومراكز التقدير والمدن الأخرى في المملكة.</p></div><div className="coverage-list"><span>القوز</span><span>القنفذة</span><span>الليث</span><span>جدة</span><span>مكة المكرمة</span><span>الطائف</span></div></section>
    <section className="inner-cta"><div className="container"><p>نحن على بُعد اتصال</p><h2>احتجت سطحة؟ <span>نحن جاهزون.</span></h2><a className="button button-light" href={`tel:${phone}`}>اتصال مباشر <b>{phoneDisplay}</b></a></div></section>
  </main>;
}
