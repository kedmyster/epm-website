import Head from "next/head";
import MediaComponent from "../components/media/media"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Media() {
  return (
    <>
      <Head>
        <title>EPM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MediaComponent/>
    </>
  );
}
