import SocialLinks from "../../components/SocialLinks";

export const metadata = {
  title: "خدمات سطحة القنفذة | سحب ونقل السيارات 24 ساعة",
  description: "اكتشف خدمات سطحة القنفذة: سحب بعد الحوادث، طوارئ الطرق، نقل إلى الورش والتأمين، نقل بين المدن، ونقل سيارات المعارض والتشليح.",
  keywords: ["خدمات سطحة القنفذة", "سحب سيارات", "نقل سيارات بين المدن", "سطحة طوارئ"],
};

const phone = "+966551424294";
const phoneDisplay = "+966 55 142 4294";
const whatsapp = "966551424294";
const services = [
  ["01", "سحب السيارات بعد الحوادث", "نتعامل مع السيارة المتضررة بحذر وننقلها إلى الورشة أو مركز التقدير، مع تثبيت مناسب يحافظ عليها خلال الطريق.", "الحوادث والمركبات المتضررة"],
  ["02", "طوارئ الطرق السريعة", "خدمة سحب عاجلة للسيارات المتعطلة أو المتوقفة، مع ترتيب نقلها إلى أقرب ورشة أو أي وجهة تختارها.", "تعطل مفاجئ على الطريق"],
  ["03", "نقل إلى الورش والتأمين", "ننقل المركبة إلى ورش الإصلاح ومراكز التقدير والجهات المعتمدة لتسهيل إجراءات الصيانة أو التأمين.", "ورش، تقدير، وتأمين"],
  ["04", "نقل السيارات بين المدن", "نقل من وإلى القوز لمختلف مدن المملكة مع تحديد واضح للوجهة والتكلفة قبل بدء الرحلة.", "رحلات داخل المملكة"],
  ["05", "نقل سيارات المعارض", "تسليم السيارة من المعرض إلى المنزل أو موقع العمل بعناية، مع تجنب الاستخدام أو التشغيل غير الضروري.", "سيارات جديدة ومستعملة"],
  ["06", "نقل سيارات التشليح", "نقل السيارات التالفة أو غير القابلة للإصلاح إلى ساحات التشليح وإعادة التدوير بطريقة منظّمة.", "تشليح وإعادة تدوير"],
];

export default function ServicesPage() {
  return <main className="inner-page services-page" dir="rtl">
    <header className="site-header"><a href="/" className="brand"><img className="brand-logo" src="/brand-logo.svg" alt="" width="40" height="40"/><span>سطحة <b>القنفذة</b></span></a><nav className="nav inner-nav"><a href="/">الرئيسية</a><a href="/about">من نحن</a><a href="/services">خدماتنا</a><a href="/contact">تواصل معنا</a></nav><a className="header-call" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" aria-label={`راسلنا على واتساب ${phoneDisplay}`}><span>واتساب مباشر</span><b>{phoneDisplay}</b></a></header>
    <section className="inner-hero services-hero"><div className="container"><p className="eyebrow">حلول متكاملة لنقل سيارتك</p><h1>كل الطرق تؤدي إلى <span>خدمة آمنة.</span></h1><p>من الاستجابة الطارئة إلى النقل بين المدن، اختر الخدمة التي تناسب حالة مركبتك ودع الباقي لفريقنا.</p><a href={`tel:${phone}`} className="button button-primary">اطلب سطحة الآن <span className="arrow">←</span></a></div></section>
    <section className="container services-intro"><p className="eyebrow">خدماتنا</p><div className="section-heading split-heading"><h2>أياً كانت وجهة سيارتك، <span>نحن نعرف الطريق.</span></h2><p>خدماتنا مصممة لتمنحك مرونة كاملة؛ سواء احتجت استجابة سريعة أو نقلاً منظماً لمسافة طويلة.</p></div></section>
    <section className="container service-page-grid">{services.map(([number,title,text,tag]) => <article key={number} className="service-page-card"><div className="service-number">{number}</div><p className="service-tag">{tag}</p><h2>{title}</h2><p>{text}</p><div><a href={`tel:${phone}`} className="service-call">اتصال للخدمة <span className="arrow">←</span></a><a href={`https://wa.me/${whatsapp}`} aria-label={`واتساب ${title}`} className="service-wa">◔</a></div></article>)}</section>
    <section className="service-process"><div className="container"><div className="section-heading centered"><p className="eyebrow">طريقة بسيطة</p><h2>طلبك في ثلاث <span>خطوات.</span></h2></div><div className="process-grid"><article><b>01</b><h3>تواصل معنا</h3><p>اتصل أو أرسل موقعك عبر واتساب.</p></article><article><b>02</b><h3>نؤكد التفاصيل</h3><p>نحدد الموقع والوجهة ووقت الوصول.</p></article><article><b>03</b><h3>نصل وننقل</h3><p>نستلم المركبة ونوصلها بأمان.</p></article></div></div></section>
    <section className="inner-cta"><div className="container"><p>خدمة متاحة 24/7</p><h2>اختر الخدمة، <span>ونحن نصل إليك.</span></h2><div><a className="button button-light" href={`tel:${phone}`}>اتصال مباشر <b>{phoneDisplay}</b></a><a className="button button-outline-light" href={`https://wa.me/${whatsapp}`}>واتساب</a></div><SocialLinks/></div></section>
  </main>;
}
