import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Cannabinoids from "../components/science/cannabinoids";
import Collaborations from "../components/science/collaborations";
import Head from "next/head";
import Main from "../components/science/main";
import OurScience from "../components/science/ourScience";
import Pipeline from "../components/science/pipeline";
import RaphaelMechoulam from "../components/science/raphaelMechoulam";
import ResearchPapers from "../components/science/researchPapers";
import client from "../client";
import { getSectionDataByName } from "../utils";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Science({ data }) {
  const router = useRouter();
  const [lang, setLang] = useState(router.locale ? "he_IL" : "en_US");

  useEffect(() => {
    document
      .querySelector(".menu-item--science")
      .classList.add("menu-item--current");
  }, []);

  return (
    <>
      <Head>
        {data.title && <title>{data.title[lang]}</title>}
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="preload"
          as="image"
          href="/img/desktop/science/hero@2x.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/mobile/science/hero@2x.webp"
        />
        {data.description && (
          <meta name="description" content={data.description[lang]} />
        )}
        {data.keywords && (
          <meta name="keywords" content={data.keywords[lang]} />
        )}
      </Head>

      <Main data={getSectionDataByName(data, "hero", lang)} />
      <OurScience
        data={getSectionDataByName(data, "science__ourScience", lang)}
      />
      <Cannabinoids
        data={getSectionDataByName(data, "science__cannabinoids", lang)}
      />
      <Pipeline data={getSectionDataByName(data, "science__pipeline", lang)} />
      <Collaborations
        data={getSectionDataByName(data, "science__collaborations", lang)}
      />
      <ResearchPapers
        data={getSectionDataByName(data, "science__researchPapers", lang)}
      />
      <RaphaelMechoulam
        data={getSectionDataByName(data, "science__mechoulam", lang)}
      />
    </>
  );
}

Science.getInitialProps = async function (context) {
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
    *[_type == "science"][0]
  `,
    { slug }
  );

  return {
    messages,
    data,
  };
};

export default Science;
