import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";

function Essence() {
  const windowWidth = useWindowWidth();
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

  return (
    <section id="essence" className="essence">
      <div
        className="items relative text-white bg-gray-300 w-full bg-cover text-center lg:flex lg:flex-wrap"
      >
        <div className="absolute w-full h-full">
          {isMobile && (
            <Image
              src="/img/mobile/treatments@3x.png"
              alt=""
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          )}
          {isDesktop && (
            <Image
              src="/img/desktop/treatments@2x.png"
              alt=""
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          )}
        </div>
        <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
        <div className="container relative mx-auto px-8 py-8 flex flex-wrap content-end lg:content-center lg:justify-center w-full lg:x-auto h-full lg:h-auto lg:space-x-20">
          <div className="item text-center w-1/3 lg:w-60 lg:text-left lg:p-5">
            <div className="item-image">
              {/*<Image src="/img/mobile/4" alt="" width="1" height="1"/>*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="-12 0 48 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0.5}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <div className="item__title text center text-sm font-title mt-1">
              Alternative to Steroids
            </div>
          </div>
          <div className="item text-center w-1/3 lg:w-60 border-l-0.5 border-r-0.5 border-white lg:text-left lg:p-5">
            <div className="item-image">
              {/*<Image src="/img/mobile/5.png" alt="" width="1" height="1"/>*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="-12 0 48 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0.5}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <div className="item__title text-center text-sm font-title mt-1">
              Affordable
            </div>
          </div>
          <div className="item text-center w-1/3 lg:w-60  lg:text-left lg:p-5">
            <div className="item-image">
              {/*<Image src="/img/mobile/6.png" alt="" width="1" height="1"/>*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="-12 0 48 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0.5}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <div className="item__title text-center text-sm font-title mt-1 px-4 lg:px-0">
              No Side Effects
            </div>
          </div>
        </div>
      </div>
      <div className="lg:h-1/3-screen">
        <div className="container mx-auto px-8 py-8">
          <div className="font-title text-xs uppercase section-name">
            Our Essence
          </div>
          <div className="pb-6 section-title">
            <h2 className="font-title text-2xl">Developing Safer Treatments</h2>
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
              className="inline-block w-full lg:w-auto text-center uppercase border-3 border-epm-dark-gray rounded-3xl lg:px-10 py-2"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Essence;
