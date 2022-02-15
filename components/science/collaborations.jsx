import { useState, useEffect } from "react";
import Image from "next/image";
import slugify from "slugify";
import { gsap } from "gsap";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { useNextSanityImage } from "next-sanity-image";
import client from "../../client";
import classNames from "classnames";
import SectionHeader from "../shared/SectionHeader";
import Button from "../shared/Button";
import { FormattedMessage } from "react-intl";

const BlockContent = require("@sanity/block-content-to-react");

function Collaborations({ data }) {
  for (let i = 0; i < data.collaboration__logos.length; i++) {
    data.collaboration__logos[i].image = useNextSanityImage(
      client,
      data.collaboration__logos[i].mobile_image
    );

    for (let j = 0; j < data.collaboration__logos[i].logos.length; j++) {
      data.collaboration__logos[i].logos[j].image = useNextSanityImage(
        client,
        data.collaboration__logos[i].logos[j].icon
      );
    }
  }

  const windowWidth = useWindowWidth();
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

  const toggleLearnMore = (event, panel) => {
    event.preventDefault();

    const section = event.target.closest(".collaborations__panel");
    const moreInfoPanel = document.querySelector(
      `.more-info[data-collaboration-panel='${panel}']`
    );

    if (isTablet || isDesktop) {
      if (moreInfoPanel.getAttribute("aria-expanded") === "false") {
        moreInfoPanel.setAttribute("aria-expanded", "true");
        gsap.set(moreInfoPanel, { zIndex: 11 });
        gsap.to(moreInfoPanel, { opacity: 1, duration: 0.25 });
        event.target.innerText = "Close";
      } else {
        moreInfoPanel.setAttribute("aria-expanded", "false");
        gsap.set(moreInfoPanel, { zIndex: 0 });
        gsap.to(moreInfoPanel, { opacity: 0, duration: 0.25 });
        event.target.innerText = "Learn More";
      }

      document
        .querySelector(".collaborations__panel.academy")
        .classList.toggle("lg:border-s");
    }
  };

  return (
    <section
      id={"collaborations"}
      className="section collaborations"
      data-side-menu-label="Collaborations"
      data-side-menu-color="light"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      {isMobile && (
        <div>
          {data.collaboration__logos.map((section) => {
            return (
              <div key={slugify(section.title)}>
                <div className="relative h-2/3-screen">
                  <div className="image animate opacity-0 absolute w-full h-full">
                    <Image
                      src={section.image.src}
                      alt={section.title}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                  </div>
                  <div className="absolute w-full h-full inset-0 bg-black bg-opacity-30"></div>
                  <div className="animate opacity-0 container mx-auto text-center px-8 py-8 h-full flex flex-wrap content-center">
                    <div
                      className={classNames(
                        "w-full lg:w-1/2",
                        slugify(section.title)
                      )}
                    >
                      <div className="font-title animate opacity-0 text-white uppercase text-2xl mb-16 relative">
                        {section.title}
                      </div>
                      <div className="logos flex flex-wrap">
                        {section.logos.map((slide, index) => {
                          return (
                            <div
                              className="logo relative w-1/2 mb-12"
                              key={slide.name}
                            >
                              <a
                                href={slide.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Image
                                  src={slide.image.src}
                                  width={slide.image.width / 3.5}
                                  height={slide.image.height / 3.5}
                                  alt={slide.title}
                                />
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container px-8 py-8">
                  <div className="mb-6">
                    <SectionHeader
                      name={<span>{section.name}</span>}
                      title={<h2>{section.title} Collaborations</h2>}
                    />
                  </div>
                  <div className="animate opacity-0">
                    <BlockContent
                      blocks={section.text}
                      className="external-text"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {(isTablet || isDesktop) && (
        <div className="lg:h-screen relative">
          <div className="h-2/3-screen">
            <div className="relative w-full h-full text-start flex">
              <div className="absolute w-full h-full">
                <Image
                  src="/img/desktop/science/collaborations@2x.jpg"
                  alt="Commercial"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <div className="absolute w-full h-full inset-0 bg-black bg-opacity-50"></div>
              <div className="animate opacity-0 w-full mx-auto text-center px-8 py-8 text-epm-gray-500 flex flex-row items-center justify-center relative z-10 divide-x divide-epm-gray-100 divide-opacity-30">
                {data.collaboration__logos.map((section, sectionIndex) => {
                  return (
                    <div
                      key={slugify(section.title)}
                      className={classNames(
                        "collaborations__panel lg:w-1/2 px-8",
                        slugify(section.title.toLowerCase())
                      )}
                    >
                      <div className="relative z-10">
                        <div className="font-title uppercase text-2xl mb-16">
                          {section.title}
                        </div>
                        <div className="logos grid grid-cols-3 gap-6 max-w-lg mx-auto">
                          {section.logos.map((slide) => {
                            return (
                              <div
                                className="logo flex items-center justify-center transition-opacity duration-150 hover:opacity-70"
                                key={slide.name}
                              >
                                <a
                                  href={slide.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Image
                                    src={slide.image.src}
                                    width={slide.image.width / 3}
                                    height={slide.image.height / 3}
                                    alt={slide.title}
                                  />
                                </a>
                              </div>
                            );
                          })}
                        </div>
                        <div className="button pt-5 lg:inline-block text-center mt-16">
                          <Button
                            href="#"
                            style="light"
                            onClick={(event) =>
                              toggleLearnMore(event, slugify(section.title))
                            }
                          >
                            <FormattedMessage
                              id="common.learnMore"
                              defaultMessage="Learn More"
                            />
                          </Button>
                        </div>
                      </div>

                      <div
                        className={classNames(
                          "more-info commercial-more-info container lg:w-1/2 lg:opacity-0 lg:absolute z-0 top-0 end-0 hidden lg:flex lg:flex-col xl:justify-center text-start text-epm-gray-700 lg:bg-white lg:px-16 xl:px-36 py-8 lg:h-2/3-screen lg:overflow-y-auto",
                          {
                            "end-0": sectionIndex % 2 === 0,
                            "start-0": sectionIndex % 2 === 1,
                          }
                        )}
                        data-collaboration-panel={slugify(section.title)}
                        aria-expanded="false"
                      >
                        <BlockContent
                          blocks={section.text}
                          className="external-text"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:h-1/3-screen">
            <div className="container mx-auto px-8 lg:ps-24 xl:ps-56 2xl:px-8 py-8 lg:h-1/3-screen lg:flex lg:flex-col">
              <div>
                <SectionHeader
                  name={<span>{data.name}</span>}
                  title={<h2>{data.title}</h2>}
                />
              </div>

              <div className="animate opacity-0 text lg:w-103 mt-6">
                <BlockContent blocks={data.content} className="external-text" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Collaborations;
