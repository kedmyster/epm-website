import { useEffect, useState } from "react";

import Button from "../shared/Button";
import Image from "next/image";
import SectionHeader from "../shared/SectionHeader";
import client from "../../client";
import { useNextSanityImage } from "next-sanity-image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { getFile } from "@sanity/asset-utils";

const BlockContent = require("@sanity/block-content-to-react");

function MediaIPO({ data }) {
  const windowWidth = useWindowWidth();
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

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
      id="ipo"
      className="section ipo lg:flex lg:flex-wrap lg:flex-row-reverse lg:overflow-y-auto lg:min-h-screen"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      <div className="container lg:w-lg-container mx-auto px-8 py-8 m-[4rem]">
        <div className="mb-6 lg:mb-0  -mx-8 lg:mx-0 px-8 lg:px-0 lg:text-center ">
          <SectionHeader name={data.name} title={<h2>{data.title}</h2>} />
        </div>
        <div className="lg:text-lg lg:pt-[47px] lg:text-center">
          <BlockContent blocks={data.description} className="external-text" />
        </div>

        <a
          className="block"
          href="https://invest.fundit.co.il/project/2066"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center items-stretch text-3xl mt-8 lg:mt-[45px] lg:mb-8 py-[33px] text-center bg-epm-yellow lg:rounded-[53px] -mx-8 px-8 lg:mx-0">
            <BlockContent blocks={data.cta} className="external-text" />
          </div>
        </a>

        <div className="items -mx-8 lg:pt-8 lg:overflow-y-auto">
          {data.categories.map((category, index) => {
            return (
              <article
                className="item group animate opacity-0 cursor-pointer border-t last:border-b border-epm-gray-300 min-h-28 lg:h-auto min-h-full lg:min-h-0 flex lg:block flex-wrap content-center md:justify-center lg:justify-start py-8 lg:px-4 transition-colors duration-150 hover:bg-epm-gray-100 lg:mx-8"
                key={category.name}
              >
                <div className="flex flex-col lg:flex-row items-center md:items-start lg:items-center justify-start mx-8 lg:mx-0 w-full">
                  <div className="lg:basis-52 xl:basis-80 xl:text-center lg:text-start lg:inline-block lg:w-110 xl:w-130">
                    <div className="text-3xl lg:text-xl xl:text-2xl font-bold lg:mb-4 xl:mb-0 lg:h-20 xl:h-auto">
                      {category.name}
                    </div>

                    {category.links && category.links.length > 0 && (
                      <div className="text-xxs mt-4 mb-4 lg:mb-0">
                        <ul className="flex gap-[20px] underline">
                          {category.links.map((link, index) => {
                            return (
                              <li>
                                <a
                                  href={link.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {link.text}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="lg:flex-1">
                    {category.button && (
                      <div className="lg:flex lg:gap-[10px]">
                        {category.button.map((button, index) => {
                          if (button.file) {
                            const file = getFile(button.file, client.config());

                            return (
                              <div
                                className="button pt-0 lg:inline-block text-center"
                                key={file.asset.url}
                              >
                                <Button
                                  style="dark"
                                  href={file.asset.url}
                                  extendedClassNames="px-2 lg:px-2 xl:px-2 w-52 bg-white text-epm-gray-700 mt-2 lg:mt-0"
                                  target="_blank"
                                >
                                  {button.text}
                                </Button>
                              </div>
                            );
                          } else if (button.link) {
                            return (
                              <div
                                className="button pt-0 lg:inline-block text-center"
                                key={button.link}
                              >
                                <Button
                                  style="dark"
                                  href={button.link}
                                  extendedClassNames="px-2 lg:px-2 xl:px-2 rounded-3xl w-52 bg-white text-epm-gray-700  mt-2 lg:mt-0"
                                  target="_blank"
                                >
                                  {button.text}
                                </Button>
                              </div>
                            );
                          }
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MediaIPO;
