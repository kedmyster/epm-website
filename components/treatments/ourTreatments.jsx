import { useState, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { useNextSanityImage } from "next-sanity-image";
import { FormattedMessage } from "react-intl";
import client from "../../client";
import { gsap } from "gsap";
import SectionHeader from "../shared/SectionHeader";
import Button from "../shared/Button";
import { getId } from "../../utils";

const BlockContent = require("@sanity/block-content-to-react");

function OurTreatments({ data }) {
  for (let i = 0; i < data.treatments__sections.length; i++) {
    data.treatments__sections[i].product.images = {
      mobile: useNextSanityImage(
        client,
        data.treatments__sections[i].product.mobile__image
      ),
      desktop: useNextSanityImage(
        client,
        data.treatments__sections[i].product.desktop__image
      ),
    };

    for (
      let j = 0;
      j < data.treatments__sections[i].product.icons.length;
      j++
    ) {
      data.treatments__sections[i].product.icons[j].image = useNextSanityImage(
        client,
        data.treatments__sections[i].product.icons[j].icon
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

  useEffect(() => {
    if (isTablet || isDesktop) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0.99) {
              const opened = document.querySelectorAll(
                ".more-info[aria-expanded='true']"
              );

              opened.forEach((section) => {
                const button = section
                  .closest(".section")
                  .querySelector(".button a");

                section.setAttribute("aria-expanded", "false");
                gsap.to(section, { opacity: 0, duration: 0.25 });

                button.innerText = "Learn More";
              });
            }
          });
        },
        { threshold: [0.01, 0.99] }
      );

      document
        .querySelectorAll(".section")
        .forEach((section) => observer.observe(section));
    }
  }, [isTablet, isDesktop]);

  const toggleLearnMore = (event) => {
    event.preventDefault();

    const section = event.target.closest("section");
    const moreInfoPanel = section.querySelector(".more-info");

    if (isMobile) {
      const button = section.querySelector(".button");
      const opened = document.querySelector("[aria-expanded='true']");

      if (opened && opened !== moreInfoPanel) {
        const openedButton = opened
          .closest(".section")
          .querySelector(".button");
        opened.setAttribute("aria-expanded", "false");
        opened.style.display = "none";
        openedButton.classList.remove("hidden");
      }

      if (moreInfoPanel.getAttribute("aria-expanded") === "false") {
        moreInfoPanel.setAttribute("aria-expanded", "true");
        moreInfoPanel.style.display = "block";
        button.classList.add("hidden");
      } else {
        moreInfoPanel.setAttribute("aria-expanded", "false");
        moreInfoPanel.style.display = "none";
        button.classList.remove("hidden");
      }
    }

    if (isTablet || isDesktop) {
      if (moreInfoPanel.getAttribute("aria-expanded") === "false") {
        moreInfoPanel.setAttribute("aria-expanded", "true");
        gsap.to(moreInfoPanel, { opacity: 1, zIndex: 11, duration: 0.25 });
        event.target.innerText = "Close";
      } else {
        moreInfoPanel.setAttribute("aria-expanded", "false");
        gsap.to(moreInfoPanel, { opacity: 0, zIndex: 0, duration: 0.25 });
        event.target.innerText = "Learn More";
      }
    }
  };

  return (
    <>
      <section
        id="current-developments"
        className="section treatments relative w-full"
        data-side-menu-label="Developments"
        data-side-menu-color="dark"
        data-side-menu-visibility="visible"
        data-header-menu-visibility="visible"
      >
        <div className="flex flex-wrap border-b-1 border-epm-gray-300 lg:flex-row-reverse lg:h-screen">
          <div className="container relative mx-auto px-4 lg:px-8 flex items-center justify-center lg:flex-grow z-50 h-2/3-screen lg:h-full lg:w-6/12 2xl:w-7/12 bg-epm-gray-100">
            <div className="flex lg:flex-col content-center justify-center lg:justify-end lg:w-full lg:max-w-4xl lg:h-full lg:pb-24">
              <div className="animate opacity-0 container mx-auto lg:px-8">
                <div className="flex flex-row justify-center">
                  {data.treatments__sections.map((slide, index) => {
                    return (
                      <div className="item flex flex-col w-1/3 items-center justify-between">
                        <div className="item__image flex justify-center items-end flex-grow mb-6">
                          <a
                            href={"#" + getId(slide.title)}
                            className="leading-0"
                          >
                            {isMobile && (
                              <Image
                                src={slide.product.images.mobile.src}
                                alt={slide.title}
                                width={slide.product.images.mobile.width / 3}
                                height={slide.product.images.mobile.height / 3}
                                layout="intrinsic"
                                quality={100}
                              />
                            )}
                            {(isTablet || isDesktop) && (
                              <Image
                                src={slide.product.images.desktop.src}
                                alt={slide.title}
                                width={slide.product.images.desktop.width / 3}
                                height={slide.product.images.desktop.height / 3}
                                layout="intrinsic"
                                quality={100}
                              />
                            )}
                          </a>
                        </div>
                        <div
                          className={classNames(
                            "item__title text-center text-xxs 2xl:text-base font-title uppercase py-3 px-3 w-full h-14 2xl:h-20 border-epm-gray-500 ml-2 pl-2 mr-2 mp-2",
                            {
                              "border-r":
                                index < data.treatments__sections.length - 1,
                            }
                          )}
                        >
                          <span className="inline-block lg:w-48">
                            {slide.product.name}
                          </span>
                          <span className="block normal-case text-epm-gray-500 font-light">
                            {slide.product.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex-shrink-0 lg:pl-24 xl:pl-56 lg:w-6/12 2xl:w-5/12 lg:h-screen overflow-y-hidden lg:overflow-y-auto">
            <div className="container px-8 lg:pl-0 py-8 lg:max-w-none lg:w-80 2xl:w-96 lg:flex lg:flex-col lg:justify-between lg:h-screen">
              <div className="mb-6 lg:mb-0">
                <SectionHeader name={data.name} title={<h2>{data.title}</h2>} />
              </div>
              <div className="animate opacity-0 text lg:text-epm-base lg:mt-6 lg:flex-grow">
                <BlockContent blocks={data.content} className="external-text" />
              </div>
              {(isTablet || isDesktop) && (
                <div>
                  <span className="text-xxs xl:text-xs 2xl:text-epm-base normal-case text-epm-gray-500 font-light">
                    <FormattedMessage
                      id="treatments.disclaimer"
                      defaultMessage="Images shown are for illustration purposes only"
                    />
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="divide-y divide-epm-gray-300">
        {data.treatments__sections.map((slide) => {
          return (
            <section
              id={getId(slide.title)}
              key={getId(slide.name)}
              className="section treatments relative w-full"
              data-side-menu-label={slide.title}
              data-side-menu-color="dark"
              data-side-menu-visibility="visible"
              data-header-menu-visibility="visible"
            >
              <div className="item flex flex-wrap flex-col lg:flex-row-reverse lg:h-screen">
                <div className="container relative mx-auto px-4 lg:px-8 lg:flex-grow h-2/3-screen lg:h-full lg:w-6/12 2xl:w-7/12 bg-epm-gray-100 flex justify-center items-center">
                  <div className="flex lg:flex-col content-center justify-center lg:w-full lg:max-w-4xl lg:justify-end lg:h-full lg:pb-24">
                    <div className="animate opacity-0 container mx-auto lg:px-8 relative z-0">
                      <div className="flex flex-row justify-center">
                        {slide.product.icons.map((icon, index) => {
                          return (
                            <div
                              className="item flex flex-col w-1/3 items-center justify-between"
                              key={getId(icon.name)}
                            >
                              <div
                                className={classNames(
                                  "item__image flex justify-center items-end flex-grow mb-6",
                                  { "mb-6 -mx-6 lg:-mx-10": index === 1 }
                                )}
                              >
                                {index === 1 && (
                                  <a
                                    href={"#" + getId(slide.title)}
                                    className="leading-0"
                                  >
                                    {isMobile && (
                                      <Image
                                        src={slide.product.images.mobile.src}
                                        alt={slide.title}
                                        width={
                                          slide.product.images.mobile.width / 3
                                        }
                                        height={
                                          slide.product.images.mobile.height / 3
                                        }
                                        layout="intrinsic"
                                        quality={100}
                                      />
                                    )}
                                    {(isTablet || isDesktop) && (
                                      <Image
                                        src={slide.product.images.desktop.src}
                                        alt={slide.title}
                                        width={
                                          slide.product.images.desktop.width /
                                          2.5
                                        }
                                        height={
                                          slide.product.images.desktop.height /
                                          2.5
                                        }
                                        layout="intrinsic"
                                        quality={100}
                                      />
                                    )}
                                  </a>
                                )}
                              </div>
                              <div className="item__icon h-9 lg:h-16 flex justify-center items-center">
                                {isMobile && (
                                  <Image
                                    src={icon.image.src}
                                    width={Math.floor(icon.image.width / 1.3)}
                                    height={Math.floor(icon.image.height / 1.3)}
                                    alt={icon.name}
                                  />
                                )}
                                {(isTablet || isDesktop) && (
                                  <Image
                                    src={icon.image.src}
                                    width={icon.image.width}
                                    height={icon.image.height}
                                    alt={icon.name}
                                  />
                                )}
                              </div>
                              <div
                                className={classNames(
                                  "item__title text-center text-xxs 2xl:text-base font-title uppercase py-3 px-3 w-full h-14 2xl:h-20 border-epm-gray-500 ml-2 pl-2 mr-2 mp-2",
                                  {
                                    "border-r":
                                      index < slide.product.icons.length - 1,
                                  }
                                )}
                              >
                                <span className="inline-block lg:w-48">
                                  {icon.name}
                                </span>
                                {icon.label && (
                                  <span className="block normal-case text-epm-gray-500 font-light">
                                    {icon.label}
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {(isTablet || isDesktop) && (
                      <div
                        className="more-info container lg:opacity-0 lg:absolute z-0 inset-0 hidden lg:flex flex-wrap xl:content-center lg:bg-epm-gray-300 lg:px-8 2xl:px-36 py-8 lg:h-screen overflow-y-hidden lg:overflow-y-auto"
                        aria-expanded="false"
                      >
                        <BlockContent
                          blocks={slide.product.info}
                          className="external-text"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="lg:flex-shrink-0 lg:pl-24 xl:pl-56 lg:w-6/12 2xl:w-5/12 lg:h-screen overflow-y-hidden lg:overflow-y-auto">
                  <div className="container lg:px-8 lg:pl-0 py-8 lg:max-w-none lg:w-80 2xl:w-96 lg:flex lg:flex-col lg:justify-between lg:h-screen">
                    <div className="px-8 lg:px-0 mb-6 lg:mb-0">
                      <SectionHeader
                        name={slide.name}
                        title={<h2>{slide.title}</h2>}
                      />
                    </div>
                    <div className="animate opacity-0 px-8 lg:px-0 lg:mt-6 lg:flex-grow">
                      <div className="lg:text-epm-base flex-grow pb-4 lg:pb-8">
                        <BlockContent
                          blocks={slide.content}
                          className="external-text"
                        />
                      </div>
                      <div className="button lg:inline-block text-center">
                        <Button
                          style="dark"
                          href="#"
                          onClick={(event) => toggleLearnMore(event)}
                        >
                          {slide.button}
                        </Button>
                      </div>
                    </div>
                    {isMobile && (
                      <div
                        className="more-info animate opacity-0 container lg:opacity-0 hidden bg-epm-gray-300 mt-8 px-8 py-8"
                        aria-expanded="false"
                      >
                        <div className="pb-8">
                          <Button
                            style="dark"
                            href="#"
                            onClick={(event) => toggleLearnMore(event)}
                          >
                            Close
                          </Button>
                        </div>

                        <BlockContent
                          blocks={slide.product.info}
                          className="external-text"
                        />

                        <div className="pt-8">
                          <Button
                            style="dark"
                            href="#"
                            onClick={(event) => toggleLearnMore(event)}
                          >
                            Close
                          </Button>
                        </div>
                      </div>
                    )}
                    {(isTablet || isDesktop) && (
                      <div>
                        <span className="text-xxs xl:text-xs 2xl:text-epm-base normal-case text-epm-gray-500 font-light">
                          <FormattedMessage
                            id="treatments.disclaimer"
                            defaultMessage="Images shown are for illustration purposes only"
                          />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

export default OurTreatments;
