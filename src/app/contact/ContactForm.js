"use client";

export default function ContactForm({ whatsapp }) {
  function sendRequest(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "طلب خدمة جديد - سطحة القنفذة",
      `الاسم: ${formData.get("name").trim()}`,
      `رقم الجوال: ${formData.get("phone").trim()}`,
      `نوع الخدمة: ${formData.get("service")}`,
      `تفاصيل الطلب: ${formData.get("message").trim() || "لا توجد تفاصيل إضافية"}`,
    ].join("\n");
    window.location.href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
  }

  return (
    <form className="contact-form" onSubmit={sendRequest}>
      <label>الاسم<input type="text" name="name" placeholder="اكتب اسمك" autoComplete="name" required /></label>
      <label>رقم الجوال<input type="tel" name="phone" placeholder="05xxxxxxxx" autoComplete="tel" required /></label>
      <label>نوع الخدمة<select name="service" defaultValue="" required><option value="" disabled>اختر الخدمة</option><option>سطحة طوارئ</option><option>نقل بين المدن</option><option>نقل إلى ورشة أو تأمين</option><option>استفسار عام</option></select></label>
      <label>تفاصيل الطلب<textarea name="message" rows="5" placeholder="اكتب موقعك وتفاصيل الخدمة المطلوبة" /></label>
      <button className="button button-primary form-button" type="submit">إرسال الطلب عبر واتساب <span className="arrow">←</span></button>
      <p className="form-note">سيتم فتح واتساب مع تفاصيل طلبك لإرسالها مباشرة.</p>
    </form>
  );
}
