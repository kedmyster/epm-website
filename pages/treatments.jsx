import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Main from "../components/treatments/main";
import OurTreatments from "../components/treatments/ourTreatments";
import client from "../client";
import { getSectionDataByName } from "../utils";

function Treatments({ data }) {
  const router = useRouter();
  const [lang, setLang] = useState(router.locale === "he" ? "he_IL" : "en_US");

  useEffect(() => {
    document
      .querySelector(".menu-item--treatments")
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
          href="/img/desktop/treatments/hero@2x.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/mobile/treatments/hero@2x.webp"
        />
        {data.description && (
          <meta name="description" content={data.description[lang]} />
        )}
        {data.keywords && (
          <meta name="keywords" content={data.keywords[lang]} />
        )}
      </Head>

      <Main data={getSectionDataByName(data, "hero", lang)} />
      <OurTreatments
        data={getSectionDataByName(data, "treatments__ourTreatments", lang)}
      />
    </>
  );
}

Treatments.getInitialProps = async function (context) {
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
    *[_type == "treatments"][0]
  `,
    { slug }
  );

  return {
    messages,
    data,
  };
};

export default Treatments;
