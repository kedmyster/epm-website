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
      id="leadership"
      className="section leadership bg-white relative w-full flex flex-wrap border-b-1 border-epm-gray-700 lg:flex-row"
      data-side-menu-label="Leadership"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
    >
      <div className="lg:flex-grow lg:pl-56">
        <div className="container mx-auto lg:mx-0 px-8 lg:pr-0 py-8 lg:max-w-none lg:w-101 lg:sticky lg:top-0">
          <div className="mb-6 lg:mb-0">
            <SectionHeader
              name="Our story"
              title={<h2>Leadership</h2>}
            />
          </div>
          <div className="text lg:text-lg lg:w-96">
            <p>
              We are grateful to have an experienced team with specialties in
              different fields and unique backgrounds. We all share a common
              vision and values. We all strive to “help people live a life of
              higher quality” and want to make sure our efforts reach as many
              people as possible. Our elite research team is one of the most
              recognized in the industry, spearheaded by the fundamental work of
              Professor Raphael Mecholuam, known as the father of cannabinoid
              research, since 1963.
            </p>
          </div>
        </div>
      </div>

      <div className="items lg:w-7/12 lg:flex-shrink-0">
        {leaders.map(group => {
          return (
            <div className="items-group lg:flex lg:flex-wrap relative">
              <div className="font-title uppercase text-lg lg:text-2xl w-full text-center bg-epm-gray-300 py-1.5 lg:pr-8 lg:absolute lg:top-0 lg:z-20">{group.group}</div>
              {group.people.map(leader => {
                return (
                  <>
                    <div className="item relative lg:w-1/3 lg:h-1/2-screen">
                      <div className="hidden lg:block absolute w-full h-full inset-0 bg-black bg-opacity-25 z-10"></div>
                      <div className="relative h-52 lg:h-full overflow-y-hidden lg:overflow-y-auto">
                        {isMobile && (
                          <div className="absolute -top-20">
                            <Image
                              loading="eager"
                              src={leader.image.mobile}
                              alt=""
                              width={375}
                              height={500}
                              layout="intrinsic"
                              quality={100}
                            />
                          </div>
                        )}
                        {isDesktop && (
                          <Image
                            loading="eager"
                            src={leader.image.desktop}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                          />
                        )}
                      </div>
                      <div className="absolute left-8 bottom-8 z-10 hidden lg:block">
                        <div className="name text-lg font-bold text-white">{leader.name}</div>
                        <div className="role text-sm font-light text-white">{leader.role}</div>
                      </div>
                      <div>
                        <div className="container mx-auto px-8 pt-4 pb-8 lg:hidden">
                          <div className="name text-lg font-bold text-center">{leader.name}</div>
                          <div className="role text-xs font-light text-center">{leader.role}</div>
                          <div className="text mt-8">{leader.text}</div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default Leadership;
