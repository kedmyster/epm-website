import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import {
  SliderCustomPreviousArrow,
  SliderCustomNextArrow,
} from "../shared/carousel";

function Treatments() {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const SLIDER_TREATMENTS_CONFIG = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderCustomNextArrow />,
    prevArrow: <SliderCustomPreviousArrow />,
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
    <section id="treatments" className="treatments">
      <div className="items text-white bg-gray-300 lg:h-2/3-screen h-two-third-screen">
        <div className="container mx-auto px-8 py-8 lg:flex lg:flex-row lg:space-x-20">
          <Slider {...SLIDER_TREATMENTS_CONFIG}>
            <div className="item text-center text-epm-dark-gray lg:text-left lg:p-5">
              <div className="image">
                <Image
                  src="/img/mobile/topical-for-psoriasis.png"
                  alt=""
                  width="162"
                  height="360"
                />
              </div>
              <div className="item__title text-center text-base font-title uppercase pt-5 ">
                Oral for IBD{" "}
                <span className="block normal-case text-epm-light-gray">
                  (Crohn’s & Colitis)
                </span>
              </div>
            </div>
            <div className="item text-center text-epm-dark-gray lg:text-left lg:p-5">
              <div className="image">
                <Image
                  src="/img/mobile/2.png"
                  alt=""
                  width="100"
                  height="200"
                />
              </div>
              <div className="item__title text-center text-base font-title uppercase pt-5 ">
                Topical for
                <br />
                Psoriasis
              </div>
            </div>
            <div className="item text-center text-epm-dark-gray lg:text-left lg:p-5">
              <div className="image">
                <Image
                  src="/img/mobile/3.png"
                  alt=""
                  width="100"
                  height="200"
                />
              </div>
              <div className="item__title text-center text-base font-title uppercase pt-5 ">
                Oral for IBD{" "}
                <span className="block normal-case text-epm-light-gray">
                  (Crohn’s & Colitis)
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="lg:h-1/3-screen">
        <div className="container mx-auto px-8 py-8">
          <div className="font-title text-xs uppercase section-name">
            Our Treatments
          </div>
          <div className="pb-6 section-title">
            <h2 className="font-title text-2xl">Medicines We Develop</h2>
          </div>
          <div className="text lg:w-103">
            <p>
              EPM are committed to developing a series of new therapeutic
              solutions based on cannabinoid acids providing alternative
              treatments for patients.
            </p>
          </div>
          <div className="button pt-10">
            <a
              href=""
              className="inline-block w-full lg:w-auto text-center uppercase border-3 border-epm-dark-gray rounded-3xl lg:px-10 py-2"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Treatments;
