import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { gsap } from "gsap";
import Button from "../shared/Button";
import SectionHeader from "../shared/SectionHeader";
import {
  SliderCustomPreviousArrow,
  SliderCustomNextArrow,
} from "../shared/carousel";

function Solution({ data }) {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const SLIDER_SOLUTION_CONFIG = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderCustomNextArrow color="light" />,
    prevArrow: <SliderCustomPreviousArrow color="light" />,
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
    gsap.fromTo(
      ".scroll-to-content",
      { opacity: 0.5 },
      {
        opacity: 1,
        duration: 3,
        y: "-=10px",
        yoyo: true,
        repeat: -1,
        ease: "easeInOut",
      }
    );
  }, []);

  return (
    <section
      id="solution"
      className="section solution bg-white relative w-full flex flex-wrap border-b-1 border-epm-gray-700 lg:flex-row-reverse lg:h-screen"
      data-side-menu-label="Our Solution"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      <div className="w-full lg:w-7/12">
        <Slider {...SLIDER_SOLUTION_CONFIG}>
          {data.slides.map((slide) => {
            return (
              <div className="image relative lg:flex-grow lg:h-screen">
                {isMobile && (
                  <Image
                    loading="eager"
                    src={slide.images.mobile}
                    alt=""
                    width={375}
                    height={500}
                    layout="intrinsic"
                    quality={100}
                  />
                )}
                {isDesktop && (
                  <Image
                    loading="eager"
                    src={slide.images.desktop}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                )}
                <div className="button absolute left-1/2 transform -translate-x-1/2  bottom-8">
                  <Button
                    className="cursor-pointer inline-block w-48 text-center uppercase border-3 rounded-3xl select-none transition-colors duration-150 lg:px-10 py-2 border-white text-white hover:bg-epm-yellow hover:border-epm-yellow"
                    href="#"
                    onClick={(event) => toggleLearnMore(event)}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="lg:flex-shrink-0 lg:pl-56 lg:w-5/12">
        <div className="container px-8 lg:pr-0 py-8 lg:max-w-none lg:w-101 ">
          <div className="mb-6 lg:mb-0">
            <SectionHeader
              name="Our innovation"
              title={<h2>The Solution</h2>}
            />
          </div>
          <div className="text lg:text-lg lg:w-96 lg:mt-6">
            <p className="mb-4">
              Using proprietary innovative technology, EPM created a
              comprehensive and fully-protected portfolio of Pharmaceutical
              solutions, which are potential alternative to steroids and other
              treatments. EPM’s synthetic cannabinoid acid based products are
              protected, potent and industrially reproducible to ensure all
              pharmaceutical challenges are resolved.
            </p>
            <p>
              Although the Pharmaceutical industry and regulatory institutions
              have excepted cannabis based medicines, the true potential of
              cannabinoids remains unlock. The disparity in the required potency
              for treatments, the requirements of IP protection for
              pharmaceutical solutions, and the consistency required for mass
              production of medicines are the main challenges the cannabis
              industry is facing. Potency- Consistency- Protection-
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
