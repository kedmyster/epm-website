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
      id="pipeline"
      className="section pipeline bg-white"
      data-side-menu-label="Pipeline"
      data-side-menu-color="light"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      <div className="flex flex-wrap lg:flex-row-reverse lg:h-screen">
        <div className="relative mx-auto lg:flex-grow lg:h-full lg:w-7/12">
          <div className="lg:flex lg:flex-wrap lg:h-full">
            <div className="relative lg:flex-grow lg:w-7/12">
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
                  />
                )}
                {isDesktop && (
                  <Image
                    loading="eager"
                    src="/img/desktop/science/pipeline@2x.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex-shrink-0 lg:pl-56 lg:w-5/12 lg:border-t lg:border-epm-gray-300">
          <div className="container px-8 lg:pr-0 py-8 lg:max-w-none lg:w-101 ">
            <div>
              <SectionHeader
                name={<span className="animate">Our Innovation</span>}
                title={
                  <h2 className="animate">
                    Products and Future
                    <br />
                    Development Pipeline
                  </h2>
                }
              />
            </div>
            <div className="animate text lg:text-lg lg:w-96 mt-6">
              <p>
                EPM is currently advancing treatments in Psoriasis, IBD and ARDS
                into the clinic, using EPM301. EPM has also developed an
                intellectual property pipeline with 14 different cannabinoid
                acid molecules to innovate treatments in additional therapeutic
                areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pipeline;
