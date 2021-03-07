import { useState, useEffect } from "react";
import Head from "next/head";
import Main from "../components/about/main";
import OurStory from "../components/about/ourStory";
import FoundingEPM from "../components/about/foundingEPM";
import Leadership from "../components/about/leadership";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
  useEffect(() => {
    document
      .querySelector(".menu-item--about")
      .classList.add("menu-item--current");
  }, []);

  const getId = (name) => {
    return name.toLowerCase().replace(/ /g, "-");
  };

  const [leaders, setLeaders] = useState([
    {
      group: "Board of Directors",
      label:"Directorate",
      id: getId("Board of Directors"),
      text:
        "We are grateful to have an experienced team with specialties in different fields and unique backgrounds and our elite research team is one of the most recognized in the industry. We all share a common vision and values. We all strive to advance science to “help people live a life of higher quality” and want to make sure our efforts reach as many people as possible.",
      people: [
        {
          name: "Julian Gangolli",
          role: "Chairman",
          text: (
            <div>
              <p className="mb-4">
                Previously North America-based president of GW Pharmaceuticals.
              </p>
              <p className="mb-4">
                {" "}
                Prior to that, Mr. Gangolli served 11 years as president and
                executive committee member of Allergen North America r He has
                over 40 years of experience in the pharmaceutical sector in
                senior executive positions and extensive U.S. commercialization
                experience.
              </p>
              <p>
                Mr. Gangolli helped establish GW Pharmaceutical in the North
                American market and led the company to its historical
                FDA-approved drug Epidiolex, which is cannabinol based.
              </p>
            </div>
          ),
          image: {
            mobile: "/img/mobile/about/leadership/julian@2x.jpg",
            desktop: "/img/desktop/about/leadership/julian@2x.jpg",
          },
        },
        {
          name: "Reshef Swisa",
          role: "Co-Founder & CEO",
          text: (
            <div>
              <p className="mb-4">
                Previously worked as co-founder and GM of NPG, China’s first
                antibiotic-free poultry producer.
              </p>
              <p className="mb-4">
                {" "}
                He has over 20 years of experience in global business
                development and operations.{" "}
              </p>
              <p>
                In 2017, Mr. Swisa conceived the idea of uniting a team of
                leading researchers to establish EPM– the world’s first drug
                development company using synthetic cannabinoid acid molecules.
              </p>
            </div>
          ),
          image: {
            mobile: "/img/mobile/about/leadership/reshef@2x.jpg",
            desktop: "/img/desktop/about/leadership/reshef@2x.jpg",
          },
        },
        {
          name: "Roberto Gonzalez",
          role: "", //   VP of Strategy
          text: (
            <div>
              <p>
                Previously CEO of Gruma Mexico, one of the largest companies in
                Central America, Mr. Gonzalez has over 25 years of experience in
                managing operations, business strategy, and financial
                structuring, 10 of which as CEO of Gruma.
              </p>
            </div>
          ),
          image: {
            mobile: "/img/mobile/about/leadership/roberto@2x.jpg",
            desktop: "/img/desktop/about/leadership/roberto@2x.jpg",
          },
        },
        {
          name: "Prof. Dan Peer",
          role: "",
          // <span>
          //   Head of Inflammatory Research,
          //   <br />
          //   Tel Aviv University
          // </span>
          text: (
            <div>
              <p className="mb-4">One of Israel’s most renowned researchers.</p>
              <p className="mb-4">
                {" "}
                Vice President at R&D at Tel Aviv University and the Director of
                the Laboratory of Precision NanoMedicine.Prof. Peer is a world
                leader in the field of delivery devices and nanomedicine. Prof.
                Peer also has professional experience at Harvard Medical School,
                the Children’s Hospital Boston and the Leona M. and Harry B.
                Helmsley Nanotechnology research fund.
              </p>
              <p>
                Prof. Peer received many awards, among them were awards from the
                Kenneth Rainin Foundation on his pioneering work in inflammatory
                bowel diseases (IBD) and award for the 1st Untold News Award
                together with Prof. Rimona Margalit also from Tel Aviv
                University on the “Cancer Bullet” invention that might change
                the world.
              </p>
            </div>
          ),
          image: {
            mobile: "/img/mobile/about/leadership/dan@2x.jpg",
            desktop: "/img/desktop/about/leadership/dan@2x.jpg",
          },
        },
      ],
    },

    {
      group: "Executive Leadership",
      label:"Executives",
      id: getId("Executive Leadership"),
      text:
        "We are grateful to have an experienced team with specialties in different fields and unique backgrounds and our elite research team is one of the most recognized in the industry. We all share a common vision and values. We all strive to advance science to “help people live a life of higher quality” and want to make sure our efforts reach as many people as possible.",
      people: [
        {
          name: "Reshef Swisa",
          role: "Co-Founder & CEO",
          text: (
            <div>
              <p className="mb-4">
                Previously worked as co-founder and GM of NPG, China’s first
                antibiotic-free poultry producer.
              </p>
              <p className="mb-4">
                {" "}
                He has over 20 years of experience in global business
                development and operations.{" "}
              </p>
              <p>
                In 2017, Mr. Swisa conceived the idea of uniting a team of
                leading researchers to establish EPM– the world’s first drug
                development company using synthetic cannabinoid acid molecules.
              </p>
            </div>
          ),
          image: {
            mobile: "/img/mobile/about/leadership/reshef@2x.jpg",
            desktop: "/img/desktop/about/leadership/reshef@2x.jpg",
          },
        },
        {
          name: "Dr. Thilo Bayrhoffer",
          role: "Chief Business Officer",
          text: (
            <div>
              <p className="mb-4">
                Dr. Bayrhoffer has over 20 years’ experience in the
                pharmaceutical industry. He has gained truly global exposure in
                operational roles as well as during his tenure in strategic
                consulting and at VC/PE companies focused on the sector.
              </p>
              <p className="mb-4">
                Besides working at firms such as The Boston Consulting Group,
                Empartners, and Swisscore Group throughout Europe, the Americas,
                and Asia, he is also a successful angel investor. Dr. Bayrhoffer
                has founded and exited several ventures and has been appointed
                to executive and non-executive board positions in the life
                science space.
              </p>
              <p>
                Dr. Bayrhoffer is a licensed physician in Germany, he holds an
                MBA (Honors) from Simon School of Business, University of
                Rochester, NY.
              </p>
            </div>
          ),
          image: {
            mobile: "/img/mobile/about/leadership/thilo@2x.jpg",
            desktop: "/img/desktop/about/leadership/thilo@2x.jpg",
          },
        },
        {
          name: "Dr. Peter Welburn",
          role: "Chief Scientific Officer ",
          text: (
            <div>
              <p className="">
                Previously GM at Leo Pharma Australia and New Zealand, which led
                the development of an FDA approved skin cancer treatment from
                lab to market. Dr. Welburn has over 30 years of experience in
                executive R&D roles and general management in Pharma and
                Biotechnology companies. Recurring keynote speaker at
                international conferences and symposia.
              </p>
            </div>
          ),
          image: {
            mobile: "/img/mobile/about/leadership/peter@2x.jpg",
            desktop: "/img/desktop/about/leadership/peter@2x.jpg",
          },
        },
        {
          name: "Yaron Hermech",
          role: "Chief Financial Officer ",
          text: (
            <div>
              <p className="">
                Yaron Hermesh was previously CFO of Object Geometries and
                several other companies. CPA, with over 20 years in finance,
                including strategic planning, IPO, mergers and acquisitions, and
                financial management.
              </p>
            </div>
          ),
          image: {
            mobile: "/img/mobile/about/leadership/yaron@2x.jpg",
            desktop: "/img/desktop/about/leadership/yaron@2x.jpg",
          },
        },

        {
          name: "Rotem Sher",
          role: "Chief of Staff",
          text: (
            <div>
              <p>
                Previously director of business operations at Wix.com, Rotem has
                a rich experience in the hi-tech industry in several senior
                director positions. Having focused on building companies to
                scale and executing global projects, Rotem’s specialty is
                leading business units while shaping and turning strategy into
                practice.
              </p>
            </div>
          ),
          image: {
            mobile: "/img/mobile/about/leadership/rotem@2x.jpg",
            desktop: "/img/desktop/about/leadership/rotem@2x.jpg",
          },
        },
        {
          name: "Ron Sharhabani",
          role: "VP of Compliance and IP",
          text: (
            <div>
              <p>
                Previously led the economic department for one of the largest
                insurance companies in Israel, Menora Mivtachim insurance and
                pension. Ron has a substantial track record in financial
                planning & analysis, business strategy and corporate management.
              </p>
            </div>
          ),
          image: {
            mobile: "/img/mobile/about/leadership/ron@2x.jpg",
            desktop: "/img/desktop/about/leadership/ron@2x.jpg",
          },
        },
      ],
    },
    {
      group: "Scientific Advisory Board",
      label:"Advisory Board",
      id: getId("Scientific Advisory Board"),
      text:
        "We are grateful to have an experienced team with specialties in different fields and unique backgrounds and our elite research team is one of the most recognized in the industry. We all share a common vision and values. We all strive to advance science to “help people live a life of higher quality” and want to make sure our efforts reach as many people as possible.",
      people: [
        {
          name: "Prof. Raphael Mechoulam",
          role: (
            <span>
              Head of Discovery Chemistry,
              <br />
              Hebrew University of Jerusalem
            </span>
          ),
          text: (
            <div>
              <p className="mb-4">
                Known as the “Godfather” of medical cannabis.
              </p>
              <p className="mb-4">
                Prof. Mechoulam has a lifetime of experience in the isolation
                and total synthesis of the main active ingredients of cannabis
                (cannabinoids). Best known for his discovery and syntheses of
                CBD and THC.
              </p>
              <p className="mb-4">
                Since the inception of his research in the 1960s, Prof.
                Mechoulam has been nominated for over 25 academic awards,
                including an Honorary doctorate from Complutense University
                (2006) and the Israel Prize in Exact Sciences – chemistry
                (2000).
              </p>
              <p>
                Prof. Mechoulam is a principal of EPM as well as Head of
                Discovery Chemistry.
              </p>
            </div>
          ),
          image: {
            mobile: "/img/mobile/about/leadership/raphi@2x.jpg",
            desktop: "/img/desktop/about/leadership/raphi@2x.jpg",
          },
        },
        {
          name: "Prof. Yossi Tam",
          role: (
            <span>
              Head of Metabolic Disorders Research,
              <br />
              Hebrew University of Jerusalem
            </span>
          ),
          text: (
            <div>
              <p className="mb-4">
                World leading researcher in the field of cannabis and
                cannabinoids.
              </p>
              <p className="mb-4">
                Prof. Tam is the Head of Obesity & Metabolism laboratory at the
                Hebrew University of Jerusalem, Director of the
                multidisciplinary center on cannabinoid in Israel and President
                of the International Cannabinoid Research Society.{" "}
              </p>
              <p>
                Prof. Tam received in 2018 the NCATS Director’s Awards from the
                National Institutes of Health and the Chowers Prize for
                Endocrinology by the Israel Endocrinology Society.
              </p>
            </div>
          ),
          image: {
            mobile: "/img/mobile/about/leadership/yossi@2x.jpg",
            desktop: "/img/desktop/about/leadership/yossi@2x.jpg",
          },
        },
        // {
        //   name: "Dr. Dror Robinson",
        //   role: "Medical Advisory Board",
        //   text:(
        //     <div>
        //       <p className="mb-4">An internationally renowned surgeon and one of Israel’s leading doctors for Medical Cannabis treatments. Dr. Robinson is the Head of the Foot and Ankle Department and Orthopedic Research Unit at HaSharon Hospital at the Rabin Medical Center.</p>
        //       <p>He is a specialist in Medical Cannabis for pain and a Serial inventor and Medical Director at various orthopedics companies. Dr. Robinson has published over 90 papers in peer-reviewed journals, conducted 100+ animal trials and 25+ human trials.</p>
        //     </div>
        //   ),
        //   image: {
        //     mobile: "/img/desktop/about/leadership/dror-robinson.jpg",
        //     desktop: "/img/desktop/about/leadership/dror-robinson.jpg"
        //   }
        // },
      ],
    },
  ]);

  return (
    <>
      <Head>
        <title>About - EPM</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preload" as="image" href="/img/desktop/about/hero@2x.jpg" />
        <link rel="preload" as="image" href="/img/mobile/about/hero@3x.jpg" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>

      {/*<Main />*/}
      <OurStory />
      <FoundingEPM />
      <Leadership leaders={leaders} />
    </>
  );
}
