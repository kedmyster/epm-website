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

      if (leader === currentLeader) {
        const arrow = leader.querySelector(".arrow");
        
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
            className="section leadership bg-white relative w-full flex flex-col lg:flex-row border-b-1 border-epm-gray-300 lg:h-screen"
            data-side-menu-label="Leadership"
            data-side-menu-color="dark"
            data-side-menu-visibility="visible"
            data-header-menu-visibility="visible"
          >
            <div className="lg:flex-grow lg:pl-56">
              <div className="container mx-auto lg:mx-0 px-8 lg:pr-0 py-8 lg:max-w-none lg:w-101 lg:top-0">
                <div className="">
                  <SectionHeader
                    name="Our Team"
                    title={<h2>{group.group}</h2>}
                  />
                </div>
                {isDesktop && (
                  <div className="animate text lg:text-lg lg:w-96 lg:mt-6">
                    <p>{group.text}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="leaders lg:w-7/12 lg:flex-shrink-0 lg:h-full">
              <div className="leaders-group relative lg:h-screen overflow-y-hidden lg:overflow-y-auto">
                {group.people.map((leader) => {
                  return (
                    <>
                      <div
                        className="leader animate relative cursor-pointer lg:w-full bg-white transition-colors duration-150 hover:bg-epm-gray-100 border-t border-epm-gray-300 last:border-b"
                        key={leader.name}
                        onClick={(event) => toggleLeader(event)}
                      >
                        <div className="flex flex-row lg:h-1/5">
                          <div className="leader_image relative h-full overflow-hidden leading-0">
                            {isMobile && (
                              <div className="">
                                <Image
                                  loading="eager"
                                  src={leader.image.mobile}
                                  alt=""
                                  width={103}
                                  height={103}
                                  objectFit="cover"
                                  quality={100}
                                />
                              </div>
                            )}
                            {isDesktop && (
                              <Image
                                loading="eager"
                                src={leader.image.desktop}
                                alt=""
                                width={180}
                                height={180}
                                objectFit="cover"
                                quality={100}
                              />
                            )}
                          </div>
                          <div className="leader_content flex flex-col flex-grow py-4 lg:py-6 pl-8 lg:pl-36">
                            <div className="flex flex-col justify-start h-full">
                              <div className="leader__name text-lg leading-tight lg:text-2xl font-bold">
                                {leader.name}
                              </div>
                              <div className="leader__role text-sm lg:text-lg font-light">
                                {leader.role}
                              </div>
                              <div className="leader__group text-xxs uppercase lg:text-base font-light pt-3">
                                {group.group}
                              </div>
                            </div>
                            {isDesktop && (
                              <div className="leader__text font-light text-lg mt-8 w-101 hidden">
                                {leader.text}
                              </div>
                            )}
                          </div>
                          <div className="icon mx-4 lg:mx-8 pt-4 lg:pt-8 flex flex-col justify-start">
                            <div className="arrow">
                              {isMobile && (
                                <Image
                                  loading="eager"
                                  src="/img/icons/arrow_down_dark.svg"
                                  alt=""
                                  width={20}
                                  height={12}
                                  layout="intrinsic"
                                  quality={100}
                                />
                              )}
                              {isDesktop && (
                                <Image
                                  loading="eager"
                                  src="/img/icons/arrow_down_dark.svg"
                                  alt=""
                                  width={40}
                                  height={24}
                                  objectFit="cover"
                                  quality={100}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                        {isMobile && (
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
