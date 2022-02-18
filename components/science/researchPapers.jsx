import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { gsap } from "gsap";
import { getFile } from "@sanity/asset-utils";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import { useNextSanityImage } from "next-sanity-image";
import { FormattedMessage } from "react-intl";
import client from "../../client";
import SectionHeader from "../shared/SectionHeader";
import Button from "../shared/Button";
import {
  SliderCustomPreviousArrow,
  SliderCustomNextArrow,
} from "../shared/carousel";

const BlockContent = require("@sanity/block-content-to-react");

function ResearchPapers({ data }) {
  data.images = {
    mobile: useNextSanityImage(client, data.mobile_image),
    desktop: useNextSanityImage(client, data.desktop_image),
  };

  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();
  const intl = useIntl();

  const SLIDER_RESEARCH_PAPERS_CONFIG = {
    dots: false,
    rtl: router.locale === "he",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderCustomNextArrow color="light" />,
    prevArrow: <SliderCustomPreviousArrow color="light" />,
    responsive: [
      {
        breakpoint: 99999,
        settings: "unslick",
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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

  const showMore = (slideNumber) => {
    const slides = Array.from(
      document.querySelectorAll("#research-papers .item")
    );
    const tl = gsap.timeline({});

    slides.forEach((slide, index) => {
      const right = slide.querySelector(".item__box__right");
      const bottom = slide.querySelector(".item__box__bottom");
      const left = slide.querySelector(".item__box__left");

      if (index === slideNumber) {
        tl.set(left, { transformOrigin: "top left" });
        tl.to(left, { scale: "1", duration: 0.1 });
        tl.set(bottom, { transformOrigin: "bottom left" });
        tl.to(bottom, { scale: "1", duration: 0.1 });
        tl.set(right, { transformOrigin: "bottom right" });
        tl.to(right, { scale: "1", duration: 0.1 });
      } else {
        tl.set(right, { transformOrigin: "bottom right" });
        tl.to(right, { scale: "0", duration: 0.1 });
        tl.set(bottom, { transformOrigin: "bottom left" });
        tl.to(bottom, { scale: "0", duration: 0.1 });
        tl.set(left, { transformOrigin: "top left" });
        tl.to(left, { scale: "0", duration: 0.1 });
      }
    });
  };

  const togglePaper = (event, slide) => {
    event.preventDefault();

    const moreInfoPanel = document.querySelector("#research-read-more");
    const paperDocumentElement = document.querySelector("#paper-document");
    paperDocumentElement.src = "";

    if (isMobile) {
      if (slide) {
        const file = getFile(slide.file, client.config());
        paperDocumentElement.src = file.asset.url;
      }

      if (moreInfoPanel.getAttribute("aria-expanded") === "false") {
        event.target.innerText = intl.formatMessage({
          id: "common.close",
          defaultMessage: "Close",
        });

        moreInfoPanel.setAttribute("aria-expanded", "true");
        gsap.to(moreInfoPanel, {
          opacity: 1,
          display: "block",
          zIndex: 11,
          duration: 0.25,
        });
      } else {
        event.target.innerText = intl.formatMessage({
          id: "common.read",
          defaultMessage: "Read",
        });

        moreInfoPanel.setAttribute("aria-expanded", "false");
        gsap.to(moreInfoPanel, {
          opacity: 0,
          display: "none",
          zIndex: 0,
          duration: 0.25,
        });
      }
    } else if (isTablet || isDesktop) {
      if (slide) {
        const paperNameElement = document.querySelector("#paper-name");
        const paperTextElement = document.querySelector("#paper-text");
        const file = getFile(slide.file, client.config());

        paperNameElement.innerText = slide.title;
        paperTextElement.innerText = slide.text;
        paperDocumentElement.src = file.asset.url;
      }

      if (moreInfoPanel.getAttribute("aria-expanded") === "false") {
        moreInfoPanel.setAttribute("aria-expanded", "true");
        gsap.to(moreInfoPanel, { opacity: 1, zIndex: 11, duration: 0.25 });
      } else {
        moreInfoPanel.setAttribute("aria-expanded", "false");
        gsap.to(moreInfoPanel, { opacity: 0, zIndex: 0, duration: 0.25 });
      }
    }
  };

  return (
    <section
      id="research-papers"
      className="section research-papers"
      data-side-menu-label={intl.formatMessage({
        id: "science.publications.title",
        defaultMessage: "Publications",
      })}
      data-side-menu-color="light"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      {isMobile && (
        <div>
          <div className="items text-white bg-gray-800 text-center relative">
            <div className="image animate opacity-0 absolute w-full h-2/3-screen">
              <Image
                src={data.images.mobile.src}
                alt={intl.formatMessage({
                  id: "science.research.title",
                  defaultMessage: "Research Papers",
                })}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className="absolute w-full h-2/3-screen inset-0 bg-black bg-opacity-50"></div>
            <Slider {...SLIDER_RESEARCH_PAPERS_CONFIG}>
              {data.papers.map((slide) => {
                return (
                  <div
                    className="item"
                    key={slide.title}
                    dir={router.locale === "he" ? "rtl" : "ltr"}
                  >
                    <div className="relative text-center w-full h-2/3-screen lg:text-start lg:p-5 lg:border-t-2 lg:border-white flex flex-wrap content-end">
                      <div className="container mx-auto px-16 py-8 lg:flex lg:flex-row lg:space-x-20 z-10">
                        <div className="item__title font-title text-2xl uppercase pb-5">
                          {slide.title}
                        </div>
                        <div className="item__text font-light text-sm h-14">
                          {slide.text}
                        </div>
                        <div className="button pt-5 lg:inline-block text-center">
                          <Button
                            href={slide.url}
                            onClick={(event) => togglePaper(event, slide)}
                          >
                            {slide.button}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div>
            <div
              id="research-read-more"
              className="read-more bg-white h-2/3-screen w-full hidden z-0 top-0 start-0 opacity-0"
              aria-expanded="false"
            >
              <div className="flex flex-wrap lg:flex-row-reverse lg:2/3-h-screen bg-epm-gray-700">
                <div className="relative mx-auto lg:flex-grow lg:h-2/3-screen w-full lg:w-7/12">
                  <iframe
                    id="paper-document"
                    src=""
                    className="w-full h-2/3-screen"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container mx-auto px-8 py-8">
              <SectionHeader name={data.name} title={<h2>{data.title}</h2>} />
              <div className="text animate opacity-0  lg:text-epm-base lg:w-103">
                <BlockContent blocks={data.content} className="external-text" />
              </div>
            </div>
          </div>
        </div>
      )}

      {(isTablet || isDesktop) && (
        <div className="h-screen relative">
          <div className="h-2/3-screen ">
            <div
              id="research-papers-list"
              className="relative z-10 w-full h-full text-start flex flex-wrap content-end"
            >
              <div className="absolute w-full h-full">
                <Image
                  src={data.images.desktop.src}
                  alt={intl.formatMessage({
                    id: "science.research.title",
                    defaultMessage: "Research Papers",
                  })}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <div className="absolute w-full h-full inset-0 bg-black bg-opacity-50"></div>
              <div className="animate opacity-0 container mx-auto px-8 py-8 w-container text-white flex flex-row gap-20 z-10">
                {data.papers.map((slide, index) => {
                  return (
                    <div
                      key={slide.title}
                      className="item lg:w-1/3 p-4 relative cursor-pointer"
                      onMouseEnter={() => showMore(index)}
                      onClick={(event) => togglePaper(event, slide)}
                      data-slide={index}
                    >
                      <div className="item__box__top absolute top-0 start-0 bg-white w-full h-px"></div>
                      <div className="item__box__left absolute top-0 start-0 bg-white w-px h-full transform scale-0"></div>
                      <div className="item__box__bottom absolute bottom-0 start-0 bg-white w-full h-px transform scale-0"></div>
                      <div className="item__box__right absolute bottom-0 end-0 bg-white w-px h-full transform scale-0"></div>
                      <div className="item__content">
                        <div className="item__title font-title text-2xl uppercase mb-5 lg:h-16">
                          {slide.title}
                        </div>
                        <div className="item__text font-light text-sm">
                          {slide.text}
                        </div>
                        <div className="button pt-5 inline-block">
                          <div className="cursor-pointer inline-block text-white uppercase select-none transition-opacity duration-150 hover:opacity-75">
                            <FormattedMessage
                              id="common.read"
                              defaultMessage="Read"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              id="research-read-more"
              className="read-more bg-white h-2/3-screen w-full absolute z-0 top-0 start-0 opacity-0"
              aria-expanded="false"
            >
              <div className="flex flex-wrap lg:flex-row-reverse lg:2/3-h-screen">
                <div className="relative mx-auto lg:flex-grow lg:h-2/3-screen lg:w-6/12 2xl:w-7/12 bg-epm-gray-500">
                  <iframe
                    id="paper-document"
                    src=""
                    className="w-full h-2/3-screen"
                  />
                </div>
                <div className="lg:flex-shrink-0 lg:border-b border-epm-gray-300 lg:ps-24 xl:ps-56 lg:w-6/12 2xl:w-5/12 lg:2/3-h-screen overflow-y-hidden lg:overflow-y-auto">
                  <div className="container px-8 lg:ps-0 py-8 lg:max-w-none lg:w-64 xl:w-80 2xl:w-96">
                    <div className="lg:text-epm-base text-epm-gray-500">
                      <FormattedMessage
                        id="science.research.paper.title"
                        defaultMessage="EPM-301 Therapeutic Effect on"
                      />
                    </div>
                    <div className="item__title font-title text-2xl uppercase mb-6">
                      <span id="paper-name"></span>
                    </div>
                    <div className="item-ref text-xs">
                      <span id="paper-text"></span>
                    </div>
                    <div className="button pt-10 lg:inline-block text-center">
                      <Button
                        className="cursor-pointer inline-block w-full lg:w-48 text-center uppercase border-3 rounded-3xl select-none transition-opacity duration-150 hover:opacity-70 lg:px-10 py-2 border-epm-gray-700 text-epm-gray-700"
                        onClick={(event) => togglePaper(event)}
                      >
                        <FormattedMessage
                          id="common.close"
                          defaultMessage="Close"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-1/3-screen">
            <div className="container mx-auto px-8 lg:ps-24 xl:ps-56 2xl:px-8 py-8 lg:h-1/3-screen lg:flex lg:flex-col">
              <div>
                <SectionHeader
                  name={<span>{data.name}</span>}
                  title={<h2>{data.title}</h2>}
                />
              </div>

              <div className="animate opacity-0 text mt-6 lg:w-103">
                <BlockContent blocks={data.content} className="external-text" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ResearchPapers;
