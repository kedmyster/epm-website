import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Main from "../components/about/main";
import OurStory from "../components/about/ourStory";
import FoundingEPM from "../components/about/foundingEPM";
import Leadership from "../components/about/leadership";
import client from "../client";
import { getSectionDataByName } from "../utils";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function About({ data }) {
  const router = useRouter();
  const [lang, setLang] = useState("en_US");

  useEffect(() => {
    if (router.locale === "he") {
      setLang("he_IL");
    } else if (router.locale === "en") {
      setLang("en_US");
    }
  }, []);

  useEffect(() => {
    document
      .querySelector(".menu-item--about")
      .classList.add("menu-item--current");
  }, []);

  return (
    <>
      <Head>
        {data.title && <title>{data.title[lang]}</title>}
        <link rel="icon" href="/favicon.svg" />
        <link rel="preload" as="image" href="/img/desktop/about/hero@2x.webp" />
        <link rel="preload" as="image" href="/img/mobile/about/hero@2x.webp" />
        {data.description && (
          <meta name="description" content={data.description[lang]} />
        )}
        {data.keywords && (
          <meta name="keywords" content={data.keywords[lang]} />
        )}
      </Head>

      <Main data={getSectionDataByName(data, "hero", lang)} />
      <OurStory data={getSectionDataByName(data, "about__story", lang)} />
      <FoundingEPM data={getSectionDataByName(data, "about__founding", lang)} />
      <Leadership
        data={getSectionDataByName(data, "about__leadership", lang)}
      />
    </>
  );
}

About.getInitialProps = async function (context) {
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
    *[_type == "about"][0]
  `,
    { slug }
  );

  return {
    messages,
    data,
  };
};

export default About;
