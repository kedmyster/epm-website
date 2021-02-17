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
    <section
      id="community"
      className="section community bg-white"
      data-side-menu-label="Our Community"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
    >
      <div className="lg:flex lg:flex-wrap lg:flex-row-reverse lg:h-screen">
        <div className="items animate text-white bg-gray-900 text-center lg:w-7/12">
          <Slider {...SLIDER_COMMUNITY_CONFIG}>
          {data.slides.map((slide,index) => {
              return (
                <div
                  className={classNames("item", "cursor-pointer", {
                    "item--active": index === active,
                  })}
                  onClick={() => setActive(index)}
                >
                  <div className="group relative text-center w-full flex flex-wrap content-end h-101 lg:h-screen">
                    <div className="absolute w-full h-full">
                      {isMobile && (
                        <Image
                          src={slide.images.mobile}
                          alt=""
                          layout="fill"
                          objectFit="cover"
                          quality={100}
                        />
                      )}
                      {isDesktop && (
                        <Image
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
                    <div className="container mx-auto px-8 lg:py-8 relative lg:opacity-0 lg:transition-all lg:duration-250 lg:ease-in-out">
                      <div className="icon-quote text-left pl-8 lg:pl-0 relative lg:absolute lg:-top-10 lg:left-16">
                        {isMobile && (
                          <Image
                            src="/img/icons/quote.svg"
                            width="46.5"
                            height="55.5"
                            alt=""
                          />
                        )}
                        {isDesktop && (
                          <Image
                            src="/img/icons/quote.svg"
                            width="93"
                            height="111"
                            alt=""
                          />
                        )}
                      </div>
                      <div className="lg:border-3 lg:border-white">
                        <div className="quote text-2xl font-light italic px-6 pb-6 lg:pt-6 lg:text-left">
                          {slide.quote}
                        </div>
                      </div>
                    </div>
                    <div className="container mx-auto px-8 pb-8 lg:py-8 relative lg:absolute lg:top-0 lg:opacity-0 lg:transition-all lg:duration-250 lg:ease-in-out">
                      <div className="item-name text-lg">{slide.name}</div>
                      <div className="item__title font-light text-center text-xs font-title">
                        {slide.role}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className=" lg:w-5/12 lg:pl-56">
          <div className="container mx-auto lg:ml-0 px-8 lg:pl-0 py-8 lg:w-96">
            <div className="mb-6 lg:mb-0">
              <SectionHeader
                name="Our Community"
                title={<h2>Healthier People</h2>}
              />
            </div>
            <div className="text animate lg:mt-6">
              <p>
                EPM are committed to developing a series of new therapeutic
                solutions based on cannabinoid acids providing alternative
                treatments for patients.
              </p>
            </div>
            <div className="button animate pt-10">
              <Button href="/treatments/#treatments" style="dark">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
