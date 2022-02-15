import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import StandardTemplate from "../components/layout/templates/StandardTemplate";
import client from "../client";
import { useEffect } from "react";

const BlockContent = require("@sanity/block-content-to-react");

function PrivacyPolicy(data) {
  const router = useRouter();
  const [lang, setLang] = useState("en_US");

  useEffect(() => {
    if (router.locale === "he") {
      setLang("he_IL");
    } else if (context.locale === "en") {
      setLang("en_US");
    }
  }, []);

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
