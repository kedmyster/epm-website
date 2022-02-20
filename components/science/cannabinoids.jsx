import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { useNextSanityImage } from "next-sanity-image";
import client from "../../client";
import SectionHeader from "../shared/SectionHeader";
import { useIntl } from "react-intl";

const BlockContent = require("@sanity/block-content-to-react");

function Cannabinoids({ data }) {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
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
      id="cannabinoids"
      className="section cannabinoids relative w-full"
      data-side-menu-label={intl.formatMessage({
        id: "science.cannabinoids.acids",
        defaultMessage: "The Acids",
      })}
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      <div className="flex flex-wrap lg:flex-row-reverse lg:h-screen">
        <div className="relative mx-auto lg:flex-grow lg:h-full w-full lg:w-6/12 2xl:w-7/12">
          <div className="lg:flex lg:flex-wrap lg:h-full">
            <div className="relative lg:flex-grow lg:w-6/12 2xl:w-7/12">
              <div className="image animate opacity-0 mx-auto text-center lg:pb-5 w-full h-2/3-screen lg:h-screen">
                {isMobile && (
                  <Image
                    src={atmosphere.mobile.src}
                    alt={intl.formatMessage({
                      id: "science.cannabinoids.title",
                      defaultMessage: "Cannabinoids Acid",
                    })}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                )}
                {(isTablet || isDesktop) && (
                  <Image
                    src={atmosphere.desktop.src}
                    alt={intl.formatMessage({
                      id: "science.cannabinoids.title",
                      defaultMessage: "Cannabinoids Acid",
                    })}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex-shrink-0 lg:ps-24 xl:ps-56 lg:w-6/12 2xl:w-5/12 lg:h-screen overflow-y-hidden lg:overflow-y-auto">
          <div className="container px-8 lg:ps-0 py-8 lg:max-w-none lg:w-80 2xl:w-96 ">
            <div className="mb-6 lg:mb-0">
              <SectionHeader name={data.name} title={<h2>{data.title}</h2>} />
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

export default Cannabinoids;
