import ContactForm from "./ContactForm";
import SocialLinks from "../../components/SocialLinks";

export const metadata = {
  title: "تواصل معنا | سطحة القنفذة",
  description: "تواصل مع سطحة القنفذة لطلب نقل أو سحب السيارات على مدار الساعة.",
};

const phone = "+966551424294";
const phoneDisplay = "+966 55 142 4294";
const whatsapp = "966551424294";

export default function ContactPage() {
  return <main className="contact-page" dir="rtl">
    <header className="site-header"><a href="/" className="brand"><img className="brand-logo" src="/brand-logo.svg" alt="" width="40" height="40"/><span>سطحة <b>القنفذة</b></span></a><nav className="nav contact-nav"><a href="/">الرئيسية</a><a href="/#services">خدماتنا</a><a href="/contact">تواصل معنا</a></nav><a className="header-call" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" aria-label={`راسلنا على واتساب ${phoneDisplay}`}><span>واتساب مباشر</span><b>{phoneDisplay}</b></a></header>
    <section className="contact-hero"><div className="container"><p className="eyebrow">نحن هنا لمساعدتك</p><h1>تواصل معنا في <span>أي وقت.</span></h1><p>سواء كنت بحاجة إلى سطحة طوارئ أو تريد الاستفسار عن نقل سيارتك، فريقنا جاهز للرد عليك على مدار الساعة.</p></div></section>
    <section className="container contact-content"><div className="contact-cards"><a href={`tel:${phone}`} className="contact-card"><span>☎</span><div><small>اتصال مباشر</small><b>{phoneDisplay}</b><p>اتصل بنا لخدمة فورية</p></div></a><a href={`https://wa.me/${whatsapp}`} className="contact-card"><span>◔</span><div><small>واتساب</small><b>راسلنا الآن</b><p>أرسل موقعك وسنتواصل معك</p></div></a><div className="contact-card"><span>⌖</span><div><small>منطقة الخدمة</small><b>القوز والقنفذة</b><p>ونقل بين مدن المملكة</p></div></div></div>
      <SocialLinks/>
      <div className="contact-form-wrap"><div><p className="eyebrow">أرسل طلبك</p><h2>كيف يمكننا <span>خدمتك؟</span></h2><p>اترك بياناتك وسيتواصل معك فريقنا في أقرب وقت.</p></div><ContactForm whatsapp={whatsapp}/></div>
    </section>
    <section className="contact-map-section"><div className="container contact-map-layout"><div className="contact-map-copy"><p className="eyebrow">موقعنا على الخريطة</p><h2>اعثر علينا <span>بسهولة.</span></h2><p>افتح موقعنا على خرائط Google للحصول على الاتجاهات.</p><a className="button button-dark" href="https://www.google.com/maps/place/%D8%B3%D8%B7%D8%AD%D8%A9+%D8%A7%D9%84%D9%82%D9%86%D9%81%D8%B0%D8%A9%E2%80%AD/@19.1325419,41.0907588,17z/data=!3m1!4b1!4m6!3m5!1s0x15e68f006794a077:0x53275b7fc88654ab!8m2!3d19.1325419!4d41.0907588!16s%2Fg%2F11ms4gptqx?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">افتح خرائط Google <span className="arrow">←</span></a></div><div className="contact-map-frame"><iframe title="موقع سطحة القنفذة على خرائط Google" src="https://www.google.com/maps?q=19.1325419,41.0907588&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/></div></div></section>
    <section className="contact-bottom"><div className="container"><h2>خدمة سطحات موثوقة، <span>حين تحتاجها.</span></h2><a className="button button-light" href={`tel:${phone}`}>اتصال مباشر <b>{phoneDisplay}</b></a></div></section>
    <footer><div className="container footer-bottom"><span>© 2026 سطحة القنفذة. جميع الحقوق محفوظة.</span><span>خدمة نقل سيارات آمنة وسريعة</span></div></footer>
  </main>;
}
