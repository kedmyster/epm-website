import Head from "next/head";
import StandardTemplate from "../components/layout/templates/StandardTemplate";
import client from "../client";

const BlockContent = require("@sanity/block-content-to-react");

function PrivacyPolicy(data) {
  return (
    <>
      <Head>
        <title>{data.title} - EPM</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>

      <StandardTemplate title={data.title}>
        <BlockContent blocks={data.content} className="external-text" />
      </StandardTemplate>
    </>
  );
}

PrivacyPolicy.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "legal"][0]
  `,
    { slug }
  );
};

export default PrivacyPolicy;
