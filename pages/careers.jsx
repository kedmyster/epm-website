import { useState, useEffect } from "react";
import Head from "next/head";
import CareersComponent from "../components/careers/careers";
import PositionsComponent from "../components/careers/positions";
import client from "../client";
import { getSectionDataByName } from "../utils";

function Careers(data) {
  useEffect(() => {
    document.body.dataset.headerTheme = "dark";
    document
      .querySelector(".menu-item--careers")
      .classList.add("menu-item--current");
  }, []);

  const positions = getSectionDataByName(data, "careers__openPositions") || [];

  return (
    <>
      <Head>
        <title>{data.title}</title>
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
        <meta
          name="description"
          content={data.description}
        />
        <meta
          name="keywords"
          content={data.keywords}
        />
      </Head>

      <CareersComponent data={getSectionDataByName(data, "careers__careers")} />

      {positions.positions.length && (
        <PositionsComponent data={positions} />
      )}
    </>
  );
}

Careers.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "careers"][0]
  `,
    { slug }
  );
};

export default Careers;
