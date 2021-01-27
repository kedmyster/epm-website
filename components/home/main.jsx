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

    setTimeout(() => {
      tl.add("layout");

      tl.fromTo(".header", {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 0.25
      }, "layout");
  
      tl.fromTo(".side-menu", {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 0.25
      }, "layout");
  
      tl.fromTo(".social-media", {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 0.25
      }, "layout");
  
      tl.fromTo(".main__title", {
        y: "-=5px",
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.25
      });
  
      tl.fromTo(".main__tagline", {
        y: "-=5px",
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.25
      }, "-=0.125");
    });

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

  const scrollToContent = (event) => {
    event.preventDefault();
    document.querySelector("#story").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="main"
      className="section main w-full bg-cover text-center text-white relative lg:h-screen lg:-mt-20"
      data-side-menu-color="light"
      data-side-menu-visibility="visible"
    >
      <div className="absolute w-full h-full">
        {isMobile && (
          <img
            src="/img/mobile/hero@3x.jpg"
            alt=""
            className="inset-0"
          />
        )}
        {isDesktop && (
          <img
            src="/img/desktop/hero@2x.jpg"
            alt=""
            className="inset-0"
          />
        )}
      </div>
      <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-8 py-8 absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 bottom-36 lg:bottom-10">
        <h1 className="main__title font-title text-4xl lg:text-8xl tracking-wide mb-4 lg:mb-64">
          Medicines to All.
        </h1>
        <p className="main__tagline lg:text-3xl lg:font-light">
          New generation of prescription medications
        </p>
        <Image src="/img/mobile/1.jpg" alt="" width="1" height="1" />
      </div>
      <div className="scroll-to-content absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a
          href="#story"
          onClick={scrollToContent}
          className="transition-opacity duration-150 hover:opacity-70"
        >
          <Image src="/img/icons/arrow_down.svg" width="28" height="16" />
        </a>
      </div>
    </section>
  );
}

export default Main;
