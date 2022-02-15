import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { gsap } from "gsap";
import Link from "next/link";

function Main({ data }) {
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

  useEffect(() => {
    gsap.fromTo(
      ".scroll-to-content",
      { opacity: 0.5 },
      {
        opacity: 1,
        duration: 2,
        y: "-=10px",
        yoyo: true,
        repeat: -1,
        ease: "easeInOut",
      }
    );
  }, []);

  const scrollToContent = (event) => {
    event.preventDefault();
    document.querySelector("#current-developments").scrollIntoView({
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
      <div className="video">
        {isMobile && (
          <video
            width="375"
            height="812"
            poster="/img/mobile/treatments/hero@2x.jpg"
            className="inset-0 w-full h-screen object-cover"
            autoPlay
            playsInline
            muted
            loop
          >
            <source src="/videos/mobile/treatments.mp4" type="video/mp4" />
            <Image
              priority="true"
              src="/img/mobile/treatments/hero@2x.jpg"
              alt={data.title}
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
            poster="/img/desktop/treatments/hero@2x.jpg"
            className="inset-0 w-full h-screen object-cover"
            autoPlay
            playsInline
            muted
            loop
          >
            <source src="/videos/desktop/treatments.mp4" type="video/mp4" />
            <Image
              priority="true"
              src="/img/desktop/treatments/hero@2x.jpg"
              alt={data.title}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </video>
        )}
      </div>
      {/*<div className="absolute w-full h-full inset-0 bg-black bg-opacity-50"></div>*/}
      <div className="absolute bottom-0 w-full py-12">
        <div className="container mx-auto px-8 py-8 relative lg:z-10">
          <p className="animate opacity-0 text-xs uppercase font-title mb-4 lg:hidden">
            {data.name}
          </p>
          <h1 className="animate opacity-0 font-title text-4xl lg:text-6xl lg:leading-tight tracking-wide lg:w-container lg:mx-auto">
            {data.title}
          </h1>
        </div>
        <div className="scroll-to-content">
          <Link href="#story">
            <a
              className="transition-opacity duration-150 hover:opacity-70"
              onClick={scrollToContent}
            >
              <Image
                src="/img/icons/arrow_down.svg"
                alt="Current Developments"
                width="28"
                height="16"
                loading="eager"
              />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Main;
