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

function RaphaelMechoulam() {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const SLIDER_RAPHAEL_MECHOULAM_CONFIG = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderCustomNextArrow color="dark" />,
    prevArrow: <SliderCustomPreviousArrow color="dark" />,
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

  const mechoulam = [
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-01@3x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-01.jpg",
      },
      label: "Label 1",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-02@3x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-02.jpg",
      },
      label: "Label 2",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-03@3x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-03.jpg",
      },
      label: "Label 3",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-04@3x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-04.jpg",
      },
      label: "Label 4",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-05@3x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-05.jpg",
      },
      label: "Label 5",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-06@3x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-06.jpg",
      },
      label: "Label 6",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-07@3x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-07.jpg",
      },
      label: "Label 7",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-08@3x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-08.jpg",
      },
      label: "Label 8",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-09@3x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-09.jpg",
      },
      label: "Label 9",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-10@3x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-10.jpg",
      },
      label: "Label 10",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-11@3x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-11.jpg",
      },
      label: "Label 11",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-12@3x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-12.jpg",
      },
      label: "Label 12",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-13@3x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-13.jpg",
      },
      label: "Label 13",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-14@3x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-14.jpg",
      },
      label: "Label 14",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-15@3x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-15.jpg",
      },
      label: "Label 15",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-16@3x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-16.jpg",
      },
      label: "Label 16",
    },
  ];

  return (
    <section
      id="raphael-mechoulam"
      className="section raphael-mechoulam bg-white lg:flex lg:flex-wrap lg:flex-row-reverse lg:h-screen lg:overflow-y-hidden"
      data-side-menu-label="Prof. Mechoulam Biography"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      <div className="items animate text-white text-center lg:w-6/12 2xl:w-7/12">
        <Slider {...SLIDER_RAPHAEL_MECHOULAM_CONFIG}>
          {mechoulam.map((item, index) => {
            return (
              <div className="item cursor-pointer">
                <div className="group relative text-center w-full flex flex-wrap content-end lg:transition-all lg:duration-500 lg:ease-in-out lg:h-screen">
                  <div className="w-full h-full flex items-end justify-center">
                    {(isMobile || isTablet) && (
                      <Image
                        priority={true}
                        src={item.images.mobile}
                        alt=""
                        width={452}
                        height={601}
                        objectFit="cover"
                        quality={100}
                      />
                    )}
                    {(isDesktop) && (
                      <Image
                        priority={true}
                        src={item.images.desktop}
                        alt=""
                        width={902}
                        height={902}
                        objectFit="contain"
                        quality={100}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="lg:pl-44 xl:pl-56 pt-20 lg:pt-0 lg:w-6/12 2xl:w-5/12 lg:h-screen overflow-y-hidden lg:overflow-y-auto">
        <div className="container lg:w-64 xl:w-80 2xl:w-96 px-8 lg:pl-0 py-8">
          <SectionHeader
            name={<span className="animate">Raphael Mechoulam</span>}
            title={
              <h2 className="animate">
                The Godfather of
                <br />
                Cannabis Science
              </h2>
            }
          />
          <div className="text lg:text-epm-base animate mt-6">
            <p>
              Read on about the inspiring life of the godfather
              <br />
              of cannabis science
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RaphaelMechoulam;
