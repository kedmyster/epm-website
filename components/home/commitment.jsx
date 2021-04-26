import { useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useNextSanityImage } from "next-sanity-image";
import classNames from "classnames";
import client from "../../client";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import SectionHeader from "../shared/SectionHeader";
import Button from "../shared/Button";

const BlockContent = require("@sanity/block-content-to-react");

function Commitment({ data }) {
  for (let i = 0; i < data.bullets.length; i++) {
    data.bullets[i].image = useNextSanityImage(client, data.bullets[i].icon);
  }

  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const atmosphere = {
    mobile: useNextSanityImage(client, data.mobile_image),
    desktop: useNextSanityImage(client, data.desktop_image),
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

  return (
    <section
      id="commitment"
      className="section commitment"
      data-side-menu-label={data.name}
      data-side-menu-color="light"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      {isMobile && (
        <div>
          <div className="items relative text-white bg-gray-300 w-full text-center flex flex-col justify-center items-center h-2/3-screen">
            <div className="absolute w-full h-full">
              <Image
                src={atmosphere.mobile.src}
                alt={data.title}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
            <div className="animate opacity-0 text-white pt-8">
              <SectionHeader name="" title={<h2>{data.title}</h2>} />
            </div>
            <div className="animate opacity-0 container relative mx-auto px-8 py-8 flex w-full divide-x divide-white">
              {data.bullets.map((bullet) => {
                return (
                  <div className="item text-center w-1/3">
                    <div className="item-image h-14 flex items-center justify-center">
                      <Image
                        src={bullet.image.src}
                        alt="Alternative to Steroids"
                        width="69"
                        height="26"
                      />
                    </div>
                    <div className="item__title text-center text-sm font-title mt-1">
                      {bullet.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:h-1/3-screen">
            <div className="container mx-auto px-8 py-8">
              <div className="mb-6">
                <SectionHeader name={data.name} title={<h2>{data.title}</h2>} />
              </div>
              <div className="text lg:w-103">
                <BlockContent blocks={data.content} className="external-text" />
              </div>
              <div className="button pt-10">
                <Button href="/science/#main" style="dark">
                  {data.button}
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
              src={atmosphere.desktop.src}
              alt={data.title}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
          <div className="container relative mx-auto px-8 pt-8 text-center">
            <SectionHeader name={data.name} title={<h2>{data.title}</h2>} />
          </div>
          <div className="animate opacity-0 container relative lg:w-container mx-auto px-8 flex content-center justify-center w-full h-auto space-x-10">
            {data.bullets.map((bullet, index) => {
              return (
                <div className="item w-1/3 text-center">
                  <div className="item-image lg:w-32 lg:h-24 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                    <Image
                      src={bullet.image.src}
                      alt="Alternative to steroids"
                      width={bullet.image.width}
                      height={bullet.image.height}
                    />
                  </div>
                  <div
                    className={classNames({
                      "border-l-0.5 border-r-0.5 border-white border-box":
                        index % 2 === 1,
                    })}
                  >
                    <div className="item__title text-center text-2xl font-title mt-6 px-10 h-16">
                      {bullet.title}
                    </div>
                    <div
                      className={classNames(
                        "item-text text-center text-sm font-light mt-1",
                        { "px-10": index % 2 === 1 }
                      )}
                    >
                      <p>{bullet.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="container relative mx-auto text-center px-8 py-8">
            <div className="text animate opacity-0 font-light mx-auto lg:w-105">
              <BlockContent blocks={data.content} className="external-text" />
            </div>
            <div className="button animate opacity-0 pt-10">
              <Button href="/science/#main" style="light">
                {data.button}
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Commitment;
