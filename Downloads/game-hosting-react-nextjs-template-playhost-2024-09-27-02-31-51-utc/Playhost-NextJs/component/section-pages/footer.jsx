import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image';

import image1 from '../../public/img/logo.png';

const footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer>
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-4">
                        <Image src={image1} alt="" />
                        <div className="spacer-20"></div>
                        <p>Playhost is London's premier game server hosting provider, delivering lightning-fast performance and exceptional reliability. Our enterprise-grade infrastructure ensures your gaming experience is always optimal, with 24/7 UK-based support ready to assist you every step of the way.</p>
                        <div className="spacer-20"></div>
                        <div className="contact-info">
                            <p><i className="fa fa-phone"></i> <strong>+44 (0) 20 7946 0958</strong></p>
                            <p><i className="fa fa-map-marker"></i> <strong>London, United Kingdom</strong></p>
                            <p><i className="fa fa-envelope"></i> <strong>support@playhost.co.uk</strong></p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <div className="widget">
                                    <h5>Game Server</h5>
                                    <ul>
                                        <li><Link href="#">Thunder and City</Link></li>
                                        <li><Link href="#">Mystic Racing Z</Link></li>
                                        <li><Link href="#">Silent Wrath</Link></li>
                                        <li><Link href="#">Funk Dungeon</Link></li>
                                        <li><Link href="#">Galactic Oddsey</Link></li>
                                        <li><Link href="#">Warfare Legend</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="widget">
                                    <h5>Pages</h5>
                                    <ul>
                                        <li><Link href="#">Game Server</Link></li>
                                        <li><Link href="#">Knowledgebase</Link></li>
                                        <li><Link href="#">About Us</Link></li>
                                        <li><Link href="#">Affliates</Link></li>
                                        <li><Link href="#">Locations</Link></li>
                                        <li><Link href="#">News</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="widget">
                            <h5>Newsletter</h5>
                            <form action="blank.php" className="row form-dark" id="form_subscribe" method="post" name="form_subscribe">
                            <div className="col text-center">
                                <input className="form-control" id="txt_subscribe" name="txt_subscribe" placeholder="enter your email" type="text" /> <Link href="#" id="btn-subscribe"><i className="arrow_right bg-color-secondary"></i></Link>
                                <div className="clearfix"></div>
                            </div>
                            </form>
                            <div className="spacer-10"></div>
                            <small>Your email is safe with us. We don&apos;t spam.</small>
                            <div className="spacer-30"></div>
                            <div className="widget">
                                <h5>Follow Us on</h5>
                                <div className="social-icons">
                                    <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                    <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                                    <Link href="#"><i className="fa-brands fa-discord"></i></Link>
                                    <Link href="#"><i className="fa-brands fa-tiktok"></i></Link>
                                    <Link href="#"><i className="fa-brands fa-youtube"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                           Copyright {currentYear} - Playhost by Designesia
                        </div>
                        <div className="col-lg-6 col-sm-6 text-lg-end text-sm-start">
                            <ul className="menu-simple">
                                <li><Link href="#">Terms &amp; Conditions</Link></li>
                                <li><Link href="#">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;