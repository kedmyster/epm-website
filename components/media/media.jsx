import { useState, useEffect } from "react";
import classNames from "classnames";
import Image from "next/image";
import Slider from "react-slick";
import { gsap } from "gsap";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import {
  SliderCustomPreviousArrow,
  SliderCustomNextArrow,
} from "../shared/carousel";
import Button from "../shared/Button";

function MediaComponent({ data }) {
  const windowWidth = useWindowWidth();
  const [active, setActive] = useState(0);
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

  return (
    <section
      id="media"
      className="section media bg-white lg:flex lg:flex-wrap lg:flex-row-reverse lg:overflow-y-hidden lg:min-h-screen"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="hidden"
    >
      <div className="container lg:w-lg-container mx-auto lg:px-8 pt-16 lg:pt-16">
        <div className="items lg:pt-8">
          {data.slides.map((slide, index) => {
            return (
              <div className="item group cursor-pointer border-t last:border-b border-epm-gray-300 h-96 lg:h-auto min-h-full lg:min-h-0 flex lg:block flex-wrap content-center lg:py-8 lg:px-4 transition-colors duration-150 hover:bg-epm-gray-100">
                <a href="#">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mx-8 lg:mx-0">
                    <div className="item-image lg:w-64 mb-4 lg:mb-0">
                      <div className="w-auto mx-auto lg:mx-0 relative">
                        <Image
                          src={slide.images.src}
                          alt=""
                          width={slide.images.width}
                          height={slide.images.height}
                          layout="responsive"
                          quality={100}
                          className="max-w-full h-auto"
                        />
                      </div>
                    </div>
                    <div className="item-name mb-4 lg:mb-2 text-lg lg:text-5xl hidden">
                      {slide.name}
                    </div>
                    <div className="text-center lg:text-left lg:inline-block lg:w-96 xl:w-105">
                      <div className="quote lg:text-xl xl:text-2xl mb-4 lg:h-20 xl:h-auto">{slide.quote}</div>
                      <div className="item__date lg:text-center text-sm text-epm-gray-500 lg:text-base font-title lg:inline-block">
                        {slide.date}
                      </div>
                    </div>
                    <div className="button animate pt-10 lg:pt-0 lg:inline-block text-center">
                      <Button
                        style="dark"
                        href={slide.url}
                        extendedClassNames="group-hover:bg-epm-yellow group-hover:border-epm-yellow"
                        target="_blank"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MediaComponent;
