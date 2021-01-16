import Image from "next/image";
import Head from "next/head";
import Header from "../components/layout/header.jsx";
import Footer from "../components/layout/footer.jsx";

import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
