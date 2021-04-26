import { useState, useEffect } from "react";
import Head from "next/head";
import Main from "../components/about/main";
import OurStory from "../components/about/ourStory";
import FoundingEPM from "../components/about/foundingEPM";
import Leadership from "../components/about/leadership";
import client from "../client";
import { getSectionDataByName, getId } from "../utils";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About(data) {
  useEffect(() => {
    document
      .querySelector(".menu-item--about")
      .classList.add("menu-item--current");
  }, []);

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preload" as="image" href="/img/desktop/about/hero@2x.webp" />
        <link rel="preload" as="image" href="/img/mobile/about/hero@2x.webp" />
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.keywords} />
      </Head>

      <Main data={getSectionDataByName(data, "hero")} />
      <OurStory data={getSectionDataByName(data, "about__story")} />
      <FoundingEPM data={getSectionDataByName(data, "about__founding")} />
      <Leadership data={getSectionDataByName(data, "about__leadership")} />
    </>
  );
}

About.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "about"][0]
  `,
    { slug }
  );
};

export default About;
