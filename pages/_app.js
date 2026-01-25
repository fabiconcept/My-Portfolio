import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({ 
  weight: ["100", "200", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "auto",
 });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-HFLCCNREJK"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HFLCCNREJK');
          `,
        }}
      />
      <div id="root" className={poppins.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
