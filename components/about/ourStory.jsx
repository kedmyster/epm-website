import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { gsap } from "gsap";
import SectionHeader from "../shared/SectionHeader";
import Button from "../shared/Button";

function OurStory() {
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
    gsap.fromTo(
      ".scroll-to-content",
      { opacity: 0.5 },
      {
        opacity: 1,
        duration: 3,
        y: "-=10px",
        yoyo: true,
        repeat: -1,
        ease: "easeInOut",
      }
    );
  }, []);

  return (
    <section
      id="story"
      className="section story bg-white relative w-full flex flex-wrap border-b-1 border-epm-gray-700 lg:flex-row-reverse lg:h-screen"
      data-side-menu-label="Our Story"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
    >
      <div className="video relative lg:flex-grow lg:w-7/12">
        {isMobile && (
          <Image
            loading="eager"
            src="/img/mobile/about/mechoulam-thumbnail@2x.jpg"
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
            src="/img/desktop/about/mechoulam-thumbnail@2x.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
        <div className="animate button absolute w-48 left-1/2 transform -translate-x-1/2 bottom-8">
          <Button href="/about/#story" style="light">
            Play Video
          </Button>
        </div>
      </div>

      <div className="lg:flex-shrink-0 lg:pl-56 lg:w-5/12">
        <div className="container px-8 lg:pr-0 py-8 lg:max-w-none lg:w-101 ">
          <div className="lg:mb-0">
            <SectionHeader
              name="Our story"
              title={<h2>Patient-Focused Pharmaceutical Group</h2>}
            />
          </div>
          <div className="text mt-6 lg:text-lg lg:w-96">
            <p>
              EPM develops prescription medicines derived from synthetic
              cannabinoid acids to address unmet patient needs. Our mission is
              to develop safer treatment options for people. Our focus is to
              bring cannabinoid acid based medicines to patients in a wide range
              of therapeutic conditions, current treatment developments include
              Psoriasis, IBD and ARDS. At EPM we care to make a real difference
              by helping people live a life of higher quality. EPM created a
              pipeline which includes the discovery of 14 protected synthetic
              molecules, including 8 novel structures and the development of
              various processes. EPM maintains control over all aspects of the
              product development process – research and discovery, formulation,
              toxicology, scaleup manufacturing, clinical trial and regulatory
              affairs. EPM is leading the way in realizing the untapped
              potential of cannabinoids acids as new pharmaceutical treatments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
