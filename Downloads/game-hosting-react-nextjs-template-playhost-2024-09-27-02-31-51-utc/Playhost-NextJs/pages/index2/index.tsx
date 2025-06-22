import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../../component/layout/Navbar';
import Preloader from '../../component/layout/preloader';
import Pricelist from '../../component/section-pages/pricelist';
import Section1 from '../../component/section-pages/section-1';
import Footer from '../../component/section-pages/footer';
import ScrollToTopBtn from '../../component/layout/ScrollToTop';

const image1 ="../../img/background/3.webp";
const image2 ="../../img/background/4.webp";
const image3 ="../../img/background/5.webp";

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
      <Parallax className="bgcolor" bgImage={image2} strength={300}>  
        <section id="content" className="pt60 no-bottom">
          <Section1/>
        </section>
       </Parallax>
      
      {/* section */}
      <Parallax className="" bgImage={image3} strength={150}> 
      <section className="no-bg pt60 no-bottom">
        <Pricelist/>
      </section>
      </Parallax>

      {/* section */}
      <section className="pt60 no-bottom">
        <Section1/>
      </section>

      {/* footer */}
      <Footer/>


    </div>
    <ScrollToTopBtn />
    </>
  )
}
