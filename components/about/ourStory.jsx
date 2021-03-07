import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { gsap } from "gsap";
import SectionHeader from "../shared/SectionHeader";
import Button from "../shared/Button";

function OurStory() {
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

  useEffect(() => {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }, []);

  const getId = (name) => {
    return name.toLowerCase().replace(/ /g, "-");
  };

  const toggleVideo = (event) => {
    const item = event.target.closest(".item");
    const video = item.querySelector(".video");
    const button = item.querySelector("a");

    if (item.getAttribute("aria-expanded") === "false") {
      item.setAttribute("aria-expanded", "true");
      video.classList.remove("hidden");
      button.innerText = "Close Video";

      if (video.player) {
        video.player.playVideo();
      } else {
        const videoId = video.dataset.videoId;
        const player  = new YT.Player(video, {
          height: '100%',
          width: '100%',
          videoId,
          events: {
            'onReady': (event) => {
              event.target.playVideo();
              event.target.h.player = event.target;
            },
          }
        });
      }
    } else {
      item.setAttribute("aria-expanded", "false");
      video.classList.add("hidden");
      button.innerText = "Play Video";
      
      if (video.player) {
        video.player.stopVideo();
      } else {
        const videoId = video.dataset.videoId;
        const player  = new YT.Player(video, {
          height: '100%',
          width: '100%',
          videoId,
          events: {
            'onReady': (event) => {
              event.target.stopVideo();
              event.target.h.player = event.target;
            },
          }
        });
      }
    }
  };

  return (
    <section
      id="our-story"
      className="section story bg-white relative w-full flex flex-wrap border-b-1 border-epm-gray-300 lg:flex-row-reverse lg:h-screen"
      data-side-menu-label="Our Story"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="visible"
    >
      <div className="item animate opacity-0 relative lg:flex-grow w-full lg:w-6/12 2xl:w-7/12 h-2/3-screen lg:h-auto" aria-expanded="false">
        {isMobile && (
          <Image
            loading="eager"
            src="/img/mobile/about/mechoulam-thumbnail@2x.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
        {(isTablet || isDesktop) && (
          <Image
            loading="eager"
            src="/img/desktop/about/mechoulam-thumbnail@2x.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
        {<span className="animate opacity-0 button absolute w-48 left-1/2 transform -translate-x-1/2 bottom-8">
          <Button style="light" onClick={(event) => toggleVideo(event)}>
            Play Video
          </Button>
        </span>}
        <div id={`video-${getId("Rapahel Mechoulam")}`} className="video absolute inset-0 hidden" data-video-id="UrC_dGhrga0"></div>
      </div>

      <div className="lg:flex-shrink-0 lg:pl-44 xl:pl-56 lg:w-6/12 2xl:w-5/12 lg:h-screen overflow-y-hidden lg:overflow-y-auto">
        <div className="container px-8 lg:pl-0 py-8 lg:max-w-none lg:w-64 xl:w-80 2xl:w-96 ">
          <div className="lg:mb-0">
            <SectionHeader
              name="Our story"
              title={<h2>Patient-Focused Pharmaceutical Group</h2>}
            />
          </div>
          <div className="animate opacity-0 text mt-6 lg:text-epm-base">
            <p className="mb-4">
              EPM develops prescription medicine derived from synthetic
              cannabinoid acids to address unmet patient needs.
            </p>
            <p className="mb-4">
              Our mission is to enable safe, effective and accessible treatments
              for patients in a wide range of therapeutic areas.
            </p>
            <p className="mb-4">
              We have created a pipeline which includes the discovery of 14
              protected synthetic molecules, including 8 novel structures and
              production processes IP. Currently EPM is advancing 3 treatments
              to human trials following the guidance of the U.S. FDA: Psoriasis,
              IBD and ARDS.
            </p>
            <p className="">
              At EPM, we are committed to continue the novel discovery of
              cannabinoid acid molecules for research and drug development
              purposes
            </p>
            {/*<p className="">
              EPM is leading the way in realizing the untapped potential of
              cannabinoid acids as new pharmaceutical treatments.
              </p>*/}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
