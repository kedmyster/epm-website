import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { gsap } from "gsap";
import Button from "../shared/Button";
import SectionHeader from "../shared/SectionHeader";

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
      className="section story bg-white relative w-full bg-cover text-center"
      data-side-menu-label="Our Story"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      <div className="flex flex-wrap content-end h-screen">
        <div className="absolute w-full h-full">
          {isMobile && (
            <Image
              src="/img/mobile/homepage/our-story@2x.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          )}
          {isDesktop && (
            <Image
              src="/img/desktop/homepage/our-story@2x.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          )}
        </div>
        <div className="relative container mx-auto py-8 px-8">
          <SectionHeader
            name={<span className="animate">Our Story</span>}
            title={<h2 className="animate pb-52 lg:pb-0">Patient-focused Pharmaceutical Group</h2>}
          />
          <div className="animate text lg:w-105 lg:mx-auto">
            <p className="lg:text-lg lg:mt-6">
              EPM is developing prescription medicines, based on novel discoveries
              of synthetic cannabinoid acids to address unmet patient needs in a
              wide range of therapeutic conditions. These innovations represent
              new treatment options for the pharmaceutical industry.
            </p>
          </div>
          <div className="animate button pt-10 lg:pt-96">
            <Button href="/about/#story" style="dark">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
