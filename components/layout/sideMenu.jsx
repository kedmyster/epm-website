import { useEffect, useState } from "react";
import classNames from "classnames";
import { gsap } from "gsap";

function SideMenu() {
  useEffect(() => {
    const sideMenu = document
      .querySelector(".side-menu");

    document.querySelector("body").classList.add("side-menu--light");

    sideMenu
      .querySelectorAll(".menu-item")
      .forEach((item) => {
        if (!item) {
          return;
        }

        const tl = gsap.timeline({ paused: true });
        const pill = item.querySelector(".slide__pill");
        const label = item.querySelector(".slide__label");

        tl.to(pill, {
          width: 31,
          backgroundColor: "#FFD534",
          duration: 0.25,
          onStart: () => pill.classList.add("animating"),
          onComplete: () => pill.classList.remove("animating"),
        });
        tl.to(label, {
          opacity: 1,
          duration: 0.25,
          onStart: () => label.classList.add("animating"),
          onComplete: () => pill.classList.remove("animating"),
        });

        item.animation = tl;
        item.addEventListener("mouseenter", function () {
          this.animation.play();
        });
        item.addEventListener("mouseleave", function () {
          this.animation.reverse();
        });
      });

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio === 1) {
            if (sideMenu) {
              sideMenu
                .querySelectorAll(".menu-item")
                .forEach((item) => {
                  item.animation.reverse();
                });
            }
  
            const anchor = document.querySelector(
              `.slide a[href="#${entry.target.id}"]`
            );
  
            // const sideMenuColor = entry.target.getAttribute("data-side-menu-color");
            // const sideMenuVisibility = entry.target.getAttribute("data-side-menu-visibility");
            // document.querySelector("body").classList.remove("side-menu--light", "side-menu--dark");
            // document.querySelector("body").classList.add(`side-menu--${sideMenuColor}`);
  
            if (anchor) {
              const menuItem = anchor.closest(".menu-item");
              
              if (!menuItem) {
                return;
              }
  
              if (entry.isIntersecting) {
                menuItem.animation.play();
              }
            }
  
            console.log(entry);
          }
        });
      },
      { threshold: [0.01, 1] }
    );

    document
      .querySelectorAll(".section")
      .forEach((section) => observer.observe(section));
  }, []);

  const onClick = (event) => {
    event.preventDefault();

    let slide;

    if (event.target.classList.contains("slide")) {
      slide = event.target;
    } else {
      slide = event.target.closest(".slide");
    }

    const anchor = slide.querySelector("a").getAttribute("href").substr(1);
    const section = document.querySelector(`#${anchor}`);

    section.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        id="side-menu"
        className="side-menu fixed left-8 top-1/2 transform -translate-y-1/2 z-10"
      >
        <nav role="navigation">
          <ul>
            <li className="menu-item my-8 font-title text-xs tracking-wide">
              <div
                className={classNames("slide", "cursor-pointer", "relative")}
              >
                <a
                  href="#story"
                  className="block uppercase pointer relative"
                  onClick={onClick}
                >
                  <div className="slide__pill" />
                  <div className="slide__label">Our Story</div>
                </a>
              </div>
            </li>
            <li className="menu-item my-8 font-title text-xs tracking-wide">
              <div
                className={classNames("slide", " cursor-pointer", "relative")}
              >
                <a
                  href="#innovation"
                  className="block uppercase pointer relative"
                  onClick={onClick}
                >
                  <div className="slide__pill" />
                  <div className="slide__label">Our Innovation</div>
                </a>
              </div>
            </li>
            <li className="menu-item my-8 font-title text-xs tracking-wide">
              <div
                className={classNames("slide", " cursor-pointer", "relative")}
              >
                <a
                  href="#treatments"
                  className="block uppercase pointer relative"
                  onClick={onClick}
                >
                  <div className="slide__pill" />
                  <div className="slide__label">Treatments</div>
                </a>
              </div>
            </li>
            <li className="menu-item my-8 font-title text-xs tracking-wide">
              <div
                className={classNames("slide", " cursor-pointer", "relative")}
              >
                <a
                  href="#essence"
                  className="block uppercase pointer relative"
                  onClick={onClick}
                >
                  <div className="slide__pill" />
                  <div className="slide__label">Our Essence</div>
                </a>
              </div>
            </li>
            <li className="menu-item my-8 font-title text-xs tracking-wide">
              <div
                className={classNames("slide", " cursor-pointer", "relative")}
              >
                <a
                  href="#community"
                  className="block uppercase pointer relative"
                  onClick={onClick}
                >
                  <div className="slide__pill" />
                  <div className="slide__label">Our Community</div>
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideMenu;
