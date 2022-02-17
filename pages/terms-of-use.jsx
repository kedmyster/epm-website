import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import StandardTemplate from "../components/layout/templates/StandardTemplate";
import client from "../client";
import { useEffect } from "react";

const BlockContent = require("@sanity/block-content-to-react");

function TermsOfUse({ data }) {
  const router = useRouter();
  const [lang, setLang] = useState(router.locale === "he" ? "he_IL" : "en_US");

  return (
    <>
      <Head>
        <title>{data.title[lang]} - EPM</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>

      <StandardTemplate title={data.title[lang]}>
        <BlockContent blocks={data.content[lang]} className="external-text" />
      </StandardTemplate>
    </>
  );
}

TermsOfUse.getInitialProps = async function (context) {
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
    *[_type == "legal"][1]
  `,
    { slug }
  );

  return {
    messages,
    data,
  };
};

export default TermsOfUse;
