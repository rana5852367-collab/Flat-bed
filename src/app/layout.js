import "./globals.css";
import "./overrides.css";

export const metadata = {
  title: "سطحة القنفذة | نقل وسحب سيارات على مدار الساعة",
  description: "خدمات سطحة ونقل سيارات في القوز والقنفذة: سحب طوارئ، نقل بين المدن، ونقل إلى الورش والتأمين على مدار الساعة.",
  keywords: ["سطحة القنفذة", "سطحة القنفذة", "نقل سيارات", "سحب سيارات", "سطحة 24 ساعة"],
  icons: { icon: "/brand-logo.svg", shortcut: "/brand-logo.svg" },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: "سطحة القنفذة",
    title: "سطحة القنفذة | نقل وسحب سيارات على مدار الساعة",
    description: "خدمة نقل وسحب سيارات آمنة وسريعة. تواصل مع سطحة القنفذة لطلب الخدمة.",
    images: [{ url: "/tow-roadside.jpeg", width: 1600, height: 900, alt: "سطحة القنفذة تنقل سيارة بأمان" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "سطحة القنفذة | نقل وسحب سيارات",
    description: "خدمات نقل وسحب السيارات على مدار الساعة.",
    images: ["/tow-roadside.jpeg"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
