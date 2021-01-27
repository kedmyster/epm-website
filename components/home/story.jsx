import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { gsap } from "gsap";

function Story() {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

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
    const tl = gsap.timeline();

    tl.fromTo(".animate-1", {
      y: "-=5px",
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.25
    });

    tl.fromTo(".animate-2", {
      y: "-=5px",
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.25
    }, "-=0.125");

    tl.fromTo(".animate-3", {
      y: "-=5px",
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.25
    }, "-=0.125");

    tl.fromTo(".animate-4", {
      y: "-=5px",
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.25
    }, "-=0.125");
  }, []);

  return (
    <section
      id="story"
      className="section story bg-white relative w-full bg-cover text-center flex flex-wrap content-end lg:h-screen"
      data-side-menu-color="light"
      data-side-menu-visibility="visible"
    >
      <div className="absolute w-full h-full">
        {isMobile && (
          <Image
            src="/img/mobile/our-story@3x.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
        {isDesktop && (
          <Image
            src="/img/desktop/our-story@2x.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
      </div>
      <div className="relative container mx-auto py-8 px-8 ">
        <div className="section-name animate-1 font-title text-xs lg:text-base uppercase section-name">
          Our Story
        </div>
        <div className="section-title animate-2 pb-60 lg:pb-8">
          <h2 className="font-title text-2xl lg:text-4xl">
            Patient-focused Pharmaceutical Group
          </h2>
        </div>
        <div className="animate-3 text lg:w-105 lg:mx-auto">
          <p className="lg:text-lg">
            EPM is developing prescription medicines, based on novel discoveries
            of synthetic cannabinoid acids to address unmet patient needs in a
            wide range of therapeutic conditions. These innovations represent
            new treatment options for the pharmaceutical industry.
          </p>
        </div>
        <div className="animate-4 button pt-10 lg:pt-96">
          <a
            href=""
            className="inline-block w-full lg:w-auto text-center uppercase border-3 border-epm-dark-gray rounded-3xl select-none transition-opacity duration-150 hover:opacity-70 lg:px-10 py-2"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Story;
