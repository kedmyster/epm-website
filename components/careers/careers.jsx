import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import SectionHeader from "../shared/SectionHeader";
import { gsap } from "gsap";

function CareersComponent({ data, positions = [] }) {
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

  useEffect(() => {
    document.body.dataset.headerTheme = "dark";
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const tl = gsap.timeline();

      tl.to(".scroll-to-content", {
        duration: 2,
        y: "-=10px",
        yoyo: true,
        repeat: -1,
        ease: "easeInOut",
      });
    });
  }, []);

  const scrollToContent = (event) => {
    event.preventDefault();
    document.querySelector("#open-positions").scrollIntoView({
      behavior: "smooth",
    });
  };

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
    <>
      <section
        id="careers"
        className="section careers relative w-full bg-cover text-center flex flex-wrap content-top lg:h-screen"
        data-side-menu-label=""
        data-side-menu-color="light"
        data-side-menu-visibility="hidden"
        data-header-menu-visibility="hidden"
      >
        <div className="animate opacity-0 absolute w-full h-full">
          {isMobile && (
            <Image
              loading="eager"
              src="/img/mobile/careers/careers@2x.jpg"
              alt="Shape the Future of Healthcare"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          )}
          {(isTablet || isDesktop) && (
            <Image
              loading="eager"
              src="/img/desktop/careers/careers@2x.jpg"
              alt="Shape the Future of Healthcare"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          )}
        </div>
        <div className="relative lg:w-sm-container mx-auto px-8 py-8 mt-8 lg:mt-0 lg:flex lg:flex-col lg:justify-center">
          <div className="mb-6 lg:mb-0 ">
            <SectionHeader
              name="Our Opportunities"
              title={<h2>Shape the Future of Healthcare</h2>}
            />
          </div>
          <div className="animate opacity-0 text lg:text-epm-base  lg:mx-auto lg:mt-6">
            <p className="mb-4 lg:mb-8 lg:mx-20">
              We are a fast-paced and dynamic company, striving to develop new
              medicine and create safer treatments for patients. We believe in
              helping people live a higher quality of life.
            </p>
            <p className="lg:mx-20">
              We are looking for enthusiastic and talented individuals who
              thrive on challenges and a dynamic work environment as well as
              people who are passionate to impact through actual results.
            </p>
          </div>
          <div className="animate opacity-0 font-bold text-lg lg:text-xl lg:mx-auto mt-4 lg:mt-8 lg:w-103 lg:px-2">
            <p className="mb-4 lg:mb-8">
              Looking to join a dynamic company, and be part of a team that
              shapes the future of healthcare?
            </p>
            <p className="mb-4 lg:mb-8">We’d love to hear from you.</p>
            <a
              href="mailto:jobs@epmip.com"
              className="underline lg:no-underline inline-block lg:pb-8"
            >
              jobs@epmip.com
            </a>
          </div>
        </div>
        {positions && positions.length > 0 && (
          <div className="scroll-to-content animate opacity-0 absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <a
              href="#story"
              onClick={scrollToContent}
              className="transition-opacity duration-150 hover:opacity-70"
            >
              <Image
                src="/img/icons/arrow_down_dark.svg"
                width="28"
                height="16"
                loading="eager"
              />
            </a>
          </div>
        )}
      </section>

      {positions && positions.length > 0 && (
        <section
          id="open-positions"
          className="section open-positions bg-white relative w-full flex justify-center lg:h-screen"
          data-side-menu-label=""
          data-side-menu-color="dark"
          data-side-menu-visibility="hidden"
        >
          <div className="positions flex flex-col w-full lg:w-sm-container pt-8 lg:pt-20">
            <div className="animate opacity-0 mb-6 lg:mb-6 text-center">
              <SectionHeader
                name=""
                title={<h2>Open Positions</h2>}
              />
            </div>
            {data.items.map((position, index) => {
              return (
                <div
                  className="position animate opacity-0 relative cursor-pointer bg-white transition-colors duration-150 hover:bg-epm-gray-100 px-8 lg:px-4 border-t border-epm-gray-300 last:border-b"
                  key={position.position}
                  onClick={(event) => togglePosition(event)}
                  aria-expanded="false"
                >
                  <div className="flex flex-row items-center justify-between h-12 lg:h-24">
                    <div className="position__position text-sm lg:text-lg xl:text-xl font-bold w-1/3 lg:w-auto">
                      {position.position}
                    </div>
                    <div className="position__location text-sm lg:text-lg xl:text-xl font-light w-1/3 lg:w-auto">
                      {position.location}
                    </div>
                    <div className="icon flex flex-col justify-start lg:pt-5">
                      <div className="arrow">
                        {isMobile && (
                          <Image
                            src="/img/icons/arrow_down_dark.svg"
                            alt={position.position}
                            width={20}
                            height={12}
                            layout="intrinsic"
                            quality={100}
                          />
                        )}
                        {(isTablet || isDesktop) && (
                          <Image
                            src="/img/icons/arrow_down_dark.svg"
                            alt={position.position}
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
                    {position.description}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}

export default CareersComponent;
