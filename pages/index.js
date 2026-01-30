import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Favour Ajokubi | Senior Software Developer</title>
        <meta
          name="description"
          content="Favour Tochukwu Ajokubi is a Senior Software developer building scalable web, mobile, and blockchain applications across fintech, logistics, edtech, and public sector platforms."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://fabiconcept.com" />
        <meta name="p:domain_verify" content="74e5ec1997d61dad77d62429b962838f"/>

        {/* Favicon */}
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />

        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Favour Ajokubi | Senior Software Developer" />
        <meta property="og:description" content="Favour Tochukwu Ajokubi is a Senior Software developer building scalable web, mobile, and blockchain applications across fintech, logistics, edtech, and public sector platforms." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://fabiconcept.com" />
        <meta property="og:site_name" content="Favour Ajokubi | Senior Software Developer" />
        <meta property="og:logo" content="/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Favour Ajokubi | Senior Software Developer" />
        <meta name="twitter:description" content="Favour Tochukwu Ajokubi is a Senior Software developer building scalable web, mobile, and blockchain applications across fintech, logistics, edtech, and public sector platforms." />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>
      <Home />
    </>
  );
}
