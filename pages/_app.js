import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import Header from "../components/layout/header.jsx";
import Footer from "../components/layout/footer.jsx";
import SideMenu from "../components/layout/sideMenu.jsx";
import SocialMedia from "../components/layout/socialMedia.jsx";

import "../styles/globals.css";
import "tailwindcss/tailwind.css";

gsap.registerPlugin(ScrollTrigger);

function MyApp({ Component, pageProps }) {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const animateSectionContent = (section) => {
    if (section) {
      if (!section.id) {
        return;
      }

      const tlAnimateContent = gsap.timeline({
        scrollTrigger: {
          trigger: `#${section.id}`,
          start: "top-=50%",
        },
      });

      tlAnimateContent.fromTo(
        `#${section.id} .animate`,
        {
          y: "+=20px",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
        }
      );
    }
  };

  const animateSectionSnapping = () => {
    try {
      const instance = new PanelSnap({
        container: document.body,
        panelSelector: '.section',
        directionThreshold: window.innerHeight / 5 ,
        delay: 0,
        duration: 150,
        easing: function(t) { return t },
      });
    } catch(ex) {
      // 
    }
  }

  const utils = {
    animateSectionContent,
    animateSectionSnapping,
  };

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
    const tl = gsap.timeline();

    setTimeout(() => {
      tl.add("layout");

      tl.fromTo(".header:not(.header--fixed)", {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 0.1
      }, "layout");
  
      tl.fromTo(".side-menu", {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 0.1
      }, "layout");
  
      tl.fromTo(".social-media", {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 0.1
      }, "layout");

      const sections = Array.from(document.querySelectorAll(".section"));

      sections.forEach((section) => {
        utils.animateSectionContent(section);
      });
    });
  }, []);

  useEffect(() => {
    if (isDesktop || isTablet) {
      utils.animateSectionSnapping();
    }
  }, [isDesktop, isTablet]);

  return (
    <div className="app">
      <Header/>
      <Component {...pageProps} />
      {(isTablet|| isDesktop) && <SideMenu/>}
      {(isTablet|| isDesktop) && <SocialMedia/>}
      <Footer/>
    </div>
  );
}

export default MyApp;
