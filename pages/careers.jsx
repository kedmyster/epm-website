import { useState, useEffect } from "react";
import Head from "next/head";
import CareersComponent from "../components/careers/careers";

export default function Careers() {
  useEffect(() => {
    document.body.dataset.headerTheme = "dark";
    document.querySelector(".menu-item--careers").classList.add("menu-item--current");
  }, []);

  const [positions, setPositions] = useState([{}]);
  const page = {
    careers: {
      slides: [
        {
          url: "#",
          images: {
            
          },
          name: "",
          quote:
            "",
          date: "",
        },
        {
          url: "#",
          images: {
            src: "",
            width: "",
            height: "",
          },
          name: "",
          quote:
            "",
          date: "",
        },
        {
          url: "#",
          images: {
            src: "",
            width: "",
            height: "",
          },
          name: "",
          quote:
            "",
          date: "",
        },
        {
          url: "#",
          images: {
            src: "",
            width: "",
            height: "",
          },
          name: "",
          quote: "",
          date: "",
        },
      ]
    }
  }

  return (
    <>
      <Head>
        <title>Careers - EPM</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preload" as="image" href="/img/desktop/careers/careers@2x.jpg" />
        <link rel="preload" as="image" href="/img/mobile/careers/careers@2x.jpg" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>

      <CareersComponent data={page.careers} positions={positions}/>
    </>
  );
}
