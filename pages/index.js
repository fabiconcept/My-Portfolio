import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Favour Ajokubi | Web Developer</title>
        <meta name="description" content="Hey i'm Favour Tochukwu Ajokubi and i'm a developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
