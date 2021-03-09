import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { gsap } from "gsap";
import SectionHeader from "../shared/SectionHeader";
import Button from "../shared/Button";

function Cannabinoids() {
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
      id="cannabinoids"
      className="section cannabinoids relative w-full"
      data-side-menu-label="The Acids"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      <div className="flex flex-wrap lg:flex-row-reverse lg:h-screen">
        <div className="relative mx-auto lg:flex-grow lg:h-full w-full lg:w-6/12 2xl:w-7/12">
          <div className="lg:flex lg:flex-wrap lg:h-full">
            <div className="relative lg:flex-grow lg:w-6/12 2xl:w-7/12">
              <div className="image animate opacity-0 mx-auto text-center lg:pb-5 w-full h-2/3-screen lg:h-screen">
                {isMobile && (
                  <Image
                    src="/img/mobile/science/cannabinoids-acids@2x.jpg"
                    alt="Cannabinoids Acid"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                )}
                {(isTablet || isDesktop) && (
                  <Image
                    src="/img/desktop/science/cannabinoids-acids@2x.jpg"
                    alt="Cannabinoids Acid"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex-shrink-0 lg:pl-44 xl:pl-56 lg:w-6/12 2xl:w-5/12 lg:h-screen overflow-y-hidden lg:overflow-y-auto">
          <div className="container px-8 lg:pl-0 py-8 lg:max-w-none lg:w-64 xl:w-80 2xl:w-96 ">
            <div className="mb-6 lg:mb-0">
              <SectionHeader
                name="Our innovation"
                title={<h2>Cannabinoids Acid</h2>}
              />
            </div>
            <div className="animate opacity-0 text lg:text-epm-base mt-6">
              <p className="mb-4">
                In the plant, cannabinoid acids are the source of all known
                cannabinoids. The therapeutic effects of cannabinoid acids are
                less well known compared to cannabinoids. However, some of the
                acids were found to be more potent than the cannabinoids in
                areas such as anti-inflammatory and anti-anxiety activity.
              </p>
              <p>
                At EPM we synthesize and develop cannabinoid methyl-esters
                products, which are fully synthetic, stable, and IP protected
                derivatives of the original cannabinoid acids. These solutions
                constitute endless therapeutic potential and have already been
                tested and shown to be effective in animal models of IBD,
                obesity and metabolic related syndromes, inflammatory skin
                conditions and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cannabinoids;
