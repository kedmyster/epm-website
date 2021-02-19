import { useEffect, useState } from "react";
import classNames from "classnames";
import { gsap } from "gsap";
import { GSDevTools } from "gsap/dist/GSDevTools";

const THEME_LIGHT = "light";
const THEME_DARK = "dark";
const VISIBILITY_VISIBLE = "visible";
const VISIBILITY_HIDDEN = "hidden";

function SideMenu() {
  const animateSideMenuActiveState = (
    sideMenu,
    section,
    menuItem,
    pill,
    label
  ) => {
    const tlSideMenu = gsap.timeline({
      paused: true,
      onStart: () => menuItem.closest("li").classList.add("active"),
      onReverseComplete: () =>
        menuItem.closest("li").classList.remove("active"),
      scrollTrigger: {
        trigger: `#${section.id}`,
        start: "top-=50%",
        end: "bottom-=50%",
        toggleActions: "play reverse play reverse",
      },
    });

    tlSideMenu.add("side-menu");

    tlSideMenu.to(
      pill,
      {
        width: 31,
        backgroundColor: "#FFD534",
        duration: 0.1,
      },
      "side-menu"
    );
    tlSideMenu.to(
      label,
      {
        opacity: 1,
        delay: 0.15,
        duration: 0.1,
      },
      "side-menu"
    );
    

    menuItem.animation = tlSideMenu;

    menuItem.addEventListener("mouseenter", function (event) {
      const active = document.querySelector(".side-menu li.active");
      const current = this.closest("li");

      if (active !== current) {
        this.animation.play();
      }
    });

    menuItem.addEventListener("mouseleave", function (event) {
      const active = document.querySelector(".side-menu li.active");
      const current = this.closest("li");

      if (active !== current) {
        this.animation.reverse();
      }
    });
  };

  const animateSideMenuVisibility = (
    sideMenu,
    section,
    menuItem,
    pill,
    label
  ) => {
    if (section.dataset.sideMenuVisibility == "hidden") {
      const tlSideMenuVisibility = gsap.timeline({
        scrollTrigger: {
          trigger: `#${section.id}`,
          start: "top-=50%",
          end: "bottom-=50%",
          toggleActions: "play reverse play reverse",
        },
      });

      tlSideMenuVisibility.to(sideMenu, {
        opacity: 0,
        duration: 0.1,
      });
    }
  };

  const animateSideMenuColor = (sideMenu, section, activeMenuItem, activePill, activeLabel) => {
    const theme = section.dataset.sideMenuColor;
    const menuItems = sideMenu.querySelectorAll(".menu-item");
    const tlSideMenuColor = gsap.timeline({
      scrollTrigger: {
        trigger: `#${section.id}`,
        start: "top-=50%",
        end: "bottom-=50%",
        toggleActions: "play reverse play reverse",
      },
    });

    tlSideMenuColor.add("side-menu-color");

    menuItems.forEach((item) => {
      const pill = item.querySelector(".slide__pill");
      const label = item.querySelector(".slide__label");

      if (activeMenuItem !== item.querySelector("a")) {
        if (theme === THEME_LIGHT) {
          tlSideMenuColor.to(pill, {
            backgroundColor: "#FFFFFF",
            duration: 0.1,
          }, "side-menu-color");
        } else if (theme === THEME_DARK) {
          tlSideMenuColor.to(pill, {
            backgroundColor: "#000000",
            duration: 0.1,
          }, "side-menu-color");
        }
      }
    });
  };

  const animateSectionContent = (section) => {
    if (section) {
      const tlAnimateContent = gsap.timeline({
        scrollTrigger: {
          trigger: `#${section.id}`,
          start: "top-=50%",
        },
      });

      tlAnimateContent.fromTo(
        `#${section.id} .animate`,
        {
          y: "-=5px",
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

  const utils = {
    animateSideMenuActiveState,
    animateSideMenuVisibility,
    animateSideMenuColor,
    animateSectionContent,
  };

  useEffect(() => {
    setTimeout(() => {
      const sideMenu = document.querySelector(".side-menu");

      if (sideMenu) {
        const sections = Array.from(document.querySelectorAll(".section"));
        const menuItems = Array.from(sideMenu.querySelectorAll(".menu-item"));
  
        sections.forEach((section) => {
          const menuItem = document.querySelector(
            `.side-menu li a[href='#${section.id}']`
          );
          const pill = menuItem.querySelector(".slide__pill");
          const label = menuItem.querySelector(".slide__label");
  
          utils.animateSideMenuActiveState(
            sideMenu,
            section,
            menuItem,
            pill,
            label
          );
          utils.animateSideMenuVisibility(
            sideMenu,
            section,
            menuItem,
            pill,
            label
          );
          // utils.animateSideMenuColor(sideMenu, section, menuItem, pill, label);
          utils.animateSectionContent(section);
  
          // menuItems.forEach(menuItem => {
          //   const currentPill = menuItem.querySelector(".slide__pill");
          //   const currentLabel = menuItem.querySelector(".slide__label");
  
          //   const tlSideMenuColor = gsap.timeline({
          //     scrollTrigger: {
          //       trigger: `#${section.id}`,
          //       start: "top-=50%",
          //       end: "bottom-=50%",
          //       toggleActions: "play reverse play reverse",
          //     },
          //   });
  
          //   tlSideMenuColor.from(
          //     currentPill,
          //     {
          //       backgroundColor: () => {
          //         if (section.dataset.sideMenuColor === THEME_LIGHT) {
          //           return "#FFFFFF";
          //         } else if (section.dataset.sideMenuColor === THEME_DARK) {
          //           return "#000000";
          //         }
          //       }
          //     }
          //   );
          //   tlSideMenuColor.from(
          //     currentLabel,
          //     {
          //       color: () => {
          //         if (section.dataset.sideMenuColor === THEME_LIGHT) {
          //           return "#FFFFFF";
          //         } else if (section.dataset.sideMenuColor === THEME_DARK) {
          //           return "#000000";
          //         }
          //       }
          //     }
          //   );
          // });
        });
      }

      // GSDevTools.create();
    });
  }, []);

  const sections = Array.from(document.querySelectorAll(".section"));

  if (sections.length === 0) {
    return null;
  } else {
    return (
      <>
        <div
          id="side-menu"
          className="side-menu fixed left-8 top-1/2 transform -translate-y-1/2 z-10"
        >
          <nav role="navigation">
            <ul>
              {sections.map((section, index) => {
                const label = section.getAttribute("data-side-menu-label");

                if (label) {
                  return (
                    <li
                      key={section.id}
                      className={classNames(
                        "menu-item my-8 font-title text-xs tracking-wide",
                        { active: index === 0 }
                      )}
                    >
                      <div className="slide cursor-pointer relative">
                        <a
                          href={`#${section.id}`}
                          className="block uppercase cursor-pointer relative"
                        >
                          <div className="slide__pill" />
                          <div className="slide__label">{label}</div>
                        </a>
                      </div>
                    </li>
                  );
                } else {
                  return (
                    <li
                      className={classNames("menu-item hidden", {
                        active: index === 0,
                      })}
                    >
                      <div className="slide">
                        <a href={`#${section.id}`}></a>
                      </div>
                    </li>
                  );
                }
              })}
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default SideMenu;
