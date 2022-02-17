import Head from "next/head";
import IPOComponent from "../components/media/ipo";
import MediaComponent from "../components/media/media";
import client from "../client";
import { getSectionDataByName } from "../utils";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Media({ data }) {
  const router = useRouter();
  const [lang, setLang] = useState(router.locale ? "he_IL" : "en_US");

  useEffect(() => {
    document.body.dataset.headerTheme = "dark";
    document
      .querySelector(".menu-item--media")
      .classList.add("menu-item--current");
  }, []);

  return (
    <>
      <Head>
        {data.title && <title>{data.title[lang]}</title>}
        <link rel="icon" href="/favicon.svg" />
        {data.description && (
          <meta name="description" content={data.description[lang]} />
        )}
        {data.keywords && (
          <meta name="keywords" content={data.keywords[lang]} />
        )}
      </Head>

      <IPOComponent data={getSectionDataByName(data, "media__ipo", lang)} />
      <MediaComponent data={getSectionDataByName(data, "media__media", lang)} />
    </>
  );
}

Media.getInitialProps = async function (context) {
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
    *[_type == "media"][0]
  `,
    { slug }
  );

  return {
    messages,
    data,
  };
};

export default Media;
