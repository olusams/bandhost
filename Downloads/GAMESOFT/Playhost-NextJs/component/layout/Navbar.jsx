import React, { useEffect, useState, useRef } from "react";
import Link from 'next/link';
import useOnclickOutside from "react-cool-onclickoutside";
import Image from 'next/image';

import logoImg from '../../public/img/logo.png';
import logoImgmbl from '../../public/img/logo-mobile.png';



const Navbar= function() {

  const useDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const closeDropdown = () => {
      setIsOpen(false);
    };

    const ref = useRef(null);
    useOnclickOutside(() => {
      closeDropdown();
    }, ref);

    return {
      isOpen,
      toggleDropdown,
      closeDropdown,
      ref,
    };
  };

const { isOpen: openMenu1, toggleDropdown: handleBtnClick1, closeDropdown: closeMenu1, ref: ref1 } = useDropdown();
const { isOpen: openMenu2, toggleDropdown: handleBtnClick2, closeDropdown: closeMenu2, ref: ref2 } = useDropdown();
const { isOpen: openMenu3, toggleDropdown: handleBtnClick3, closeDropdown: closeMenu3, ref: ref3 } = useDropdown();
const { isOpen: openMenu4, toggleDropdown: handleBtnClick4, closeDropdown: closeMenu4, ref: ref4 } = useDropdown();

  const [showmenu, setBtnIcon] = useState(false);

  useEffect(() => {
    const header = document.getElementById("header-wrap");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;

    const scrollCallBack = () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        totop.classList.add("show");
      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      }
    };

    window.addEventListener("scroll", scrollCallBack);

    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

    return(
         <nav className="navbar transition">
        <div className="container">

          {/********* Logo *********/}
          <Link  className="navbar-brand" href="/">
            <Image src={logoImg} className="img-fluid d-md-block d-none imginit" alt="logo"/>
            <Image src={logoImgmbl} className="img-fluid d-md-none d-sms-none imginit" alt="logo"/>
          </Link>
          {/********* Logo *********/}

              {/********* Mobile Menu *********/}
              <div className="mobile">
                {showmenu && 
                <div className='menu'>

                  <div className='navbar-item counter'>
                    <Link href="/" onClick={() => setBtnIcon(!showmenu)}>
                      Home
                    </Link>
                  </div>

                  <div className='navbar-item counter'>
                    <div ref={ref1}>
                      <div className="dropdown-custom dropdown-toggle btn" 
                        onClick={() => {
                                        handleBtnClick1();
                                        closeMenu2();
                                        closeMenu3();
                                        closeMenu4();
                                      }}>
                        Gaming Services
                      </div>
                      {openMenu1 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu1}>
                            <Link href="/games" onClick={() => setBtnIcon(!showmenu)}>Gaming PCs</Link>
                            <Link href="/pricing" onClick={() => setBtnIcon(!showmenu)}>VR Gaming</Link>
                            <Link href="/pricing2" onClick={() => setBtnIcon(!showmenu)}>Esports Arena</Link>
                            <Link href="/pricing3" onClick={() => setBtnIcon(!showmenu)}>Gaming Events</Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                   <div className='navbar-item counter'>
                      <Link href="/location" onClick={() => setBtnIcon(!showmenu)}>
                      Our Location
                      </Link>
                    </div>

                    <div className='navbar-item counter'>
                      <div ref={ref2}>
                        <div className="dropdown-custom dropdown-toggle btn" 
                          onClick={() => {
                                        handleBtnClick2();
                                        closeMenu1();
                                        closeMenu3();
                                        closeMenu4();
                                      }}>
                          Community
                        </div>
                        {openMenu2 && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu2}>
                              <Link href="/knowledgebase" onClick={() => setBtnIcon(!showmenu)}>Gaming Guides</Link>
                              <Link href="/faq" onClick={() => setBtnIcon(!showmenu)}>FAQ</Link>
                              <Link href="/contact" onClick={() => setBtnIcon(!showmenu)}>Contact Us</Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className='navbar-item counter'>
                      <Link href="/news" onClick={() => setBtnIcon(!showmenu)}>
                      Gaming News
                      </Link>
                    </div>

                    <div className='navbar-item counter'>
                      <div ref={ref3}>
                        <div className="dropdown-custom dropdown-toggle btn" 
                          onClick={() => {
                                        handleBtnClick3();
                                        closeMenu1();
                                        closeMenu2();
                                        closeMenu4();
                                      }}>
                          About Leeds Gaming
                        </div>
                        {openMenu3 && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu3}>
                              <Link href="/about" onClick={() => setBtnIcon(!showmenu)}>About Us</Link>
                              <Link href="/affliate" onClick={() => setBtnIcon(!showmenu)}>Partners</Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className='navbar-item counter'>
                      <div ref={ref4}>
                        <div className="dropdown-custom dropdown-toggle btn" 
                          onClick={() => {
                                        handleBtnClick4();
                                        closeMenu1();
                                        closeMenu2();
                                        closeMenu3();
                                      }}>
                          More Pages
                        </div>
                        {openMenu4 && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu4}>
                              <Link href="/login" onClick={() => setBtnIcon(!showmenu)}>Login</Link>
                              <Link href="/register" onClick={() => setBtnIcon(!showmenu)}>Register</Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                </div>
                }
          </div>
          {/********* Mobile Menu *********/}

          {/********* Dekstop Menu *********/}
          <div className="dekstop">
          <div className='menu'>

            <div className='navbar-item counter'>
                <Link href="/">
                  Home
                </Link>
            </div>

            <div className='navbar-item counter'>
                <div ref={ref1}>
                  <div className="dropdown-custom dropdown-toggle btn" 
                     onMouseEnter={handleBtnClick1} onMouseLeave={closeMenu1}>
                    Gaming Services
                    {openMenu1 && (
                    <div className='item-dropdown'>
                      <div className="dropdown" onClick={closeMenu1}>
                        <Link href="/games">Gaming PCs</Link>
                        <Link href="/pricing">VR Gaming</Link>
                        <Link href="/pricing2">Esports Arena</Link>
                        <Link href="/pricing3">Gaming Events</Link>
                      </div>
                    </div>
                  )}
                  </div>
                  
                </div>
            </div>

            <div className='navbar-item counter'>
              <Link href="/location">
              Our Location
              </Link>
            </div>

            <div className='navbar-item counter'>
                <div ref={ref2}>
                  <div className="dropdown-custom dropdown-toggle btn" 
                     onMouseEnter={handleBtnClick2} onMouseLeave={closeMenu2}>
                    Community
                    {openMenu2 && (
                    <div className='item-dropdown'>
                      <div className="dropdown" onClick={closeMenu2}>
                        <Link href="/knowledgebase">Gaming Guides</Link>
                        <Link href="/faq">FAQ</Link>
                        <Link href="/contact">Contact Us</Link>
                      </div>
                    </div>
                  )}
                  </div>
                  
                </div>
            </div>

            <div className='navbar-item counter'>
              <Link href="/news">
              Gaming News
              </Link>
            </div>

            <div className='navbar-item counter'>
                <div ref={ref3}>
                  <div className="dropdown-custom dropdown-toggle btn" 
                     onMouseEnter={handleBtnClick3} onMouseLeave={closeMenu3}>
                    About Leeds Gaming
                    {openMenu3 && (
                    <div className='item-dropdown'>
                      <div className="dropdown" onClick={closeMenu3}>
                        <Link href="/about">About Us</Link>
                        <Link href="/affliate">Partners</Link>
                      </div>
                    </div>
                  )}
                  </div>
                  
                </div>
            </div>

              <div className='navbar-item counter'>
                  <div ref={ref4}>
                    <div className="dropdown-custom dropdown-toggle btn" 
                       onMouseEnter={handleBtnClick4} onMouseLeave={closeMenu4}>
                      More Pages
                      {openMenu4 && (
                      <div className='item-dropdown'>
                        <div className="dropdown" onClick={closeMenu4}>
                          <Link href="/login">Login</Link>
                          <Link href="/register">Register</Link>
                        </div>
                      </div>
                    )}
                    </div>
                    
                  </div>
              </div>

            </div>
          </div>
          {/********* Dekstop Menu *********/}

          {/********* Side Button *********/}
          <div className="menu_side_area">
              <Link href="#" className="btn-line" id="btn-line">Get Hosting</Link>
              {/********* Burger Button *********/}
              <button className="burgermenu" type="button" 
                onClick={() => {
                  setBtnIcon(!showmenu);
                  closeMenu1();
                  closeMenu2();
                  closeMenu3();
                  closeMenu4();
                }}>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
              {/********* Burger Button *********/}
          </div>
          {/********* Side Button *********/}

          

        </div>
      </nav>
    )
}

export default Navbar;