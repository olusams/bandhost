import React from 'react';
import Link from 'next/link'; 
import { Parallax } from "react-parallax";
import Image from 'next/image';
import { useEffect } from "react"
import Aos from 'aos';
import "aos/dist/aos.css";

import image1 from '../../public/img/covers/1.webp';
import image2 from '../../public/img/covers/2.webp';
import image3 from '../../public/img/covers/3.webp';
import image4 from '../../public/img/covers/4.webp';
import image5 from '../../public/img/covers/5.webp';
import image6 from '../../public/img/covers/6.webp';
import image7 from '../../public/img/covers/7.webp';
import image8 from '../../public/img/covers/8.webp';

const collection = () => {
    useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
    return(
        <div className="container">
            <div className="row g-4 sequence">

            <div className="col-lg-3 col-md-6 gallery-item">
                <div className="de-item wow"
                    data-aos="fade-left"
                                    data-aos-delay="0"
                                    data-aos-duration="600"
                                    data-aos-easing="ease"
                                    data-aos-once="true">
                    <div className="d-overlay">
                        <div className="d-label">
                            20% OFF
                        </div>
                        <div className="d-text">
                            <h4>Thunder and City</h4>
                            <p className="d-price">Starting at <span className="price">£14.99</span></p>
                            <Link className="btn-main btn-fullwidth" href="#">Order Now</Link>
                        </div>
                    </div>
                    <Image src={image1} className="img-fluid " alt=""/>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 gallery-item">
                <div className="de-item wow"
                    data-aos="fade-left"
                                    data-aos-delay="150"
                                    data-aos-duration="600"
                                    data-aos-easing="ease"
                                    data-aos-once="true">
                    <div className="d-overlay">
                        <div className="d-label">
                            20% OFF
                        </div>
                        <div className="d-text">
                            <h4>Mystic Racing Z</h4>
                            <p className="d-price">Starting at <span className="price">£14.99</span></p>
                            <Link className="btn-main btn-fullwidth" href="#">Order Now</Link>
                        </div>
                    </div>
                    <Image src={image2} className="img-fluid " alt=""/>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 gallery-item">
                <div className="de-item wow"
                    data-aos="fade-left"
                                    data-aos-delay="300"
                                    data-aos-duration="600"
                                    data-aos-easing="ease"
                                    data-aos-once="true">
                    <div className="d-overlay">
                        <div className="d-label">
                            20% OFF
                        </div>
                        <div className="d-text">
                            <h4>Silent Wrath</h4>
                            <p className="d-price">Starting at <span className="price">£14.99</span></p>
                            <Link className="btn-main btn-fullwidth" href="#">Order Now</Link>
                        </div>
                    </div>
                    <Image src={image3} className="img-fluid " alt=""/>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 gallery-item">
                <div className="de-item wow"
                    data-aos="fade-left"
                                    data-aos-delay="450"
                                    data-aos-duration="600"
                                    data-aos-easing="ease"
                                    data-aos-once="true">
                    <div className="d-overlay">
                        <div className="d-label">
                            20% OFF
                        </div>
                        <div className="d-text">
                            <h4>Funk Dungeon</h4>
                            <p className="d-price">Starting at <span className="price">£14.99</span></p>
                            <Link className="btn-main btn-fullwidth" href="#">Order Now</Link>
                        </div>
                    </div>
                    <Image src={image4} className="img-fluid " alt=""/>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 gallery-item">
                <div className="de-item wow"
                    data-aos="fade-left"
                                    data-aos-delay="0"
                                    data-aos-duration="600"
                                    data-aos-easing="ease"
                                    data-aos-once="true">
                    <div className="d-overlay">
                        <div className="d-label">
                            20% OFF
                        </div>
                        <div className="d-text">
                            <h4>Galactic Odyssey</h4>
                            <p className="d-price">Starting at <span className="price">$14.99</span></p>
                            <Link className="btn-main btn-fullwidth" href="#">Order Now</Link>
                        </div>
                    </div>
                    <Image src={image5} className="img-fluid " alt=""/>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 gallery-item">
                <div className="de-item wow"
                    data-aos="fade-left"
                                    data-aos-delay="150"
                                    data-aos-duration="600"
                                    data-aos-easing="ease"
                                    data-aos-once="true">
                    <div className="d-overlay">
                        <div className="d-label">
                            20% OFF
                        </div>
                        <div className="d-text">
                            <h4>Warfare Legends</h4>
                            <p className="d-price">Starting at <span className="price">$14.99</span></p>
                            <Link className="btn-main btn-fullwidth" href="#">Order Now</Link>
                        </div>
                    </div>
                    <Image src={image6} className="img-fluid " alt=""/>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 gallery-item">
                <div className="de-item wow"
                    data-aos="fade-left"
                                    data-aos-delay="300"
                                    data-aos-duration="600"
                                    data-aos-easing="ease"
                                    data-aos-once="true">
                    <div className="d-overlay">
                        <div className="d-label">
                            20% OFF
                        </div>
                        <div className="d-text">
                            <h4>Raceway Revolution</h4>
                            <p className="d-price">Starting at <span className="price">$14.99</span></p>
                            <Link className="btn-main btn-fullwidth" href="#">Order Now</Link>
                        </div>
                    </div>
                    <Image src={image7} className="img-fluid " alt=""/>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 gallery-item sandbox">
                <div className="de-item wow"
                    data-aos="fade-left"
                                    data-aos-delay="450"
                                    data-aos-duration="600"
                                    data-aos-easing="ease"
                                    data-aos-once="true">
                    <div className="d-overlay">
                        <div className="d-label">
                            20% OFF
                        </div>
                        <div className="d-text">
                            <h4>Starborne Odyssey</h4>
                            <p className="d-price">Starting at <span className="price">$14.99</span></p>
                            <Link className="btn-main btn-fullwidth" href="#">Order Now</Link>
                        </div>
                    </div>
                    <Image src={image8} className="img-fluid" alt=""/>
                </div>
            </div>

            </div>

        </div>
    );
}

export default collection;