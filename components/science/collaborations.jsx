import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import classNames from "classnames";
import { gsap } from "gsap";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import SectionHeader from "../shared/SectionHeader";
import Button from "../shared/Button";

function Collaborations({ data }) {
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

  const toggleLearnMore = (event, panel) => {
    event.preventDefault();

    const section = event.target.closest(".collaborations__panel");
    const moreInfoPanel = document.querySelector(
      `.more-info[data-collaboration-panel='${panel}']`
    );

    if (isDesktop) {
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
    <section
      id={"collaborations"}
      className="section collaborations bg-white"
      data-side-menu-label="Key Collaborations"
      data-side-menu-color="light"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      {isMobile && (
        <div>
          <div className="relative h-2/3-screen">
            <div className="absolute w-full h-full">
              <Image
                src="/img/mobile/science/collaborations/commercial@2x.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className="absolute w-full h-full inset-0 bg-black bg-opacity-30"></div>
            <div className="animate container mx-auto text-center px-8 py-8 h-full lg:h-auto flex lg:block flex-wrap content-center">
              <div className="commercial lg:w-1/2">
                <div className="font-title text-white uppercase text-2xl mb-16 relative">
                  Commercial
                </div>
                <div className="logos flex flex-wrap">
                  {data.commercial.slides.map((slide, index) => {
                    return (
                      <div className="logo relative w-1/2 mb-12">
                        <a
                          href={slide.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={slide.image.mobile.url}
                            width={slide.image.mobile.width}
                            height={slide.image.mobile.height}
                            alt={slide.title}
                          />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="container px-8 py-8">
            <div className="mb-6">
              <SectionHeader
                name={<span className="animate">Our Development Quality</span>}
                title={<h2 className="animate">Commercial Collaborations</h2>}
              />
            </div>
            <div>
              <p className="lg:text-epm-base mb-4">
                EPM’s proprietary technology enables the fully synthetic
                production of both novel and known structures for pre-clinical
                and clinical development. Laboratory scale synthesis, scale-up
                production and formulation development are being done by leading
                global pharmaceutical contract research organisations (CROs)
                such as Recipharm (Israel), Cambrex (US) and MedPharm (UK).
              </p>
              <p className="lg:text-epm-base mb-4">
                Charles River Laboratories (UK) are conducting the toxicology
                studies while NCK (Denmark) is manufacturing the GMP batches
              </p>
              <p className="lg:text-epm-base">
                By producing pharmaceutically reproducible treatments based on
                cannabinoid acids, we have demonstrated significantly increased
                potency and established a consistent production process.
              </p>
            </div>
          </div>
          <div className="relative h-2/3-screen">
            <div className="absolute w-full h-full">
              <Image
                src="/img/mobile/science/collaborations/academy@2x.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className="absolute w-full h-full inset-0 bg-black bg-opacity-30"></div>
            <div className="animate container mx-auto text-center px-8 py-8 h-full flex flex-wrap content-center">
              <div className="academy lg:w-1/2">
                <div className="font-title text-white uppercase text-2xl mb-16 relative">
                  Academy
                </div>
                <div className="logos flex flex-wrap">
                  {data.academy.slides.map((slide, index) => {
                    return (
                      <div className="logo relative w-1/2 mb-12">
                        <a
                          href={slide.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={slide.image.mobile.url}
                            width={slide.image.mobile.width}
                            height={slide.image.mobile.height}
                            alt={slide.title}
                          />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="container px-8 py-8">
            <div className="mb-6">
              <SectionHeader
                name={<span className="animate">Our Development Quality</span>}
                title={<h2 className="animate">Academy Collaborations</h2>}
              />
            </div>
            <div>
              <p className="">
                EPM has brought together top researchers from around the world
                and contracted with leading Contract Research Organizations to
                assure of the most reliable and highest-quality development and
                results.
              </p>
            </div>
          </div>
        </div>
      )}

      {isDesktop && (
        <div className="lg:h-screen relative">
          <div className="h-2/3-screen">
            <div className="relative w-full h-full text-left flex">
              <div className="absolute w-full h-full">
                <Image
                  src="/img/desktop/science/collaborations@2x.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <div className="absolute w-full h-full inset-0 bg-black bg-opacity-50"></div>
              <div className="animate container mx-auto text-center px-8 py-8 text-epm-gray-500 flex flex-row items-center justify-center relative z-10">
                <div className="collaborations__panel commercial lg:w-1/2 mx-8">
                  <div className="relative z-10">
                    <div className="font-title uppercase text-2xl mb-16">
                      Commercial
                    </div>
                    <div className="logos grid grid-cols-3 gap-6 max-w-lg mx-auto">
                      {data.commercial.slides.map((slide, index) => {
                        return (
                          <div className="logo flex items-center justify-center">
                            <a
                              href={slide.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                src={slide.image.desktop.url}
                                width={slide.image.desktop.width}
                                height={slide.image.desktop.height}
                                alt={slide.title}
                              />
                            </a>
                          </div>
                        );
                      })}
                    </div>
                    <div className="button pt-5 lg:inline-block text-center mt-16">
                      <Button
                        href="#"
                        style="light"
                        onClick={(event) =>
                          toggleLearnMore(event, "commercial")
                        }
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="collaborations__panel academia lg:w-1/2 mx-8">
                  <div className="relative z-10">
                    <div className="font-title uppercase lg:text-2xl mb-16">
                      Academia
                    </div>
                    <div className="logos grid grid-cols-3 gap-6 max-w-lg mx-auto">
                      {data.academy.slides.map((slide, index) => {
                        return (
                          <div className="logo flex items-center justify-center">
                            <a
                              href={slide.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                src={slide.image.desktop.url}
                                width={slide.image.desktop.width}
                                height={slide.image.desktop.height}
                                alt={slide.title}
                              />
                            </a>
                          </div>
                        );
                      })}
                    </div>
                    <div className="button pt-5 lg:inline-block text-center mt-16">
                      <Button
                        href="#"
                        style="light"
                        onClick={(event) => toggleLearnMore(event, "academy")}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="more-info commercial-more-info container lg:w-1/2 lg:h-2/3-screen lg:opacity-0 lg:absolute z-0 top-0 right-0 hidden lg:flex lg:flex-col justify-center text-left lg:bg-white lg:px-36 py-8"
                data-collaboration-panel="commercial"
                aria-expanded="false"
              >
                <p className="lg:text-epm-base mb-4">
                  EPM’s proprietary technology enables the fully synthetic
                  production of both novel and known structures for pre-clinical
                  and clinical development. Laboratory scale synthesis, scale-up
                  production and formulation development are being done by
                  leading global pharmaceutical contract research organisations
                  (CROs) such as Recipharm (Israel), Cambrex (US) and MedPharm
                  (UK).
                </p>
                <p className="lg:text-epm-base mb-4">
                  Charles River Laboratories (UK) are conducting the toxicology
                  studies while NCK (Denmark) is manufacturing the GMP batches
                </p>
                <p className="lg:text-epm-base">
                  By producing pharmaceutically reproducible treatments based on
                  cannabinoid acids, we have demonstrated significantly
                  increased potency and established a consistent production
                  process.
                </p>
              </div>
              <div
                className="more-info academy-more-info container lg:w-1/2 lg:h-2/3-screen lg:opacity-0 lg:absolute z-0 top-0 left-0 hidden lg:flex flex-wrap content-center text-left lg:bg-white lg:px-36 py-8"
                data-collaboration-panel="academy"
                aria-expanded="false"
              >
                <p className="lg:text-epm-base">
                  EPM’s pre-clinical pharmacology studies are being conducted by
                  top researchers: Prof. Dan Peer (Tel Aviv University), Prof.
                  Yossi Tam (Hebrew University), and Prof. Mark Brown
                  (MedPharm), amongst others. The animal studies cover a wide
                  range of disease areas, including: Inflammatory Skin Diseases,
                  Metabolic Diseases, Osteoarthritis and joint pain, and
                  Inflammatory Bowel Diseases. Results at this early stage of
                  development are extremely positive.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:h-1/3-screen">
            <div className="container mx-auto px-8 lg:pl-44 xl:pl-56 2xl:px-8 py-8 lg:h-1/3-screen lg:flex lg:flex-col">
              <div>
                <SectionHeader
                  name={
                    <span className="animate">Our Development Quality</span>
                  }
                  title={<h2 className="animate">Key Collaborations</h2>}
                />
              </div>

              <div className="animate text lg:w-103 mt-6">
                <p>
                  EPM has brought together top researchers from around the world
                  and contracted with leading Contract Research Organizations to
                  assure of the most reliable and highest-quality development
                  and results.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );

  return (
    <>
      {isMobile && (
        <>
          <section
            id="collaborations"
            className="section commercials bg-white"
            data-side-menu-label="Key Collaborations"
            data-side-menu-color="dark"
            data-side-menu-visibility="visible"
          >
            <div className="relative h-2/3-screen">
              <div className="absolute w-full h-full">
                <Image
                  src="/img/mobile/science/collaborations/commercial@2x.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <div className="absolute w-full h-full inset-0 bg-black bg-opacity-30"></div>
              <div className="animate container mx-auto text-center px-8 py-8 h-full lg:h-auto flex lg:block flex-wrap content-center">
                <div className="commercial lg:w-1/2">
                  <div className="font-title text-epm-gray-500 uppercase text-2xl mb-16 relative">
                    Commercial
                  </div>
                  <div className="logos flex flex-wrap">
                    <div className="logo relative w-1/2 mb-12">
                      <Image
                        src="/img/icons/collaborations/charles-river.svg"
                        width="154.11"
                        height="30.674"
                        alt=""
                      />
                    </div>
                    <div className="logo relative w-1/2 mb-12">
                      <Image
                        src="/img/icons/collaborations/recipharm.svg"
                        width="136"
                        height="56"
                        alt=""
                      />
                    </div>
                    <div className="logo relative w-1/2 mb-12">
                      <Image
                        src="/img/icons/collaborations/medpharm.svg"
                        width="104"
                        height="38"
                        alt=""
                      />
                    </div>
                    <div className="logo relative w-1/2 mb-12">
                      <Image
                        src="/img/icons/collaborations/nck.svg"
                        width="121"
                        height="46"
                        alt=""
                      />
                    </div>
                    <div className="logo relative w-1/2 lg:mr-6 lg:mt-12">
                      <Image
                        src="/img/icons/collaborations/charles-river.svg"
                        width="154.11"
                        height="30.674"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container px-8 py-8">
              <div className="mb-6">
                <SectionHeader
                  name={
                    <span className="animate">Our Development Quality</span>
                  }
                  title={<h2 className="animate">Commercial Collaborations</h2>}
                />
              </div>
              <div>
                <p className="lg:text-epm-base mb-4">
                  EPM’s proprietary technology enables the fully synthetic
                  production of both novel and known structures for pre-clinical
                  and clinical development. Laboratory scale synthesis, scale-up
                  production and formulation development are being done by
                  leading global pharmaceutical contract research organisations
                  (CROs) such as Recipharm (Israel), Cambrex (US) and MedPharm
                  (UK).
                </p>
                <p className="lg:text-epm-base mb-4">
                  Charles River Laboratories (UK) are conducting the toxicology
                  studies while NCK (Denmark) is manufacturing the GMP batches
                </p>
                <p className="lg:text-epm-base">
                  By producing pharmaceutically reproducible treatments based on
                  cannabinoid acids, we have demonstrated significantly
                  increased potency and established a consistent production
                  process.
                </p>
              </div>
            </div>
          </section>
          <section
            id="academy"
            className="section academy bg-white"
            data-side-menu-label="Academy"
            data-side-menu-color="dark"
            data-side-menu-visibility="visible"
          >
            <div className="relative h-2/3-screen">
              <div className="absolute w-full h-full">
                <Image
                  src="/img/mobile/science/collaborations/academy@2x.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <div className="absolute w-full h-full inset-0 bg-black bg-opacity-30"></div>
              <div className="animate container mx-auto text-center px-8 py-8 h-full flex flex-wrap content-center">
                <div className="commercial lg:w-1/2">
                  <div className="font-title text-epm-gray-500 uppercase text-2xl mb-16 relative">
                    Academy
                  </div>
                  <div className="logos flex flex-wrap">
                    <div className="logo relative w-1/2 mb-12">
                      <Image
                        src="/img/icons/collaborations/the-hebrew-university-of-jerusalem.svg"
                        width="159"
                        height="54"
                        alt=""
                      />
                    </div>
                    <div className="logo relative w-1/2 mb-12">
                      <Image
                        src="/img/icons/collaborations/bar-ilan-university.svg"
                        width="112"
                        height="41"
                        alt=""
                      />
                    </div>
                    <div className="logo relative w-1/2 mb-12">
                      <Image
                        src="/img/icons/collaborations/tel-aviv-university.svg"
                        width="96"
                        height="52"
                        alt=""
                      />
                    </div>
                    <div className="logo relative w-1/2 mb-12">
                      <Image
                        src="/img/icons/collaborations/university-of-guelph.svg"
                        width="136"
                        height="44"
                        alt=""
                      />
                    </div>
                    <div className="logo relative w-1/2">
                      <Image
                        src="/img/icons/collaborations/university-of-aberdeen.svg"
                        width="132"
                        height="29"
                        alt=""
                      />
                    </div>
                    <div className="logo relative w-1/2">
                      <Image
                        src="/img/icons/collaborations/mcmaster-university.svg"
                        width="109"
                        height="60"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container px-8 py-8">
              <div className="mb-6">
                <SectionHeader
                  name={
                    <span className="animate">Our Development Quality</span>
                  }
                  title={<h2 className="animate">Academy Collaborations</h2>}
                />
              </div>
              <div>
                <p className="">
                  EPM’s preclinical pharmacology studies are being conducted by
                  top researchers, including Prof. Dan Peer (Tel Aviv
                  University), Prof. Yossi Tam (Hebrew University), and Prof.
                  Mark Brown (MedPharm). The animal studies cover a wide range
                  of disease areas such as ng: inflammatory skin diseases,
                  metabolic diseases, osteoarthritis and inflammatory bowel
                  diseases. Results at the preclinical studies are extremely
                  positive.
                </p>
              </div>
            </div>
          </section>
        </>
      )}
      {isDesktop && (
        <section
          id="collaborations"
          className="section collaborations bg-white"
          data-side-menu-label="Key Collaborations"
          data-side-menu-color="light"
          data-side-menu-visibility="visible"
        >
          <div className="lg:h-screen relative">
            <div className="h-2/3-screen">
              <div className="relative text-center w-full h-full lg:text-left flex">
                <div className="absolute w-full h-full">
                  <Image
                    src="/img/desktop/collaborations@2x.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                </div>
                <div className="absolute w-full h-full inset-0 bg-black bg-opacity-50"></div>
                <div className="animate container mx-auto text-center px-8 py-8 lg:text-epm-gray-500 lg:flex lg:flex-row items-center justify-center relative z-10">
                  <div className="collaborations__panel commercial lg:w-1/2 mx-8">
                    <div className="relative z-10">
                      <div className="font-title uppercase lg:text-2xl mb-16">
                        Commercial
                      </div>
                      <div className="logos flex flex-wrap lg:justify-center">
                        <div className="logo relative lg:ml-6 lg:mr-6">
                          <Image
                            src="/img/icons/collaborations/charles-river.svg"
                            width="154.11"
                            height="30.674"
                            alt=""
                          />
                        </div>
                        <div className="logo relative lg:ml-6 lg:mr-6">
                          <Image
                            src="/img/icons/collaborations/recipharm.svg"
                            width="136"
                            height="56"
                            alt=""
                          />
                        </div>
                        <div className="logo relative lg:ml-6 lg:mr-6">
                          <Image
                            src="/img/icons/collaborations/medpharm.svg"
                            width="104"
                            height="38"
                            alt=""
                          />
                        </div>
                        <div className="logo relative lg:ml-6 lg:mr-6 lg:mt-12">
                          <Image
                            src="/img/icons/collaborations/nck.svg"
                            width="121"
                            height="46"
                            alt=""
                          />
                        </div>
                        <div className="logo relative lg:ml-6 lg:mr-6 lg:mt-12">
                          <Image
                            src="/img/icons/collaborations/charles-river.svg"
                            width="154.11"
                            height="30.674"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="button pt-5 lg:inline-block text-center mt-16">
                        <Button
                          href="#"
                          className="cursor-pointer inline-block w-full lg:w-48 text-center uppercase border-3 rounded-3xl select-none transition-colors duration-150 lg:px-10 py-2 border-white text-white hover:bg-epm-yellow hover:border-epm-yellow"
                          onClick={(event) =>
                            toggleLearnMore(event, "commercial")
                          }
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                    <div
                      className="more-info commercial-more-info container lg:w-1/2 lg:h-2/3-screen lg:opacity-0 lg:absolute z-0 top-0 right-0 hidden lg:z-10 lg:flex lg:flex-col justify-center text-left lg:bg-white lg:px-36 py-8"
                      data-collaboration-panel="commercial"
                      aria-expanded="false"
                    >
                      <p className="lg:text-epm-base mb-4">
                        Laboratory scale synthesis, scaleup production and
                        formulation development are performed by leading global
                        pharmaceutical contract research organisations (CROs)
                        such as Recipharm (Israel), Cambrex (US) and MedPharm
                        (UK). Charles River Laboratories (UK) conducts the
                        toxicology studies while NCK (Denmark) manufactures the
                        GMP batches.
                      </p>
                      <p className="lg:text-epm-base">
                        By producing pharmaceutically reproducible treatments
                        based on cannabinoid acids, we have demonstrated
                        significantly increased potency and established a
                        consistent production process.
                      </p>
                    </div>
                  </div>

                  <div className="collaborations__panel academia lg:w-1/2 mx-8">
                    <div className="relative z-10">
                      <div className="font-title uppercase lg:text-2xl mb-16">
                        Academia
                      </div>
                      <div className="logos flex flex-wrap lg:justify-center">
                        <div className="logo relative lg:ml-6 lg:mr-6">
                          <Image
                            src="/img/icons/collaborations/the-hebrew-university-of-jerusalem.svg"
                            width="159"
                            height="54"
                            alt=""
                          />
                        </div>
                        <div className="logo relative lg:ml-6 lg:mr-6">
                          <Image
                            src="/img/icons/collaborations/bar-ilan-university.svg"
                            width="112"
                            height="41"
                            alt=""
                          />
                        </div>
                        <div className="logo relative lg:ml-6 lg:mr-6">
                          <Image
                            src="/img/icons/collaborations/tel-aviv-university.svg"
                            width="96"
                            height="52"
                            alt=""
                          />
                        </div>
                        <div className="logo relative lg:ml-6 lg:mr-6 lg:mt-12">
                          <Image
                            src="/img/icons/collaborations/university-of-guelph.svg"
                            width="136"
                            height="44"
                            alt=""
                          />
                        </div>
                        <div className="logo relative lg:ml-6 lg:mr-6 lg:mt-12">
                          <Image
                            src="/img/icons/collaborations/university-of-aberdeen.svg"
                            width="132"
                            height="29"
                            alt=""
                          />
                        </div>
                        <div className="logo relative lg:ml-6 lg:mr-6 lg:mt-12">
                          <Image
                            src="/img/icons/collaborations/mcmaster-university.svg"
                            width="109"
                            height="60"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="button pt-5 lg:inline-block text-center mt-16">
                        <Button
                          href="#"
                          className="cursor-pointer inline-block w-full lg:w-48 text-center uppercase border-3 rounded-3xl select-none transition-colors duration-150 lg:px-10 py-2 border-white text-white hover:bg-epm-yellow hover:border-epm-yellow"
                          onClick={(event) => toggleLearnMore(event, "academy")}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                    <div
                      className="more-info academy-more-info container lg:w-1/2 lg:h-2/3-screen lg:opacity-0 lg:absolute z-0 top-0 left-0 hidden lg:flex flex-wrap content-center text-left lg:bg-white lg:px-36 py-8"
                      data-collaboration-panel="academy"
                      aria-expanded="false"
                    >
                      <p className="lg:text-epm-base">
                        EPM’s preclinical pharmacology studies are being
                        conducted by top researchers, including Prof. Dan Peer
                        (Tel Aviv University), Prof. Yossi Tam (Hebrew
                        University), and Prof. Mark Brown (MedPharm). The animal
                        studies cover a wide range of disease areas such as ng:
                        inflammatory skin diseases, metabolic diseases,
                        osteoarthritis and inflammatory bowel diseases. Results
                        at the preclinical studies are extremely positive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:h-1/3-screen">
              <div className="container mx-auto px-8 py-8 lg:h-1/3-screen lg:flex lg:flex-col justify-between">
                <div>
                  <SectionHeader
                    name={
                      <span className="animate">Our Development Quality</span>
                    }
                    title={
                      <h2 className="animate">Key Collaborations</h2>
                    }
                  />
                </div>

                <div className="animate text lg:w-103">
                  <p>
                    EPM has brought together top researchers from around the
                    world and contracted with leading Contract Research
                    Organizations to assure of the most reliable and
                    highest-quality development and results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Collaborations;
