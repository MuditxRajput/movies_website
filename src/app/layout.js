import { Inter } from "next/font/google";
import Head from "next/head";
import Footer from "./Components/Footer/page";
import Header from "./Components/Header/page";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Download Free Bollywood, Hollywood Movies & Web Series - FlimFusion",
  description: "Explore and download the latest Bollywood, Hollywood movies, and web series for free. Get high-quality downloads and enjoy your favorite content without cost.",
  keywords: "free movies download, Bollywood movies download, Hollywood movies download, web series download, HD movies download",
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
      </Head>

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
