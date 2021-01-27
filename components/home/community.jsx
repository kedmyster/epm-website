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

function Community() {
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

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(".animate-1", {
      y: "-=5px",
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.25
    });

    tl.fromTo(".animate-2", {
      y: "-=5px",
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.25
    }, "-=0.125");

    tl.fromTo(".animate-3", {
      y: "-=5px",
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.25
    }, "-=0.125");

    tl.fromTo(".animate-4", {
      y: "-=5px",
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.25
    }, "-=0.125");

    tl.fromTo(".animate-5", {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 0.25
    }, "-=0.125");
  }, []);

  const community = [
    {
      images: {
        mobile: "/img/mobile/prof-joseph-tam@3x.jpg",
        desktop: "/img/desktop/prof-joseph-tam@2x.jpg",
      },
      quote: (
        <p>
          No matter the type of testimonial, use images, videos and social
          media.
        </p>
      ),
      name: "Prof.Joseph (Yossi) Tam",
      role: "Head of Metabolic Disorders Research",
    },
    {
      images: {
        mobile: "/img/mobile/prof-joseph-tam@3x.jpg",
        desktop: "/img/desktop/prof-joseph-tam@2x.jpg",
      },
      quote: (
        <p>
          No matter the type of testimonial, use images, videos and social
          media.
        </p>
      ),
      name: "Prof.Joseph (Yossi) Tam",
      role: "Head of Metabolic Disorders Research",
    },
    {
      images: {
        mobile: "/img/mobile/prof-joseph-tam@3x.jpg",
        desktop: "/img/desktop/prof-joseph-tam@2x.jpg",
      },
      quote: (
        <p>
          No matter the type of testimonial, use images, videos and social
          media.
        </p>
      ),
      name: "Prof.Joseph (Yossi) Tam",
      role: "Head of Metabolic Disorders Research",
    },
    {
      images: {
        mobile: "/img/mobile/prof-joseph-tam@3x.jpg",
        desktop: "/img/desktop/prof-joseph-tam@2x.jpg",
      },
      quote: (
        <p>
          No matter the type of testimonial, use images, videos and social
          media.
        </p>
      ),
      name: "Prof.Joseph (Yossi) Tam",
      role: "Head of Metabolic Disorders Research",
    },
  ];

  return (
    <section
      id="community"
      className="section community bg-white lg:flex lg:flex-wrap lg:flex-row-reverse lg:h-screen"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
    >
      <div className="items animate-5 text-white bg-gray-900 text-center lg:w-8/12">
        <Slider {...SLIDER_COMMUNITY_CONFIG}>
          {community.map((item, index) => {
            return (
              <div
                className={classNames("item", "cursor-pointer", {
                  "item--active": index === active,
                })}
                onClick={() => setActive(index)}
              >
                <div className="relative text-center w-full bg-cover flex flex-wrap content-end h-101 lg:h-screen">
                  <div className="absolute w-full h-full">
                    {isMobile && (
                      <Image
                        src={item.images.mobile}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                      />
                    )}
                    {isDesktop && (
                      <Image
                        src={item.images.desktop}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        className="grayscale"
                      />
                    )}
                  </div>
                  <div className="absolute w-full h-full inset-0 bg-black bg-opacity-50"></div>
                  <div className="container mx-auto px-8 lg:py-8 relative lg:opacity-0 lg:transition-all lg:duration-500 lg:ease-in-out">
                    <div className="icon-quote text-left pl-8 lg:pl-0 lg:absolute lg:-top-10 lg:left-28">
                      <Image
                        src="/img/icons/quote.svg"
                        width="93"
                        height="111"
                        alt=""
                      />
                    </div>
                    <div className="lg:border-3 lg:border-white lg:mx-8">
                      <div className="quote text-2xl font-light italic px-6 pb-6 lg:pt-6 lg:text-left">
                        {item.quote}
                      </div>
                    </div>
                  </div>
                  <div className="container mx-auto px-8 pb-8 lg:py-8 relative lg:absolute lg:top-0 lg:opacity-0 lg:transition-all lg:duration-500 lg:ease-in-out">
                    <div className="item-name text-lg">{item.name}</div>
                    <div className="item__title font-light text-center text-xs font-title">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className=" lg:w-4/12 lg:pl-60">
        <div className="container mx-auto px-8 lg:pl-0 py-8">
          <div className="section-name animate-1 font-title text-xs uppercase">
            Our Community
          </div>
          <div className="section-title animate-2 pb-6">
            <h2 className="font-title text-2xl">Healthier People</h2>
          </div>
          <div className="text animate-3">
            <p>
              EPM are committed to developing a series of new therapeutic
              solutions based on cannabinoid acids providing alternative
              treatments for patients.
            </p>
          </div>
          <div className="button animate-4 pt-10">
            <a
              href=""
              className="inline-block w-full lg:w-auto text-center uppercase border-3 border-epm-dark-gray rounded-3xl select-none lg:px-10 py-2 transition-opacity duration-150 hover:opacity-70"
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
