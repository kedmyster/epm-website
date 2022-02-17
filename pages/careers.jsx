import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import CareersComponent from "../components/careers/careers";
import PositionsComponent from "../components/careers/positions";
import client from "../client";
import { getSectionDataByName } from "../utils";

function Careers({ data }) {
  const router = useRouter();
  const [lang, setLang] = useState(router.locale ? "he_IL" : "en_US");

  useEffect(() => {
    document.body.dataset.headerTheme = "dark";
    document
      .querySelector(".menu-item--careers")
      .classList.add("menu-item--current");
  }, []);

  const career = getSectionDataByName(data, "careers__careers", lang);
  const positions =
    getSectionDataByName(data, "careers__openPositions", lang) || [];

  return (
    <>
      <Head>
        {data.title && <title>{data.title[lang]}</title>}
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="preload"
          as="image"
          href="/img/desktop/careers/careers@2x.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="/img/mobile/careers/careers@2x.jpg"
        />
        {data.description && (
          <meta name="description" content={data.description[lang]} />
        )}
        {data.keywords && (
          <meta name="keywords" content={data.keywords[lang]} />
        )}
      </Head>

      <CareersComponent
        data={career}
        hasPositions={positions.positions && positions.positions.length > 0}
      />

      {positions.positions && positions.positions.length > 0 && (
        <PositionsComponent data={positions} />
      )}
    </>
  );
}

Careers.getInitialProps = async function (context) {
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
    *[_type == "careers"][0]
  `,
    { slug }
  );

  return {
    messages,
    data,
  };
};

export default Careers;
