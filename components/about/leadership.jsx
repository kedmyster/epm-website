import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { gsap } from "gsap";
import SectionHeader from "../shared/SectionHeader";

function Leadership({ leaders = [] }) {
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

  const toggleLeader = (event) => {
    event.preventDefault();

    const leaders = document.querySelectorAll(".leader");
    const currentLeader = event.target.closest(".leader");

    leaders.forEach((leader) => {
      const leaderText = leader.querySelector(".leader__text");
      const arrow = leader.querySelector(".arrow");

      if (leader === currentLeader) {
        if (currentLeader.getAttribute("aria-expanded") === "false") {
          leader.setAttribute("aria-expanded", "true");
          leaderText.classList.remove("hidden");
          gsap.to(arrow, { rotation: 180, duration: 0.25 });
        } else {
          leader.setAttribute("aria-expanded", "false");
          leaderText.classList.add("hidden");
          gsap.to(arrow, { rotation: 0, duration: 0.25 });
        }
      } else {
        leader.setAttribute("aria-expanded", "false");
        leaderText.classList.add("hidden");
        gsap.to(arrow, { rotation: 0, duration: 0.25 });
      }
    });
  };

  return (
    <>
      {leaders.map((group) => {
        return (
          <section
            id={group.id}
            key={group.id}
            className="section leadership relative w-full flex flex-col lg:flex-row lg:border-b-1 lg:border-epm-gray-300 lg:h-screen min-h-0 lg:min-h-screen"
            data-side-menu-label={group.label}
            data-side-menu-color="dark"
            data-side-menu-visibility="visible"
            data-header-menu-visibility="visible"
          >
            <div className="lg:flex-grow lg:pl-44 xl:pl-56 lg:w-6/12 2xl:w-5/12 lg:h-screen overflow-y-hidden lg:overflow-y-auto">
              <div className="container mx-auto lg:mx-0 px-8 lg:pl-0 py-8 lg:max-w-none lg:w-64 xl:w-80 2xl:w-96 lg:top-0">
                <div className="">
                  <SectionHeader
                    name="Our Team"
                    title={<h2>{group.group}</h2>}
                  />
                </div>
                {(isTablet || isDesktop) && (
                  <div className="animate opacity-0 text lg:text-epm-base lg:mt-6">
                    <p>{group.text}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="leaders lg:w-6/12 2xl:w-7/12 lg:flex-shrink-0 lg:h-full">
              <div className="leaders-group relative lg:h-screen overflow-y-hidden lg:overflow-y-auto">
                {group.people.map((leader) => {
                  return (
                    <>
                      <div
                        className="leader animate opacity-0 relative cursor-pointer lg:w-full bg-white transition-colors duration-150 hover:bg-epm-gray-100 border-t border-epm-gray-300 last:border-b"
                        key={leader.name}
                        onClick={(event) => toggleLeader(event)}
                        aria-expanded="false"
                      >
                        <div className="flex flex-row">
                          <div className="leader_image relative h-full overflow-y-hidden lg:overflow-y-none leading-0 lg:w-32 xl:w-36 2xl:w-40 lg:h-1/6-screen">
                            {isMobile && (
                              <div className="">
                                <Image
                                  src={leader.image.mobile}
                                  alt={leader.name}
                                  width={104}
                                  height={104}
                                  objectFit="cover"
                                  quality={100}
                                />
                              </div>
                            )}
                            {(isTablet) && (
                              <Image
                                src={leader.image.desktop}
                                alt={leader.name}
                                width={134}
                                height={134}
                                objectFit="cover"
                                quality={100}
                              />
                            )}
                            {(isDesktop) && (
                              <Image
                                src={leader.image.desktop}
                                alt={leader.name}
                                width={157}
                                height={157}
                                objectFit="cover"
                                quality={100}
                              />
                            )}
                          </div>
                          <div className="leader_content flex flex-col flex-grow pl-4 lg:pl-8 xl:pl-24 2xl:pl-36">
                            <div className="flex flex-col justify-center h-full lg:h-1/6-screen">
                              <div className="leader__name text-base lg:text-xl xl:text-2xl leading-tight font-bold mb-1">
                                {leader.name}
                              </div>
                              <div className="leader__role text-xs lg:epm-base font-light">
                                {leader.role}
                            </div>
                              {/*<div className="leader__group text-xxs 2xl:text-base font-light uppercase pt-3">
                                {group.group}
                              </div>*/}
                            </div>
                            {isDesktop && (
                              <div className="leader__text font-light font-epm-base 2xl:text-lg mt-8 lg:mb-8 lg:w-64 xl:w-78 2xl:w-101 hidden">
                                {leader.text}
                              </div>
                            )}
                          </div>
                          <div className="icon mx-4 lg:mx-8 flex flex-col justify-start pt-10 lg:pt-14 xl:pt-16">
                            <div className="arrow">
                              {isMobile && (
                                <Image
                                  src="/img/icons/arrow_down_dark.svg"
                                  alt={leader.name}
                                  width={20}
                                  height={12}
                                  layout="intrinsic"
                                  quality={100}
                                />
                              )}
                              {(isTablet || isDesktop) && (
                                <Image
                                  src="/img/icons/arrow_down_dark.svg"
                                  alt={leader.name}
                                  width={40}
                                  height={24}
                                  objectFit="cover"
                                  quality={100}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                        {(isMobile || isTablet) && (
                          <div className="leader__text px-8 pt-4 pb-8 hidden">
                            {leader.text}
                          </div>
                        )}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default Leadership;
