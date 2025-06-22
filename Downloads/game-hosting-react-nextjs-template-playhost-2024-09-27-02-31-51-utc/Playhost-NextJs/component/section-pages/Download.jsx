import React from 'react';
import { Parallax } from "react-parallax";
import Link from 'next/link'; 
import Image from 'next/image';

const image2 ='../../img/background/2.webp';

const Download = () => {
    return(
        <div className="container">
            <div className="row position-relative">
                <div className="col-lg-12">
                    <Parallax className="padding60 sm-padding40" bgImage={image2} strength={400}> 
                        <div className="col-lg-6">
                            <div className="subtitle wow fadeInUp mb-3" data-aos="fade-up">Download now</div>
                            <h2 className="wow fadeInUp" data-wow-delay=".2s" data-aos="fade-up" data-aos-delay="200">Manage your server from mobile device</h2>
                            <p>Take control of your game server from anywhere with our mobile app. Monitor performance, manage players, configure settings, and receive instant notifications - all from your smartphone or tablet. Stay connected to your gaming community 24/7.</p>                            
                            <Link href="#"><Image width="180" height="100" src="../../img/misc/download-appstore.webp" className="img-fluid mb-sm-20" alt="download"/></Link>&nbsp;
                            <Link href="#"><Image width="180" height="100" src="../../img/misc/download-playstore.webp" className="img-fluid mb-sm-20" alt="download"/></Link>
                        </div>
                    </Parallax>
                    <Image width="700" height="550" src="../../img/misc/man-with-phone.webp" className="max-content sm-hide position-absolute bottom-0 end-0"alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Download;