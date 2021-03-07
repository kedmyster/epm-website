import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { gsap } from "gsap";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import SectionHeader from "../shared/SectionHeader";
import Button from "../shared/Button";
import {
  SliderCustomPreviousArrow,
  SliderCustomNextArrow,
} from "../shared/carousel";

function Treatments({ data }) {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const SLIDER_TREATMENTS_CONFIG = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderCustomNextArrow color="dark" />,
    prevArrow: <SliderCustomPreviousArrow color="dark" />,
    responsive: [
      {
        breakpoint: 99999,
        settings: "unslick",
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

  return (
    <section
      id="treatments"
      className="section treatments bg-white lg:h-screen"
      data-side-menu-label="Our Treatments"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      {isMobile && (
        <div>
          <div className="items animate opacity-0 text-white  bg-epm-gray-100">
            <div className="container mx-auto px-8 py-8 ">
              <Slider {...SLIDER_TREATMENTS_CONFIG}>
                {data.slides.map((slide) => {
                  return (
                    <div
                      className="item text-center text-epm-gray-700 outline-none"
                      key={slide.title}
                    >
                      <div className="image w-full h-96 flex items-center justify-center">
                        <Image
                          src={slide.images.mobile.url}
                          alt={slide.title}
                          width={slide.images.mobile.width}
                          height={slide.images.mobile.height}
                        />
                      </div>
                      <div className="item__title text-center text-base font-title uppercase w-32 h-12 mx-auto flex items-center justify-center">
                        {slide.title}
                        {/*{" "}<span className="block normal-case text-epm-gray-500">
                      (Crohn’s & Colitis)
                      </span> */}
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
          <div className="">
            <div className="container mx-auto px-8 py-8">
              <div className="mb-6">
                <SectionHeader
                  name="Our Treatments"
                  title={<h2>Medicine We Develop</h2>}
                />
              </div>

              <div className="text animate opacity-0">
                <p>
                  EPM is developing cannabinoid acid-based therapeutic solutions
                  providing alternative treatments for patients. This is the
                  driving force behind EPM’s research program, which is based on
                  14 IP protected APIs. Currently EPM’s focus is on three main
                  therapeutic conditions:
                </p>
              </div>
              <div className="button animate opacity-0 pt-10">
                <Button href="/treatments/#treatments" style="dark">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {(isTablet || isDesktop) && (
        <div>
          <div className="lg:relative lg:h-screen lg:flex lg:flex-col lg:justify-between bg-epm-gray-100">
            <div className="container mx-auto px-8 py-8">
              <div className="text-center mb-6">
                <SectionHeader
                  name="Our Treatments"
                  title={<h2>Medicine We Develop</h2>}
                />
              </div>
              <div className="text animate opacity-0 mx-auto animate text-center w-105">
                <p>
                  EPM is developing cannabinoid acid-based therapeutic solutions
                  providing alternative treatments for patients. This is the
                  driving force behind EPM’s research program, which is based on
                  14 IP protected APIs. Currently EPM’s focus is on three main
                  therapeutic conditions:
                </p>
              </div>
            </div>
            <div className="animate opacity-0 container max-w-4xl mx-auto px-8">
              <div className="flex flex-row justify-center">
                <div className="item flex flex-col w-1/3 items-center justify-between">
                  <div className="item__image flex justify-center items-end flex-grow">
                    <a
                      href="/treatments/#inflammatory-bowel-disease"
                      className="leading-0 transition-opacity duration-150 hover:opacity-70"
                    >
                      {isTablet && (
                        <Image
                          priority={true}
                          src="/img/desktop/treatments/treatments-pills@2x.png"
                          alt="Oral for IBD (Crohn’s & Colitis)"
                          width="215"
                          height="249"
                          layout="intrinsic"
                          quality={100}
                        />
                      )}
                      {isDesktop && (
                        <Image
                          priority={true}
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
                  <div className="item__title text-center text-base font-title uppercase py-3 mt-6 h-20">
                    Oral for IBD{" "}
                    <span className="block normal-case text-epm-gray-500">
                      (Crohn’s & Colitis)
                    </span>
                  </div>
                </div>
                <div className="item flex flex-col w-1/3 items-center justify-between">
                  <div className="item__image flex justify-center items-end flex-grow">
                    <a
                      href="/treatments/#psoriasis"
                      className="leading-0 transition-opacity duration-150 hover:opacity-70"
                    >
                      {isTablet && (
                        <Image
                          priority={true}
                          src="/img/desktop/treatments/treatments-tube@2x.png"
                          alt="Topical for Psoriasis"
                          width="86"
                          height="295"
                          layout="intrinsic"
                          quality={100}
                        />
                      )}
                      {isDesktop && (
                        <Image
                          priority={true}
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
                  <div className="item__title text-center text-base font-title uppercase border-l-1 border-r-1 border-epm-gray-500 px-20 py-3 mt-6 h-20">
                    Topical for
                    <br />
                    Psoriasis
                  </div>
                </div>
                <div className="item flex flex-col w-1/3 items-center justify-between">
                  <div className="item__image flex justify-center items-end flex-grow">
                    <a
                      href="/treatments/#psoriasis"
                      className="leading-0 transition-opacity duration-150 hover:opacity-70"
                    >
                      {isTablet && (
                        <Image
                          priority={true}
                          src="/img/desktop/treatments/treatments-iv@2x.png"
                          alt="IV for ARDS (Acute Respiratory Distress Syndrome)"
                          width="190"
                          height="250"
                          layout="intrinsic"
                          quality={100}
                        />
                      )}
                      {isDesktop && (
                        <Image
                          priority={true}
                          src="/img/desktop/treatments/treatments-iv@2x.png"
                          alt="IV for ARDS (Acute Respiratory Distress Syndrome)"
                          width="249"
                          height="327"
                          layout="intrinsic"
                          quality={100}
                        />
                      )}
                    </a>
                  </div>
                  <div className="item__title text-center text-base font-title uppercase py-3 mt-6 h-20">
                    IV for ARDS
                    <span className="block normal-case text-epm-gray-500">
                      (Acute Respiratory Distress Syndrome)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate opacity-0 container mx-auto px-8 py-8">
              <div className="button text-center pt-10 lg:pt-0">
                <Button href="/treatments/#main" style="dark">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Treatments;
