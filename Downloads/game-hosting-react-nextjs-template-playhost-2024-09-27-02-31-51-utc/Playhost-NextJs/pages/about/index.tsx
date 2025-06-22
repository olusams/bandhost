import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../../component/layout/Navbar';
import Preloader from '../../component/layout/preloader';
import Section1 from '../../component/section-pages/section-1';
import Footer from '../../component/section-pages/footer';
import ScrollToTopBtn from '../../component/layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const image1 ="../../img/background/subheader-about.webp";
import image2 from "../../public/img/misc/building.webp";
import image3 from "../../public/img/misc/girl-ai.webp";
import image4 from "../../public/img/team/1.webp";
import image5 from "../../public/img/team/3.webp";
import image6 from "../../public/img/team/4.webp";

const GlobalStyles = createGlobalStyle`

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
                      <div className="subtitle  mb-3">About us</div>
                  </div>
                  <div className="col-lg-6">
                      <h2 className=" mb20" data-wow-delay=".2s">This is our story</h2>
                  </div>                 
              </div>
          </div>
        </section>
      </Parallax>

      {/* section */}
      <section>
        <Section1/>
      </section>

      {/* section */}
      <section className="no-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="row gx-5">
                        <div className="col-lg-6 col-md-6">
                            <h4>The Beginning</h4>
                            <p>Founded in 2018 in the heart of London, Playhost began with a simple mission: to provide gamers with the highest quality server hosting experience. What started as a small team of passionate gamers has grown into one of the UK&apos;s most trusted game server hosting providers, serving thousands of satisfied customers across Europe.</p>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <h4>Our Mission</h4>
                            <p>We&apos;re committed to delivering exceptional gaming experiences through cutting-edge technology and unparalleled customer support. Our London-based infrastructure ensures optimal performance for UK and European gamers, while our 24/7 support team is always ready to help you get the most out of your gaming server.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* section */}
      <section className="no-top">
        <div className="container">
          <div className="row">
              <div className="col-lg-3">
                  <div className="subtitle mb20">Our solid team</div>
                  <h2 className="mb20 wow fadeInUp">Behind the scene</h2>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 mb-sm-30">
                  <div className="f-profile text-center">
                      <div className="fp-wrap f-invert">
                          <div className="fpw-overlay">
                              <div className="fpwo-wrap">
                                  <div className="fpwow-icons">
                                      <Link to="#"><i className="fa-brands fa-facebook fa-lg"></i></Link>
                                      <Link to="#"><i className="fa-brands fa-twitter fa-lg"></i></Link>
                                      <Link to="#"><i className="fa-brands fa-linkedin fa-lg"></i></Link>
                                      <Link to="#"><i className="fa-brands fa-instagram fa-lg"></i></Link>
                                      <Link to="#"><i className="fa-brands fa-tiktok fa-lg"></i></Link>
                                  </div>
                              </div>
                          </div>                                  
                          <div className="fpw-overlay-btm"></div>
                          <Image src={image4} className="fp-image img-fluid" alt=""/>
                      </div>

                      <h4>Robyn Peel</h4>
                      CEO Founder
                  </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 mb-sm-30">
                  <div className="f-profile text-center">
                      <div className="fp-wrap f-invert">
                          <div className="fpw-overlay">
                              <div className="fpwo-wrap">
                                  <div className="fpwow-icons">
                                      <Link to="#"><i className="fa-brands fa-facebook fa-lg"></i></Link>
                                      <Link to="#"><i className="fa-brands fa-twitter fa-lg"></i></Link>
                                      <Link to="#"><i className="fa-brands fa-linkedin fa-lg"></i></Link>
                                      <Link to="#"><i className="fa-brands fa-instagram fa-lg"></i></Link>
                                      <Link to="#"><i className="fa-brands fa-tiktok fa-lg"></i></Link>
                                  </div>
                              </div>
                          </div>                                  
                          <div className="fpw-overlay-btm"></div>
                          <Image src={image5} className="fp-image img-fluid" alt=""/>
                      </div>

                      <h4>Anna Shepard</h4>
                      Director
                  </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 mb-sm-30">
                  <div className="f-profile text-center">
                      <div className="fp-wrap f-invert">
                          <div className="fpw-overlay">
                              <div className="fpwo-wrap">
                                  <div className="fpwow-icons">
                                      <a href="#"><i className="fa-brands fa-facebook fa-lg"></i></a>
                                      <a href="#"><i className="fa-brands fa-twitter fa-lg"></i></a>
                                      <a href="#"><i className="fa-brands fa-linkedin fa-lg"></i></a>
                                      <a href="#"><i className="fa-brands fa-instagram fa-lg"></i></a>
                                      <a href="#"><i className="fa-brands fa-tiktok fa-lg"></i></a>
                                  </div>
                              </div>
                          </div>                                  
                          <div className="fpw-overlay-btm"></div>
                          <Image src={image6} className="fp-image img-fluid" alt=""/>
                      </div>

                      <h4>Fynley Wilkinson</h4>
                      Developer
                  </div>
              </div>

          </div>
        </div>
      </section>

      {/* section */}
      <section className="no-top">
       <div className="container">
            <div className="row text-center">
                <div className="col-lg-3 col-sm-6 mb-sm-30 position-relative">
                    <div className="de_count text-light wow fadeInUp">
                        <h3 className="timer id-color" >15425</h3>
                        <h4 className="text-uppercase">Happy<br/>Gamers</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-sm-30 position-relative">
                    <div className="de_count text-light wow fadeInUp">
                        <h3 className="timer text-line">8745</h3>
                        <h4 className="text-uppercase">Servers<br/>Ordered</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-sm-30 position-relative">
                    <div className="de_count text-light wow fadeInUp">
                        <h3 className="timer id-color">235</h3>
                        <h4 className="text-uppercase">Awards<br/>Winning</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-sm-30 position-relative">
                    <div className="de_count text-light wow fadeInUp">
                        <h3 className="timer text-line">15</h3>
                        <h4 className="text-uppercase">Years<br/>Experience</h4>
                    </div>
                </div>
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
