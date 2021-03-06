import Image from "next/image";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useWindowWidth } from "@react-hook/window-size/throttled";

function Footer({}) {
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const tl = gsap.timeline();

    tl.add("contact-form-submit");
    tl.fromTo(
      ".contact__form",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 0.25,
      },
      "contact-form-submit"
    );
    tl.fromTo(
      ".contact__thanks",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.25,
        zIndex: 11,
      },
      "contact-form-submit"
    );
  };

  const scrollToHome = (event) => {
    event.preventDefault();
    document.querySelector("#main").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="section bg-epm-yellow min-h-screen lg:flex lg:flex-wrap lg:content-center"
      data-side-menu-visibility="hidden"
      data-logo-color="dark"
    >
      <div className="animate opacity-0 container mx-auto min-h-screen lg:min-h-0 lg:h-103 px-8 lg:px-16 xl:px-24 2xl:px-8 pt-12 pb-4 lg:py-8 lg:pl-44 xl:pl-56 2xl:pl-8 lg:flex lg:flex-col lg:justify-between">
        <div className="lg:flex lg:flex-row lg:justify-between relative">
          <div className="contact__form flex-grow lg:flex-grow-0 relative z-10 lg:w-56 xl:w-96 2xl:w-109 xl:pr-0">
            <div className="mb-4 lg:mb-8">
              <h2 className="font-title text-4.5xl lg:text-6xl xl:text-5.5xl 2xl:text-7.5xl leading-snug lg:leading-normal xl:leading-snug text-epm-gray-700">
                Make a Change with Us
              </h2>
            </div>
            {/*<div className="mb-8 lg:mb-0">
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className="mb-6 leading-8">
                  <input
                    type="email"
                    placeholder="The latest updates directly to your inbox"
                    className="w-full font-light rounded-3xl px-5 py-2"
                  />
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="w-full lg:w-auto font-title text-center uppercase transition-opacity duration-150 hover:opacity-70 bg-epm-gray-700 text-xl border-3 border-epm-gray-700 text-white font-light rounded-3xl lg:px-16 py-1"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div> */}
          </div>
          <div className="contact__thanks mb-12 opacity-0 absolute top-0 left-0 z-0">
            <div className="mb-8">
              <h2 className="font-title text-4.5xl lg:text-6xl xl:text-5.5xl 2xl:text-7.5xl leading-snug lg:leading-normal xl:leading-snug text-white">
                Great :)
                <br />
                Thank You!
              </h2>
            </div>
            <div>
              <a
                href="#main"
                onClick={(event) => scrollToHome(event)}
                className="font-title text-md text-epm-gray-700 underline uppercase"
              >
                Back home
              </a>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-grow">
              <div className="mb-4 leading-8">
                <div className="text-white font-bold uppercase">Information</div>
                <div className="">
                  <a
                    href="mailto:info@epmip.com"
                    className="underline transition-opacity duration-150 hover:opacity-70"
                  >
                    info@epmip.com
                  </a>
                </div>
                <div className="">
                  Investor Relations:{" "}
                  <a
                    href="mailto:ir@epmip.com"
                    className="underline transition-opacity duration-150 hover:opacity-70"
                  >
                    ir@epmip.com
                  </a>
                </div>
                <div className="">
                  Media:{" "}
                  <a
                    href="mailto:media@epmip.com"
                    className="underline transition-opacity duration-150 hover:opacity-70"
                  >
                    media@epmip.com
                  </a>
                </div>
              </div>
              <div>
                <div className="mb-4 leading-8">
                  <div className="text-white font-bold uppercase">US Headquarters</div>
                  <div className="">
                    1347 19th St.
                    <br />
                    Los Angeles, Santa Monica, 90404
                    <br />
                    {isMobile && (
                      <a href="tel:1 323 307 2111"> Tel: +1 (323) 307-2111</a>
                    )}
                    {!isMobile && (
                      <span>Tel: +1 (323) 307-2111</span>
                    )}
                  </div>
                </div>

                <div className="mb-4 leading-8">
                  <div className="text-white font-bold uppercase">Israel Office</div>
                  <div className="">
                    121 Menachem Begin Rd.
                    <br />
                    Tel Aviv 6701203
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:hidden">
              <div className="mb-3">
                <a
                  href="https://www.linkedin.com/company/epmip/"
                  target="_blank"
                  rel="noopener"
                  className="transition-opacity duration-150 hover:opacity-70"
                >
                  <Image
                    src="/img/icons/linkedin-dark-gray.svg"
                    width="32"
                    height="32"
                    alt="LinkedIn"
                  />
                </a>
              </div>
              <div className="mb-3">
                <a
                  href="https://twitter.com/EPMIP"
                  target="_blank"
                  rel="noopener"
                  className="transition-opacity duration-150 hover:opacity-70"
                >
                  <Image
                    src="/img/icons/twitter-dark-gray.svg"
                    width="32"
                    height="32"
                    alt="Twitter"
                  />
                </a>
              </div>
              <div className="mb-3">
                <a
                  href="https://www.youtube.com/channel/UCr8mb7WyEcxGCEXIyYS0Cog"
                  target="_blank"
                  rel="noopener"
                  className="transition-opacity duration-150 hover:opacity-70"
                >
                  <Image
                    src="/img/icons/youtube-dark-gray.svg"
                    width="32"
                    height="32"
                    alt="YouTube"
                  />
                </a>
              </div>
            </div>
          </div>
          <div id="footer_menu" className="footer-menu hidden lg:block">
            <div div className="container mx-auto px-8 lg:px-0 relative">
              <nav role="navigation">
                <ul className="leading-8">
                  <li className="font-title text-epm-gray-700 tracking-wide pb-4">
                    <a
                      href="/about"
                      className="block uppercase underline transition-opacity duration-150 hover:opacity-70"
                    >
                      About
                    </a>
                  </li>
                  <li className="font-title text-epm-gray-700 tracking-wide pb-4">
                    <a
                      href="/science"
                      className="block uppercase underline transition-opacity duration-150 hover:opacity-70"
                    >
                      Science
                    </a>
                  </li>
                  <li className="font-title text-epm-gray-700 tracking-wide pb-4">
                    <a href="/treatments" className="block uppercase underline">
                      Treatments
                    </a>
                  </li>
                  <li className="font-title text-epm-gray-700 tracking-wide pb-4">
                    <a
                      href="/media"
                      className="block uppercase underline transition-opacity duration-150 hover:opacity-70"
                    >
                      Media
                    </a>
                  </li>
                  <li className="font-title text-epm-gray-700 tracking-wide pb-4">
                    <a
                      href="/careers"
                      className="block uppercase underline transition-opacity duration-150 hover:opacity-70"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="copyright text-xs lg:text-sm font-title text-epm-gray-700">
          <a
            href="/privacy-policy"
            className="underline cursor-pointer transition-opacity duration-150 hover:opacity-70"
          >
            Privacy Policy
          </a>
          <span> | </span>
          <a
            href="/terms-of-use"
            className="underline cursor-pointer transition-opacity duration-150 hover:opacity-70"
          >
            Terms of Use
          </a>
          <span className="hidden lg:inline"> | </span>
          <span className="block mt-1.5 lg:inline-block lg:mt-0">
            Copyright ©2021 EPM Group, Inc. All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
