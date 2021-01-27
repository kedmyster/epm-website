import { useState, useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import Image from "next/image";
import Head from "next/head";
import Header from "../components/layout/header.jsx";
import Footer from "../components/layout/footer.jsx";
import SideMenu from "../components/layout/sideMenu.jsx";
import SocialMedia from "../components/layout/socialMedia.jsx";

import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
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
    <>
      <Header/>
      {isDesktop && <SideMenu/>}
      {isDesktop && <SocialMedia/>}
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
