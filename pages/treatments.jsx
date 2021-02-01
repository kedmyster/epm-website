import Head from "next/head";
import Main from "../components/treatments/main";
import Treatments from "../components/treatments/ourTreatments"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Media() {
  return (
    <>
      <Head>
        <title>EPM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
      <Treatments/>
    </>
  );
}
