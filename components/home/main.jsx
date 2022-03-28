import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { gsap } from "gsap";
import Link from "next/link";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";

import Button from "../shared/Button";

function Main({ data }) {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const intl = useIntl();
  const router = useRouter();

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
      className="section main w-full bg-cover text-center  relative lg:h-screen"
      data-side-menu-color="light"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="hidden"
    >
      <div className="relative">
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
        <div className="banner text-center bg-epm-yellow absolute top-[62px] lg:top-1/2 lg:-translate-y-1/2 lg:left-0 w-full z-10">
          <div className="container mx-auto py-4 xl:py-8 2xl:py-[33px] px-8">
            <div className="font-title text-2xl 2xl:text-3xl font-bold mb-2 2xl:leading-10">
              {router.locale === "en" && (
                <span>
                  EPM’s accessible IPO is open! Visit Fundit site,
                  <br />
                  read the prospectus, and make an educated decision.
                </span>
              )}
              {router.locale === "he" && (
                <span>
                  epm החלה בהנפקה נגישה לכולם - היכנסו לאתר,
                  <br />
                  קראו את התשקיף וקבלו החלטה מושכלת
                </span>
              )}
            </div>
            {/*<div className="text-epm-base leading-normal 2xl:text-lg">
              {router.locale === "en" && (
                <span>
                  Click on this link, read the prospectus an make an educated
                  decision.
                </span>
              )}
              {router.locale === "he" && (
                <span>לחצו על הלינק, קראו את התשקיף וקבלו החלטה מושכלת.</span>
              )}
              </div> */}
            <div className="button pt-4">
              <Button
                href={
                  router.locale === "en"
                    ? "https://invest.fundit.co.il/project/2066"
                    : "https://invest.fundit.co.il/project/2066"
                }
                target="_blank"
                style="white"
              >
                {router.locale === "en" && <span>Click Here</span>}
                {router.locale === "he" && <span>לחצו כאן</span>}
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full py-12">
          <div className="container mx-auto px-8 py-8 text-white ">
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
