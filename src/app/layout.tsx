import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";
import { GoogleTagManager } from '@next/third-parties/google'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kayseri Tesisatçı",
  description: "Kayseri Kayseri Tesisatçı Hasan Usta.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <script
          defer
          data-site="www.tesisatcihasanusta.com"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <GoogleTagManager gtmId="GTM-5CMBPB4C" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}
