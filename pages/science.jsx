import { useState } from "react";
import Head from "next/head";
import Main from "../components/science/main";
import Solution from "../components/science/solution";
import Cannabinoids from "../components/science/cannabinoids";
import Pipeline from "../components/science/pipeline";
import Collaborations from "../components/science/collaborations";
import ResearchPapers from "../components/science/researchPapers";
import RaphaelMechoulam from "../components/science/raphaelMechoulam";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function science() {
  const page = {
    solution: {
      slides: [ 
        {
          images: {
            mobile: "/img/mobile/science/solution/thumb-01@2x.jpg",
            desktop: "/img/desktop/science/solution/thumb-01@2x.jpg",
          },
        }, 
        {
          images: {
            mobile: "/img/mobile/science/solution/thumb-02@2x.jpg",
            desktop: "/img/desktop/science/solution/thumb-02@2x.jpg",
          }
        },
        {
          images: {
            mobile: "/img/mobile/science/solution/thumb-03@2x.jpg",
            desktop: "/img/desktop/science/solution/thumb-03@2x.jpg",
          }
        },
      ],
    },
    collaborations: {
      commercial: {
        slides: [
          {
            url: "#",
            title: "Charles River",
            image: {
              mobile: {
                url: "/img/icons/collaborations/charles-river.svg",
                width: "154",
                height: "30",
              },
              desktop: {
                url: "/img/icons/collaborations/charles-river.svg",
                width: "154.11",
                height: "30.674",
              }
            }
          }, {
            url: "#",
            title: "Recipharm",
            image: {
              mobile: {
                url: "/img/icons/collaborations/recipharm.svg",
                width: "136",
                height: "56",
              },
              desktop: {
                url: "/img/icons/collaborations/recipharm.svg",
                width: "136",
                height: "56",
              }
            }
          }, {
            url: "#",
            title: "Medpharm",
            image: {
              mobile: {
                url: "/img/icons/collaborations/medpharm.svg",
                width: "104",
                height: "38",
              },
              desktop: {
                url: "/img/icons/collaborations/medpharm.svg",
                width: "104",
                height: "38",
              }
            }
          }, {
            url: "#",
            title: "NCK",
            image: {
              mobile: {
                url: "/img/icons/collaborations/nck.svg",
                width: "121",
                height: "46",
              },
              desktop: {
                url: "/img/icons/collaborations/nck.svg",
                width: "121",
                height: "46",
              }
            }
          }, {
            url: "#",
            title: "Cambrex",
            image: {
              mobile: {
                url: "/img/icons/collaborations/cambrex.svg",
                width: "115",
                height: "50",
              },
              desktop: {
                url: "/img/icons/collaborations/cambrex.svg",
                width: "140",
                height: "61",
              }
            }
          }
        ],
      },
      academy: {
        slides: [
          {
            url: "#",
            title: "The Hebrew University of Jerusalem",
            image: {
              mobile: {
                url: "/img/icons/collaborations/the-hebrew-university-of-jerusalem.svg",
                width: "159",
                height: "54",
              },
              desktop: {
                url: "/img/icons/collaborations/the-hebrew-university-of-jerusalem.svg",
                width: "159",
                height: "54",
              }
            }
          }, {
            url: "#",
            title: "Bar Ilan University",
            image: {
              mobile: {
                url: "/img/icons/collaborations/bar-ilan-university.svg",
                width: "112",
                height: "41",
              },
              desktop: {
                url: "/img/icons/collaborations/bar-ilan-university.svg",
                width: "112",
                height: "41",
              }
            }
          }, {
            url: "#",
            title: "Tel-Aviv University",
            image: {
              mobile: {
                url: "/img/icons/collaborations/tel-aviv-university.svg",
                width: "96",
                height: "52",
              },
              desktop: {
                url: "/img/icons/collaborations/tel-aviv-university.svg",
                width: "96",
                height: "52",
              }
            }
          }, {
            url: "#",
            title: "University of Guelph",
            image: {
              mobile: {
                url: "/img/icons/collaborations/university-of-guelph.svg",
                width: "136",
                height: "44",
              },
              desktop: {
                url: "/img/icons/collaborations/university-of-guelph.svg",
                width: "136",
                height: "44",
              }
            }
          }, {
            url: "#",
            title: "University of Aberdeen",
            image: {
              mobile: {
                url: "/img/icons/collaborations/university-of-aberdeen.svg",
                width: "132",
                height: "29",
              },
              desktop: {
                url: "/img/icons/collaborations/university-of-aberdeen.svg",
                width: "132",
                height: "29",
              }
            }
          }, {
            url: "#",
            title: "McMaster University",
            image: {
              mobile: {
                url: "/img/icons/collaborations/mcmaster-university.svg",
                width: "109",
                height: "60",
              },
              desktop: {
                url: "/img/icons/collaborations/mcmaster-university.svg",
                width: "109",
                height: "60",
              }
            }
          }
        ],
      }
    },
    researchPapers: {
      slides: [
        {
          title: "Depression",
          text: "Hen-Shoval.D,et.al.,Behavioral Brain Research, 2018",
          url: "/papers/deperssion.pdf",
          
        },
        {
          title: "Anxiety",
          text: "Pertwee.R.G, et.al.,British Journal of pharmacology, 2018",
          url: "/papers/nausea-and-anxiety.pdf",
          
        },
        {
          title: "Neuropathic",
          text: "Zho.Y.F, et.al., British Journal of pharmacology, 2020",
          url: "/papers/neuropathic-pain.pdf",
        },
      ],
    },
  };
  return (
    <>
      <Head>
        <title>EPM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
      <Solution data={page.solution}/>
      <Cannabinoids />
      <Pipeline />
      <Collaborations data={page.collaborations} />
      <ResearchPapers data={page.researchPapers} />
      <RaphaelMechoulam />
    </>
  );
}
