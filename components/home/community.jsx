import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import {
  SliderCustomPreviousArrow,
  SliderCustomNextArrow,
} from "../shared/carousel";

function Community() {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const SLIDER_COMMUNITY_CONFIG = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SliderCustomNextArrow />,
    prevArrow: <SliderCustomPreviousArrow />,
    responsive: [
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
    <section id="community" className="community">
      <div className="items text-white bg-gray-900 text-center text-white lg:h-2/3-screen">
        <Slider {...SLIDER_COMMUNITY_CONFIG}>
          <div className="item">
            <div
              className="relative text-center w-full bg-cover flex flex-wrap content-end lg:text-left lg:p-5"
              style={{ height: "500px" }}
            >
              <div className="absolute w-full h-full">
                {isMobile && (
                  <Image
                    src="/img/mobile/prof-joseph-tam@3x.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                )}
                {isDesktop && (
                  <Image
                    src="/img/desktop/prof-joseph-tam@2x.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                )}
              </div>
              <div className="absolute w-full h-full inset-0 bg-black bg-opacity-40"></div>
              <div className="container mx-auto px-8 py-8 relative">
                <div className="icon-quote text-left pl-8">
                  <Image
                    src="/img/icons/quote.svg"
                    width="93"
                    height="111"
                    alt=""
                  />
                </div>
                <div className="quote text-2xl font-light italic px-6 pb-6">
                  <p>
                    No matter the type of testimonial, use images, videos and
                    social media.
                  </p>
                </div>
                <div className="item-name text-lg">Prof.Joseph (Yossi) Tam</div>
                <div className="item__title font-light text-center text-xs f w-1/3ont-title">
                  Head of Metabolic Disorders Research
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div
              className="relative text-center w-full bg-cover flex flex-wrap content-end lg:text-left lg:p-5"
              style={{ height: "500px" }}
            >
              <div className="absolute w-full h-full">
                {isMobile && (
                  <Image
                    src="/img/mobile/prof-joseph-tam@3x.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                )}
                {isDesktop && (
                  <Image
                    src="/img/desktop/prof-joseph-tam@2x.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                )}
              </div>
              <div className="absolute w-full h-full inset-0 bg-black bg-opacity-40"></div>
              <div className="container mx-auto px-8 py-8 relative">
                <div className="icon-quote text-left pl-8">
                  <Image
                    src="/img/icons/quote.svg"
                    width="93"
                    height="111"
                    alt=""
                  />
                </div>
                <div className="quote text-2xl font-light italic px-6 pb-6">
                  <p>
                    No matter the type of testimonial, use images, videos and
                    social media.
                  </p>
                </div>
                <div className="item-name text-lg">Prof.Joseph (Yossi) Tam</div>
                <div className="item__title font-light text-center text-xs f w-1/3ont-title">
                  Head of Metabolic Disorders Research
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div
              className="relative text-center w-full bg-cover flex flex-wrap content-end lg:text-left lg:p-5"
              style={{ height: "500px" }}
            >
              <div className="absolute w-full h-full">
                {isMobile && (
                  <Image
                    src="/img/mobile/prof-joseph-tam@3x.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                )}
                {isDesktop && (
                  <Image
                    src="/img/desktop/prof-joseph-tam@2x.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                )}
              </div>
              <div className="absolute w-full h-full inset-0 bg-black bg-opacity-40"></div>
              <div className="container mx-auto px-8 py-8 relative">
                <div className="icon-quote text-left pl-8">
                  <Image
                    src="/img/icons/quote.svg"
                    width="93"
                    height="111"
                    alt=""
                  />
                </div>
                <div className="quote text-2xl font-light italic px-6 pb-6">
                  <p>
                    No matter the type of testimonial, use images, videos and
                    social media.
                  </p>
                </div>
                <div className="item-name text-lg">Prof.Joseph (Yossi) Tam</div>
                <div className="item__title font-light text-center text-xs f w-1/3ont-title">
                  Head of Metabolic Disorders Research
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="lg:h-1/3-screen">
        <div className="container mx-auto px-8 py-8">
          <div className="font-title text-xs uppercase section-name">
            Our Community
          </div>
          <div className="pb-6 section-title">
            <h2 className="font-title text-2xl">Healthier People</h2>
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

export default Community;
