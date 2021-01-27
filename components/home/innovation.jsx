import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { gsap } from "gsap";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import {
  SliderCustomPreviousArrow,
  SliderCustomNextArrow,
} from "../shared/carousel";

function Innovation() {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const SLIDER_INNOVATION_CONFIG = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderCustomNextArrow color="light" />,
    prevArrow: <SliderCustomPreviousArrow color="light" />,
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
      y: "-=5px",
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.25
    }, "-=0.125");
  }, []);

  return (
    <section
      id="innovation"
      className="section innovation bg-white"
      data-side-menu-color="light"
      data-side-menu-visibility="visible"
    >
      {isMobile && (
        <>
          <div className="items text-white bg-gray-800 text-center text-white">
            <Slider {...SLIDER_INNOVATION_CONFIG}>
              <div className="item">
                <div
                  className="relative text-center w-full lg:text-left lg:p-5 lg:border-t-2 lg:border-white flex flex-wrap content-end"
                  style={{ height: "462px" }}
                >
                  <div className="absolute w-full h-full">
                    <Image
                      src="/img/mobile/made-in-labs@3x.jpg"
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                  </div>
                  <div className="absolute w-full h-full inset-0 bg-black bg-opacity-20"></div>
                  <div className="container mx-auto px-16 py-8 lg:flex lg:flex-row lg:space-x-20 z-10">
                    <div className="item__title font-light text-2xl uppercase pb-5">
                      Made in labs
                    </div>
                    <div className="item__text font-light text-sm h-14">
                      We are synthesizing and developing cannabinoid Methyl-Esters
                      products, which are fully synthetic
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div
                  className="relative bg-cover text-center w-full lg:text-left lg:p-5 lg:border-t-2 lg:border-white flex flex-wrap content-end"
                  style={{ height: "462px" }}
                >
                  <div className="absolute w-full h-full">
                    <Image
                      src="/img/mobile/made-in-labs@3x.jpg"
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                  </div>
                  <div className="absolute w-full h-full inset-0 bg-black bg-opacity-20"></div>
                  <div className="container mx-auto px-16 py-8 lg:flex lg:flex-row lg:space-x-20 z-10">
                    <div className="item__title font-light text-2xl uppercase pb-5">
                      US FDA
                    </div>
                    <div className="item__text font-light text-sm h-14">
                      Treatments are developed following the guidelines and
                      approval of the US FDA
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div
                  className="relative bg-cover text-center w-full lg:text-left lg:p-5 lg:border-t-2 lg:border-white flex flex-wrap content-end"
                  style={{ height: "462px" }}
                >
                  <div className="absolute w-full h-full">
                    <Image
                      src="/img/mobile/made-in-labs@3x.jpg"
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                  </div>
                  <div className="absolute w-full h-full inset-0 bg-black bg-opacity-20"></div>
                  <div className="container mx-auto px-16 py-8 lg:flex lg:flex-row lg:space-x-20 z-10">
                    <div className="item__title font-light text-2xl uppercase pb-5">
                      Collaboration
                    </div>
                    <div className="item__text font-light text-sm h-14">
                      Development are being done by leading global pharmaceutical
                      contract research organizations
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div>
            <div className="container mx-auto px-8 py-8">
              <div className="section-name font-title text-xs uppercase">
                Our Innovation
              </div>
              <div className="section-title pb-6 ">
                <h2 className="font-title text-2xl">
                  Creation of New Treatments
                </h2>
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
                  className="inline-block w-full lg:w-auto text-center uppercase border-3 border-epm-dark-gray rounded-3xl select-none transition-opacity duration-150 hover:opacity-70 lg:px-10 py-2"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </>
      )}
      {isDesktop && (
        <div className="lg:h-screen">
          <div className="lg:h-2/3-screen">
            <div className="relative text-center w-full lg:h-full lg:text-left flex flex-wrap content-end">
              <div className="absolute w-full h-full">
                <Image
                  src="/img/desktop/made-in-labs@2x.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <div className="absolute w-full h-full inset-0 bg-black bg-opacity-50"></div>
              <div className="animate-1 container mx-auto px-8 py-8 lg:w-container lg:text-white lg:flex lg:flex-row lg:space-x-20 z-10">
                <div className="item lg:w-1/3 lg:border lg:border-white p-4">
                  <div className="item__title font-light text-2xl uppercase mb-5">
                    Made in labs
                  </div>
                  <div className="item__text font-light text-sm">
                    We are synthesizing and developing cannabinoid Methyl-Esters
                    products, which are fully synthetic
                  </div>
                </div>
                <div className="item lg:w-1/3 lg:border-t lg:border-white p-4">
                  <div className="item__title font-light text-2xl uppercase mb-5">
                    US FDA
                  </div>
                  <div className="item__text font-light text-sm">
                    Treatments are developed following the guidelines and
                    approval of the US FDA
                  </div>
                </div>
                <div className="item lg:w-1/3 lg:border-t lg:border-white p-4">
                  <div className="item__title font-light text-2xl uppercase mb-5">
                    Collaboration
                  </div>
                  <div className="item__text font-light text-sm">
                    Development are being done by leading global pharmaceutical
                    contract research organizations
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:h-1/3-screen">
            <div className="container mx-auto px-8 py-8 lg:h-1/3-screen lg:flex lg:flex-col justify-between">
              <div>
                <div className="animate-2 section-name font-title text-xs uppercase ">
                  Our Innovation
                </div>
                <div className="animate-3 section-title">
                  <h2 className="font-title text-2xl">
                    Creation of New Treatments
                  </h2>
                </div>
              </div>
              
              <div className="animate-4 text lg:w-103">
                <p>
                  EPM are committed to developing a series of new therapeutic
                  solutions based on cannabinoid acids providing alternative
                  treatments for patients. 
                </p>
              </div>
              <div className="button animate-5">
                <a
                  href=""
                  className="inline-block w-full lg:w-auto text-center uppercase border-3 border-epm-dark-gray rounded-3xl select-none transition-opacity duration-150 hover:opacity-70 lg:px-10 py-2"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Innovation;
