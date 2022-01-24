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
import { useEffect } from "react";

  useEffect(() => {
    document
      .querySelector(".menu-item--science")
      .classList.add("menu-item--current");
  }, []);

  return (
    <>
      <Head>
        <title>{data.title}</title>
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
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.keywords} />
      </Head>

      <Main data={getSectionDataByName(data, "hero")} />
      <OurScience data={getSectionDataByName(data, "science__ourScience")} />
      <Cannabinoids
        data={getSectionDataByName(data, "science__cannabinoids")}
      />
      <Pipeline data={getSectionDataByName(data, "science__pipeline")} />
      <Collaborations
        data={getSectionDataByName(data, "science__collaborations")}
      />
      <ResearchPapers
        data={getSectionDataByName(data, "science__researchPapers")}
      />
      <RaphaelMechoulam
        data={getSectionDataByName(data, "science__mechoulam")}
      />
    </>
  );
}

Science.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "science"][0]
  `,
    { slug }
  );
};

export default Science;
