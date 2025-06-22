import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Image from 'next/image';
import Link from 'next/link';

const image1 ="../../img/misc/server.webp";

// Flag image imports
const imageflags1 = "/img/flags/united-kingdom.png";
const imageflags2 = "/img/flags/france.png";
const imageflags3 = "/img/flags/germany.png";
const imageflags4 = "/img/flags/netherlands.png";
const imageflags5 = "/img/flags/sweden.png";
const imageflags6 = "/img/flags/finland.png";
const imageflags7 = "/img/flags/usa.png";
const imageflags8 = "/img/flags/canada.png";
const imageflags9 = "/img/flags/australia.png";
const imageflags10 = "/img/flags/brazil.png";
const imageflags11 = "/img/flags/thailand.png";
const imageflags12 = "/img/flags/indonesia.png";

const Server = () => {
    // select GB
    const [selected, setSelected] = useState('GB'); // Change 'GB' to the desired country code
    const handleSelect = (countryCode) => {
    setSelected(countryCode);
    };

    // select GB
    const [selected1, setSelected1] = useState('GB'); // Change 'GB' to the desired country code
    const handleSelect1 = (countryCode) => {
    setSelected1(countryCode);
    };

    // select GB
    const [selected2, setSelected2] = useState('GB'); // Change 'GB' to the desired country code
    const handleSelect2 = (countryCode) => {
    setSelected2(countryCode);
    };

    // select GB
    const [selected3, setSelected3] = useState('GB'); // Change 'GB' to the desired country code
    const handleSelect3 = (countryCode) => {
    setSelected3(countryCode);
    };

    //switch
    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
    };
    const switchClassName = isChecked ? 'switch checked' : 'switch';
    const otherElementClassName = isChecked ? 'other-element active' : 'other-element';

    return(
        <>
                <div className="de-gradient-edge-top"></div>
                <div className="de-gradient-edge-bottom"></div>
                <div className="container z-9">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 text-center" >
                            <div className="subtitle fadeInUp mb-3" data-aos="fade-up">Pricing Plans</div>
                            <h2 className="fadeInUp mb20" data-aos="fade-up">Choose plan for you</h2>                       
                            <div className="switch-set" data-aos="fade-up">
                                <div>Monthly Plan</div>
                                <div>
                                    <input
                                      id="sw-1"
                                      className={switchClassName}
                                      type="checkbox"
                                      checked={isChecked}
                                      onChange={handleToggle}
                                    />
                                </div>
                                <div>Yearly Plan</div>
                                <div className="spacer-20"></div>
                            </div>
                        </div>

                        <div className="clearfix"></div>
                        <div className="col-lg-3 col-md-6 mb-sm-30" data-aos="fade-up" data-aos-delay="100">
                            <div className="de_pricing-table type-2 glass"
                                 style={{
                                   position: 'relative',
                                   overflow: 'hidden',
                                   transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                   transform: 'translateY(0)',
                                   cursor: 'pointer',
                                 }}
                                 onMouseEnter={(e) => {
                                   e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                   e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                                 }}
                                 onMouseLeave={(e) => {
                                   e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                   e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                                 }}>
                                <div className="d-head mb-1">
                                    <div className="d-icon">
                                        <Image src={image1} className="icon-animate" alt="" width={64} height={64}/>
                                    </div>
                                </div>
                                <div className="d-title">Starter</div>
                                <div className="d-stars"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                                <div className="spacer-20"></div>
                                <div className="d-specs">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="d-item">
                                                10<span>Player Slots</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-item">
                                                2GB<span>Memory</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacer-20"></div>
                                <div className="d-price">
                                    <h4 className="opt-1">£3.59<span>/mo</span></h4>
                                    <h4 className="opt-2">£2.59<span>/mo</span></h4>
                                    <p>Normally <s>£9.99</s></p>
                                </div>                                
                                <div className="d-location">
                                    <div className="de-flag-small">
                                        <Image src={imageflags1} alt="UK" width={32} height={20}/>
                                        <Image src={imageflags2} alt="France" width={32} height={20}/>
                                        <Image src={imageflags3} alt="Germany" width={32} height={20}/>
                                        <Image src={imageflags4} alt="Netherlands" width={32} height={20}/>
                                        <Image src={imageflags5} alt="Sweden" width={32} height={20}/>
                                        <Image src={imageflags6} alt="Finland" width={32} height={20}/>
                                        <Image src={imageflags7} alt="USA" width={32} height={20}/>
                                        <Image src={imageflags8} alt="Canada" width={32} height={20}/>
                                        <Image src={imageflags9} alt="Australia" width={32} height={20}/>
                                        <Image src={imageflags10} alt="Brazil" width={32} height={20}/>
                                        <Image src={imageflags11} alt="Thailand" width={32} height={20}/>
                                        <Image src={imageflags12} alt="Indonesia" width={32} height={20}/>
                                    </div>
                                </div>
                                <div className="d-action">
                                    <Link href="#" className="btn-main w-100"
                                          style={{
                                            position: 'relative',
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease',
                                          }}
                                          onMouseEnter={(e) => {
                                            e.target.style.transform = 'scale(1.05)';
                                          }}
                                          onMouseLeave={(e) => {
                                            e.target.style.transform = 'scale(1)';
                                          }}>
                                        Order Now
                                    </Link>
                                </div>
                                <div className="d-features">
                                    <p>Perfect for small communities and casual gaming. Includes basic support and automated backups.</p>
                                </div>
                                
                                {/* Animated border effect */}
                                <div style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  height: '3px',
                                  background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)',
                                  transform: 'scaleX(0)',
                                  transition: 'transform 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.transform = 'scaleX(1)';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.transform = 'scaleX(0)';
                                }}></div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-sm-30 fadeInRight" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300">
                            <div className={`de_pricing-table type-2 ${otherElementClassName}`}>
                                <div className="d-head">
                                    <h3>10 Slots</h3>
                                </div>
                                <div className="d-price">
                                    <h4 className="opt-1">£5.59<span>/mo</span></h4>
                                    <h4 className="opt-2">£3.59<span>/mo</span></h4>
                                    <p>Normally <s>£15.99</s></p>
                                </div>
                                <div className="d-location">
                                    <h4>Server Location</h4>
                                    <ReactFlagsSelect
                                        className="flags"
                                        countries={["GB", "FR", "DE", "NL", "SE", "FI", "US", "QC", "AU", "BR", "TH", "ID"]}
                                        customLabels={{ 
                                        GB: "London, England", 
                                        FR: "Paris, France", 
                                        DE: "Frankurt, Germany", 
                                        NL: "Amsterdam, Netherlands", 
                                        SE: "Stockholm, Sweden", 
                                        FI: "Helsinki, Finland", 
                                        US: "Los Angeles, USA", 
                                        QC: "Quebec, Canada",
                                        AU: "Sydney, Australia", 
                                        BR: "Sau Paulo, Brazil", 
                                        TH: "Bangkok, Thailand", 
                                        ID: "Jakarta, Indonesia"
                                        }}
                                        selected={selected1}
                                        onSelect={handleSelect1}
                                        searchable={false}
                                    />
                                </div>
                                <div className="d-group">
                                    <h4>Top Features</h4>
                                    <ul className="d-list">
                                        <li>Super Quick Setup</li>
                                        <li>Premium Hardware</li>
                                        <li>DDos Protection</li>
                                        <li>24/7 Customer Support</li>
                                    </ul>
                                </div>
                                <div className="d-action">
                                    <Link href="#" className="btn-main opt-1 w-100">Get Monthly Plan</Link>
                                    <Link href="#" className="btn-main opt-2 w-100">Get Yearly Plan</Link>
                                    <p>Auto re-news at regular rate</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 mb-sm-30 fadeInRight" data-aos="fade-left" data-aos-duration="600" data-aos-delay="500">
                            <div className={`de_pricing-table type-2 rec ${otherElementClassName}`}>
                                <div className="d-recommend">Best Seller</div>
                                <div className="d-head">
                                    <h3>20 Slots</h3>
                                </div>
                                <div className="d-price">
                                    <h4 className="opt-1">£8.59<span>/mo</span></h4>
                                    <h4 className="opt-2">£5.59<span>/mo</span></h4>
                                    <p>Normally <s>£24.99</s></p>
                                </div>
                                <div className="d-location">
                                    <h4>Server Location</h4>
                                    <ReactFlagsSelect
                                        className="flags"
                                        countries={["GB", "FR", "DE", "NL", "SE", "FI", "US", "QC", "AU", "BR", "TH", "ID"]}
                                        customLabels={{ 
                                        GB: "London, England", 
                                        FR: "Paris, France", 
                                        DE: "Frankurt, Germany", 
                                        NL: "Amsterdam, Netherlands", 
                                        SE: "Stockholm, Sweden", 
                                        FI: "Helsinki, Finland", 
                                        US: "Los Angeles, USA", 
                                        QC: "Quebec, Canada",
                                        AU: "Sydney, Australia", 
                                        BR: "Sau Paulo, Brazil", 
                                        TH: "Bangkok, Thailand", 
                                        ID: "Jakarta, Indonesia"
                                        }}
                                        selected={selected2}
                                        onSelect={handleSelect2}
                                        searchable={false}
                                    />
                                </div>
                                <div className="d-group">
                                    <h4>Top Features</h4>
                                    <ul className="d-list">
                                        <li>Super Quick Setup</li>
                                        <li>Premium Hardware</li>
                                        <li>DDos Protection</li>
                                        <li>24/7 Customer Support</li>
                                    </ul>
                                </div>                                
                                <div className="d-action">
                                    <Link href="#" className="btn-main opt-1 w-100">Get Monthly Plan</Link>
                                    <Link href="#" className="btn-main opt-2 w-100">Get Yearly Plan</Link>
                                    <p>Auto re-news at regular rate</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 mb-sm-30 fadeInRight" data-aos="fade-left" data-aos-duration="600" data-aos-delay="800">
                            <div className={`de_pricing-table type-2 rec ${otherElementClassName}`}>
                                <div className="d-head">
                                    <h3>Custom</h3>
                                </div>
                                <div className="d-price">
                                    <h4 className="opt-1">£15.59<span>/mo</span></h4>
                                    <h4 className="opt-2">£10.59<span>/mo</span></h4>
                                    <p>Normally <s>£36.99</s></p>
                                </div>
                                <div className="d-location">
                                    <h4>Server Location</h4>
                                    <ReactFlagsSelect
                                        className="flags"
                                        countries={["GB", "FR", "DE", "NL", "SE", "FI", "US", "QC", "AU", "BR", "TH", "ID"]}
                                        customLabels={{ 
                                        GB: "London, England", 
                                        FR: "Paris, France", 
                                        DE: "Frankurt, Germany", 
                                        NL: "Amsterdam, Netherlands", 
                                        SE: "Stockholm, Sweden", 
                                        FI: "Helsinki, Finland", 
                                        US: "Los Angeles, USA", 
                                        QC: "Quebec, Canada",
                                        AU: "Sydney, Australia", 
                                        BR: "Sau Paulo, Brazil", 
                                        TH: "Bangkok, Thailand", 
                                        ID: "Jakarta, Indonesia"
                                        }}
                                        selected={selected3}
                                        onSelect={handleSelect3}
                                        searchable={false}
                                    />
                                </div>
                                <div className="d-group">
                                    <h4>Top Features</h4>
                                    <ul className="d-list">
                                        <li>Super Quick Setup</li>
                                        <li>Premium Hardware</li>
                                        <li>DDos Protection</li>
                                        <li>24/7 Customer Support</li>
                                    </ul>
                                </div>
                                <div className="d-action">
                                    <Link href="#" className="btn-main opt-1 w-100">Get Monthly Plan</Link>
                                    <Link href="#" className="btn-main opt-2 w-100">Get Yearly Plan</Link>
                                    <p>Auto re-news at regular rate</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );
}

export default Server;