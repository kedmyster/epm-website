import Head from "next/head";
import Main from "../components/home/main";
import Story from "../components/home/story";
import Innovation from "../components/home/innovation";
import Treatments from "../components/home/treatments";
import Essence from "../components/home/essence";
import Community from "../components/home/community";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>EPM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main/>
      <Story/>
      <Innovation/>
      <Treatments/>
      <Essence/>
      <Community/>
    </>
  );
}
