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
      <div className="flex flex-wrap content-end md:content-start lg:content-end h-[914px] md:h-screen">
        <div className="absolute w-full h-full">
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
        <div className="relative container mx-auto px-8 py-8 lg:py-16 md:mt-[200px] lg:mt-0">
          <SectionHeader
            name={<span>{data.name}</span>}
            title={<h2 className="pb-52 md:pb-6 lg:pb-0">{data.title}</h2>}
          />
          <div className="animate opacity-0 text md:w-105 md:mx-auto">
            <div className="lg:text-epm-base lg:mt-6">
              <BlockContent blocks={data.content} className="external-text" />
            </div>
          </div>
          <div className="animate opacity-0 button pt-10 lg:pt-80">
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
