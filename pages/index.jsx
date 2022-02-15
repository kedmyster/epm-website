import Head from "next/head";
import Main from "../components/home/main";
import Story from "../components/home/story";
import Innovation from "../components/home/innovation";
import Commitment from "../components/home/commitment";
import Community from "../components/home/community";
import client from "../client";
import { getSectionDataByName } from "../utils";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Home(data) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="preload"
          as="image"
          href="/img/desktop/homepage/hero@2x.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/mobile/homepage/hero@2x.webp"
        />
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.keywords} />
      </Head>

      <Main data={getSectionDataByName(data, "hero")} />
      <Story data={getSectionDataByName(data, "homepage__story")} />
      <Innovation data={getSectionDataByName(data, "homepage__innovation")} />
      <Community data={getSectionDataByName(data, "homepage__treatments")} />
      <Commitment data={getSectionDataByName(data, "homepage__commitment")} />
    </>
  );
}

Home.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "homepage"][0]
  `,
    { slug }
  );
};

export default Home;
