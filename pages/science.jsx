import { useEffect } from "react";
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
  useEffect(() => {
    document.querySelector(".menu-item--science").classList.add("menu-item--current");
  }, []);

  const page = {
    solution: {
      slides: [ 
        {
          images: {
            mobile: "/img/mobile/science/solution/thumb-01@2x.jpg",
            desktop: "/img/desktop/science/solution/thumb-01@2x.jpg",
          },
          video: "https://www.youtube.com/embed/cWShfI5tCUs",
        }, 
        {
          images: {
            mobile: "/img/mobile/science/solution/thumb-02@2x.jpg",
            desktop: "/img/desktop/science/solution/thumb-02@2x.jpg",
          },
          video: "https://www.youtube.com/embed/1qrPwiifufo",
        },
        {
          images: {
            mobile: "/img/mobile/science/solution/thumb-03@2x.jpg",
            desktop: "/img/desktop/science/solution/thumb-03@2x.jpg",
          },
          video: "https://www.youtube.com/embed/KVKuov_GbZo",
        },
      ],
    },
    collaborations: {
      commercial: {
        slides: [
          {
            url: "https://www.criver.com/",
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
            url: "https://www.recipharm.com/",
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
            url: "https://www.medpharm.com/en/",
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
            url: "http://www.nck.dk/",
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
            url: "https://www.cambrex.com/",
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
            url: "https://en.huji.ac.il/en",
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
            url: "https://www1.biu.ac.il/indexE.php",
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
            url: "https://english.tau.ac.il/",
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
            url: "https://www.uoguelph.ca/",
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
            url: "https://www.abdn.ac.uk/",
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
            url: "https://www.mcmaster.ca/",
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
          title: "Nausea and Anxiety",
          text: "Pertwee.R.G, et.al.,British Journal of pharmacology, 2018",
          url: "/papers/nausea-and-anxiety.pdf",
          
        },
        {
          title: "Neuropathic Pain",
          text: "Zho.Y.F, et.al., British Journal of pharmacology, 2020",
          url: "/papers/neuropathic-pain.pdf",
        },
      ],
    },
  };
  return (
    <>
      <Head>
        <title>Science - EPM</title>
        <link rel="icon" href="/favicon.svg" />
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
