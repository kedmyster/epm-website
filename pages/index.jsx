import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Main from "../components/home/main";
import Story from "../components/home/story";
import Innovation from "../components/home/innovation";
import Commitment from "../components/home/commitment";
import Community from "../components/home/community";
import client from "../client";
import { getSectionDataByName } from "../utils";
import Button from "../components/shared/Button";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Home({ data }) {
  const router = useRouter();
  const [lang, setLang] = useState(router.locale === "he" ? "he_IL" : "en_US");

  return (
    <>
      <Head>
        {data.title && <title>{data.title[lang]}</title>}
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="preload"
          as="image"
          href="/img/desktop/homepage/hero@2x.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/mobile/homepage/hero@2x.webp"
        />
        {data.description && (
          <meta name="description" content={data.description[lang]} />
        )}
        {data.keywords && (
          <meta name="keywords" content={data.keywords[lang]} />
        )}
      </Head>

      <Main data={getSectionDataByName(data, "hero", lang)} />
      <div className="relative">
        <div className="banner text-3xl  text-center bg-epm-yellow absolute lg:top-0 lg:left-0 w-full z-10">
          <div className="container mx-auto py-8 lg:py-[33px] px-8">
            <div className="font-title font-bold mb-2">
              {router.locale === "en" && (
                <span>The medicine revolution has begun!</span>
              )}
              {router.locale === "he" && <span>מהפכת התרופות החלה!</span>}
            </div>
            <div className="text-lg">
              {router.locale === "en" && (
                <span>
                  The unique IPO process accessible to the general public is now
                  open - we invite you
                  <br /> to click on this link, read the prospectus and make an
                  educated decision
                </span>
              )}
              {router.locale === "he" && (
                <span>
                  תהליך ההנפקה הייחודי לכלל הציבור פתוח כעת - לחצו על הלינק,
                  וקבלו החלטה מושכלת
                </span>
              )}
            </div>
            <div className="button pt-8">
              <Button
                href={router.locale === "en" ? "/media/#ipo" : "/he/media/#ipo"}
                style="white"
              >
                {router.locale === "en" && <span>Learn More</span>}
                {router.locale === "he" && <span>למידע נוסף</span>}
              </Button>
            </div>
          </div>
        </div>
        <Story data={getSectionDataByName(data, "homepage__story", lang)} />
      </div>
      <Innovation
        data={getSectionDataByName(data, "homepage__innovation", lang)}
      />
      <Community
        data={getSectionDataByName(data, "homepage__treatments", lang)}
      />
      <Commitment
        data={getSectionDataByName(data, "homepage__commitment", lang)}
      />
    </>
  );
}

Home.getInitialProps = async function (context) {
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
    *[_type == "homepage"][0]
  `,
    { slug }
  );

  return {
    messages,
    data,
  };
};

export default Home;
