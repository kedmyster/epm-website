import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { useNextSanityImage } from 'next-sanity-image';
import client from "../../client";
import SectionHeader from "../shared/SectionHeader";
import {
  SliderCustomPreviousArrow,
  SliderCustomNextArrow,
} from "../shared/carousel";

const BlockContent = require("@sanity/block-content-to-react");

function RaphaelMechoulam({data}) {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const SLIDER_RAPHAEL_MECHOULAM_CONFIG = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderCustomNextArrow color="gray" />,
    prevArrow: <SliderCustomPreviousArrow color="gray" />,
  };

  useEffect(() => {
    if (windowWidth >= 1280) {
      setIsMobile(false);
      setIsTablet(false);
      setIsDesktop(true);
    } else if (windowWidth >= 1024) {
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
        mobile: "/img/mobile/science/mechoulam/mechoulam-01@2x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-01@2x.jpg",
      },
      label: "The Godfather of Cannabis Science",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-02@2x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-02@2x.jpg",
      },
      label: "",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-03@2x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-03@2x.jpg",
      },
      label: "",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-04@2x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-04@2x.jpg",
      },
      label: "",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-05@2x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-05@2x.jpg",
      },
      label: "Born in Sofia, Bulgaria, 1930",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-06@2x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-06@2x.jpg",
      },
      label: "Received Ph.D. from Weizmann Institute, Rehovot, 1958",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-07@2x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-07@2x.jpg",
      },
      label: "Acquired first batch of cannabis for research, 1963",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-08@2x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-08@2x.jpg",
      },
      label: "Rector of the Hebrew University of Jerusalem, 1979-1982",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-09@2x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-09@2x.jpg",
      },
      label: "CBD structure, 1963",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-10@2x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-10@2x.jpg",
      },
      label: "Isolates THC in cannabis, 1964",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-11@2x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-11@2x.jpg",
      },
      label: "Discovery of the endogenous cannabinoids, 1992 and 1995",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-12@2x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-12@2x.jpg",
      },
      label: "Academic honors",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-13@2x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-13@2x.jpg",
      },
      label: "Research on stable cannabinoid acids, 2016",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-14@2x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-14@2x.jpg",
      },
      label: "Unlocks true potential of cannabinoid acids, 2019",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-15@2x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-15@2x.jpg",
      },
      label: "",
    },
    {
      images: {
        mobile: "/img/mobile/science/mechoulam/mechoulam-16@2x.jpg",
        desktop: "/img/desktop/science/mechoulam/mechoulam-16@2x.jpg",
      },
      label: "",
    },
  ];

  return (
    <section
      id="raphael-mechoulam"
      className="section raphael-mechoulam lg:flex lg:flex-wrap lg:flex-row-reverse lg:h-screen lg:overflow-y-hidden"
      data-side-menu-label="Mechoulam's Bio"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      <div className="items animate opacity-0 text-white lg:h-screen lg:w-6/12 2xl:w-7/12">
        <Slider {...SLIDER_RAPHAEL_MECHOULAM_CONFIG}>
          {mechoulam.map((item, index) => {
            return (
              <div
                className="item cursor-pointer outline-none"
                key={item.label}
              >
                <div className="group relative text-center w-full flex flex-wrap content-end lg:content-start lg:transition-all lg:duration-500 lg:ease-in-out lg:h-screen">
                  <div className="w-full h-full flex items-end lg:items-start justify-center lg:justify-start bg-epm-gray-100">
                    {isMobile && (
                      <Image
                        loading="eager"
                        src={item.images.mobile}
                        alt={item.label}
                        width={452}
                        height={601}
                        objectFit="cover"
                        quality={100}
                      />
                    )}
                    {(isTablet || isDesktop) && (
                      <Image
                        loading="eager"
                        src={item.images.desktop}
                        alt={item.label}
                        layout="fill"
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
      <div className="lg:pl-24 xl:pl-56 pt-10 md:pt-0 lg:w-6/12 2xl:w-5/12 lg:h-screen overflow-y-hidden lg:overflow-y-auto">
        <div className="container lg:w-80 2xl:w-96 px-8 lg:pl-0 py-8">
          <SectionHeader
            name={<span>{data.name}</span>}
            title={
              <h2 className="lg:pr-26">
                {data.title}
              </h2>
            }
          />
          <div className="text lg:text-epm-base animate opacity-0 mt-6">
            <BlockContent blocks={data.content} className="external-text" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RaphaelMechoulam;
