import { useState } from "react";
import Head from "next/head";
import Main from "../components/about/main";
import OurStory from "../components/about/ourStory"
import Leadership from "../components/about/leadership"
import Careers from "../components/about/careers"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function about() {
  const [positions, setPositions] = useState([{}]);

  const [leaders, setLeaders] = useState([{
    group: "Senior",
    people: [{
      name: "Professor Joseph Tam",
      role: "Head of Metabolic Disorder Research",
      text:(
        <div>
          <p class="mb-4">Previously the Co-founder and GM of NPG, China’s first antibiotic-free poultry producer.</p>
          <p class="mb-4"> Over 20 years of experience in global business development and operations. </p>
          <p>In 2017, Mr. Swisa conceived the idea of uniting a team of leading researchers to establish EPM– the world’s first drug development company using synthetic cannabinoid acid molecules.</p>
        </div>
      ),
      image: {
        mobile: "/img/mobile/prof-joseph-tam@3x.jpg",
        desktop: "/img/desktop/prof-joseph-tam@2x.jpg"
      }
    }, {
      name: "Professor Joseph Tam",
      role: "Head of Metabolic Disorder Research",
      text:(
        <div>
          <p class="mb-4">Previously the Co-founder and GM of NPG, China’s first antibiotic-free poultry producer.</p>
          <p class="mb-4"> Over 20 years of experience in global business development and operations. </p>
          <p>In 2017, Mr. Swisa conceived the idea of uniting a team of leading researchers to establish EPM– the world’s first drug development company using synthetic cannabinoid acid molecules.</p>
        </div>
      ),
      image: {
        mobile: "/img/mobile/prof-joseph-tam@3x.jpg",
        desktop: "/img/desktop/prof-joseph-tam@2x.jpg"
      }
    }, {
      name: "Professor Joseph Tam",
      role: "Head of Metabolic Disorder Research",
      text:(
        <div>
          <p class="mb-4">Previously the Co-founder and GM of NPG, China’s first antibiotic-free poultry producer.</p>
          <p class="mb-4"> Over 20 years of experience in global business development and operations. </p>
          <p>In 2017, Mr. Swisa conceived the idea of uniting a team of leading researchers to establish EPM– the world’s first drug development company using synthetic cannabinoid acid molecules.</p>
        </div>
      ),
      image: {
        mobile: "/img/mobile/prof-joseph-tam@3x.jpg",
        desktop: "/img/desktop/prof-joseph-tam@2x.jpg"
      }
    }, {
      name: "Professor Joseph Tam",
      role: "Head of Metabolic Disorder Research",
      text:(
        <div>
          <p class="mb-4">Previously the Co-founder and GM of NPG, China’s first antibiotic-free poultry producer.</p>
          <p class="mb-4"> Over 20 years of experience in global business development and operations. </p>
          <p>In 2017, Mr. Swisa conceived the idea of uniting a team of leading researchers to establish EPM– the world’s first drug development company using synthetic cannabinoid acid molecules.</p>
        </div>
      ),
      image: {
        mobile: "/img/mobile/prof-joseph-tam@3x.jpg",
        desktop: "/img/desktop/prof-joseph-tam@2x.jpg"
      }
    }, {
      name: "Professor Joseph Tam",
      role: "Head of Metabolic Disorder Research",
      text:(
        <div>
          <p class="mb-4">Previously the Co-founder and GM of NPG, China’s first antibiotic-free poultry producer.</p>
          <p class="mb-4"> Over 20 years of experience in global business development and operations. </p>
          <p>In 2017, Mr. Swisa conceived the idea of uniting a team of leading researchers to establish EPM– the world’s first drug development company using synthetic cannabinoid acid molecules.</p>
        </div>
      ),
      image: {
        mobile: "/img/mobile/prof-joseph-tam@3x.jpg",
        desktop: "/img/desktop/prof-joseph-tam@2x.jpg"
      }
    }]
  }, {
    group: "Scientific Advisors",
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
        mobile: "/img/mobile/prof-joseph-tam@3x.jpg",
        desktop: "/img/desktop/reshef-swisa@2x.jpg"
      }
    }, {
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
        mobile: "/img/mobile/prof-joseph-tam@3x.jpg",
        desktop: "/img/desktop/reshef-swisa@2x.jpg"
      }
    }, {
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
        mobile: "/img/mobile/prof-joseph-tam@3x.jpg",
        desktop: "/img/desktop/reshef-swisa@2x.jpg"
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
        mobile: "/img/mobile/prof-joseph-tam@3x.jpg",
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
        mobile: "/img/mobile/prof-joseph-tam@3x.jpg",
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
        mobile: "/img/mobile/prof-joseph-tam@3x.jpg",
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
        mobile: "/img/mobile/prof-joseph-tam@3x.jpg",
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
        mobile: "/img/mobile/prof-joseph-tam@3x.jpg",
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
        mobile: "/img/mobile/prof-joseph-tam@3x.jpg",
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
      <Leadership leaders={leaders}/>
      <Careers positions={positions}/>
    </>
  );
}
