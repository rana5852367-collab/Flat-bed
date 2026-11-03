const routes = [
  ["الرياض", "المدينة المنورة", "930", 950],
  ["جدة", "المدينة المنورة", "435", 400],
  ["الدمام", "المدينة المنورة", "1,400", 1400],
  ["أبها", "المدينة المنورة", "985", 1000],
  ["تبوك", "المدينة المنورة", "690", 700],
  ["القريات", "المدينة المنورة", "1,035", 1050],
  ["الطائف", "الرياض", "970", 950],
  ["الطائف", "جدة", "170", 300],
];

const whatsapp = "966551424294";

export default function RateList() {
  return <section className="rate-list-section" id="rates" dir="rtl">
    <div className="container">
      <div className="section-heading centered">
        <p className="eyebrow">نقل بين المدن</p>
        <h2>أسعار واضحة، <span>ورحلة مطمئنة.</span></h2>
        <p>أسعار استرشادية لنقل السيارات بين المدن. اختر وجهتك لتأكيد السعر والتفاصيل عبر واتساب.</p>
      </div>
      <div className="rate-list-grid">
        {routes.map(([from, to, distance, price]) => {
          const message = `السلام عليكم، أود الاستفسار عن نقل سيارة من ${from} إلى ${to}. السعر الظاهر ${price.toLocaleString("en-US")} ريال.`;
          return <a className="rate-card" href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" key={`${from}-${to}`}>
            <span className="rate-card-route"><b>سطحة {from}</b><span aria-hidden="true">←</span><b>{to}</b></span>
            <span className="rate-card-distance">المسافة التقريبية <b>~{distance} كم</b></span>
            <span className="rate-card-price"><span>السعر التقريبي</span><b>{price.toLocaleString("en-US")} <small>ر.س</small></b></span>
            <span className="rate-card-action">استفسر عن السعر <span aria-hidden="true">↗</span></span>
          </a>;
        })}
      </div>
      <p className="rate-list-note">تنويه: الأسعار استرشادية فقط، ويُؤكَّد السعر النهائي عند الطلب حسب نوع السيارة وحالتها ونوع السطحة والمسافة الفعلية وموعد النقل. قد تتغير الأسعار، ولا يُعد هذا الجدول عرضاً تعاقدياً نهائياً.</p>
    </div>
  </section>;
}
