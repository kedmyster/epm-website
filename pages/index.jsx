import Head from "next/head";
import Image from "next/image";
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
    <div className="font-body text-epm-dark-gray -mt-16">
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
    </div>
  );
}
