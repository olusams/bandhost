import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../../component/layout/Navbar';
import Preloader from '../../component/layout/preloader';
import Footer from '../../component/section-pages/footer';
import ScrollToTopBtn from '../../component/layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const image1 ="../../img/background/subheader-affliate.webp";

const GlobalStyles = createGlobalStyle`
  .react-parallax-bgimage {
    transform: translate3d(-50%, -12%, 0px) !important;
  }
`;

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

    <GlobalStyles/>

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
      <Parallax className="" bgImage={image1} strength={5}>  
        <section className="no-bg">
          <div className="container z-9">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="subtitle wow fadeInUp mb-3">Affliate program</div>
                  </div>
                  <div className="col-lg-6">
                      <h2>Join our affiliate team and  Earn 10% commission</h2>
                  </div>                 
              </div>
          </div>
        </section>
      </Parallax>

      {/* section */}
      <section>
        <div className="container">
              <div className="row row-flex">
                  <div className="col-lg-4 mb30">
                      <div className="de-step-s1">
                          <div className="d-number">1</div>
                          <h4>Join Our Affiliate Program</h4>
                          <p className="">Sign up for our affiliate program and start earning commissions by promoting London&apos;s premier game hosting service. Share your unique referral link with your gaming community and earn 10% commission on every successful referral.</p>
                      </div>
                  </div>
                  <div className="col-lg-4 mb30">
                      <div className="de-step-s1">
                          <div className="d-number">2</div>
                          <h4>Promote Our Game Hosting</h4>
                          <p className="">Share our high-performance game servers with your audience. Whether you&apos;re a content creator, gaming community leader, or tech reviewer, help gamers discover reliable hosting with 24/7 UK-based support and enterprise-grade infrastructure.</p>
                      </div>
                  </div>
                  <div className="col-lg-4 mb30">
                      <div className="de-step-s1">
                          <div className="d-number">3</div>
                          <h4>Earn Your Commission</h4>
                          <p className="">Get paid monthly for every customer you refer. Our transparent commission structure ensures you earn 10% on all hosting plans, with payments processed directly to your account. Track your earnings through our affiliate dashboard.</p>
                      </div>
                  </div>
              </div>

              <div className="col-lg-12 text-center">
                  <a className="btn-main btn-lg" href="#">Join Today</a>
              </div>
          </div>
      </section>

      {/* footer */}
      <Footer/>


    </div>
    <ScrollToTopBtn />
    </>
  )
}
