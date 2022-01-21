import Head from "next/head";
import IPOComponent from "../components/media/ipo";
import MediaComponent from "../components/media/media";
import client from "../client";
import { getSectionDataByName } from "../utils";
import { useEffect } from "react";

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

      <IPOComponent data={getSectionDataByName(data, "media__ipo")} />
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
