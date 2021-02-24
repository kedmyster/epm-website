import Image from "next/image";
import { useState, useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { gsap } from "gsap";
import { throttle } from "lodash";

function Header() {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  let scrollY = 0;

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
    if (isMobile) {
      document.body.addEventListener("click", (event) => {
        if (!event.target.closest(".mobile-menu")) {
          const menu = document.querySelector("#menu");

          if (!menu.classList.contains("hidden")) {
            toggleMenu(event);
          }
        }
      });

      const header = document.querySelector(".header.header--fixed");
      const main = document.querySelector(
        ".section[data-header-menu-visibility='hidden']"
      );

      if (main) {
        const rect = main.getBoundingClientRect();
        const menu = document.querySelector("#menu");

        window.addEventListener(
          "scroll",
          throttle((event) => {
            if (!menu.classList.contains("hidden")) {
              toggleMenu(event);
            }

            if (scrollY > window.scrollY) {
              if (window.scrollY > rect.bottom / 2) {
                if (!header.classList.contains("menu--shown")) {
                  openFixedMenu(event);
                }
              } else {
                closeFixedMenu(event);
              }
            } else {
              closeFixedMenu(event);
            }

            scrollY = window.scrollY;
          }, 250)
        );
      }
    }
  }, [isMobile]);

  const openFixedMenu = (event) => {
    const header = document.querySelector(".header.header--fixed");

    if (header) {
      header.classList.add("menu--shown");
  
      gsap.fromTo(
        header,
        {
          opacity: "0",
          zIndex: "0",
          translateY: "-100%",
        },
        {
          opacity: "1",
          zIndex: "11",
          translateY: "0",
          duration: 0.15,
        }
      );
    }
  };

  const closeFixedMenu = (event) => {
    const header = document.querySelector(".header.header--fixed");

    if (header) {
      header.classList.remove("menu--shown");
  
      gsap.to(header, {
        opacity: "0",
        zIndex: "0",
        translateY: "-100%",
        duration: 0.15,
      });
    }
  };

  const toggleMenu = (event) => {
    event.stopPropagation();

    const menu = document.querySelector("#menu");

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");

      gsap.to(".middle", {
        opacity: 0,
        duration: 0.15,
      });

      gsap.to(".top", {
        rotation: 45,
        duration: 0.3,
        ease: "back.inOut(1)",
        x: "+=2",
        scaleX: 1.05,
      });

      gsap.to(".bottom", {
        rotation: -45,
        duration: 0.3,
        ease: "back.inOut(1)",
        x: "+=2",
        scaleX: 1.05,
      });
    } else {
      menu.classList.add("hidden");

      gsap.to(".middle", {
        opacity: 1,
        duration: 0.15,
        delay: 0.15,
      });

      gsap.to(".top", {
        rotation: 0,
        duration: 0.3,
        ease: "back.inOut(1)",
        x: "-=2",
        scaleX: 1,
      });

      gsap.to(".bottom", {
        rotation: 0,
        duration: 0.3,
        ease: "back.inOut(1)",
        x: "-=2",
        scaleX: 1,
      });

      closeFixedMenu(event);
    }
  };

  const toggleSubMenu = (event, menu) => {
    event.preventDefault();

    const activeMenuMenu = event.target.closest(".menu-item");
    const subMenus = document.querySelectorAll(".mobile-menu .sub-menu");

    subMenus.forEach((subMenu) => {
      if (activeMenuMenu.querySelector(".sub-menu") === subMenu) {
        subMenu.parentElement.classList.toggle("menu-item--open");
        subMenu.classList.toggle("hidden");
      } else {
        subMenu.parentElement.classList.remove("menu-item--open");
        subMenu.classList.add("hidden");
      }
    });
  };

  const closeSubMenus = (event) => {
    const subMenus = document.querySelectorAll(".mobile-menu .sub-menu");

    subMenus.forEach((subMenu) => {
      subMenu.parentElement.classList.remove("menu-item--open");
      subMenu.classList.add("hidden");
    });
  };

  const goToSection = (event) => {
    if (
      event.target.nodeName === "A" &&
      event.target.href.indexOf("#") !== -1
    ) {
      const anchorId = event.target.href.split("#")[1];
      const anchorElement = document.querySelector(`#${anchorId}`);

      if (anchorElement) {
        event.preventDefault();

        document.location.hash = `#${anchorId}`;

        anchorElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }

    if (isMobile) {
      toggleMenu(event);
      closeSubMenus(event);
    }
  };

  const scrollToFooter = (event) => {
    if (isMobile) {
      toggleMenu(event, null, true);
    }

    event.preventDefault();
    document.querySelector("#footer").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="header bg-transparent py-4 lg:py-6 z-50 top-0 absolute w-full">
        <div div className="mx-auto px-8 flex flex-row items-center relative ">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="118"
                  height="36"
                  viewBox="0 0 66.051 20.674"
                >
                  <g id="Group_109" transform="translate(-400 -1163)">
                    <g id="Group_1" transform="translate(400 1163)">
                      <path
                        id="Path_1"
                        d="M317.05,102.963a5.453,5.453,0,0,1-2.748-.7,5.027,5.027,0,0,1-1.913-1.946,5.827,5.827,0,0,1-.7-2.874,6,6,0,0,1,.676-2.864,5.168,5.168,0,0,1,7.1-1.991,4.624,4.624,0,0,1,1.754,1.9,6.062,6.062,0,0,1,.621,2.776v.006a.614.614,0,0,1-.616.608h-7.431a.468.468,0,0,0-.46.41.253.253,0,0,0,0,.086,3.887,3.887,0,0,0,1.182,2.213,3.707,3.707,0,0,0,2.6.967,3.947,3.947,0,0,0,1.844-.424,4.34,4.34,0,0,0,.873-.6.681.681,0,0,1,.453-.174.645.645,0,0,1,.42.156l.152.131a.413.413,0,0,1,.107.134.661.661,0,0,1-.127.793,5.38,5.38,0,0,1-1.261.852,5.7,5.7,0,0,1-2.529.542m-.113-9.624a3.506,3.506,0,0,0-2.346.838,3.622,3.622,0,0,0-1.121,1.789.533.533,0,0,0,.327.639.308.308,0,0,0,.122.023h5.939a.216.216,0,0,0,.078-.013.44.44,0,0,0,.284-.512,3.835,3.835,0,0,0-1.033-1.908,3.106,3.106,0,0,0-2.25-.855"
                        transform="translate(-287.989 -86.963)"
                        fill="#a9acb0"
                      />
                      <path
                        id="Path_2"
                        d="M630.048,104.3a.629.629,0,0,1-.629-.629V98.575a3.472,3.472,0,0,0-2.188-3.264,3.064,3.064,0,0,0-1.084-.2,2.831,2.831,0,0,0-2.83,2.7s.006.111.006.132v5.721a.629.629,0,0,1-.629.629h-.205a.628.628,0,0,1-.628-.628V97.945c0-.021.006-.123.006-.123a2.833,2.833,0,0,0-2.83-2.714,3.287,3.287,0,0,0-2.957,1.878.14.14,0,0,0-.013.067,5.088,5.088,0,0,0-.3,1.4v5.209a.628.628,0,0,1-.629.628H614.8a.6.6,0,0,1-.6-.6V94.165a.655.655,0,0,1,.655-.655h.237a.654.654,0,0,1,.654.655v.529a.135.135,0,0,0,.223.1,4.719,4.719,0,0,1,3.068-1.137,4.275,4.275,0,0,1,3.277,1.534.36.36,0,0,0,.557,0,4.274,4.274,0,0,1,3.277-1.534,4.6,4.6,0,0,1,1.425.232,4.848,4.848,0,0,1,3.3,4.66v5.117a.628.628,0,0,1-.628.628Z"
                        transform="translate(-564.818 -88.431)"
                        fill="#a9acb0"
                      />
                      <path
                        id="Path_3"
                        d="M459.855,108.788a.655.655,0,0,1-.654-.654V94.165a.655.655,0,0,1,.654-.655h.26a.655.655,0,0,1,.655.655v.65a.135.135,0,0,0,.08.123.132.132,0,0,0,.055.012.135.135,0,0,0,.09-.035,5.119,5.119,0,0,1,.865-.636,5.935,5.935,0,0,1,5.551-.032,4.892,4.892,0,0,1,1.908,1.887,5.54,5.54,0,0,1,.694,2.78,5.477,5.477,0,0,1-.694,2.769,4.914,4.914,0,0,1-1.908,1.877,5.936,5.936,0,0,1-5.551-.032,5.129,5.129,0,0,1-.887-.654.135.135,0,0,0-.226.1v5.159a.655.655,0,0,1-.654.654Zm4.817-13.841a3.8,3.8,0,0,0-2.009.534,3.743,3.743,0,0,0-1.363,1.442,4.316,4.316,0,0,0,0,3.983,3.712,3.712,0,0,0,1.374,1.442,3.971,3.971,0,0,0,3.938.023,3.664,3.664,0,0,0,1.375-1.421,4.17,4.17,0,0,0,.5-2.036,4.217,4.217,0,0,0-.5-2.058,3.59,3.59,0,0,0-1.376-1.41,3.86,3.86,0,0,0-1.94-.5"
                        transform="translate(-422.976 -88.431)"
                        fill="#a9acb0"
                      />
                      <path
                        id="Path_4"
                        d="M50.762,39.586a1.49,1.49,0,0,0-.745-1.291l-7.663-4.424a1.49,1.49,0,0,0-1.491,0L33.2,38.3a1.513,1.513,0,0,0-.167.112,1.495,1.495,0,0,0-.579,1.179v8.848a1.507,1.507,0,0,0,.745,1.291l3.465,2,.571.33,1.671.965.571.33,1.384.8a1.512,1.512,0,0,0,1.491,0l.936-.54.675-.389,1.6-.925.571-.33,3.88-2.24a1.491,1.491,0,0,0,.745-1.291Z"
                        transform="translate(-32.456 -33.671)"
                        fill="#fff"
                      />
                      <path
                        id="Path_5"
                        d="M50.762,39.586a1.49,1.49,0,0,0-.745-1.291l-7.663-4.424a1.49,1.49,0,0,0-1.491,0L33.2,38.3a1.513,1.513,0,0,0-.167.112,1.495,1.495,0,0,0-.579,1.179v8.848a1.507,1.507,0,0,0,.745,1.291l3.465,2,.571.33,1.671.965.571.33,1.384.8a1.512,1.512,0,0,0,1.491,0l.936-.54.675-.389,1.6-.925.571-.33,3.88-2.24a1.491,1.491,0,0,0,.745-1.291Z"
                        transform="translate(-32.456 -33.671)"
                        fill="#ffd534"
                      />
                    </g>
                  </g>
                </svg>
              )}
            </a>
          </div>
          <div className="desktop-menu hidden lg:block flex-grow text-center lg:ml-32">
            <nav role="navigation">
              <ul>
                <li className="menu-item inline-block pr-12 py-1 relative">
                  <a href="/about" className="uppercase font-title">
                    About
                  </a>
                  <ul className="sub-menu font-light leading-tight text-white text-left absolute top-8 left-0 w-36">
                    <li className="mb-4">
                      <a
                        href="/about/#our-story"
                        className=""
                        onClick={(event) => goToSection(event)}
                      >
                        Our story
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="/about/#board-of-directors"
                        className=""
                        onClick={(event) => goToSection(event)}
                      >
                        Board of Directors
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="/about/#executive-leadership"
                        className=""
                        onClick={(event) => goToSection(event)}
                      >
                        Executive Leadership
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="/about/#scientific-advisory-board"
                        className=""
                        onClick={(event) => goToSection(event)}
                      >
                        Scientific Advisory Board
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item inline-block pr-12 py-1 relative">
                  <a href="/treatments" className="uppercase font-title">
                    Treatments
                  </a>
                  <ul className="sub-menu font-light leading-tight	text-white text-left absolute top-8 left-0 w-36">
                    <li className="mb-4">
                      <a
                        href="/treatments/#inflammatory-bowel-disease"
                        className=""
                        onClick={(event) => goToSection(event)}
                      >
                        Inflammatory Bowel Disease
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="/treatments/#psoriasis"
                        className=""
                        onClick={(event) => goToSection(event)}
                      >
                        Psoriasis
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="/treatments/#acute-respiratory-distress-syndrome"
                        className=""
                        onClick={(event) => goToSection(event)}
                      >
                        Acute Respiratory Distress Syndrome
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item inline-block pr-12 py-1 relative">
                  <a href="/science" className="uppercase font-title">
                    Science
                  </a>
                  <ul className="sub-menu font-light leading-tight text-white text-left absolute top-8 left-0 w-36">
                    <li className="mb-3">
                      <a
                        href="/science/#cannabinoids"
                        className=""
                        onClick={(event) => goToSection(event)}
                      >
                        About Cannabiniod Acids
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        href="/science/#pipeline"
                        className=""
                        onClick={(event) => goToSection(event)}
                      >
                        Pipeline
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        href="/science/#collaborations"
                        className=""
                        onClick={(event) => goToSection(event)}
                      >
                        Key Collaborations
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        href="/science/#research-papers"
                        className=""
                        onClick={(event) => goToSection(event)}
                      >
                        Research Papers
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        href="/science/#raphael-mechoulam"
                        className=""
                        onClick={(event) => goToSection(event)}
                      >
                        Prof. Mechoulam Biography
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item inline-block py-1 relative">
                  <a
                    href="/contact"
                    onClick={(event) => scrollToFooter(event)}
                    className="uppercase font-title"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="desktop-menu hidden lg:block">
            <nav role="navigation">
              <ul className="font-title">
                <li className="menu-item inline-block pr-12 py-1 relative">
                  <a href="/careers" className="uppercase font-title">
                    Careers
                  </a>
                </li>
                <li className="menu-item inline-block py-1 relative">
                  <a href="/media" className="uppercase font-title">
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

      {isMobile && (
        <div className="header header--fixed bg-white py-4 lg:py-6 top-0 fixed w-full opacity-0 z-0 shadow-md">
          <div div className="mx-auto px-8 flex flex-row items-center relative">
            <div className="logo flex-grow lg:flex-grow-0 lg:fixed">
              <a
                href="/"
                className="transition-opacity duration-150 hover:opacity-70"
              >
                <Image
                  src="/img/icons/logo.svg"
                  width="66.051"
                  height="20.674"
                  alt=""
                />
              </a>
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
                  stroke="#636466"
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
        </div>
      )}

      <div
        id="menu"
        className="menu mobile-menu fixed inset-x-0 z-50 bg-white bg-opacity-100 shadow-md hidden mt-15"
      >
        <div div className="container mx-auto p-8 relative">
          <nav role="navigation">
            <ul>
              <li className="menu-item font-title text-epm-gray-700 tracking-wide border-b-1 border-epm-gray-500 mb-3 pb-3">
                <a
                  href="/about"
                  className="block uppercase cursor-pointer relative font-title"
                  onClick={(event) =>
                  toggleSubMenu(event, document.querySelector(".menu--about"))
                  }
                >
                  About
                </a>
                <ul className="sub-menu menu--about hidden">
                  <li className="text-sm my-2">
                    <a
                      href="/about/#our-story"
                      onClick={(event) => goToSection(event)}
                    >
                      Our story
                    </a>
                  </li>
                  <li className="text-sm my-2">
                    <a
                      href="/about/#board-of-directors"
                      onClick={(event) => goToSection(event)}
                    >
                      Board of Directors
                    </a>
                  </li>
                  <li className="text-sm my-2">
                    <a
                      href="/about/#executive-leadership"
                      onClick={(event) => goToSection(event)}
                    >
                      Executive Leadership
                    </a>
                  </li>
                  <li className="text-sm my-2">
                    <a
                      href="/about/#scientific-advisory-board"
                      onClick={(event) => goToSection(event)}
                    >
                      Scientific Advisory Board
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item font-title text-epm-gray-700 tracking-wide border-b-1 border-epm-gray-500 mb-3 pb-3">
                <a
                  href="/science"
                  className="block uppercase cursor-pointer relative font-title"
                  onClick={(event) =>
                    toggleSubMenu(
                      event,
                      document.querySelector(".menu--science")
                    )
                  }
                >
                  Science
                </a>
                <ul className="sub-menu menu--science hidden">
                  <li className="text-sm my-2">
                    <a
                      href="/science/#cannabinoids"
                      className="transition-opacity duration-150 hover:opacity-70"
                      onClick={(event) => goToSection(event)}
                    >
                      About Cannabiniod Acids
                    </a>
                  </li>
                  <li className="text-sm my-2">
                    <a
                      href="/science/#pipeline"
                      className="transition-opacity duration-150 hover:opacity-70"
                      onClick={(event) => goToSection(event)}
                    >
                      Pipeline
                    </a>
                  </li>
                  <li className="text-sm my-2">
                    <a
                      href="/science/#collaborations"
                      className="transition-opacity duration-150 hover:opacity-70"
                      onClick={(event) => goToSection(event)}
                    >
                      Key Collaborations
                    </a>
                  </li>
                  <li className="text-sm my-2">
                    <a
                      href="/science/#research-papers"
                      className="transition-opacity duration-150 hover:opacity-70"
                      onClick={(event) => goToSection(event)}
                    >
                      Research Papers
                    </a>
                  </li>
                  <li className="text-sm my-2">
                    <a
                      href="/science/#raphael-mechoulam"
                      className="transition-opacity duration-150 hover:opacity-70"
                      onClick={(event) => goToSection(event)}
                    >
                      Prof. Mechoulam Biography
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item font-title text-epm-gray-700 tracking-wide border-b-1 border-epm-gray-500 mb-3 pb-3">
                <a
                  href="/treatments"
                  className="block uppercase cursor-pointer relative font-title"
                  onClick={(event) =>
                    toggleSubMenu(
                      event,
                      document.querySelector(".menu--treatments")
                    )
                  }
                >
                  Treatments
                </a>
                <ul className="sub-menu menu--treatments hidden">
                  <li className="text-sm my-2">
                    <a
                      href="/treatments/#inflammatory-bowel-disease"
                      className="transition-opacity duration-150 hover:opacity-70"
                      onClick={(event) => goToSection(event)}
                    >
                      Inflammatory Bowel Disease
                    </a>
                  </li>
                  <li className="text-sm my-2">
                    <a
                      href="/treatments/#psoriasis"
                      className="transition-opacity duration-150 hover:opacity-70"
                      onClick={(event) => goToSection(event)}
                    >
                      Psoriasis
                    </a>
                  </li>
                  <li className="text-sm my-2">
                    <a
                      href="/treatments/#acute-respiratory-distress-syndrome"
                      className="transition-opacity duration-150 hover:opacity-70"
                      onClick={(event) => goToSection(event)}
                    >
                      Acute Respiratory Distress Syndrome
                    </a>
                  </li>
                </ul>
              </li>
              <li className="font-title text-epm-gray-700 tracking-wide border-b-1 border-epm-gray-500 mb-3 pb-3">
                <a
                  href="/contact"
                  className="block uppercase cursor-pointer relative font-title"
                  onClick={(event) => scrollToFooter(event)}
                >
                  Contact
                </a>
              </li>
              <li className="font-title text-epm-gray-700 tracking-wide border-b-1 border-epm-gray-500 mb-3 pb-3">
                <a
                  href="/careers"
                  className="block uppercase cursor-pointer relative"
                  onClick={(event) => goToSection(event)}
                >
                  Careers
                </a>
              </li>
              <li className="font-title text-epm-gray-700 tracking-wide">
                <a
                  href="/media"
                  className="block uppercase cursor-pointer relative font-title"
                  onClick={(event) => goToSection(event)}
                >
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
