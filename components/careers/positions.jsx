import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import SectionHeader from "../shared/SectionHeader";
import { gsap } from "gsap";
import { getId } from "../../utils";

const BlockContent = require("@sanity/block-content-to-react");

function PositionsComponent({ data }) {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTabletPortrait, setIsTabletPortrait] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (windowWidth >= 1280) {
      setIsMobile(false);
      setIsTabletPortrait(false);
      setIsTablet(false);
      setIsDesktop(true);
    } else if (windowWidth >= 1024) {
      setIsMobile(false);
      setIsTabletPortrait(false);
      setIsTablet(true);
      setIsDesktop(false);
    } else if (windowWidth >= 768) {
      setIsMobile(false);
      setIsTabletPortrait(true);
      setIsTablet(false);
      setIsDesktop(false);
    } else {
      setIsMobile(true);
      setIsTabletPortrait(false);
      setIsTablet(false);
      setIsDesktop(false);
    }
  }, [windowWidth]);

  const togglePosition = (event) => {
    event.preventDefault();

    const positions = document.querySelectorAll(".position");
    const currentPosition = event.target.closest(".position");

    positions.forEach((position) => {
      const positionDescription = position.querySelector(
        ".position__description"
      );
      const arrow = position.querySelector(".arrow");

      if (position === currentPosition) {
        if (currentPosition.getAttribute("aria-expanded") === "false") {
          position.setAttribute("aria-expanded", "true");
          positionDescription.classList.remove("hidden");
          gsap.to(arrow, { rotation: 180, duration: 0.25 });
        } else {
          position.setAttribute("aria-expanded", "false");
          positionDescription.classList.add("hidden");
          gsap.to(arrow, { rotation: 0, duration: 0.25 });
        }
      } else {
        position.setAttribute("aria-expanded", "false");
        positionDescription.classList.add("hidden");
        gsap.to(arrow, { rotation: 0, duration: 0.25 });
      }
    });
  };

  return (
    <section
      id="open-positions"
      className="section open-positions bg-white relative w-full flex justify-center lg:h-screen"
      data-side-menu-label=""
      data-side-menu-color="dark"
      data-side-menu-visibility="hidden"
    >
      <div className="positions flex flex-col w-full lg:w-sm-container pt-8 lg:pt-20">
        <div className="animate opacity-0 mb-6 lg:mb-6 text-center">
          <SectionHeader name="" title={<h2>{data.title}</h2>} />
        </div>
        {data.positions.map((position, index) => {
          return (
            <div
              className="position animate opacity-0 relative cursor-pointer bg-white transition-colors duration-150 hover:bg-epm-gray-100 px-8 lg:px-4 border-t border-epm-gray-300 last:border-b"
              key={getId(position.role)}
              onClick={(event) => togglePosition(event)}
              aria-expanded="false"
            >
              <div className="flex flex-row items-center justify-between h-12 lg:h-24">
                <div className="position__position text-sm lg:text-lg xl:text-xl font-bold w-1/3 lg:w-auto">
                  {position.role}
                </div>
                <div className="position__location text-sm lg:text-lg xl:text-xl font-light w-1/3 lg:w-auto">
                  {position.location}
                </div>
                <div className="icon flex flex-col justify-start lg:pt-5">
                  <div className="arrow">
                    {(isMobile || isTabletPortrait) && (
                      <Image
                        src="/img/icons/arrow_down_dark.svg"
                        alt={position.role}
                        width={20}
                        height={12}
                        layout="intrinsic"
                        quality={100}
                      />
                    )}
                    {(isTablet || isDesktop) && (
                      <Image
                        src="/img/icons/arrow_down_dark.svg"
                        alt={position.role}
                        width={40}
                        height={24}
                        objectFit="cover"
                        quality={100}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="position__description pt-4 lg:pt-0 pb-8 h-2/3-screen overflow-y-scroll hidden">
                <BlockContent
                  blocks={position.description}
                  className="external-text"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default PositionsComponent;
