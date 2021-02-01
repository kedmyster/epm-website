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

function MediaComponent() {
  const windowWidth = useWindowWidth();
  const [active, setActive] = useState(0);
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

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".animate-1",
      {
        y: "-=5px",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.25,
      }
    );

    tl.fromTo(
      ".animate-2",
      {
        y: "-=5px",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.25,
      },
      "-=0.125"
    );

    tl.fromTo(
      ".animate-3",
      {
        y: "-=5px",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.25,
      },
      "-=0.125"
    );

    tl.fromTo(
      ".animate-4",
      {
        y: "-=5px",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.25,
      },
      "-=0.125"
    );

    tl.fromTo(
      ".animate-5",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.25,
      },
      "-=0.125"
    );
  }, []);

  const media = [
    {
      images: {
        src: "/img/icons/forbes.svg",
        width: "213",
        height: "55",
      },
      name: "Forbes",
      quote:
        "More Potent Than CBD, THC: Dr. Raphael Mechoulam Explains His Latest Discovery",
      date: "July 12, 2020",
    },
    {
      images: {
        src: "/img/icons/nbc.svg",
        width: "255",
        height: "57",
      },
      name: "NBC News",
      quote:
        "Cannabis research pioneer hopes latest discovery is not overlooked — again",
      date: "Sep 26, 2019",
    },
    {
      images: {
        src: "/img/icons/discover.svg",
        width: "224",
        height: "64",
      },
      name: "Discover",
      quote:
        "The 'Father of Cannabis Research' on the Untapped Potential of Marijuana as Medicine",
      date: "November 21, 2019",
    },
    {
      images: {
        src: "/img/icons/endpoints.svg",
        width: "247",
        height: "23",
      },
      name: "EndpoiontsNews",
      quote: "Startup EPM launches, high off cannabinoid acid innovation",
      date: "Jul 12, 2020",
    },
  ];

  return (
    <section
      id="media"
      className="section media bg-white lg:flex lg:flex-wrap lg:flex-row-reverse lg:overflow-y-hidden"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
    >
      <div className="container mx-auto lg:px-8 pt-16 lg:py-8">
        <div className="items border-t lg:border-0 border-epm-dark-gray pt-12 lg:pt-0">
          {media.map((item, index) => {
            return (
              <div className="item cursor-pointer border-b border-epm-dark-gray mb-12 pb-12">
                <div className="flex flex-col lg:flex-row lg:items-center mx-8 lg:mx-0 ">
                  <div className="item-image lg:w-1/4 mb-4 lg:mb-0 ">
                    <div className="w-auto lg:w-72 mx-auto lg:mx-0 relative">
                      <Image
                        src={item.images.src}
                        alt=""
                        width={item.images.width}
                        height={item.images.height}
                        layout="responsive"
                        quality={100}
                      />
                    </div>
                  </div>
                  <div className="item-name lg:w-1/4 mb-4 lg:mb-2 text-lg lg:text-5xl  hidden">
                    {item.name}
                  </div>
                  <div className="text-center lg:text-left lg:inline-block lg:w-1/2">
                    <div className="quote lg:text-3xl mb-4">{item.quote}</div>
                    <div className="item__date lg:text-center text-sm text-epm-light-gray lg:text-base font-title lg:inline-block">
                      {item.date}
                    </div>
                  </div>
                  <div className="button animate-4 pt-10 lg:pt-0 lg:inline-block lg:w-1/4 text-center">
                    <a
                      href=""
                      className="inline-block w-full lg:w-auto text-emp-dark-gray text-center uppercase border-3 border-emp-dark-gray rounded-3xl select-none lg:px-10 py-2 transition-opacity duration-150 hover:opacity-70"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MediaComponent;
