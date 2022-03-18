import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { useNextSanityImage } from "next-sanity-image";
import client from "../../client";
import Button from "../shared/Button";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import SectionHeader from "../shared/SectionHeader";

const BlockContent = require("@sanity/block-content-to-react");

function Story({ data }) {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();
  const intl = useIntl();
  const atmosphere = {
    mobile: useNextSanityImage(client, data.mobile_image),
    desktop: useNextSanityImage(client, data.desktop_image),
  };

  useEffect(() => {
    if (windowWidth >= 1280) {
      setIsMobile(false);
      setIsTablet(false);
      setIsDesktop(true);
    } else if (windowWidth >= 1024) {
      setIsMobile(false);
      setIsTablet(true);
      setIsDesktop(false);
    } else {
      setIsMobile(true);
      setIsTablet(false);
      setIsDesktop(false);
    }
  }, [windowWidth]);

  return (
    <section
      id="story"
      className="section story relative w-full bg-cover text-center"
      data-side-menu-label={data.name}
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
      data-logo-color="dark"
    >
      <div className="flex flex-wrap content-end md:content-start lg:justify-stretch lg:flex-col lg:content-center h-[914px] md:h-screen">
        <div className="absolute w-full h-full opacity-50">
          {isMobile && (
            <Image
              src={atmosphere.mobile.src}
              loading="eager"
              alt={data.title}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          )}
          {(isTablet || isDesktop) && (
            <Image
              src={atmosphere.desktop.src}
              loading="eager"
              alt={data.title}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          )}
        </div>

        <div className="banner text-center bg-epm-yellow absolute lg:top-0 lg:left-0 w-full z-10">
          <div className="container mx-auto py-4 xl:py-8 2xl:py-[33px] px-8">
            <div className="font-title text-2xl 2xl:text-3xl font-bold mb-2">
              {router.locale === "en" && (
                <span>
                  The medicine revolution has begun with an IPO accessible to
                  all!
                </span>
              )}
              {router.locale === "he" && (
                <span>מהפכת התרופות החלה בתהליך של הנפקה נגישה לכולם!</span>
              )}
            </div>
            <div className="text-epm-base leading-normal 2xl:text-lg">
              {router.locale === "en" && (
                <span>
                  Click on this link, read the prospectus an make an educated
                  decision.
                </span>
              )}
              {router.locale === "he" && (
                <span>לחצו על הלינק, קראו את התשקיף וקבלו החלטה מושכלת.</span>
              )}
            </div>
            <div className="button pt-4">
              <Button
                href={
                  router.locale === "en"
                    ? "https://invest.fundit.co.il/project/2066"
                    : "https://invest.fundit.co.il/project/2066"
                }
                style="white"
              >
                {router.locale === "en" && <span>Learn More</span>}
                {router.locale === "he" && <span>למידע נוסף</span>}
              </Button>
            </div>
          </div>
        </div>

        <div className="relative container mx-auto px-8 py-8 lg:py-16 md:mt-[200px] lg:grow lg:flex lg:flex-col">
          <SectionHeader
            name={<span>{data.name}</span>}
            title={<h2 className="pb-52 md:pb-6 lg:pb-0">{data.title}</h2>}
          />
          <div className="animate opacity-0 text md:w-105 md:mx-auto lg:grow">
            <div className="lg:text-epm-base lg:mt-6">
              <BlockContent blocks={data.content} className="external-text" />
            </div>
          </div>
          <div className="animate opacity-0 button pt-10 lg:pt-0 lg:w-full">
            <Button
              href={router.locale === "en" ? "/about/#main" : "/he/about/#main"}
              style="dark"
            >
              {data.button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
