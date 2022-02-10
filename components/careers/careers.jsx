import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { useNextSanityImage } from "next-sanity-image";
import client from "../../client";
import SectionHeader from "../shared/SectionHeader";
import { gsap } from "gsap";
import Link from "next/link";

const BlockContent = require("@sanity/block-content-to-react");

function CareersComponent({ data, hasPositions }) {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTabletPortrait, setIsTabletPortrait] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const atmosphere = {
    mobile: useNextSanityImage(client, data.mobile_image),
    desktop: useNextSanityImage(client, data.desktop_image),
  };

  useEffect(() => {
    if (windowWidth >= 1280) {
      setIsMobile(false);
      setIsTabletPortrait(false);
      setIsTablet(false);
      setIsDesktop(true);
    } else if (windowWidth >= 1024) {
      setIsMobile(false);
      setIsTabletPortrait(false);
      setIsTablet(true);
      setIsDesktop(false);
    } else if (windowWidth >= 768) {
      setIsMobile(false);
      setIsTabletPortrait(true);
      setIsTablet(false);
      setIsDesktop(false);
    } else {
      setIsMobile(true);
      setIsTabletPortrait(false);
      setIsTablet(false);
      setIsDesktop(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    document.body.dataset.headerTheme = "dark";
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const tl = gsap.timeline();

      tl.to(".scroll-to-content", {
        duration: 2,
        y: "-=10px",
        yoyo: true,
        repeat: -1,
        ease: "easeInOut",
      });
    });
  }, []);

  const scrollToContent = (event) => {
    event.preventDefault();
    document.querySelector("#open-positions").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="careers"
      className="section careers relative w-full bg-cover text-center flex flex-wrap content-top lg:h-screen"
      data-side-menu-label=""
      data-side-menu-color="light"
      data-side-menu-visibility="hidden"
      data-header-menu-visibility="hidden"
    >
      <div className="animate opacity-0 absolute w-full h-full">
        {isMobile && (
          <Image
            loading="eager"
            src={atmosphere.mobile.src}
            alt="Shape the Future of Healthcare"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
        {(isTabletPortrait || isTablet || isDesktop) && (
          <Image
            loading="eager"
            src={atmosphere.desktop.src}
            alt="Shape the Future of Healthcare"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
      </div>
      <div className="relative lg:w-sm-container mx-auto px-8 py-8 mt-8 md:mt-0 md:flex md:flex-col md:justify-center">
        <div className="mb-6 lg:mb-0 ">
          <SectionHeader name={data.name} title={<h2>{data.title}</h2>} />
        </div>
        <div className="animate opacity-0 text lg:text-epm-base lg:mx-auto lg:mt-6">
          <BlockContent
            blocks={data.content}
            className="external-text lg:mx-20"
          />
        </div>
      </div>
      {hasPositions && (
        <div className="scroll-to-content animate opacity-0 absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <Link href="#story" onClick={scrollToContent}>
            <a className="transition-opacity duration-150 hover:opacity-70">
              <Image
                src="/img/icons/arrow_down_dark.svg"
                width="28"
                height="16"
                alt="Open Positions"
                loading="eager"
              />
            </a>
          </Link>
        </div>
      )}
    </section>
  );
}

export default CareersComponent;
