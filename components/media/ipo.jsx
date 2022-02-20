import { useEffect, useState } from "react";

import Button from "../shared/Button";
import Image from "next/image";
import SectionHeader from "../shared/SectionHeader";
import client from "../../client";
import { useNextSanityImage } from "next-sanity-image";
import { useWindowWidth } from "@react-hook/window-size/throttled";

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
      className="section ipo lg:flex lg:flex-wrap lg:flex-row-reverse lg:overflow-y-hidden lg:min-h-screen"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      <div className="container lg:w-lg-container mx-auto px-8 py-8 pt-16 lg:h-screen ">
        <div className="mb-6 lg:mb-0 pt-8 lg:pt-[56px] -mx-8 lg:mx-0 px-8 lg:px-0 lg:text-center border-t border-epm-gray-300 ">
          <SectionHeader name={data.name} title={<h2>{data.title}</h2>} />
        </div>
        <div className="lg:text-lg lg:pt-[47px] lg:text-center">
          <BlockContent blocks={data.description} className="external-text" />
        </div>
        <div className="text-3xl mt-8 lg:mt-[65px] lg:mb-8 py-[33px] text-center bg-epm-yellow lg:rounded-[53px] -mx-8 px-8 lg:mx-0">
          <BlockContent blocks={data.cta} className="external-text" />
        </div>
        <div className="items -mx-8 lg:pt-8 lg:overflow-y-auto">
          {data.categories.map((category, index) => {
            return (
              <article
                className="item group animate opacity-0 cursor-pointer border-t last:border-b border-epm-gray-300 h-28 lg:h-auto  min-h-full lg:min-h-0 flex lg:block flex-wrap content-center md:justify-center lg:justify-start lg:py-8 lg:px-4 transition-colors duration-150 hover:bg-epm-gray-100 lg:mx-8"
                key={category.name}
              >
                <div className="flex lg:flex-row items-center justify-between mx-8 lg:mx-0 w-full">
                  <div className="text-center lg:text-start lg:inline-block lg:w-96 xl:w-105">
                    <div className="text-3xl lg:text-xl xl:text-4xl font-bold lg:mb-4 lg:h-20 xl:h-auto">
                      {category.name}
                    </div>
                  </div>
                  <div className="">
                    {category.button.length === 1 ? (
                      <div>
                        {category.button.map((link, index) => {
                          return (
                            <div
                              className="button pt-0 lg:inline-block text-center"
                              key={link.link}
                            >
                              <Button
                                style="dark"
                                href={link.link}
                                extendedClassNames="bg-epm-gray-700 lg:bg-white text-white lg:text-epm-gray-700"
                                target="_blank"
                              >
                                {link.text}
                              </Button>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div>
                        {category.button.map((link, index) => {
                          return (
                            <div className="button pt-0 inline-block text-center ps-6">
                              <Button
                                style="dark"
                                href={link.link}
                                extendedClassNames="px-2 lg:px-10 rounded-[100%] lg:rounded-3xl w-auto lg:w-52 bg-epm-gray-700 lg:bg-white text-white lg:text-epm-gray-700"
                                target="_blank"
                              >
                                {isMobile
                                  ? link.text.substring(0, 2)
                                  : link.text}
                              </Button>
                            </div>
                          );
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
