import Head from "next/head";
import Main from "../components/home/main";
import Story from "../components/home/story";
import Innovation from "../components/home/innovation";
import Treatments from "../components/home/treatments";
import Commitment from "../components/home/commitment";
import Community from "../components/home/community";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const page = {
    innovation: {
      slides: [
        {
          title: "Made in labs",
          text:
            "We are synthesizing and developing cannabinoid Methyl-Esters products, which are fully synthetic",
          images: {
            mobile: "/img/mobile/homepage/our-innovation/made-in-labs@2x.jpg",
            desktop: "/img/desktop/homepage/our-innovation/made-in-labs@2x.jpg",
          },
        },
        {
          title: "US FDA",
          text:
            "Treatments are developed following the guidelines and approval of the US FDA",
          images: {
            mobile: "/img/mobile/homepage/our-innovation/fda@2x.jpg",
            desktop: "/img/desktop/homepage/our-innovation/fda@2x.jpg",
          },
        },
        {
          title: "Collaboration",
          text:
            "Development are being done by leading global pharmaceutical contract research organizations",
          images: {
            mobile: "/img/mobile/homepage/our-innovation/collaboration@2x.jpg",
            desktop:
              "/img/desktop/homepage/our-innovation/collaboration@2x.jpg",
          },
        },
      ],
    },
    treatments: {
      slides: [
        {
          title: "Oral for IBD",
          tagline: "(Crohn's & Colitis)",
          images: {
            mobile: {
              url: "/img/mobile/homepage/our-treatments/treatment-pills@3x.png",
              width: 342,
              height: 284,
            },
          },
        },
        {
          title: "Topical for Psoriasis",
          images: {
            mobile: {
              url: "/img/mobile/homepage/our-treatments/treatment-tube@3x.png",
              width: 137,
              height: 332,
            },
          },
        },
        {
          title: "IV for ARDS",
          images: {
            mobile: {
              url: "/img/mobile/homepage/our-treatments/treatment-iv@3x.png",
              width: 276,
              height: 302,
            },
          },
        },
      ],
    },
    community: {
      slides: [
        {
          name: "Maria, 32",
          role: "Crohn's",
          images: {
            mobile: "/img/mobile/homepage/our-community/maria@2x.jpg",
            desktop: "/img/desktop/homepage/our-community/maria@2x.jpg",
          },
          quote: (
            <p>
              My diagnosis made me miserable. But the promise of EPM’s effective
              solution gave me hope for a better future.
            </p>
          ),
        },
        {
          name: "Linda, 45",
          role: "Ulcerative Colitis",
          images: {
            mobile: "/img/mobile/homepage/our-community/lory@2x.jpg",
            desktop: "/img/desktop/homepage/our-community/lory@2x.jpg",
          },
          quote: (
            <p>
              I’ve been living with my Colitis for over 6 years, EPM’s discovery
              can be a real life-changer.
            </p>
          ),
        },
        {
          name: "George, 73",
          role: "Psoriasis",
          images: {
            mobile: "/img/mobile/homepage/our-community/ryan@2x.jpg",
            desktop: "/img/desktop/homepage/our-community/ryan@2x.jpg",
          },
          quote: (
            <p>
              You constantly wish for health. I hope for medicine with fewer
              side effects than those I’ve had!
            </p>
          ),
        },
        {
          name: "Prof.Raphael Mechoulam",
          role: "",
          images: {
            mobile: "/img/mobile/homepage/our-community/mechoulam@2x.jpg",
            desktop: "/img/desktop/homepage/our-community/mechoulam@2x.jpg",
          },
          quote: (
            <p>
              “Cannabinoid acids are compounds that are much more potent than
              cannabinoids and have an outstanding therapeutic potential”
            </p>
          ),
        },
        {
          name: "Ryan, 25",
          role: "Ulcerative Colitis",
          images: {
            mobile: "/img/mobile/homepage/our-community/ryan@2x.jpg",
            desktop: "/img/desktop/homepage/our-community/ryan@2x.jpg",
          },
          quote: (
            <p>
              “I’ve been living with my Colitis for over 6 years, EPM’s
              discovery can be a real life-changer. “
            </p>
          ),
        },
        {
          name: "Julian Gangolli",
          role: "Head of Advisory Board",
          images: {
            mobile: "/img/mobile/homepage/our-community/julian@2x.jpg",
            desktop: "/img/desktop/homepage/our-community/julian@2x.jpg",
          },
          quote: (
            <p>
              The significant clinical values of CBD and cannabinoids has
              already been demonstrated… a very exciting therapeutic development
            </p>
          ),
        },
      ],
    },
  };

  return (
    <>
      <Head>
        <title>EPM - Medicine to All.</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Main />
      <Story />
      <Innovation data={page.innovation} />
      <Treatments data={page.treatments} />
      <Commitment />
      <Community data={page.community} />
    </>
  );
}
