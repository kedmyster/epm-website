import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { gsap } from "gsap";
import Button from "../shared/Button";
import SectionHeader from "../shared/SectionHeader";
import {
  SliderCustomPreviousArrow,
  SliderCustomNextArrow,
} from "../shared/carousel";

function Solution({ data }) {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const SLIDER_SOLUTION_CONFIG = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderCustomNextArrow color="light" />,
    prevArrow: <SliderCustomPreviousArrow color="light" />,
  };

  useEffect(() => {
    if (windowWidth > 1024) {
      setIsMobile(false);
      setIsTablet(false);
      setIsDesktop(true);
    } else if (windowWidth > 768) {
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

  const toggleVideo = (event) => {
    const item = event.target.closest(".item");
    const video = item.querySelector(".video");
    const button = item.querySelector("a");

    if (item.getAttribute("aria-expanded") === "false") {
      item.setAttribute("aria-expanded", "true");
      video.classList.remove("hidden");
      button.innerText = "Close Video";
    } else {
      item.setAttribute("aria-expanded", "false");
      video.classList.add("hidden");
      button.innerText = "Play Video";
    }
  };

  return (
    <section
      id="solution"
      className="section solution bg-white relative w-full flex flex-wrap border-b-1 border-epm-gray-700 lg:flex-row-reverse lg:h-screen"
      data-side-menu-label="Our Solution"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      <div className="w-full lg:w-7/12">
        <Slider {...SLIDER_SOLUTION_CONFIG}>
          {data.slides.map((slide) => {
            return (
              <div className="item relative lg:flex-grow lg:h-screen">
                <div className="image">
                  {isMobile && (
                    <Image
                      loading="eager"
                      src={slide.images.mobile}
                      alt=""
                      width={375}
                      height={500}
                      layout="intrinsic"
                      quality={100}
                    />
                  )}
                  {isDesktop && (
                    <Image
                      loading="eager"
                      src={slide.images.desktop}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                  )}

                  <div className="button absolute left-1/2 transform -translate-x-1/2 bottom-8">
                    <Button
                      style="light"
                      onClick={(event) => toggleVideo(event)}
                    >
                      Play Video
                    </Button>
                  </div>
                </div>
                <div className="video absolute inset-0 hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`${slide.video}?controls=0&rel=0`}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="lg:flex-shrink-0 lg:pl-56 lg:w-5/12">
        <div className="container px-8 lg:pr-0 py-8 lg:max-w-none lg:w-101 ">
          <div className="mb-6 lg:mb-0">
            <SectionHeader
              name="Our Science"
              title={<h2>Endless Potential Molecules</h2>}
            />
          </div>
          <div className="text lg:text-lg lg:w-96 lg:mt-6">
            <p className="mb-4">
              EPM develops a dynamic portfolio of prescription medicines derived
              from synthetic cannabinoid acids. The treatments are based on the
              discovery of 14 synthetic molecules, including 8 novel structures
              and different development procedures.
            </p>
            <p className="mb-4">
              In preclinical studies, EPM’s lead molecule has repeatedly shown
              similar results to established steroids in different inflammatory
              diseases.
            </p>
            <p className="mb-4">
              EPM’s treatments have high potency, are reproducible and scalable,
              and have full intellectual protection:
            </p>
            <p className="mb-4">
              <strong className="bold">Potency</strong>
              EPM’s lead treatment has demonstrated activity equivalent to
              steroids in inflammatory disease models.
            </p>
            <p className="mb-4">
              <strong className="bold">Consistency</strong>
              EPM produces its medicine in pharmaceutically- approved GMP
              facilities with industrial capacity.
            </p>
            <p>
              <strong className="bold">Protection</strong>
              EPM’s patents and IP portfolio cover a wide range of drug
              formulations and medical conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
