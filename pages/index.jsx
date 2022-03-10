import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Main from "../components/home/main";
import Story from "../components/home/story";
import Innovation from "../components/home/innovation";
import Commitment from "../components/home/commitment";
import Community from "../components/home/community";
import client from "../client";
import { getSectionDataByName } from "../utils";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Home({ data }) {
  const router = useRouter();
  const [lang, setLang] = useState(router.locale === "he" ? "he_IL" : "en_US");

  return (
    <>
      <Head>
        {data.title && <title>{data.title[lang]}</title>}
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
        {data.description && (
          <meta name="description" content={data.description[lang]} />
        )}
        {data.keywords && (
          <meta name="keywords" content={data.keywords[lang]} />
        )}
        <script
          src="https://portal.allyable.com/aweb?license=ce7caf2827b44e63ba68dc353b86023a"
          async
          referrerPolicy="no-referrer-when-downgrade"
        ></script>
      </Head>

      <Main data={getSectionDataByName(data, "hero", lang)} />
      <Story data={getSectionDataByName(data, "homepage__story", lang)} />
      <Innovation
        data={getSectionDataByName(data, "homepage__innovation", lang)}
      />
      <Community
        data={getSectionDataByName(data, "homepage__treatments", lang)}
      />
      <Commitment
        data={getSectionDataByName(data, "homepage__commitment", lang)}
      />
    </>
  );
}

Home.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  let messages = null;

  switch (context.locale) {
    case "he":
      messages = await import("../compiled-lang/he.json");
      break;
    default:
      messages = await import("../compiled-lang/en.json");
      break;
  }

  const data = await client.fetch(
    `
    *[_type == "homepage"][0]
  `,
    { slug }
  );

  return {
    messages,
    data,
  };
};

export default Home;
