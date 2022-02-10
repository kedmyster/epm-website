import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { useNextSanityImage } from "next-sanity-image";
import client from "../../client";
import { gsap } from "gsap";
import SectionHeader from "../shared/SectionHeader";

const BlockContent = require("@sanity/block-content-to-react");

function FoundingEPM({ data }) {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
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

  useEffect(() => {
    gsap.fromTo(
      ".scroll-to-content",
      { opacity: 0.5 },
      {
        opacity: 1,
        duration: 2,
        y: "-=10px",
        yoyo: true,
        repeat: -1,
        ease: "easeInOut",
      }
    );
  }, []);

  return (
    <section
      id="founding-epm"
      className="section founding-epm relative w-full flex flex-wrap border-b-1 border-epm-gray-300 lg:flex-row-reverse lg:h-screen"
      data-side-menu-label="Founding EPM"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      <div className="image relative animate opacity-0 lg:flex-grow w-full lg:w-6/12 2xl:w-7/12 h-2/3-screen lg:h-auto">
        {isMobile && (
          <Image
            src={atmosphere.mobile.src}
            alt="Founding EPM"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
        {(isTablet || isDesktop) && (
          <Image
            src={atmosphere.desktop.src}
            alt="Founding EPM"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
      </div>

      <div className="lg:flex-shrink-0 lg:ps-24 xl:ps-56 lg:w-6/12 2xl:w-5/12 lg:h-screen overflow-y-hidden lg:overflow-y-auto">
        <div className="container px-8 lg:ps-0 py-8 lg:max-w-none lg:w-80 2xl:w-96 ">
          <div className="lg:mb-0">
            <SectionHeader name={data.name} title={<h2>{data.title}</h2>} />
          </div>
          <div className="animate opacity-0 text mt-6 lg:text-epm-base">
            <BlockContent blocks={data.content} className="external-text" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoundingEPM;
