import { useEffect } from "react";
import Head from "next/head";
import Main from "../components/treatments/main";
import OurTreatments from "../components/treatments/ourTreatments";
import client from "../client";
import { getSectionDataByName } from "../utils";

function Treatments(data) {
  useEffect(() => {
    document
      .querySelector(".menu-item--treatments")
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
          href="/img/desktop/treatments/hero@2x.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/mobile/treatments/hero@2x.webp"
        />
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.keywords} />
      </Head>

      <Main data={getSectionDataByName(data, "hero")} />
      <OurTreatments
        data={getSectionDataByName(data, "treatments__ourTreatments")}
      />
    </>
  );
}

Treatments.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "treatments"][0]
  `,
    { slug }
  );
};

export default Treatments;
