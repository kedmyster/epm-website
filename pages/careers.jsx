import { useState, useEffect } from "react";
import Head from "next/head";
import CareersComponent from "../components/careers/careers"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      </Head>

      <CareersComponent data={page.careers} positions={positions}/>
    </>
  );
}
