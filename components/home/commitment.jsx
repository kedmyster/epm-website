import { useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import SectionHeader from "../shared/SectionHeader";
import Button from "../shared/Button";

function Commitment() {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

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

  return (
    <section
      id="commitment"
      className="section commitment"
      data-side-menu-label="Our commitment"
      data-side-menu-color="light"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      {isMobile && (
        <div>
          <div className="items relative text-white bg-gray-300 w-full text-center flex flex-col items-center h-2/3-screen">
            <div className="absolute w-full h-full">
              <Image
                src="/img/mobile/homepage/our-commitment/our-commitment@2x.jpg"
                alt="Developing Safer Treatments"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
            <div className="animate opacity-0 text-white flex-grow pt-8">
              <SectionHeader name="" title={<h2> We believe in</h2>} />
            </div>
            <div className="animate opacity-0 container relative mx-auto px-8 py-8 flex w-full">
              <div className="item text-center w-1/3">
                <div className="item-image h-14 flex items-center justify-center">
                  <Image
                    src="/img/icons/homepage/our-commitment/alternative-to-steroids.svg"
                    alt="Alternative to Steroids"
                    width="69"
                    height="26"
                  />
                </div>
                <div className="item__title text-center text-sm font-title mt-1">
                  Alternative to Steroids
                </div>
              </div>
              <div className="item text-center w-1/3 border-l-0.5 border-r-0.5 border-white">
                <div className="item-image h-14 flex items-center justify-center">
                  <Image
                    src="/img/icons/homepage/our-commitment/affordable.svg"
                    alt="Affordable Drugs"
                    width="49"
                    height="49"
                  />
                </div>
                <div className="item__title text-center text-sm font-title mt-1">
                  Affordable Drugs
                </div>
              </div>
              <div className="item text-center w-1/3">
                <div className="item-image h-14 flex items-center justify-center">
                  <Image
                    src="/img/icons/homepage/our-commitment/minimal-side-effects.svg"
                    alt="Minimal Side Effects"
                    width="43"
                    height="36"
                  />
                </div>
                <div className="item__title text-center text-sm font-title mt-1 px-4 lg:px-0">
                  Minimal Side Effects
                </div>
              </div>
            </div>
          </div>
          <div className="lg:h-1/3-screen">
            <div className="container mx-auto px-8 py-8">
              <div className="mb-6">
                <SectionHeader
                  name="Our Commitment"
                  title={<h2>Developing Safer Treatments</h2>}
                />
              </div>
              <div className="text lg:w-103">
                <p>
                  EPM is committed to developing a series of new medicinal
                  solutions based on cannabinoid acids. We believe that
                  providing alternative and better treatments to a wide range of
                  patients is our mission, and that cannabinoid acid-based
                  treatments are the healthful alternative to existing products
                  in the market.
                </p>
              </div>
              <div className="button pt-10">
                <Button href="/science/#main" style="dark">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {(isTablet || isDesktop) && (
        <div className="relative h-screen text-white flex flex-col justify-between">
          <div className="absolute w-full h-full">
            <Image
              src="/img/desktop/homepage/our-commitment/our-commitment@2x.jpg"
              alt="Developing Safer Treatments"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
          <div className="container relative mx-auto px-8 pt-8 text-center">
            <SectionHeader
              name="Our Commitment"
              title={<h2>Developing Safer Treatments</h2>}
            />
          </div>
          <div className="animate opacity-0 container relative lg:w-container mx-auto px-8 flex content-center justify-center w-full h-auto space-x-10">
            <div className="item w-1/3 text-center">
              <div className="item-image lg:w-32 lg:h-24 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <Image
                  src="/img/icons/homepage/our-commitment/alternative-to-steroids.svg"
                  alt="Alternative to steroids"
                  width="130"
                  height="49"
                />
              </div>
              <div className="item__title text-center text-2xl font-title mt-6 px-10 h-16">
                Alternative to steroids
              </div>
              <div className="item-text text-center text-sm font-light mt-1">
                <p>
                  EPM’s responsibility and mission is to offer valid and quality
                  alternatives to existing solutions in the market for a wide
                  range of medical conditions.
                </p>
              </div>
            </div>
            <div className="item w-1/3 text-center">
              <div className="item-image lg:w-32 lg:h-24 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <Image
                  src="/img/icons/homepage/our-commitment/minimal-side-effects.svg"
                  alt="Minimal side effects"
                  width="82"
                  height="67"
                />
              </div>
              <div className="border-l-0.5 border-r-0.5 border-white border-box">
                <div className="item__title text-center text-2xl font-title mt-6 px-10 h-16 ">
                  Minimal side
                  <br /> effects
                </div>
                <div className="item-text text-center text-sm font-light px-10 mt-1">
                  <p>
                    We are committed to creating safe solutions ensuring minimal
                    side effects with maximal benefits.
                  </p>
                </div>
              </div>
            </div>
            <div className="item w-1/3 text-center">
              <div className="item-image lg:w-32 lg:h-24 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <Image
                  src="/img/icons/homepage/our-commitment/affordable.svg"
                  alt="Affordable Drugs"
                  width="93"
                  height="93"
                />
              </div>
              <div className="item__title text-center text-2xl font-title mt-6 px-10 h-16">
                Affordable Drugs
              </div>
              <div className="item-text text-center text-sm font-light mt-1">
                <p>
                  The low production cost will allow us to offer a competitive
                  price that will generate affordable medicine reaching
                  countless patients.
                </p>
              </div>
            </div>
          </div>
          <div className="container relative mx-auto text-center px-8 py-8">
            <div className="text animate opacity-0 font-light mx-auto lg:w-105">
              <p>
                EPM is committed to developing a series of new medicinal
                solutions based on cannabinoid acids. We believe that providing
                alternative and better treatments to a wide range of patients is
                our mission, and that cannabinoid acid-based treatments are the
                healthful alternative to existing products in the market.
              </p>
            </div>
            <div className="button animate opacity-0 pt-10">
              <Button href="/science/#main" style="light">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Commitment;
