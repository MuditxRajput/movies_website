import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import Footer from "./Components/Footer/page";
import Header from "./Components/Header/page";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Download Free Bollywood, Hollywood Movies & Web Series - FlimFusion",
  description:
    "Explore and download the latest Bollywood, Hollywood movies, and web series for free. Get high-quality downloads and enjoy your favorite content without cost.",
  keywords:
    "free movies download, Bollywood movies download, Hollywood movies download, web series download, HD movies download",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        {/* Add any additional meta tags or scripts needed */}
        
        <meta name="google-site-verification" content="Ty91mF8MukUZ2n_4v4YxxiztWxZeKbe4JkuCSV0doA0" />
      </Head>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-659N63Y67S"
      ></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-659N63Y67S');`}
      </Script>

      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
