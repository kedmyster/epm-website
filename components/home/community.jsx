import { useState, useEffect } from "react";
import classNames from "classnames";
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

function Community({ data }) {
  const windowWidth = useWindowWidth();
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const SLIDER_COMMUNITY_CONFIG = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SliderCustomNextArrow color="light" />,
    prevArrow: <SliderCustomPreviousArrow color="light" />,
    afterChange: (index) => {
      setActive(index);
    },
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 2,
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
      id="community"
      className="section community bg-white"
      data-side-menu-label="Our Community"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      <div className="lg:flex lg:flex-wrap lg:flex-row-reverse lg:h-screen">
        <div className="items animate opacity-0 text-white bg-gray-900 text-center lg:w-6/12 2xl:w-7/12">
          <Slider {...SLIDER_COMMUNITY_CONFIG}>
            {data.slides.map((slide, index) => {
              return (
                <div
                  className={classNames("item", "cursor-pointer", {
                    "item--active": index === active,
                  })}
                  key={slide.name}
                  onClick={() => setActive(index)}
                >
                  <div className="group relative text-center w-full flex flex-wrap content-end h-101 lg:h-screen">
                    <div className="absolute w-full h-full">
                      {isMobile && (
                        <Image
                          priority={true}
                          src={slide.images.mobile}
                          alt=""
                          layout="fill"
                          objectFit="cover"
                          quality={100}
                        />
                      )}
                      {(isTablet || isDesktop) && (
                        <Image
                          priority={true}
                          src={slide.images.desktop}
                          alt=""
                          layout="fill"
                          objectFit="cover"
                          quality={100}
                          className="grayscale"
                        />
                      )}
                    </div>
                    <div className="overlay absolute w-full h-full inset-0 lg:transition-all lg:duration-250 lg:ease-in-out bg-black lg:bg-white group-hover:bg-black bg-opacity-50 lg:bg-opacity-75 group-hover:bg-opacity-50"></div>
                    <div className="container mx-auto px-12 lg:px-8 lg:py-8 xl:py-4 relative lg:opacity-0 lg:transition-all lg:duration-250 lg:ease-in-out">
                      <div className="icon-quote text-left absolute -top-14 lg:-top-5 xl:-top-10 left-10 lg:left-10 xl:left-16">
                        {isMobile && (
                          <Image
                            src="/img/icons/quote.svg"
                            width="46.5"
                            height="55.5"
                            alt=""
                          />
                        )}
                        {(isTablet || isDesktop) && (
                          <Image
                            src="/img/icons/quote.svg"
                            width="47"
                            height="43"
                            alt=""
                          />
                        )}
                      </div>
                      <div className=" lg:h-40 xl:h-48 2xl:h-40">
                        <div className="quote text-xl lg:text-lg 2xl:text-xl font-light italic xl:px-6 pb-6 text-left">
                          {slide.quote}
                        </div>
                      </div>
                    </div>
                    <div className="container mx-auto px-8 pb-8 lg:py-8 h-20 lg:h-auto relative lg:absolute lg:top-0 lg:opacity-0 lg:transition-all lg:duration-250 lg:ease-in-out ">
                      <div className="item-name text-lg">{slide.name}</div>
                      <div className="item__title font-light text-center text-xxs font-title">
                        {slide.role}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="lg:pl-44 xl:pl-56 lg:w-6/12 2xl:w-5/12 lg:h-screen overflow-y-hidden lg:overflow-y-auto">
          <div className="container mx-auto lg:ml-0 px-8 lg:pl-0 py-8 lg:w-64 xl:w-80 2xl:w-96">
            <div className="mb-6 lg:mb-0">
              <SectionHeader
                name="Our Community"
                title={<h2>Curing and Treating Patients Worldwide </h2>}
              />
            </div>
            <div className="text animate opacity-0 lg:mt-6">
              <p>
                EPM’s vision is to reach patients worldwide and improve their
                quality of life. Partnering with leading pharmaceutical
                companies and conducting groundbreaking research, we will turn
                this vision into a reality.
              </p>
            </div>
            <div className="button animate opacity-0 pt-10">
              <Button href="#footer" style="dark">
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
