const whatsapp = "966551424294";
const phoneDisplay = "+966 55 142 4294";

export default function WhatsAppButton() {
  return <a className="whatsapp-float" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" aria-label={`تواصل عبر واتساب على الرقم ${phoneDisplay}`}>
    <span className="whatsapp-icon" aria-hidden="true">◔</span>
    <span className="whatsapp-copy"><b>تواصل عبر واتساب</b><small>{phoneDisplay}</small></span>
  </a>;
}
