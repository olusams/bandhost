import React from 'react';
import Image from 'next/image';
import { useEffect } from "react"
import Aos from 'aos';
import "aos/dist/aos.css";

import image1 from '../../public/img/icons/1.png';
import image2 from '../../public/img/icons/2.png';
import image3 from '../../public/img/icons/3.png';
import image4 from '../../public/img/icons/4.png';


const Section = () => {
    useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
    return(
        <div className="container">
           <div className="row">
                <div className="col-lg-6">
                <div className="subtitle mb-3" data-aos="fade-up"> 
                   Incredibly features
                </div>
                 <h2 className="mb20" data-aos="fade-up" data-aos-delay="200">
                    Premium Game Server
                 </h2>
                </div>

                <div className="col-lg-6"></div>

                <div className="col-lg-3 col-md-6 mb-sm-20" data-aos="fade-left" data-aos-duration="600"
                  data-aos-easing="ease" data-aos-delay="100" >
                    <div>
                        <Image src={image1} className="mb20" alt=""/>
                        <h4>Lightning-Fast Setup</h4>
                        <p>Get your game server up and running in under 5 minutes with our automated deployment system. No technical knowledge required - just choose your game and start playing immediately.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20" data-aos="fade-left" data-aos-duration="600"
                  data-aos-easing="ease" data-aos-delay="300">
                    <div>
                        <Image src={image2} className="mb20" alt=""/>
                        <h4>Enterprise-Grade Hardware</h4>
                        <p>Powered by the latest Intel Xeon processors and NVMe SSDs, our servers deliver exceptional performance with 99.9% uptime guarantee for uninterrupted gaming sessions.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20" data-aos="fade-left" data-aos-duration="600"
                  data-aos-easing="ease" data-aos-delay="500">
                    <div>
                        <Image src={image3} className="mb20" alt=""/>
                        <h4>Advanced DDoS Protection</h4>
                        <p>Stay protected with our enterprise-level DDoS mitigation that automatically detects and blocks attacks, ensuring your server remains online and accessible at all times.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20" data-aos="fade-left" data-aos-duration="600"
                  data-aos-easing="ease" data-aos-delay="700">
                    <div>
                         <Image src={image4} className="mb20" alt=""/>
                        <h4>24/7 UK-Based Support</h4>
                        <p>Our dedicated support team in London is available round the clock to help with any questions or issues. Get instant assistance via live chat, email, or phone.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;