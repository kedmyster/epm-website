import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { gsap } from "gsap";

function Main() {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

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
              poster="/img/mobile/homepage/hero@2x.jpg"
              className="inset-0 w-full h-screen object-cover"
              autoPlay
              playsInline
              muted
              loop
            >
              <source src="/videos/mobile/home.mp4" type="video/mp4" />
              <Image
                priority={true}
                src="/img/mobile/homepage/hero@2x.jpg"
                alt=""
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
              poster="/img/desktop/homepage/hero@2x.jpg"
              className="inset-0 w-full h-screen object-cover"
              autoPlay
              playsInline
              muted
              loop
            >
              <source src="/videos/desktop/home.mp4" type="video/mp4" />
              <Image
                priority={true}
                src="/img/desktop/homepage/hero@2x.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </video>
          )}
        </div>
        <div className="absolute w-full h-full inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 bottom-24 lg:bottom-16 lg:w-full">
          <div className="container mx-auto px-8 py-8 ">
            <h1 className="main__title animate opacity-0 opacity-0 font-title text-4xl lg:text-6xl lg:leading-tight tracking-wide mb-4">
              Medicine to All
            </h1>
            <p className="main__tagline animate opacity-0 opacity-0 lg:text-3xl lg:font-light">
              Novel therapeutics from synthetic cannabinoid acids{" "}
              {(isTablet || isDesktop) && (
               <br/>
              )}
              for a healthier and brighter future
            </p>
          </div>
        </div>

        <div className="scroll-to-content animate opacity-0 opacity-0 absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <a
            href="#story"
            onClick={scrollToContent}
            className="transition-opacity duration-150 hover:opacity-70"
          >
            <Image src="/img/icons/arrow_down.svg" width="28" height="16" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Main;
