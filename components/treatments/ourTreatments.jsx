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

  useEffect(() => {
    if (isTablet || isDesktop) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0.99) {
              const opened = document.querySelectorAll(
                ".more-info[aria-expanded='true']"
              );

              opened.forEach((section) => {
                const button = section.closest(".section").querySelector(".button a");

                section.setAttribute("aria-expanded", "false");
                gsap.to(section, { opacity: 0, duration: 0.25 });

                button.innerText = "Learn More";
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
  }, [isTablet, isDesktop]);

  const toggleLearnMore = (event) => {
    event.preventDefault();

    const section = event.target.closest("section");
    const moreInfoPanel = section.querySelector(".more-info");

    if (isMobile) {
      const button = section.querySelector(".button");
      const opened = document.querySelector("[aria-expanded='true']");
      
      if (opened && opened !== moreInfoPanel) {
        const openedButton = opened.closest(".section").querySelector(".button");
        opened.setAttribute("aria-expanded", "false");
        opened.style.display = "none";
        openedButton.classList.remove("hidden");
      }

      if (moreInfoPanel.getAttribute("aria-expanded") === "false") {
        moreInfoPanel.setAttribute("aria-expanded", "true");
        moreInfoPanel.style.display = "block";
        button.classList.add("hidden");
      } else {
        moreInfoPanel.setAttribute("aria-expanded", "false");
        moreInfoPanel.style.display = "none";
        button.classList.remove("hidden");
      }
    }

    if (isTablet || isDesktop) {
      if (moreInfoPanel.getAttribute("aria-expanded") === "false") {
        moreInfoPanel.setAttribute("aria-expanded", "true");
        gsap.to(moreInfoPanel, { opacity: 1, zIndex: 11, duration: 0.25 });
        event.target.innerText = "Close";
      } else {
        moreInfoPanel.setAttribute("aria-expanded", "false");
        gsap.to(moreInfoPanel, { opacity: 0, zIndex: 0, duration: 0.25 });
        event.target.innerText = "Learn More";
      }
    }
  };

  return (
    <>
      <section
        id="current-developments"
        className="section treatments relative w-full"
        data-side-menu-label="Developments"
        data-side-menu-color="dark"
        data-side-menu-visibility="visible"
        data-header-menu-visibility="visible"
      >
        <div className="flex flex-wrap border-b-1 border-epm-gray-300 lg:flex-row-reverse lg:h-screen">
          <div className="container relative mx-auto px-4 lg:px-8 flex items-center justify-center lg:flex-grow z-50 h-2/3-screen lg:h-full lg:w-6/12 2xl:w-7/12 bg-epm-gray-100">
            <div className="flex lg:flex-col content-center justify-center lg:justify-end lg:w-full lg:max-w-4xl lg:h-full lg:pb-24">
              <div className="animate opacity-0 container mx-auto lg:px-8">
                <div className="flex flex-row justify-center">
                  <div className="item flex flex-col w-1/3 items-center justify-between">
                    <div className="item__image flex justify-center items-end flex-grow mb-6">
                      <a
                        href="#inflammatory-bowel-disease"
                        className="leading-0"
                      >
                        {isMobile && (
                          <Image
                            src="/img/mobile/treatments/treatment-pills@3x.png"
                            alt="Oral for IBD (Crohn’s & Colitis)"
                            width="223"
                            height="280"
                            layout="intrinsic"
                            quality={100}
                          />
                        )}
                        {(isTablet || isDesktop) && (
                          <Image
                            src="/img/desktop/treatments/treatments-pills@2x.png"
                            alt="Oral for IBD (Crohn’s & Colitis)"
                            width="281"
                            height="326"
                            layout="intrinsic"
                            quality={100}
                          />
                        )}
                      </a>
                    </div>
                    <div className="item__title text-center text-xxs 2xl:text-base font-title uppercase py-3 px-3 h-14 2xl:h-20">
                      Oral for IBD{" "}
                      <span className="block normal-case text-epm-gray-500 font-light">
                        (Crohn’s & Colitis)
                      </span>
                    </div>
                  </div>
                  <div className="item flex flex-col w-1/3 items-center justify-between">
                    <div className="item__image flex justify-center items-end flex-grow mb-6">
                      <a
                        href="#psoriasis"
                        className="leading-0"
                      >
                        {isMobile && (
                          <Image
                            src="/img/mobile/treatments/treatment-tube@3x.png"
                            alt="Topical for Psoriasis"
                            width="59"
                            height="204"
                            layout="intrinsic"
                            quality={100}
                          />
                        )}
                        {(isTablet || isDesktop) && (
                          <Image
                            src="/img/desktop/treatments/treatments-tube@2x.png"
                            alt="Topical for Psoriasis"
                            width="113"
                            height="386"
                            layout="intrinsic"
                            quality={100}
                          />
                        )}
                      </a>
                    </div>
                    <div className="item__title text-center text-xxs 2xl:text-base font-title uppercase border-l-1 border-r-1 border-epm-gray-500 w-full px-4 py-3 h-14 2xl:h-20">
                      Topical for
                      <br />
                      Psoriasis
                    </div>
                  </div>
                  <div className="item flex flex-col w-1/3 items-center justify-between">
                    <div className="item__image flex justify-center items-end flex-grow mb-6">
                      <a href="#acute-respiratory-distress-syndrome" className="leading-0">
                        {isMobile && (
                          <Image
                            src="/img/mobile/treatments/treatment-iv@3x.png"
                            alt="Acute Respiratory Distress Syndrome"
                            width="192"
                            height="253"
                            layout="intrinsic"
                            quality={100}
                          />
                        )}
                        {(isTablet || isDesktop) && (
                          <Image
                            src="/img/desktop/treatments/treatments-iv@2x.png"
                            alt="Acute Respiratory Distress Syndrome"
                            width="249"
                            height="327"
                            layout="intrinsic"
                            quality={100}
                          />
                        )}
                      </a>
                    </div>
                    <div className="item__title text-center text-xxs 2xl:text-base font-title uppercase py-3 px-3 h-14 2xl:h-20">
                      Acute Respiratory Distress Syndrome
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex-shrink-0 lg:pl-44 xl:pl-56 lg:w-6/12 2xl:w-5/12 lg:h-screen overflow-y-hidden lg:overflow-y-auto">
            <div className="container px-8 lg:pl-0 py-8 lg:max-w-none lg:w-64 xl:w-80 2xl:w-96 lg:flex lg:flex-col lg:justify-between lg:h-screen">
              <div className="mb-6 lg:mb-0">
                <SectionHeader
                  name="Our treatments"
                  title={<h2>Creating Better Treatments and Changing Lives</h2>}
                />
              </div>
              <div className="animate opacity-0 text lg:text-epm-base lg:mt-6 lg:flex-grow">
                <p>
                  EPM is committed to developing a series of new therapeutic
                  solutions based on cannabinoid acids which provide alternative
                  treatments for patients. This is the driving force behind
                  EPM’s research program. Although cannabinoid acids are
                  potential treatments for a wide range of diseases, currently,
                  EPM focuses on three main therapeutic conditions based on its
                  lead molecule EPM301: Inflammatory Bowel Disease, inflammatory
                  skin disease (psoriasis) and Acute Respiratory Distress
                  Syndrome in COVID-19 patients.
                </p>
              </div>
              {(isTablet || isDesktop) && (
                <div>
                  <span className="text-xxs xl:text-xs 2xl:text-epm-base normal-case text-epm-gray-500 font-light">
                    Images shown are for illustration purposes only
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="divide-y divide-epm-gray-300">
        {data.slides.map((slide) => {
          return (
            <section
              id={slide.id}
              className="section treatments relative w-full"
              data-side-menu-label={slide.label}
              data-side-menu-color="dark"
              data-side-menu-visibility="visible"
              data-header-menu-visibility="visible"
            >
              <div className="item flex flex-wrap flex-col lg:flex-row-reverse lg:h-screen">
                <div className="container relative mx-auto px-4 lg:px-8 lg:flex-grow h-2/3-screen lg:h-full lg:w-6/12 2xl:w-7/12 bg-epm-gray-100 flex justify-center items-center">
                  <div className="flex lg:flex-col content-center justify-center lg:w-full lg:max-w-4xl lg:justify-end lg:h-full lg:pb-24">
                    <div className="animate opacity-0 container mx-auto lg:px-8 relative z-0">
                      <div className="flex flex-row justify-center">
                        <div className="item flex flex-col w-1/3 items-center justify-between">
                          <div className="item__image flex justify-center items-end flex-grow"></div>
                          <div className="item__icon h-9 lg:h-16 flex justify-center items-center">
                            {isMobile && (
                              <Image
                                src={slide.icons.icon1.mobile.url}
                                width={slide.icons.icon1.mobile.width}
                                height={slide.icons.icon1.mobile.height}
                                alt={slide.name}
                              />
                            )}
                            {(isTablet || isDesktop) && (
                              <Image
                                src={slide.icons.icon1.desktop.url}
                                width={slide.icons.icon1.desktop.width}
                                height={slide.icons.icon1.desktop.height}
                                alt={slide.name}
                              />
                            )}
                          </div>
                          <div className="item__title text-center text-xxs 2xl:text-base font-title uppercase py-3 px-3 h-14 2xl:h-20">
                            {slide.icons.icon1.label}
                            {slide.icons.icon1.subLabel && (
                              <span className="block normal-case text-epm-gray-500 font-light">
                                {slide.icons.icon1.subLabel}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="item flex flex-col w-1/3 items-center justify-between">
                          <div className="item__image flex justify-center items-end flex-grow mb-6 -mx-6 lg:-mx-10">
                            {isMobile && (
                              <Image
                                src={slide.images.mobile.url}
                                alt={slide.name}
                                width={slide.images.mobile.width}
                                height={slide.images.mobile.height}
                                layout="intrinsic"
                                quality={100}
                              />
                            )}
                            {(isDesktop) && (
                              <Image
                                src={slide.images.desktop.url}
                                alt={slide.name}
                                width={slide.images.desktop.width}
                                height={slide.images.desktop.height}
                                objectFit="cover"
                                quality={100}
                              />
                            )}
                          </div>
                          <div className="item__icon h-9 lg:h-16 flex justify-center items-center">
                            {isMobile && (
                              <Image
                                src={slide.icons.icon2.mobile.url}
                                width={slide.icons.icon2.mobile.width}
                                height={slide.icons.icon2.mobile.height}
                                alt={slide.name}
                              />
                            )}
                            {(isTablet || isDesktop) && (
                              <Image
                                src={slide.icons.icon2.desktop.url}
                                width={slide.icons.icon2.desktop.width}
                                height={slide.icons.icon2.desktop.height}
                                alt={slide.name}
                              />
                            )}
                          </div>
                          <div className="item__title text-center text-xxs 2xl:text-base font-title uppercase border-l-1 border-r-1 border-epm-gray-500 w-full px-4 py-3 h-14 2xl:h-20">
                            {slide.icons.icon2.label}
                            {slide.icons.icon2.subLabel && (
                              <span className="block normal-case text-epm-gray-500 font-light">
                                {slide.icons.icon2.subLabel}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="item flex flex-col w-1/3 items-center justify-between">
                          <div className="item__image flex justify-center items-end flex-grow"></div>
                          <div className="item__icon h-9 lg:h-16 flex justify-center items-center">
                            {isMobile && (
                              <Image
                                src={slide.icons.icon3.mobile.url}
                                width={slide.icons.icon3.mobile.width}
                                height={slide.icons.icon3.mobile.height}
                                alt={slide.name}
                              />
                            )}
                            {(isTablet || isDesktop) && (
                              <Image
                                src={slide.icons.icon3.desktop.url}
                                width={slide.icons.icon3.desktop.width}
                                height={slide.icons.icon3.desktop.height}
                                alt={slide.name}
                              />
                            )}
                          </div>
                          <div className="item__title text-center text-xxs 2xl:text-base font-title uppercase py-3 px-3 h-14 2xl:h-20">
                            {slide.icons.icon3.label}
                            {slide.icons.icon3.subLabel && (
                              <span className="block normal-case text-epm-gray-500 font-light">
                                {slide.icons.icon3.subLabel}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    {(isTablet || isDesktop) && (
                      <div
                        className="more-info container lg:opacity-0 lg:absolute z-0 inset-0 hidden lg:flex flex-wrap xl:content-center lg:bg-epm-gray-300 lg:px-8 2xl:px-36 py-8 lg:h-screen overflow-y-hidden lg:overflow-y-auto"
                        aria-expanded="false"
                      >
                        {slide.moreInfo}
                      </div>
                    )}
                  </div>
                </div>
                <div className="lg:flex-shrink-0 lg:pl-44 xl:pl-56 lg:w-6/12 2xl:w-5/12 lg:h-screen overflow-y-hidden lg:overflow-y-auto">
                  <div className="container lg:px-8 lg:pl-0 py-8 lg:max-w-none lg:w-64 xl:w-80 2xl:w-96 lg:flex lg:flex-col lg:justify-between lg:h-screen">
                    <div className="px-8 lg:px-0 mb-6 lg:mb-0">
                      <SectionHeader
                        name={slide.name}
                        title={<h2>{slide.title}</h2>}
                      />
                    </div>
                    <div className="animate opacity-0 px-8 lg:px-0 lg:mt-6 lg:flex-grow">
                      <div className="formulation lg:text-epm-base flex-grow pb-4 lg:pb-8">
                        <p className="lg:text-epm-base font-bold">
                          Selected formulation
                        </p>
                        <p className="lg:text-epm-base">{slide.formulation}</p>
                      </div>
                      <div className="timeline lg:text-epm-base pb-4 lg:pb-8">
                        <p className="lg:text-epm-base font-bold">
                          Expected clinical trail timeline
                        </p>
                        <p>{slide.timeline}</p>
                      </div>
                      <div className="solution lg:text-epm-base">
                        <p className="lg:text-epm-base font-bold">
                          EPM's potential solution
                        </p>
                        <p>{slide.solution}</p>
                      </div>
                      <div className="button pt-10 lg:inline-block text-center">
                        <Button
                          style="dark"
                          href="#"
                          onClick={(event) => toggleLearnMore(event)}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                    {isMobile && (
                      <div
                        className="more-info animate opacity-0 container lg:opacity-0 hidden bg-epm-gray-300 mt-8 px-8 py-8"
                        aria-expanded="false"
                      >
                        <div className="pb-8">
                          <Button
                            style="dark"
                            href="#"
                            onClick={(event) => toggleLearnMore(event)}
                          >
                            Close
                          </Button>
                        </div>

                        {slide.moreInfo}

                        <div className="pt-8">
                          <Button
                            style="dark"
                            href="#"
                            onClick={(event) => toggleLearnMore(event)}
                          >
                            Close
                          </Button>
                        </div>
                      </div>
                    )}
                    {(isTablet || isDesktop) && (
                      <div>
                        <span className="text-xxs xl:text-xs 2xl:text-epm-base normal-case text-epm-gray-500 font-light">
                          Images shown are for illustration purposes only
                        </span>
                      </div>
                    )}
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
