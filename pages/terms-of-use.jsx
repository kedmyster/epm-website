import Head from "next/head";
import StandardTemplate from "../components/layout/templates/StandardTemplate";
import client from "../client";

const BlockContent = require("@sanity/block-content-to-react");

function TermsOfUse(data) {
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

TermsOfUse.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "legal"][1]
  `,
    { slug }
  );
};

export default TermsOfUse;
