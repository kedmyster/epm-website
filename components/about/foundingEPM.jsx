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
      id="founding-epm"
      className="section founding-epm bg-white relative w-full flex flex-wrap border-b-1 border-epm-gray-700 lg:flex-row-reverse lg:h-screen"
      data-side-menu-label="Founding EPM"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      <div className="relative lg:flex-grow lg:w-7/12">
        {isMobile && (
          <Image
            loading="eager"
            src="/img/mobile/about/founding-epm@2x.jpg"
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
            src="/img/desktop/about/founding-epm@2x.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
      </div>

      <div className="lg:flex-shrink-0 lg:pl-56 lg:w-5/12">
        <div className="container px-8 lg:pr-0 py-8 lg:max-w-none lg:w-101 ">
          <div className="lg:mb-0">
            <SectionHeader
              name="Founding EPM"
              title={<h2>Patient-Focused Pharmaceutical Group</h2>}
            />
          </div>
          <div className="animate text mt-6 lg:text-lg lg:w-96">
            <p>
              The company was founded in 2017 by Reshef Swisa and Asaf Ohana, in
              an intergenerational collaboration with Prof. Raphael Mechoulam,
              Israel prize winner. Although the Pharmaceutical industry and
              regulatory institutions have already excepted cannabis based
              medicines, the true potential of cannabinoids remained unlock.
              They have recognized that the disparity in the required potency
              for treatments, the requirements of IP protection for
              pharmaceutical solutions, and the consistency required for mass
              production of medicines were the main challenges the cannabis
              industry was facing. Together, they’ve managed to uncover the
              hidden potential in the plant’s potent capabilities and offer an
              alternative to current medicine, without having to depend or
              consume the plant itself. The Solution Using proprietary
              innovative technology, EPM created a comprehensive and
              fully-protected portfolio of Pharmaceutical solutions, which are
              potential alternative to steroids and other treatments. EPM’s
              synthetic cannabinoid acid based products are protected, potent
              and industrially reproducible to ensure all pharmaceutical
              challenges are resolved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoundingEPM;
