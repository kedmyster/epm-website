import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { useNextSanityImage } from "next-sanity-image";
import client from "../../client";
import SectionHeader from "../shared/SectionHeader";

const BlockContent = require("@sanity/block-content-to-react");

function Pipeline({ data }) {
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

  return (
    <section
      id="pipeline"
      className="section pipeline"
      data-side-menu-label="Pipeline"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      <div className="flex flex-wrap lg:flex-row-reverse lg:h-screen">
        <div className="relative mx-auto md:flex-grow md:h-full w-full lg:w-6/12 2xl:w-7/12">
          <div className="md:flex md:flex-wrap md:h-full">
            <div className="relative lg:flex-grow md:w-full lg:w-6/12 2xl:w-7/12">
              <div className="image animate opacity-0 mx-auto text-center md:h-2/3-screen lg:h-screen lg:pb-5">
                {isMobile && (
                  <Image
                    src={atmosphere.mobile.src}
                    alt="Our Pipeline - Future Products and Development"
                    width={375}
                    height={401}
                    layout="intrinsic"
                    quality={100}
                    className="w-full h-full"
                  />
                )}
                {(isTabletPortrait || isTablet || isDesktop) && (
                  <Image
                    src={atmosphere.desktop.src}
                    alt="Our Pipeline - Future Products and Development"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="top right"
                    quality={100}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex-shrink-0 lg:ps-24 xl:ps-56 lg:w-6/12 2xl:w-5/12 lg:border-t lg:border-epm-gray-300lg:h-screen overflow-y-hidden lg:overflow-y-auto">
          <div className="container px-8 lg:ps-0 py-8 lg:max-w-none lg:w-80 2xl:w-96 ">
            <div className="">
              <SectionHeader
                name={<span>{data.name}</span>}
                title={<h2>{data.title}</h2>}
              />
            </div>
            <div className="animate opacity-0 text lg:text-epm-base mt-6">
              <BlockContent blocks={data.content} className="external-text" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pipeline;
