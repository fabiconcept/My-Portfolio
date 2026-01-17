import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Favour Ajokubi | Full Stack Developer</title>
        <meta
          name="description"
          content="Favour Tochukwu Ajokubi is a full stack developer building scalable web, mobile, and blockchain applications across fintech, logistics, edtech, and public sector platforms."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />

        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Favour Ajokubi | Full Stack Developer" />
        <meta property="og:description" content="Favour Tochukwu Ajokubi is a full stack developer building scalable web, mobile, and blockchain applications across fintech, logistics, edtech, and public sector platforms." />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Favour Ajokubi | Full Stack Developer" />
        <meta name="twitter:description" content="Favour Tochukwu Ajokubi is a full stack developer building scalable web, mobile, and blockchain applications across fintech, logistics, edtech, and public sector platforms." />
        <meta name="twitter:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://fabiconcept.com" />
        <meta property="og:site_name" content="Favour Ajokubi | Full Stack Developer" />
        <link rel="canonical" href="https://fabiconcept.com" />
        <link rel="logo" href="/logo.png" />
      </Head>
      <Home />
    </>
  );
}
