import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";

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

  const scrollToContent = (event) => {
    event.preventDefault();
    document.querySelector("#story").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="main"
      className="main w-full bg-cover text-center text-white relative lg:h-screen"
    >
      <div className="absolute w-full h-full">
        {isMobile && (
          <Image
            src="/img/mobile/hero@3x.png"
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
        {isDesktop && (
          <Image
            src="/img/desktop/hero@2x.png"
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
      </div>
      <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-8 py-8 absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 bottom-36 lg:bottom-10">
        <h1 className="text-4xl lg:text-8xl tracking-wide mb-4 lg:mb-64">
          Medicines to All.
        </h1>
        <p className="lg:text-3xl lg:font-light">
          New generation of prescription medications
        </p>
        <Image src="/img/mobile/1.png" alt="" width="1" height="1" />
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <a href="#story" onClick={scrollToContent}>
          <img src="/img/icons/arrow_down.svg" />
        </a>
      </div>
    </section>
  );
}

export default Main;
