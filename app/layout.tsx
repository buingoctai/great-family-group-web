import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_NAME = "Great Family Group";
const SITE_DESCRIPTION = "Tư vấn gia đình và giải pháp phần mềm giúp kiến tạo những gia đình tuyệt vời tại Việt Nam";

export const metadata: Metadata = {
  metadataBase: new URL("https://greatfamily.group"),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "tư vấn gia đình",
    "hòa giải mâu thuẫn",
    "nuôi dạy con",
    "giao tiếp vợ chồng",
    "tài chính gia đình",
    "phần mềm quản lý gia đình",
    "Great Family Group",
    "Việt Nam"
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://greatfamily.group",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href="https://greatfamily.group" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Great Family Group",
              "url": "https://greatfamily.group",
              "description": SITE_DESCRIPTION,
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "hello@greatfamily.group"
              }
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
