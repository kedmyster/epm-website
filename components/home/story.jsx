import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";

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

  return (
    <section
      id="story"
      className="story relative w-full bg-cover text-center flex flex-wrap content-end lg:h-screen"
    >
      <div className="absolute w-full h-full">
        {isMobile && (
          <Image
            src="/img/mobile/our-story@3x.png"
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
        {isDesktop && (
          <Image
            src="/img/desktop/our-story@2x.png"
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
      </div>
      <div className="relative container mx-auto py-8 px-8 ">
        <div className="font-title text-xs lg:text-base uppercase section-name">
          Our Story
        </div>
        <div className="section-title pb-60 lg:pb-8">
          <h2 className="font-title text-2xl lg:text-4xl">
            Patient-focused Pharmaceutical Group
          </h2>
        </div>
        <div className="text lg:w-105 lg:mx-auto">
          <p className="lg:text-lg">
            EPM is developing prescription medicines, based on novel discoveries
            of synthetic cannabinoid acids to address unmet patient needs in a
            wide range of therapeutic conditions. These innovations represent
            new treatment options for the pharmaceutical industry.
          </p>
        </div>
        <div className="button pt-10 lg:pt-96">
          <a
            href=""
            className="inline-block w-full lg:w-auto text-center uppercase border-3 border-epm-dark-gray rounded-3xl lg:px-10 lg:py-2"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Story;
