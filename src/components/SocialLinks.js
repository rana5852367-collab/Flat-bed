const socialLinks = [
  ["TikTok", "https://vt.tiktok.com/ZSg9jk9MC/", "♪"],
  ["Instagram", "https://www.instagram.com/arifali11240?exln=MWMwc2ZzN2o2ajVseg==", "◎"],
];

export default function SocialLinks() {
  return <div className="social-links" aria-label="حساباتنا على منصات التواصل الاجتماعي">
    {socialLinks.map(([name, href, icon]) => <a href={href} className="social-link" key={name} target="_blank" rel="noreferrer">
      <span className={`social-icon social-icon-${name.toLowerCase()}`} aria-hidden="true">{icon}</span>
      <span className="social-copy"><small>تابعنا على</small><b>{name}</b></span>
      <span className="social-arrow" aria-hidden="true">↗</span>
    </a>)}
  </div>;
}
