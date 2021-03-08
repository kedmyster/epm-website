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
          title: "Lab-Made",
          text:
            "Synthesizing and creating consistent cannabinoid methyl-ester based treatments.",
          images: {
            mobile: "/img/mobile/homepage/our-innovation/made-in-labs@2x.jpg",
            desktop: "/img/desktop/homepage/our-innovation/made-in-labs@2x.jpg",
          },
        },
        {
          title: "FDA Guidelines",
          text:
            "Developing prescription medicine under guidelines and FDA approval.",
          images: {
            mobile: "/img/mobile/homepage/our-innovation/fda@2x.jpg",
            desktop: "/img/desktop/homepage/our-innovation/fda@2x.jpg",
          },
        },
        {
          title: "Collaboration",
          text:
            "Researching and developing with leading pharmaceutical contract research organizations around the world.",
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
              url: "/img/mobile/treatments/treatment-pills@3x.png",
              width: 223,
              height: 280,
            },
          },
        },
        {
          title: "Topical for Psoriasis",
          images: {
            mobile: {
              url: "/img/mobile/treatments/treatment-tube@3x.png",
              width: 79,
              height: 272,
            },
          },
        },
        {
          title: "IV for ARDS",
          tagline: "(Acute Respiratory Distress Syndrome)",
          images: {
            mobile: {
              url: "/img/mobile/treatments/treatment-iv@3x.png",
              width: 192,
              height: 253,
            },
          },
        },
      ],
    },
    community: {
      slides: [
        {
          name: "Maria, 32",
          role: "Crohn's Disease",
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
          name: "Prof. Raphael Mechoulam",
          role: "Head of Chemistry Discovery",
          images: {
            mobile: "/img/mobile/homepage/our-community/mechoulam@2x.jpg",
            desktop: "/img/desktop/homepage/our-community/mechoulam@2x.jpg",
          },
          quote: (
            <p>
              Cannabinoid acids are compounds that are much more potent than
              cannabinoids and have an outstanding therapeutic potential.
            </p>
          ),
        },
        {
          name: "George, 73",
          role: "Psoriasis",
          images: {
            mobile: "/img/mobile/homepage/our-community/george@2x.jpg",
            desktop: "/img/desktop/homepage/our-community/george@2x.jpg",
          },
          quote: (
            <p>
              You constantly wish for health. I hope for medicine with fewer
              side effects than those I’ve had!
            </p>
          ),
        },
        // {
        //   name: "Ryan, 25",
        //   role: "Ulcerative Colitis",
        //   images: {
        //     mobile: "/img/mobile/homepage/our-community/ryan@2x.jpg",
        //     desktop: "/img/desktop/homepage/our-community/ryan@2x.jpg",
        //   },
        //   quote: (
        //     <p>
        //       “I’ve been living with my Colitis for over 6 years, EPM’s
        //       discovery can be a real life-changer. “
        //     </p>
        //   ),
        // },
        {
          name: "Julian Gangolli",
          role: "Chairman of the Board ",
          images: {
            mobile: "/img/mobile/homepage/our-community/julian@2x.jpg",
            desktop: "/img/desktop/homepage/our-community/julian@2x.jpg",
          },
          quote: (
            <p>
              The significant clinical values of CBD and cannabinoids has
              already been demonstrated a very exciting therapeutic development.
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
        <link
          rel="preload"
          as="image"
          href="/img/desktop/homepage/hero@2x.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="/img/mobile/homepage/hero@2x.jpg"
        />
        <meta
          name="description"
          content="EPM is leading the way in next-generation cannabinoid acid medicine - unlocking its full potential to address unmet patient and consumer needs."
        />
        <meta
          name="keywords"
          content="Unlock the potential, Novel therapeutics, Synthetic, Cannabinoid acids, Patient-focused, Pharmaceutical Group, prescription medicine, Lab-made, FDA Guidelines, alternative treatments, Minimal side effects, Alternative to steroids, Affordable Drugs Psoriasis, IBD, ARDS, Curing, Treating, community, Endless Potenital Molecules, Minimal side effects, Alternative to steroids, Affordable Drugs, new medicinal solutions "
        />
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
