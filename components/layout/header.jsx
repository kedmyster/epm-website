import Image from "next/image";
import { useState, useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { gsap } from "gsap";

function Header() {
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

  const toggleMenu = (event, menu = null) => {
    const menuItem = event.target.closest(".menu-item");

    event.preventDefault();

    if (!menu) {
      menu = document.querySelector("#menu");
    }

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");

      if (menuItem) {
        menuItem.classList.add("menu-item--open");
      }

      gsap.to(".middle",{
        opacity : 0,
        duration: 0.15,
      });
  
      gsap.to('.top',{
        rotation: 45,
        duration: 0.3,
        ease: "back.inOut(1)",
        x: "+=2",
        scaleX: 1.05,
      })
  
      gsap.to('.bottom',{
        rotation: -45,
        duration: 0.3,
        ease: "back.inOut(1)",
        x: "+=2",
        scaleX: 1.05,
      });
    } else {
      menu.classList.add("hidden");

      if (menuItem) {
        menuItem.classList.remove("menu-item--open");
      }

      gsap.to(".middle",{
        opacity : 1,
        duration: 0.15,
        delay: 0.15,
      });
  
      gsap.to('.top',{
        rotation: 0,
        duration: 0.3,
        ease: "back.inOut(1)",
        x: "-=2",
        scaleX: 1,
      })
  
      gsap.to('.bottom',{
        rotation: 0,
        duration: 0.3,
        ease: "back.inOut(1)",
        x: "-=2",
        scaleX: 1,
      });
    }
  };

  return (
    <>
      <header className="header bg-transparent py-4 lg:py-6  z-10 fixed top-0 lg:relative w-full lg:w-auto">
        <div
          div
          className="mx-auto px-8 flex flex-row items-center relative "
        >
          <div className="logo flex-grow lg:flex-grow-0 lg:fixed">
            <a
              href="/"
              className="transition-opacity duration-150 hover:opacity-70"
            >
              {isMobile && (
                <Image
                  src="/img/icons/logo.svg"
                  width="66.051"
                  height="20.674"
                  alt=""
                />
              )}

              {isDesktop && (
                <Image
                  src="/img/icons/logo.svg"
                  width="118.8"
                  height="36"
                  alt=""
                />
              )}
            </a>
          </div>
          <div className="desktop-menu hidden lg:block flex-grow text-center lg:ml-32">
            <nav role="navigation">
              <ul>
                <li className="menu-item inline-block pr-12 py-1 relative">
                  <a href="/about" className="uppercase">
                    About
                  </a>
                  <ul className="sub-menu font-light text-white text-left absolute top-8 left-0 w-28">
                    <li className="border-b border-white pb-3 mb-3">
                      <a href="/about/#story" className="transition-opacity duration-150 hover:opacity-70">Our story</a>
                    </li>
                    <li className="border-b border-white pb-3 mb-3">
                      <a href="/about/#leadership" className="transition-opacity duration-150 hover:opacity-70">Leadership</a>
                    </li>
                    <li>
                      <a href="/about/#careers" className="transition-opacity duration-150 hover:opacity-70">Careers</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item inline-block pr-12 py-1 relative">
                  <a href="/science" className="uppercase">
                    Science
                  </a>
                </li>
                <li className="menu-item inline-block pr-12 py-1 relative">
                  <a href="/treatments" className="uppercase">
                    Treatments
                  </a>
                </li>
                <li className="menu-item inline-block relative">
                  <a href="/contact" className="uppercase">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="desktop-menu hidden lg:block">
            <nav role="navigation">
              <ul>
                <li className="menu-item inline-block pr-12 py-1 relative">
                  <a href="/leadership" className="uppercase">
                    Leadership
                  </a>
                </li>
                <li className="menu-item inline-block relative">
                  <a href="/media" className="uppercase">
                    Media
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="menu-button lg:hidden">
            <button
              type="button"
              onClick={(event) => toggleMenu(event)}
              className="transition-opacity duration-150 hover:opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="#ffffff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="top"
                  d="M4 6h16M4"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="middle"
                  d="M4 12h16M4"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="bottom"
                  d="M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        id="menu"
        className="menu mobile-menu fixed inset-x-0 z-10 bg-white bg-opacity-85 hidden mt-15"
      >
        <div div className="container mx-auto p-8 relative">
          <nav role="navigation">
            <ul>
              <li className="menu-item font-title text-epm-dark-gray tracking-wide border-b-1 border-epm-light-gray mb-3 pb-3">
                <a
                  href="/about"
                  className="block uppercase pointer relative"
                  onClick={(event) =>
                    toggleMenu(event, document.querySelector(".menu--about"))
                  }
                >
                  About
                </a>
                <ul className="menu--about hidden">
                  <li className="text-sm my-2">
                    <a href="/about/#story">Our story</a>
                  </li>
                  <li className="text-sm my-2">
                    <a href="/about/#leadership">Leadership</a>
                  </li>
                  <li className="text-sm my-2">
                    <a href="/about/#careers">Careers</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item font-title text-epm-dark-gray tracking-wide border-b-1 border-epm-light-gray mb-3 pb-3">
                <a href="/science" className="block uppercase pointer relative">
                  Science
                </a>
              </li>
              <li className="menu-item font-title text-epm-dark-gray tracking-wide border-b-1 border-epm-light-gray mb-3 pb-3">
                <a
                  href="/treatments"
                  className="block uppercase pointer relative"
                >
                  Treatments
                </a>
              </li>
              <li className="font-title text-epm-dark-gray tracking-wide  border-b-1 border-epm-light-gray mb-3 pb-3">
                <a href="/contact" className="block uppercase pointer relative">
                  Contact
                </a>
              </li>
              <li className="font-title text-epm-dark-gray tracking-wide">
                <a href="/media" className="block uppercase pointer relative">
                  Media
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
