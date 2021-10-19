import { useEffect } from "react";
import Head from "next/head";
import MediaComponent from "../components/media/media";
import client from "../client";
import { getSectionDataByName } from "../utils";

function Media(data) {
  useEffect(() => {
    document.body.dataset.headerTheme = "dark";
    document
      .querySelector(".menu-item--media")
      .classList.add("menu-item--current");
  }, []);

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.keywords} />
      </Head>

      <MediaComponent data={getSectionDataByName(data, "media__media")} />
    </>
  );
}

Media.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "media"][0]
  `,
    { slug }
  );
};

export default Media;
