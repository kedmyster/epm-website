import { useState } from "react";
import Head from "next/head";
import Main from "../components/about/main";
import OurStory from "../components/about/ourStory"
import FoundingEPM from "../components/about/foundingEPM"
import Leadership from "../components/about/leadership"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
  const [leaders, setLeaders] = useState([{
    group: "Senior",
    people: [{
      name: "Reshef Swisa",
      role: "Co-Founder & CEO",
      text:(
        <div>
          <p class="mb-4">Previously the Co-founder and GM of NPG, China’s first antibiotic-free poultry producer.</p>
          <p class="mb-4"> Over 20 years of experience in global business development and operations. </p>
          <p>In 2017, Mr. Swisa conceived the idea of uniting a team of leading researchers to establish EPM– the world’s first drug development company using synthetic cannabinoid acid molecules.</p>
        </div>
      ),
      image: {
        mobile: "/img/desktop/leadership/reshef-swisa.jpg",
        desktop: "/img/desktop/leadership/reshef-swisa.jpg"
      }
    }, {
      name: "Julian Gangolli",
      role: "Head of Advisory board",
      text:(
        <div>
          <p class="mb-4">Previously the president,North America of GW Pharmaceuticals.</p>
          <p class="mb-4"> Prior to that, 11 years as the President of Allergen North America and member of the Executive Committee. Over 40 years of experience in the pharmaceutical sector in senior executive positions and extensive US commercialization experience.</p>
          <p>Mr. Gangolli helped to establish GW Pharmaceutical in the North American market and led the company to its historical FDA- approved drug Epidiolex (cannabinol based).</p>
        </div>
      ),
      image: {
        mobile: "/img/desktop/leadership/julian-gangolli.jpg",
        desktop: "/img/desktop/leadership/julian-gangolli.jpg"
      }
    }, {
      name: "Dr. Peter Welburn",
      role: "Director of Research and Development",
      text:(
        <div>
          <p class="mb-4">Previously General Manager of Leo Pharma Australia and New Zealand, who led the development of an FDA approved skin cancer treatment from laboratory to market.</p>
          <p>Dr. Welburn has over 30 years of experience in executive R & D roles and general management in  Pharma and Biotechnology companies. He is an invited speaker at international conferences and symposia.</p>
        </div>
      ),
      image: {
        mobile: "/img/desktop/leadership/peter-welburn.jpg",
        desktop: "/img/desktop/leadership/peter-welburn.jpg"
      }
    }, {
      name: "Ron Sharhabani",
      role: "CFO",
      text:(
        <div>
          <p class="mb-4">Previously leading the economic department for one of the largest insurance companies in Israel, Menora mivtachim insurance and pension.</p>
          <p>Ron has a substantial track record with financial planning & analysis, business strategy and corporate management.</p>
        </div>
      ),
      image: {
        mobile: "/img/desktop/leadership/ron-sharhabani.jpg",
        desktop: "/img/desktop/leadership/ron-sharhabani.jpg"
      }
    }, {
      name: "Roberto Gonzalez",
      role: "VP of Strategy",
      text:(
        <div>
          <p>Previously the CEO of Gruma Mexico, one of the largest companies in Central America. Roberto has over 25 years of experience in managing operations, business strategy and financial structuring, 10 of which as CEO of a public company.</p>
        </div>
      ),
      image: {
        mobile: "/img/desktop/leadership/roberto-gonzalez.jpg",
        desktop: "/img/desktop/leadership/roberto-gonzalez.jpg"
      }
    }, {
      name: "Rotem Sher",
      role: "Chief of Staff",
      text:(
        <div>
          <p>Previously a Director of Business Operations at Wix.com, Rotem has wide experience in the Hi-Tech industry in several senior director positions. Focused on building companies to scale and executing global projects, Rotem’s specialty is leading business units while shaping and turning strategy into practice.</p>
        </div>
      ),
      image: {
        mobile:  "/img/desktop/leadership/rotem-sher.jpg",
        desktop: "/img/desktop/leadership/rotem-sher.jpg"
      }
    }]
  }, {
    group: "Scientific Advisors",
    people: [{
      name: "Prof. Raphael Mechoulam",
      role: (<span>Head of Discovery Chemistry,<br/>Hebrew University of Jerusalem</span>),
      text:(
        <div>
          <p class="mb-4">Known as the “Godfather” of medical cannabis.</p>
          <p class="mb-4">Prof. Mechoulam has a lifetime of experience in the isolation and total synthesis of the main active ingredients of cannabis (cannabinoids). Best known for his discovery and syntheses of CBD and THC.</p>
          <p class="mb-4">Since the inception of his research in the 60s, Prof. Mechoulam has been nominated for over 25 academic awards, including an Honorary doctorate from Complutense University (2006) and the Israel Prize in Exact Sciences – chemistry (2000).</p>
          <p>Prof. Mechoulam is a principal of EPM as well as Head of Discovery Chemistry.</p>
        </div>
      ),
      image: {
        mobile: "/img/desktop/leadership/raphi-mechoulam.jpg",
        desktop: "/img/desktop/leadership/raphi-mechoulam.jpg"
      }
    }, {
      name: "Prof. Dan Peer",
      role: (<span>Head of Inflammatory Research,<br/>Tel Aviv University</span>),
      text:(
        <div>
          <p class="mb-4">One of Israel’s most renowned researchers.</p>
          <p class="mb-4"> Prof. Peer is a world leader in the field of delivery devices and nanomedicine. He is the Director of  the Laboratory of Precision NanoMedicine  and the Vice President for R&D at the Tel Aviv University. Prof. Peer has also professional experience at Harvard Medical School, the Children’s Hospital Boston and the Leona M. and Harry B. Helmsley Nanotechnology research fund.</p>
          <p>Prof. Peer received many awards, among them were awards from the Kenneth Rainin Foundation on his pioneering work in inflammatory bowel diseases (IBD) and award for the 1st Untold News Award together with Prof. Rimona Margalit also from Tel Aviv University on the “Cancer Bullet” invention that might change the world.</p>
        </div>
      ),
      image: {
        mobile: "/img/desktop/leadership/dan-peer.jpg",
        desktop: "/img/desktop/leadership/dan-peer.jpg"
      }
    }, {
      name: "Prof. Joseph (Yossi) Tam",
      role:(<span>Head of Metabolic Disorders Research,<br/>Hebrew University of Jerusalem</span>),
      text:(
        <div>
          <p class="mb-4">World leading researcher in the field of cannabis and cannabinoids.</p>
          <p class="mb-4">Prof. Tam is the Head of Obesity & Metabolism laboratory at the Hebrew University of Jerusalem, Director of the multidisciplinary center on cannabinoid in Israel and President of the International Cannabinoid Research Society. </p>
          <p>Prof. Tam received in 2018 the NCATS Director’s Awards from the National Institutes of Health and the Chowers Prize for Endocrinology by the Israel Endocrinology Society.</p>
        </div>
      ),
      image: {
        mobile: "/img/desktop/leadership/joseph-tam.jpg",
        desktop: "/img/desktop/leadership/joseph-tam.jpg"
      }
    },{
      name: "Dr. Dror Robinson",
      role: "Medical Advisory Board",
      text:(
        <div>
          <p class="mb-4">An internationally renowned surgeon and one of Israel’s leading doctors for Medical Cannabis treatments. Dr. Robinson is the Head of the Foot and Ankle Department and Orthopedic Research Unit at HaSharon Hospital at the Rabin Medical Center.</p>
          <p>He is a specialist in Medical Cannabis for pain and a Serial inventor and Medical Director at various orthopedics companies. Dr. Robinson has published over 90 papers in peer-reviewed journals, conducted 100+ animal trials and 25+ human trials.</p>
        </div>
      ),
      image: {
        mobile: "/img/desktop/leadership/dror-robinson.jpg",
        desktop: "/img/desktop/leadership/dror-robinson.jpg"
      }
    }]
  }, {
    group: "Directors",
    people: [{
      name: "Professor Joseph Tam",
      role: "Senior",
      text:(
        <div>
          <p class="mb-4">Previously the Co-founder and GM of NPG, China’s first antibiotic-free poultry producer.</p>
          <p class="mb-4"> Over 20 years of experience in global business development and operations. </p>
          <p>In 2017, Mr. Swisa conceived the idea of uniting a team of leading researchers to establish EPM– the world’s first drug development company using synthetic cannabinoid acid molecules.</p>
        </div>
      ),      image: {
        mobile: "/img/desktop/prof-joseph-tam@2x.jpg",
        desktop: "/img/desktop/prof-joseph-tam@2x.jpg"
      }
    }, {
      name: "Professor Joseph Tam",
      role: "Senior",
      text:(
        <div>
          <p class="mb-4">Previously the Co-founder and GM of NPG, China’s first antibiotic-free poultry producer.</p>
          <p class="mb-4"> Over 20 years of experience in global business development and operations. </p>
          <p>In 2017, Mr. Swisa conceived the idea of uniting a team of leading researchers to establish EPM– the world’s first drug development company using synthetic cannabinoid acid molecules.</p>
        </div>
      ),
      image: {
        mobile:  "/img/desktop/prof-joseph-tam@2x.jpg",
        desktop: "/img/desktop/prof-joseph-tam@2x.jpg"
      }
    }, {
      name: "Professor Joseph Tam",
      role: "Senior",
      text:(
        <div>
          <p class="mb-4">Previously the Co-founder and GM of NPG, China’s first antibiotic-free poultry producer.</p>
          <p class="mb-4"> Over 20 years of experience in global business development and operations. </p>
          <p>In 2017, Mr. Swisa conceived the idea of uniting a team of leading researchers to establish EPM– the world’s first drug development company using synthetic cannabinoid acid molecules.</p>
        </div>
      ),
      image: {
        mobile:  "/img/desktop/prof-joseph-tam@2x.jpg",
        desktop: "/img/desktop/prof-joseph-tam@2x.jpg"
      }
    }, {
      name: "Professor Joseph Tam",
      role: "Senior",
      text:(
        <div>
          <p class="mb-4">Previously the Co-founder and GM of NPG, China’s first antibiotic-free poultry producer.</p>
          <p class="mb-4"> Over 20 years of experience in global business development and operations. </p>
          <p>In 2017, Mr. Swisa conceived the idea of uniting a team of leading researchers to establish EPM– the world’s first drug development company using synthetic cannabinoid acid molecules.</p>
        </div>
      ),
      image: {
        mobile:  "/img/desktop/prof-joseph-tam@2x.jpg",
        desktop: "/img/desktop/prof-joseph-tam@2x.jpg"
      }
    }, {
      name: "Professor Joseph Tam",
      role: "Senior",
      text:(
        <div>
          <p class="mb-4">Previously the Co-founder and GM of NPG, China’s first antibiotic-free poultry producer.</p>
          <p class="mb-4"> Over 20 years of experience in global business development and operations. </p>
          <p>In 2017, Mr. Swisa conceived the idea of uniting a team of leading researchers to establish EPM– the world’s first drug development company using synthetic cannabinoid acid molecules.</p>
        </div>
      ),
      image: {
        mobile:  "/img/desktop/prof-joseph-tam@2x.jpg",
        desktop: "/img/desktop/prof-joseph-tam@2x.jpg"
      }
    }, {
      name: "Professor Joseph Tam",
      role: "Senior",
      text:(
        <div>
          <p class="mb-4">Previously the Co-founder and GM of NPG, China’s first antibiotic-free poultry producer.</p>
          <p class="mb-4"> Over 20 years of experience in global business development and operations. </p>
          <p>In 2017, Mr. Swisa conceived the idea of uniting a team of leading researchers to establish EPM– the world’s first drug development company using synthetic cannabinoid acid molecules.</p>
        </div>
      ),
      image: {
        mobile:  "/img/desktop/prof-joseph-tam@2x.jpg",
        desktop: "/img/desktop/prof-joseph-tam@2x.jpg"
      }
    }]
  }]);

  return (
    <>
      <Head>
        <title>EPM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main/>
      <OurStory/>
      <FoundingEPM/>
      <Leadership leaders={leaders}/>
    </>
  );
}
