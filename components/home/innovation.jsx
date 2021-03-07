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

function Innovation({ data }) {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const vm = {};

  const SLIDER_INNOVATION_CONFIG_MOBILE = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderCustomNextArrow color="light" />,
    prevArrow: <SliderCustomPreviousArrow color="light" />,
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

  const SLIDER_INNOVATION_CONFIG_DESKTOP = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
  };

  const showMore = (slideNumber) => {
    vm.slider.slickGoTo(slideNumber);

    const slides = Array.from(document.querySelectorAll("#innovation .item"));
    const tl = gsap.timeline({});

    slides.forEach((slide, index) => {
      const right = slide.querySelector(".item__box__right");
      const bottom = slide.querySelector(".item__box__bottom");
      const left = slide.querySelector(".item__box__left");

      if (index === slideNumber) {
        tl.set(left, { transformOrigin: "top left" });
        tl.to(left, { scale: "1", duration: 0.1 });
        tl.set(bottom, { transformOrigin: "bottom left" });
        tl.to(bottom, { scale: "1", duration: 0.1 });
        tl.set(right, { transformOrigin: "bottom right" });
        tl.to(right, { scale: "1", duration: 0.1 });
      } else {
        tl.set(right, { transformOrigin: "bottom right" });
        tl.to(right, { scale: "0", duration: 0.1 });
        tl.set(bottom, { transformOrigin: "bottom left" });
        tl.to(bottom, { scale: "0", duration: 0.1 });
        tl.set(left, { transformOrigin: "top left" });
        tl.to(left, { scale: "0", duration: 0.1 });
      }
    });
  };

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

  return (
    <section
      id="innovation"
      className="section innovation bg-white"
      data-side-menu-label="Our Innovation"
      data-side-menu-color="light"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      {isMobile && (
        <div className="">
          <div className="items text-white bg-gray-800 text-center h-2/3-screen">
            <Slider {...SLIDER_INNOVATION_CONFIG_MOBILE}>
              {data.slides.map((slide) => {
                return (
                  <div className="item">
                    <div className="relative text-center w-full lg:text-left lg:p-5 lg:border-t-2 lg:border-white flex flex-wrap content-end h-2/3-screen">
                      <div className="absolute w-full h-full">
                        <Image
                          src={slide.images.mobile}
                          alt={slide.title}
                          layout="fill"
                          objectFit="cover"
                          quality={100}
                        />
                      </div>
                      <div className="absolute w-full h-full inset-0 bg-black bg-opacity-20"></div>
                      <div className="container mx-auto px-16 py-8 lg:flex lg:flex-row lg:space-x-20 z-10">
                        <div className="item__title font-light font-title text-2xl uppercase pb-5">
                          {slide.title}
                        </div>
                        <div className="item__text font-light text-sm h-14">
                          {slide.text}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div>
            <div className="container mx-auto px-8 py-8">
              <div className="mb-6">
                <SectionHeader
                  name="Our Innovation"
                  title={<h2>Creating Treatments</h2>}
                />
              </div>
              <div className="text lg:w-103">
                <p>
                  EPM’s mission is to develop a wide array of therapeutic
                  treatments based on synthetic cannabinoid acids, producing
                  medicinal solutions and treatments like never before.
                </p>
              </div>
              <div className="button pt-10">
                <Button href="/science/#main" style="dark">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {(isTablet || isDesktop) && (
        <div>
          <div className="relative lg:h-screen">
            <div className="absolute inset-0">
              <div className="lg:h-2/3-screen overflow-y-hidden">
                <Slider
                  ref={(slider) => (vm.slider = slider)}
                  {...SLIDER_INNOVATION_CONFIG_DESKTOP}
                >
                  {data.slides.map((slide) => {
                    return (
                      <div key={slide.title} className="h-2/3-screen">
                        <Image
                          src={slide.images.desktop}
                          alt={slide.title}
                          layout="fill"
                          objectFit="cover"
                          quality={100}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>

            <div className="lg:h-2/3-screen">
              <div className="relative text-center w-full lg:h-full lg:text-left flex flex-wrap content-end">
                <div className="absolute w-full h-full inset-0 bg-black bg-opacity-50"></div>
                <div className="animate opacity-0 container mx-auto px-8 py-8 lg:w-container lg:text-white lg:flex lg:flex-row lg:space-x-20 z-10">
                  {data.slides.map((slide, index) => {
                    return (
                      <div
                        key={slide.title}
                        className="item lg:w-1/3 p-4 relative cursor-pointer"
                        onMouseEnter={() => showMore(index)}
                        data-slide={index}
                      >
                        <div className="item__box__top absolute top-0 left-0 bg-white w-full h-px"></div>
                        <div className="item__box__left absolute top-0 left-0 bg-white w-px h-full transform scale-0"></div>
                        <div className="item__box__bottom absolute bottom-0 left-0 bg-white w-full h-px transform scale-0"></div>
                        <div className="item__box__right absolute bottom-0 right-0 bg-white w-px h-full transform scale-0"></div>
                        <div className="item__content">
                          <div className="item__title font-light font-title text-2xl uppercase mb-5 lg:h-16">
                            {slide.title}
                          </div>
                          <div className="item__text font-light text-sm">
                            {slide.text}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:h-1/3-screen">
              <div className="container mx-auto px-8 lg:pl-44 xl:pl-56 2xl:px-8 py-8 lg:h-1/3-screen lg:flex lg:flex-col justify-between">
                <div>
                  <SectionHeader
                    name={<span className="animate opacity-0">Our Innovation</span>}
                    title={<h2 className="animate opacity-0">Creating New Treatments</h2>}
                  />
                </div>

                <div className="animate opacity-0 text lg:w-103">
                  <p>
                    EPM’s mission is to develop a wide array of therapeutic
                    treatments based on synthetic cannabinoid acids, producing
                    medicinal solutions and treatments like never before.
                  </p>
                </div>
                <div className="button animate opacity-0">
                  <Button href="/science/#main" style="dark">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Innovation;
