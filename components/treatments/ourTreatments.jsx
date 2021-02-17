import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { gsap } from "gsap";
import SectionHeader from "../shared/SectionHeader";
import Button from "../shared/Button";

function OurTreatments({ data }) {
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

  useEffect(() => {
    if (isDesktop) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0.99) {
              const opened = document.querySelectorAll(
                ".more-info[aria-expanded='true']"
              );

              opened.forEach((section) => {
                section.setAttribute("aria-expanded", "false");
                gsap.to(section, { opacity: 0, duration: 0.25 });
              });
            }
          });
        },
        { threshold: [0.01, 0.99] }
      );

      document
        .querySelectorAll(".section")
        .forEach((section) => observer.observe(section));
    }
  }, [isDesktop]);

  const toggleLearnMore = (event) => {
    event.preventDefault();

    const section = event.target.closest("section");
    const moreInfoPanel = section.querySelector(".more-info");

    if (isMobile) {
      if (moreInfoPanel.getAttribute("aria-expanded") === "false") {
        moreInfoPanel.setAttribute("aria-expanded", "true");
        moreInfoPanel.style.display = "block";
        event.target.innerText = "Close";
      } else {
        moreInfoPanel.setAttribute("aria-expanded", "false");
        moreInfoPanel.style.display = "none";
        event.target.innerText = "Learn More";
      }
    }

    if (isDesktop) {
      if (moreInfoPanel.getAttribute("aria-expanded") === "false") {
        moreInfoPanel.setAttribute("aria-expanded", "true");
        gsap.to(moreInfoPanel, { opacity: 1, duration: 0.25 });
        event.target.innerText = "Close";
      } else {
        moreInfoPanel.setAttribute("aria-expanded", "false");
        gsap.to(moreInfoPanel, { opacity: 0, duration: 0.25 });
        event.target.innerText = "Learn More";
      }
    }
  };

  return (
    <>
      <section
        id="treatments"
        className="section treatments bg-white relative w-full"
        data-side-menu-label="Treatments"
        data-side-menu-color="dark"
        data-side-menu-visibility="visible"
      >
        <div className="flex flex-wrap border-b-1 border-epm-gray-500 lg:flex-row-reverse lg:h-screen">
          <div className="container relative mx-auto px-8 lg:flex-grow lg:h-full lg:w-7/12 lg:bg-epm-gray-300">
            <div className="lg:flex lg:flex-wrap lg:content-center lg:justify-center lg:h-full">
              <div className="lg:flex-col">
                <div className="animate image mx-auto text-center lg:pb-5">
                  {isMobile && (
                    <Image
                      loading="eager"
                      src="/img/mobile/treatments/treatment-products@3x.png"
                      alt=""
                      width={162}
                      height={360}
                      layout="intrinsic"
                      quality={100}
                    />
                  )}
                  {isDesktop && (
                    <Image
                      loading="eager"
                      src="/img/desktop/treatments/treatments-products@2x.png"
                      alt=""
                      width={707.5}
                      height={480}
                      objectFit="cover"
                      quality={100}
                    />
                  )}
                </div>
                <div className="hidden lg:flex flex-row flex-wrap justify-center lg:mx-auto divide-x divide-epm-gray-500">
                  <div className="animate text-center text-base font-title uppercase py-3">
                    Oral for IBD{" "}
                    <span className="block normal-case text-epm-gray-500">
                      (Crohn’s & Colitis)
                    </span>
                  </div>
                  <div className="animate text-center text-base font-title uppercase  px-10 ml-10 py-3">
                    Topical for
                    <br />
                    Psoriasis
                  </div>
                  <div className="animate text-center text-base font-title uppercase pl-10 py-3">
                    IV FOR ARDS
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex-shrink-0 lg:pl-56 lg:w-5/12">
            <div className="container px-8 lg:pr-0 py-8 lg:max-w-none lg:w-101 ">
              <div className="mb-6 lg:mb-0">
                <SectionHeader
                  name="Our treatments"
                  title={<h2>Medicines We Develop Today</h2>}
                />
              </div>
              <div className="animate text lg:text-lg lg:w-96">
                <p>
                  EPM are committed to developing a series of new therapeutic
                  solutions based on cannabinoid acids providing alternative
                  treatments for patients. This is the driving force behind
                  EPM’s research program. Although cannabinoid acids are
                  potential treatments for a wide range of diseases, currently
                  EPM’s focus on three main therapeutic conditions based on its
                  lead molecule EPM301 : Inflammatory Bowel Disease,
                  Inflammatory skin disease (psoriasis) and Acute Respiratory
                  Distress Syndrome in COVID-19 patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divide-y divide-epm-gray-500">
        {data.slides.map((slide) => {
          return (
            <section
              id={slide.id}
              className="section treatments bg-white relative w-full  "
              data-side-menu-label={slide.name}
              data-side-menu-color="dark"
              data-side-menu-visibility="visible"
            >
              <div className="item flex flex-wrap flex-col-reverse lg:flex-row-reverse lg:h-screen">
                <div className="container relative mx-auto px-8 lg:flex-grow lg:h-full lg:w-7/12 lg:bg-epm-gray-300">
                  <div className="lg:flex lg:flex-wrap lg:content-center lg:justify-center lg:h-full">
                    <div className="flex-col">
                      <div className="animate image mx-auto text-center lg:pb-5">
                        {isMobile && (
                          <Image
                            loading="eager"
                            src={slide.images.mobile.url}
                            alt=""
                            width={slide.images.mobile.width}
                            height={slide.images.mobile.height}
                            layout="intrinsic"
                            quality={100}
                          />
                        )}
                        {isDesktop && (
                          <Image
                            loading="eager"
                            src={slide.images.desktop.url}
                            alt=""
                            width={slide.images.desktop.width}
                            height={slide.images.desktop.height}
                            objectFit="cover"
                            quality={100}
                          />
                        )}
                      </div>
                      <div className="hidden icons lg:flex flex-row flex-wrap justify-center lg:mx-auto divide-x divide-epm-gray-500">
                        <div className="animate text-center px-4 lg:px-20 py-3">
                          <div className="icon lg:h-16">
                            {isMobile && (
                              <Image
                                src={slide.icons.icon1.mobile.url}
                                width={slide.icons.icon1.mobile.width}
                                height={slide.icons.icon1.mobile.height}
                                alt={slide.name}
                              />
                            )}
                            {isDesktop && (
                              <Image
                                src={slide.icons.icon1.desktop.url}
                                width={slide.icons.icon1.desktop.width}
                                height={slide.icons.icon1.desktop.height}
                                alt={slide.name}
                              />
                            )}
                          </div>
                          <div className="text-xs lg:text-base font-title uppercase my-3 lg:w-44">
                            {slide.icons.icon1.label}
                            <span className="block normal-case text-epm-gray-500">
                            {slide.icons.icon1.subLabel}
                            </span>
                          </div>
                        </div>
                        <div className="animate text-center px-4 lg:px-20 py-3">
                          <div className="icon lg:h-16">
                            {isMobile && (
                              <Image
                                src={slide.icons.icon2.mobile.url}
                                width={slide.icons.icon2.mobile.width}
                                height={slide.icons.icon2.mobile.height}
                                alt={slide.name}
                              />
                            )}
                            {isDesktop && (
                              <Image
                                src={slide.icons.icon2.desktop.url}
                                width={slide.icons.icon2.desktop.width}
                                height={slide.icons.icon2.desktop.height}
                                alt={slide.name}
                              />
                            )}
                          </div>
                          <div className="text-xs lg:text-base font-title uppercase my-3 lg:w-44">
                            {slide.icons.icon2.label}
                          </div>
                        </div>
                        <div className="animate text-center px-4 lg:px-20 py-3">
                          <div className="icon lg:h-16">
                            {isMobile && (
                              <Image
                                src={slide.icons.icon3.mobile.url}
                                width={slide.icons.icon3.mobile.width}
                                height={slide.icons.icon3.mobile.height}
                                alt={slide.name}
                              />
                            )}
                            {isDesktop && (
                              <Image
                                src={slide.icons.icon3.desktop.url}
                                width={slide.icons.icon3.desktop.width}
                                height={slide.icons.icon3.desktop.height}
                                alt={slide.name}
                              />
                            )}
                          </div>
                          <div className="text-xs lg:text-base font-title uppercase my-3 lg:w-44">
                            {slide.icons.icon3.label}
                          </div>
                        </div>
                      </div>
                      <div
                        className="more-info container lg:opacity-0 lg:absolute z-0 inset-0 hidden lg:flex flex-wrap content-center lg:bg-epm-gray-300 lg:px-36  py-8"
                        aria-expanded="false"
                      >
                        {slide.moreInfo}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:flex-shrink-0 lg:pl-56 lg:w-5/12">
                  <div className="container px-8 lg:pr-0 py-8 lg:max-w-none lg:w-101 ">
                    <div className="mb-6 lg:mb-0">
                      <SectionHeader
                        name={slide.name}
                        title={<h2>{slide.title}</h2>}
                      />
                    </div>
                    <div className="animate lg:w-96">
                      <div className="formulation lg:text-lg lg:pb-8">
                        <p className="lg:text-lg font-bold">
                          Selected formulation
                        </p>
                        <p className="lg:text-lg">{slide.formulation}</p>
                      </div>
                      <div className="timeline lg:text-lg lg:pb-8">
                        <p className="lg:text-lg font-bold">
                          Expected clinical trail timeline
                        </p>
                        <p>{slide.timeline}</p>
                      </div>
                      <div className="solution lg:text-lg">
                        <p className="lg:text-lg font-bold">
                          EPM's potential solution
                        </p>
                        <p>{slide.solution}</p>
                      </div>
                      <div className="button pt-10 lg:inline-block text-center">
                        <Button
                          className="cursor-pointer inline-block w-full lg:w-48 text-center uppercase border-3 rounded-3xl select-none transition-colors duration-150 hover:opacity-70 lg:px-10 py-2 border-epm-gray-700 text-epm-gray-700 hover:bg-epm-yellow hover:border-epm-yellow"
                          href="#"
                          onClick={(event) => toggleLearnMore(event)}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

export default OurTreatments;
