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
          name: "Maria, 32",
          role: "Crohn's",
        },
        {
          images: {
            mobile: "/img/mobile/homepage/our-community/mechoulam@2x.jpg",
            desktop: "/img/desktop/homepage/our-community/mechoulam@2x.jpg",
          },
          quote: (
            <p>
              No matter the type of testimonial, use images, videos and social
              media.
            </p>
          ),
          name: "Prof.Raphael Mechoulam",
          role: (
            <span>
              Head of Discovery Chemistry,
              <br /> Hebrew University of Jerusalem
            </span>
          ),
        },
        {
          images: {
            mobile: "/img/mobile/homepage/our-community/ryan@2x.jpg",
            desktop: "/img/desktop/homepage/our-community/ryan@2x.jpg",
          },
          quote: (
            <p>
              No matter the type of testimonial, use images, videos and social
              media.
            </p>
          ),
          name: "Ryan",
          role: "Head of Metabolic Disorders Research",
        },
        {
          images: {
            mobile: "/img/mobile/homepage/our-community/lory@2x.jpg",
            desktop: "/img/desktop/homepage/our-community/lory@2x.jpg",
          },
          quote: (
            <p>
              No matter the type of testimonial, use images, videos and social
              media.
            </p>
          ),
          name: "Lory",
          role: "Head of Metabolic Disorders Research",
        },
        {
          images: {
            mobile: "/img/mobile/homepage/our-community/julian@2x.jpg",
            desktop: "/img/desktop/homepage/our-community/julian@2x.jpg",
          },
          quote: (
            <p>
              No matter the type of testimonial, use images, videos and social
              media.
            </p>
          ),
          name: "Julian",
          role: "Head of Metabolic Disorders Research",
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
      <Story />
      <Innovation data={page.innovation} />
      <Treatments data={page.treatments} />
      <Commitment />
      <Community data={page.community} />
    </>
  );
}
