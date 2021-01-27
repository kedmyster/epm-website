import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { gsap } from "gsap";
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
    <>
      {isMobile && (
        <section
          id="treatments"
          className="section treatments bg-white"
          data-side-menu-color="dark"
          data-side-menu-visibility="visible"
        >
          <div className="items text-white bg-gray-300 lg:h-2/3-screen h-two-third-screen">
            <div className="container mx-auto px-8 py-8 lg:flex lg:flex-row lg:space-x-20">
              <Slider {...SLIDER_TREATMENTS_CONFIG}>
                <div className="item text-center text-epm-dark-gray lg:text-left lg:p-5">
                  <div className="image">
                    <Image
                      src="/img/mobile/topical-for-psoriasis.jpg"
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
                      src="/img/mobile/2.jpg"
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
                      src="/img/mobile/3.jpg"
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
              <div className="section-name font-title text-xs uppercase section-name">
                Our Treatments
              </div>
              <div className="section-title pb-6 ">
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
                  className="inline-block w-full lg:w-auto text-center uppercase border-3 border-epm-dark-gray rounded-3xl select-none transition-opacity duration-150 hover:opacity-70 lg:px-10 py-2"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {isDesktop && (
        <section
          id="treatments"
          className="section treatments bg-white h-screen"
          data-side-menu-color="dark"
          data-side-menu-visibility="visible"
        >
          <div className="flex flex-col justify-between">
            <div className="container mx-auto px-8 py-8">
              <div className="section-name animate-1 font-title text-xs uppercase text-center">
                Our Treatments
              </div>
              <div className="section-title animate-2 text-center pb-6">
                <h2 className="font-title text-2xl">
                  Medicines We Develop Today
                </h2>
              </div>
              <div className="text mx-auto animate-3 text-center w-101">
                <p>
                  EPM are committed to developing a series of new therapeutic
                  solutions based on cannabinoid acids providing alternative
                  treatments for patients.
                </p>
              </div>
            </div>
            <div className="animate-4 container mx-auto px-8">
              <div className="image text-center pb-5">
                <Image
                  src="/img/desktop/medicines@2x.jpg"
                  alt=""
                  width="707.5"
                  height="480"
                />
              </div>
              <div className="flex flex-row flex-wrap justify-center space-x-10">
                <div className="item__title text-center text-base font-title uppercase py-3">
                  Oral for IBD{" "}
                  <span className="block normal-case text-epm-light-gray">
                    (Crohn’s & Colitis)
                  </span>
                </div>
                <div className="item__title text-center text-base font-title uppercase border-l-1 border-r-1 border-epm-light-gray px-20 py-3">
                  Topical for
                  <br />
                  Psoriasis
                </div>
                <div className="item__title text-center text-base font-title uppercase py-3">
                  Oral for IBD{" "}
                  <span className="block normal-case text-epm-light-gray">
                    (Crohn’s & Colitis)
                  </span>
                </div>
              </div>
            </div>
            <div className="animate-5 container mx-auto px-8">
              <div className="button text-center pt-10">
                <a
                  href=""
                  className="inline-block w-full lg:w-auto text-center uppercase border-3 border-epm-dark-gray rounded-3xl select-none transition-opacity duration-150 hover:opacity-70 lg:px-10 py-2"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Treatments;
