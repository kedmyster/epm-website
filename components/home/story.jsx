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
          {(isTablet || isDesktop) && (
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
            name={<span>Our Story</span>}
            title={
              <h2 className="pb-52 lg:pb-0">
                Patient-focused Pharmaceutical Group
              </h2>
            }
          />
          <div className="animate opacity-0 text lg:w-105 lg:mx-auto">
            <p className="lg:text-epm-base lg:mt-6">
              EPM is developing prescription medicine based on novel discoveries
              of synthetic cannabinoid acids to address unmet patient needs.
              These innovations represent new treatment options and aim at
              alleviating a wide range of therapeutic conditions for millions of
              patients worldwide.
            </p>
          </div>
          <div className="animate opacity-0 button pt-10 lg:pt-96">
            <Button href="/about/#main" style="dark">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
