import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { gsap } from "gsap";
import Link from "next/link";
import { useIntl } from "react-intl";

function Main({ data }) {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const intl = useIntl();

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

  useEffect(() => {
    setTimeout(() => {
      const tl = gsap.timeline();

      tl.to(".scroll-to-content", {
        duration: 2,
        y: "-=10px",
        yoyo: true,
        repeat: -1,
        ease: "easeInOut",
      });
    });
  }, []);

  const scrollToContent = (event) => {
    event.preventDefault();
    document.querySelector("#story").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="main"
      className="section main w-full bg-cover text-center text-white relative lg:h-screen"
      data-side-menu-color="light"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="hidden"
    >
      <div>
        <div className="video">
          {isMobile && (
            <video
              width="375"
              height="812"
              poster="/img/mobile/homepage/hero@2x.webp"
              className="inset-0 w-full h-screen object-cover"
              autoPlay
              playsInline
              muted
              loop
            >
              <source src="/videos/mobile/home.mp4" type="video/mp4" />
              <Image
                loading="eager"
                src="/img/mobile/homepage/hero@2x.jpg"
                alt={intl.formatMessage({
                  id: "home.hero.title",
                  defaultMessage: "Medicine to All",
                })}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </video>
          )}
          {(isTablet || isDesktop) && (
            <video
              width="1920"
              height="1080"
              poster="/img/desktop/homepage/hero@2x.webp"
              className="inset-0 w-full h-screen object-cover"
              autoPlay
              playsInline
              muted
              loop
            >
              <source src="/videos/desktop/home.mp4" type="video/mp4" />
              <Image
                loading="eager"
                src="/img/desktop/homepage/hero@2x.jpg"
                alt={data.name}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </video>
          )}
        </div>
        <div className="absolute bottom-0 w-full py-12">
          <div className="container mx-auto px-8 py-8 ">
            <p className="main__text animate opacity-0 font-title lg:text-lg lg:w-sm-container lg:mx-auto mb-[30px] z-10lg:mb-[45px]">
              {data.text}
            </p>
            <h1 className="main__title animate opacity-0 font-title text-4xl lg:text-6xl lg:leading-tight tracking-wide mb-4">
              {data.name}
            </h1>
            <p className="main__tagline animate opacity-0 lg:text-3xl lg:font-light lg:w-sm-container lg:mx-auto">
              {data.title}
            </p>
          </div>
          <div className="scroll-to-content animate opacity-0 ">
            <a
              href="#story"
              className="transition-opacity duration-150 hover:opacity-70"
              onClick={scrollToContent}
            >
              <Image
                src="/img/icons/arrow_down.svg"
                alt={data.title}
                width="28"
                height="16"
                loading="eager"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
