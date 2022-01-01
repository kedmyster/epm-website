import { useState, useEffect } from "react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import client from "../../client";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import Button from "../shared/Button";

import SectionHeader from "../shared/SectionHeader";

function MediaComponent({ data }) {
  for (let i = 0; i < data.articles.length; i++) {
    data.articles[i].images = {
      logo: useNextSanityImage(client, data.articles[i].logo),
    };
  }

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

  const ipo = {
    name: "Investor Relations",
    title: "Title",
    description:
      "Few sentences. epm is planning... a fast-paced and dynamic company, striving to develop new medicines and to enable safer treatments for patients, by collaborating with leading",
    info: "For additional information and to join the IPO - Click here!",
    categories: [
      {
        category: "Prospects",
        links: [
          {
            text: "English",
            link: "/",
          },
          {
            text: "Hebrew",
            link: "/",
          },
        ],
      },
      {
        category: "IPO Deck",
        links: [
          {
            text: "English",
            link: "/",
          },
          {
            text: "Hebrew",
            link: "/",
          },
        ],
      },
      {
        category: "Videos",
        links: [
          {
            text: "Watch",
            link: "",
          },
        ],
      },
    ],
  };

  return (
    <>
      <section
        id="ipo"
        className="section ipo lg:flex lg:flex-wrap lg:flex-row-reverse lg:overflow-y-hidden lg:min-h-screen"
        data-side-menu-color="dark"
        data-side-menu-visibility="visible"
        data-header-menu-visibility="visible"
      >
        <div className="container lg:w-lg-container mx-auto px-8 py-8 pt-16 lg:h-screen ">
          <div className="mb-6 lg:mb-0 pt-8 lg:pt-[56px] -mx-8 lg:mx-0 px-8 lg:px-0 lg:text-center border-t border-epm-gray-300 ">
            <SectionHeader name={ipo.name} title={<h2>{ipo.title}</h2>} />
          </div>
          <div className="lg:pt-[47px] lg:text-center">{ipo.description}</div>
          <div className="text-3xl mt-8 lg:mt-[65px] lg:mb-8 py-[33px] text-center bg-epm-yellow lg:rounded-[53px] -mx-8 px-8 lg:mx-0">
            {ipo.info}
          </div>
          <div className="items -mx-8 lg:pt-8 lg:overflow-y-auto">
            {ipo.categories.map((item, index) => {
              return (
                <article
                  className="item group animate opacity-0 cursor-pointer border-t last:border-b border-epm-gray-300 h-28 lg:h-auto  min-h-full lg:min-h-0 flex lg:block flex-wrap content-center md:justify-center lg:justify-start lg:py-8 lg:px-4 transition-colors duration-150 hover:bg-epm-gray-100 lg:mx-8"
                  key={item.category}
                >
                  <div className="flex lg:flex-row items-center justify-between mx-8 lg:mx-0 w-full">
                    <div className="text-center lg:text-left lg:inline-block lg:w-96 xl:w-105">
                      <div className="text-3xl lg:text-xl xl:text-4xl font-bold lg:mb-4 lg:h-20 xl:h-auto">
                        {item.category}
                      </div>
                    </div>
                    <div className="">
                      {item.links.length === 1 ? (
                        <div>
                          {item.links.map((link, index) => {
                            return (
                              <div className="button pt-0 lg:inline-block text-center ">
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
                          {item.links.map((link, index) => {
                            return (
                              <div className="button pt-0 inline-block text-center pl-6">
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
      <section
        id="media"
        className="section media lg:flex lg:flex-wrap lg:flex-row-reverse lg:overflow-y-hidden lg:min-h-screen"
        data-side-menu-color="dark"
        data-side-menu-visibility="visible"
        data-header-menu-visibility="visible"
      >
        <div className="container lg:w-lg-container mx-auto lg:px-8 pt-4 lg:pt-16 lg:h-screen lg:overflow-y-auto">
          <div className="mb-6 lg:mb-0 px-8 lg:text-center">
            <SectionHeader name={ipo.name} title={<h2>{ipo.title}</h2>} />
          </div>
          <div className="items lg:pt-8">
            {data.articles.map((slide, index) => {
              return (
                <article
                  className="item group animate opacity-0 cursor-pointer border-b lg:border-t last:border-b border-epm-gray-300 h-96 lg:h-auto min-h-full lg:min-h-0 flex lg:block flex-wrap content-center md:justify-center lg:justify-start lg:py-8 lg:px-4 transition-colors duration-150 hover:bg-epm-gray-100"
                  key={slide.name}
                >
                  <a href={slide.url} target="_blank" rel="noopener noreferrer">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mx-8 lg:mx-0">
                      <div className="item-image lg:w-48 mb-4 lg:mb-0">
                        <div className="w-auto mx-auto lg:mx-0 relative">
                          <Image
                            src={slide.images.logo.src}
                            alt={slide.name}
                            width={slide.images.logo.width}
                            height={slide.images.logo.height}
                            layout="responsive"
                            quality={100}
                            className="max-w-full h-auto"
                          />
                        </div>
                      </div>
                      <div className="item-name mb-4 lg:mb-2 text-lg lg:text-5xl hidden">
                        {slide.name}
                      </div>
                      <div className="text-center lg:text-left lg:inline-block lg:w-96 xl:w-105">
                        <div className="quote lg:text-xl xl:text-2xl mb-4 lg:h-20 xl:h-auto">
                          {slide.title}
                        </div>
                        <div className="item__date lg:text-center text-sm text-epm-gray-500 lg:text-base font-title lg:inline-block">
                          {new Intl.DateTimeFormat("en-US", {
                            dateStyle: "long",
                          }).format(new Date(slide.date))}
                        </div>
                      </div>
                      <div className="button pt-10 lg:pt-0 lg:inline-block text-center">
                        <Button
                          style="dark"
                          href={slide.button.link}
                          extendedClassNames="group-hover:bg-epm-yellow group-hover:border-epm-yellow"
                          target="_blank"
                        >
                          {slide.button.text}
                        </Button>
                      </div>
                    </div>
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default MediaComponent;
