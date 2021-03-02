import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { gsap } from "gsap";
import SectionHeader from "../shared/SectionHeader";
import Button from "../shared/Button";

function FoundingEPM() {
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

  return (
    <section
      id="founding-epm"
      className="section founding-epm bg-white relative w-full flex flex-wrap border-b-1 border-epm-gray-300 lg:flex-row-reverse lg:h-screen"
      data-side-menu-label="Founding EPM"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      <div className="image relative animate lg:flex-grow w-full lg:w-6/12 2xl:w-7/12 h-2/3-screen lg:h-auto">
        {isMobile && (
          <Image
            loading="eager"
            src="/img/mobile/about/founding-epm@2x.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
        {(isTablet || isDesktop) && (
          <Image
            loading="eager"
            src="/img/desktop/about/founding-epm@2x.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
      </div>

      <div className="lg:flex-shrink-0 lg:pl-44 xl:pl-56 lg:w-6/12 2xl:w-5/12 lg:h-screen overflow-y-hidden lg:overflow-y-auto">
        <div className="container px-8 lg:pl-0 py-8 lg:max-w-none lg:w-64 xl:w-80 2xl:w-96 ">
          <div className="lg:mb-0">
            <SectionHeader name="Our Story" title={<h2>Founding EPM</h2>} />
          </div>
          <div className="animate text mt-6 lg:text-epm-base">
            <p className="mb-4">
              The company was founded in 2017 by Reshef Swisa and Asaf Ohana, in
              an intergenerational collaboration with Israeli Prize winner and
              cannabis pioneer Prof. Raphael Mechoulam. Although the
              pharmaceutical industry and regulatory institutions have already
              accepted cannabis-based medicine, the true potential of
              cannabinoids had remained locked. They recognized the disparity in
              the required potency for treatments, the requirements of IP
              protection for pharmaceutical solutions, and the consistency
              required for mass production of medicine. These were the main
              challenges the cannabis industry was facing.
            </p>
            <p className="mb-4">
              Together, EPM’s founders have managed to uncover the hidden
              potential in the plant’s potent capabilities and offer an
              alternative to current medicine, without having to depend or
              consume the plant itself.
            </p>
            <p className="">
              <strong className="block">The solution</strong>
              Using proprietary innovative technology, EPM created a
              comprehensive and fully-protected portfolio of pharmaceutical
              solutions, which are a potential alternative to steroids and other
              treatments. EPM’s synthetic cannabinoid acid based products are
              protected, potent and industrially reproducible to ensure all
              pharmaceutical challenges are resolved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoundingEPM;
