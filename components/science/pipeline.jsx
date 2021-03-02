import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { gsap } from "gsap";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import SectionHeader from "../shared/SectionHeader";
import Button from "../shared/Button";

function Pipeline() {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (windowWidth >= 1280) {
      setIsMobile(false);
      setIsTablet(false);
      setIsDesktop(true);
    } else if (windowWidth >=1024) {
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
      id="pipeline"
      className="section pipeline bg-white"
      data-side-menu-label="Pipeline"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      <div className="flex flex-wrap lg:flex-row-reverse lg:h-screen">
        <div className="relative mx-auto lg:flex-grow lg:h-full w-full lg:w-6/12 2xl:w-7/12">
          <div className="lg:flex lg:flex-wrap lg:h-full">
            <div className="relative lg:flex-grow lg:w-6/12 2xl:w-7/12">
              <div className="image mx-auto text-center lg:pb-5">
                {isMobile && (
                  <Image
                    loading="eager"
                    src="/img/mobile/science/pipeline@2x.jpg"
                    alt=""
                    width={375}
                    height={327}
                    layout="intrinsic"
                    quality={100}
                    className="w-full h-full"
                  />
                )}
                {(isTablet || isDesktop) && (
                  <Image
                    loading="eager"
                    src="/img/desktop/science/pipeline@2x.jpg"
                    alt=""
                    layout="fill"
                    objectFit="fill"
                    quality={100}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex-shrink-0 lg:pl-44 xl:pl-56 lg:w-6/12 2xl:w-5/12 lg:border-t lg:border-epm-gray-300lg:h-screen overflow-y-hidden lg:overflow-y-auto">
          <div className="container px-8 lg:pl-0 py-8 lg:max-w-none lg:w-64 xl:w-80 2xl:w-96 ">
            <div className="">
              <SectionHeader
                name={<span className="animate">Our Innovation</span>}
                title={
                  <h2 className="animate">
                    Our Pipeline
                    <br />
                    Future Products and Development
                  </h2>
                }
              />
            </div>
            <div className="animate text lg:text-epm-base mt-6">
              <p className="mb-4">
                EPM is currently advancing treatments in Psoriasis, IBD and ARDS
                into the clinic, using EPM301. EPM has also developed an
                intellectual property pipeline with 14 different cannabinoid
                acid molecules to innovate treatments in additional therapeutic
                areas.
              </p>
              <p >
              EPM maintains control over all aspects of the product development
              process – research and discovery, formulation, toxicology, scaleup
              manufacturing, clinical trials and regulatory affairs.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pipeline;
