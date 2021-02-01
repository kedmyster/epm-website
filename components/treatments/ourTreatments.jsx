import { useState, useEffect } from "react";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { gsap } from "gsap";

function Treatments() {
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

  useEffect(() => {
    gsap.fromTo(
      ".scroll-to-content",
      { opacity: 0.5 },
      {
        opacity: 1,
        duration: 3,
        y: "-=10px",
        yoyo: true,
        repeat: -1,
        ease: "easeInOut",
      }
    );
  }, []);

  const treatments = [
    {
      images: {
        mobile: "/img/mobile/topical-for-psoriasis@3x.jpg",
        desktop: "/img/desktop/topical-for-psoriasis@2x.png",
      },
      title: "Inflammatory Bowel Disease",
      formulation: "Oral",
      timeline:
        "Phase 1 clinical trail in healthy volunteers anticipated in 2002",
      solution:
        "The treatment which is based on EPM301, has been evaluated in both acute (DSS induced mouse colitis) and chronic (IL-10 knock-out mouse) animal models of IBD and has shown similar activity to prednisone (acute model) and anti-TNFa mAb (chronic model) when administered by gavage.",
    },
    {
      images: {
        mobile: "/img/mobile/topical-for-psoriasis@3x.jpg",
        desktop: "/img/desktop/topical-for-psoriasis@2x.png",
      },
      title: "Inflammatory Bowel Disease",
      formulation: "Oral",
      timeline:
        "Phase 1 clinical trail in healthy volunteers anticipated in 2002",
      solution:
        "The treatment which is based on EPM301, has been evaluated in both acute (DSS induced mouse colitis) and chronic (IL-10 knock-out mouse) animal models of IBD and has shown similar activity to prednisone (acute model) and anti-TNFa mAb (chronic model) when administered by gavage.",
    },
    {
      images: {
        mobile: "/img/mobile/topical-for-psoriasis@3x.jpg",
        desktop: "/img/desktop/topical-for-psoriasis@2x.png",
      },
      title: "Inflammatory Bowel Disease",
      formulation: "Oral",
      timeline:
        "Phase 1 clinical trail in healthy volunteers anticipated in 2002",
      solution:
        "The treatment which is based on EPM301, has been evaluated in both acute (DSS induced mouse colitis) and chronic (IL-10 knock-out mouse) animal models of IBD and has shown similar activity to prednisone (acute model) and anti-TNFa mAb (chronic model) when administered by gavage.",
    },
  ];

  return (
    <section
      id="story"
      className="section treatments bg-white relative w-full "
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
    >
      <div className="flex flex-wrap border-b-1 border-emp-dark-gray lg:flex-row-reverse lg:h-screen">
        <div className="container relative mx-auto px-8 lg:flex-grow lg:h-full lg:w-7/12 lg:bg-emp-light-gray">
          <div className="lg:flex lg:flex-wrap lg:content-center lg:h-full">
            <div className="image mx-auto text-center lg:pb-5">
              {isMobile && (
                <Image
                  loading="eager"
                  src="/img/mobile/topical-for-psoriasis@3x.jpg"
                  alt=""
                  width={162}
                  height={360}
                  layout="intrinsic"
                  quality={100}
                />
              )}
              {isDesktop && (
                <Image
                  loading="eager"
                  src="/img/desktop/medicines@2x.jpg"
                  alt=""
                  width={707.5}
                  height={480}
                  objectFit="cover"
                  quality={100}
                />
              )}
            </div>
            <div className="hidden lg:flex flex-row flex-wrap justify-center space-x-10 lg:mx-auto">
              <div className="text-center text-base font-title uppercase py-3">
                Oral for IBD{" "}
                <span className="block normal-case text-epm-light-gray">
                  (Crohn’s & Colitis)
                </span>
              </div>
              <div className="text-center text-base font-title uppercase border-l-1 border-r-1 border-epm-light-gray px-20 py-3">
                Topical for
                <br />
                Psoriasis
              </div>
              <div className="text-center text-base font-title uppercase py-3">
                Oral for IBD{" "}
                <span className="block normal-case text-epm-light-gray">
                  (Crohn’s & Colitis)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex-shrink-0 lg:pl-60 lg:w-5/12">
          <div className="container px-8 lg:pr-0 py-8 lg:max-w-none lg:w-96 ">
            <div className="section-name font-title text-xs uppercase">
              Our treatments
            </div>
            <div className="section-title pb-6">
              <h2 className="font-title text-2xl">
                Medicines We Develop Today
              </h2>
            </div>
            <div className="text lg:text-lg">
              <p>
                EPM are committed to developing a series of new therapeutic
                solutions based on cannabinoid acids providing alternative
                treatments for patients. This is the driving force behind EPM’s
                research program. Although cannabinoid acids are potential
                treatments for a wide range of diseases, currently EPM’s focus
                on three main therapeutic conditions based on its lead molecule
                EPM301 : Inflammatory Bowel Disease, Inflammatory skin disease
                (psoriasis) and Acute Respiratory Distress Syndrome in COVID-19
                patients.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="items">
        {treatments.map((item, index) => {
          return (
            <div className="item flex flex-wrap border-b-1 border-emp-dark-gray lg:flex-row-reverse lg:h-screen">
              <div className="container relative mx-auto px-8 lg:flex-grow lg:h-full lg:w-7/12 lg:bg-emp-light-gray">
                <div className="lg:flex lg:flex-wrap lg:flex-col lg:content-center lg:h-full">
                  <div className="image mx-auto text-center lg:pb-5">
                    {isMobile && (
                      <Image
                        loading="eager"
                        src={item.images.mobile}
                        alt=""
                        width={183}
                        height={407}
                        layout="intrinsic"
                        quality={100}
                      />
                    )}
                    {isDesktop && (
                      <Image
                        loading="eager"
                        src={item.images.desktop}
                        alt=""
                        width={284}
                        height={630}
                        objectFit="cover"
                        quality={100}
                      />
                    )}
                  </div>
                  <div className="hidden lg:flex flex-row flex-wrap justify-center space-x-10 lg:mx-auto">
                    <div className="text-center text-base font-title uppercase py-3">
                      Oral for IBD{" "}
                      <span className="block normal-case text-epm-light-gray">
                        (Crohn’s & Colitis)
                      </span>
                    </div>
                    <div className="text-center text-base font-title uppercase border-l-1 border-r-1 border-epm-light-gray px-20 py-3">
                      Topical for
                      <br />
                      Psoriasis
                    </div>
                    <div className="text-center text-base font-title uppercase py-3">
                      Oral for IBD{" "}
                      <span className="block normal-case text-epm-light-gray">
                        (Crohn’s & Colitis)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:flex-shrink-0 lg:pl-60 lg:w-5/12">
                <div className="container px-8 lg:pr-0 py-8 lg:max-w-none lg:w-96 ">
                  <div className="section-name font-title text-xs lg:text-lg uppercase">
                    Our treatments
                  </div>
                  <div className="section-title pb-6">
                    <h2 className="font-title text-2xl lg:text-4xl">
                      {item.title}
                    </h2>
                  </div>
                  <div className="formulation lg:text-lg lg:pb-8">
                    <p className="lg:text-lg font-bold">Selected formulation</p>
                    <p className="lg:text-lg">{item.formulation}</p>
                  </div>
                  <div className="timeline lg:text-lg lg:pb-8">
                    <p className="lg:text-lg font-bold">
                      Expected clinical trail timeline
                    </p>
                    <p>{item.timeline}</p>
                  </div>
                  <div className="solution lg:text-lg">
                    <p className="lg:text-lg font-bold">
                      EPM's potential solution
                    </p>
                    <p>{item.solution}</p>
                  </div>
                  <div className="button pt-10 lg:inline-block text-center">
                    <a
                      href=""
                      className="inline-block w-full lg:w-auto text-emp-dark-gray text-center uppercase border-3 border-emp-dark-gray rounded-3xl select-none lg:px-10 py-2 transition-opacity duration-150 hover:opacity-70"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Treatments;
