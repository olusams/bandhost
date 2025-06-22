import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../../component/layout/Navbar';
import Preloader from '../../component/layout/preloader';
import Section1 from '../../component/section-pages/section-1';
import Contact from '../../component/section-pages/contact';
import Footer from '../../component/section-pages/footer';
import ScrollToTopBtn from '../../component/layout/ScrollToTop';

const image1 ="../../img/background/3.webp";

export default function Home() {
  useEffect(() => {
      if (typeof window !== 'undefined') {
          const loader = document.getElementById('mainpreloader');
          if (loader)
          setTimeout(() => {
            loader.classList.add("fadeOut");
            loader.style.display = 'none';
          }, 600)
      }
    }, []);
  return (
    <>
    <Head>
      <title>Playhost - Game Hosting Website Template</title>
      <link rel="icon" href="../img/icon.png" type="image/gif" sizes="16x16"/>
    </Head>

    {/* LOADER */}
    <div id='mainpreloader'>
      <Preloader/>
    </div>

    {/* MENU */}
    <div className="home dark-scheme">
      <header id="header-wrap">
         <Navbar />
      </header>

      {/* section */}
      <section className="pt60 no-bottom">
        <Section1/>
      </section>

      {/* section */}
      <section>
        <Contact/>
      </section>

      {/* footer */}
      <Footer/>


    </div>
    <ScrollToTopBtn />
    </>
  )
}
