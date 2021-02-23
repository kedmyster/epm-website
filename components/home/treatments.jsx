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
          <div className="items text-white bg-gray-300 lg:h-2/3-screen">
            <div className="container mx-auto px-8 py-8 lg:flex lg:flex-row lg:space-x-20">
              <Slider {...SLIDER_TREATMENTS_CONFIG}>
                {data.slides.map((slide) => {
                  return (
                    <div className="item text-center text-epm-gray-700 lg:text-left lg:p-5">
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
          <div className="lg:h-1/3-screen">
            <div className="container mx-auto px-8 py-8">
              <div className="mb-6">
                <SectionHeader
                  name="Our Treatments"
                  title={<h2>Medicines We Develop</h2>}
                />
              </div>

              <div className="text lg:w-103">
                <p>
                  EPM is developing cannabinoid acid-based therapeutic solutions
                  providing alternative treatments for patients. This is the
                  driving force behind EPM’s research program, which is based on
                  14 IP protected APIs. Although cannabinoid acids are potential
                  treatments for a wide range of diseases, currently EPM’s focus
                  is on three main therapeutic conditions: inflammatory bowel
                  diseases, skin conditions and respiratory concerns.
                </p>
              </div>
              <div className="button pt-10">
                <Button href="/treatments/#treatments" style="dark">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isDesktop && (
        <div>
          <div className="lg:relative lg:h-screen lg:flex lg:flex-col lg:justify-between bg-epm-gray-100">
            <div className="container mx-auto px-8 py-8">
              <div className="text-center mb-6">
                <SectionHeader
                  name="Our Treatments"
                  title={<h2>Medicines We Develop</h2>}
                />
              </div>
              <div className="text mx-auto animate text-center w-105">
                <p>
                  EPM is developing cannabinoid acid-based therapeutic solutions
                  providing alternative treatments for patients. This is the
                  driving force behind EPM’s research program, which is based on
                  14 IP protected APIs. Although cannabinoid acids are potential
                  treatments for a wide range of diseases, currently EPM’s focus
                  is on three main therapeutic conditions: inflammatory bowel
                  diseases, skin conditions and respiratory concerns.
                </p>
              </div>
            </div>
            <div className="animate container max-w-4xl mx-auto px-8">
              <div className="flex flex-row justify-center">
                <div className="item flex flex-col w-1/3 items-center justify-between">
                  <div className="item__image flex justify-center items-end flex-grow">
                    <a
                      href="/treatments/#inflammatory-bowel-disease"
                      className="leading-0"
                    >
                      <Image
                        loading="eager"
                        src="/img/desktop/treatments/treatments-pills@2x.png"
                        alt=""
                        width="281"
                        height="326"
                        layout="intrinsic"
                        quality={100}
                      />
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
                    <a href="/treatments/#psoriasis" className="leading-0">
                      <Image
                        loading="eager"
                        src="/img/desktop/treatments/treatments-tube@2x.png"
                        alt=""
                        width="113"
                        height="386"
                        layout="intrinsic"
                        quality={100}
                      />
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
                    <a href="/treatments/#psoriasis" className="leading-0">
                      <Image
                        loading="eager"
                        src="/img/desktop/treatments/treatments-iv@2x.png"
                        alt=""
                        width="249"
                        height="327"
                        layout="intrinsic"
                        quality={100}
                      />
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
            <div className="animate container mx-auto px-8 py-8">
              <div className="button text-center pt-10">
                <Button href="/treatments/#treatments" style="dark">
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
