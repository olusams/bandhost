import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Parallax } from 'react-parallax';
import Navbar from '../component/layout/Navbar';
import Preloader from '../component/layout/preloader';
import Slider from '../component/section-pages/slider';
import Section1 from '../component/section-pages/section-1';
import Pricelist from '../component/section-pages/pricelist';
import CollectionCenter from '../component/section-pages/Collection-center';
import SectionTestimonial from '../component/section-pages/section-testimonial';
import Contact from '../component/section-pages/contact';
import Footer from '../component/section-pages/footer';
import ScrollToTopBtn from '../component/layout/ScrollToTop';

const image1 ="./img/background/3.webp";
const image2 ="./img/background/2.webp";

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
      <title>Playhost - Premium Game Server Hosting in London</title>
      <meta name="description" content="Professional game server hosting in London with 24/7 UK support, enterprise-grade infrastructure, and competitive GBP pricing." />
      <link rel="icon" href="./img/icon.png" type="image/gif" sizes="16x16"/>
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

      {/* Hero Section with Slider */}
      <section className="no-padding">
        <Slider/>
      </section>

      {/* Features Section */}
      <section className="no-bottom">
        <Section1/>
      </section>

      {/* Pricing Section */}
      <Parallax className="" bgImage={image1} strength={300}>  
        <div className="de-gradient-edge-top"></div>
        <div className="de-gradient-edge-bottom"></div>
        <section className="no-bg">
          <Pricelist/>
        </section>
      </Parallax>

      {/* Game Collection Section */}
      <section className="no-bottom">
        <CollectionCenter/>
      </section>

      {/* Testimonials Section */}
      <Parallax className="" bgImage={image2} strength={300}>  
        <div className="de-gradient-edge-top"></div>
        <div className="de-gradient-edge-bottom"></div>
        <section className="no-bg">
          <SectionTestimonial/>
        </section>
      </Parallax>

      {/* Contact Section */}
      <section className="no-bottom">
        <Contact/>
      </section>

      {/* footer */}
      <Footer/>

    </div>
    <ScrollToTopBtn />
    </>
  )
}
