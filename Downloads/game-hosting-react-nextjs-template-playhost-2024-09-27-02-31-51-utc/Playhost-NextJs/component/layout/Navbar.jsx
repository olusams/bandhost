import React, { useEffect, useState, useRef } from "react";
import Link from 'next/link';
import useOnclickOutside from "react-cool-onclickoutside";
import Image from 'next/image';

import logoImg from '../../public/img/logo.png';
import logoImgmbl from '../../public/img/logo-mobile.png';

const Navbar = function() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const { isOpen: openMenu, toggleDropdown: handleBtnClick, closeDropdown: closeMenu, ref } = useDropdown();
  const { isOpen: openMenu1, toggleDropdown: handleBtnClick1, closeDropdown: closeMenu1, ref: ref1 } = useDropdown();
  const { isOpen: openMenu2, toggleDropdown: handleBtnClick2, closeDropdown: closeMenu2, ref: ref2 } = useDropdown();
  const { isOpen: openMenu3, toggleDropdown: handleBtnClick3, closeDropdown: closeMenu3, ref: ref3 } = useDropdown();
  const { isOpen: openMenu4, toggleDropdown: handleBtnClick4, closeDropdown: closeMenu4, ref: ref4 } = useDropdown();

  const [showmenu, setBtnIcon] = useState(false);

  useEffect(() => {
    const header = document.getElementById("header-wrap");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header?.offsetTop || 0;

    const scrollCallBack = () => {
      if (window.pageYOffset > sticky) {
        header?.classList.add("sticky");
        totop?.classList.add("show");
        setIsScrolled(true);
      } else {
        header?.classList.remove("sticky");
        totop?.classList.remove("show");
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollCallBack);

    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setBtnIcon(!showmenu);
  };

  return (
    <nav className={`navbar transition ${isScrolled ? 'navbar-scrolled' : ''}`} 
         style={{
           background: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
           backdropFilter: isScrolled ? 'blur(20px)' : 'none',
           borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
           transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
         }}>
      <div className="container">
        {/********* Logo *********/}
        <Link className="navbar-brand" href="/">
          <Image 
            src={logoImg} 
            className="img-fluid d-md-block d-none imginit" 
            alt="Playhost - London Game Hosting"
            style={{
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          />
          <Image 
            src={logoImgmbl} 
            className="img-fluid d-md-none d-sms-none imginit" 
            alt="Playhost"
            style={{
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          />
        </Link>
        {/********* Logo *********/}

        {/********* Mobile Menu *********/}
        <div className="mobile">
          {showmenu && 
          <div className='menu'>

            <div className='navbar-item counter'>
              <div ref={ref}>
                <Link href="/" onClick={() => setBtnIcon(!showmenu)}>
                  Home
                </Link>
              </div>
            </div>

            <div className='navbar-item counter'>
              <div ref={ref1}>
                <div className="dropdown-custom dropdown-toggle btn" 
                  onClick={() => {
                                    handleBtnClick1();
                                    closeMenu();
                                    closeMenu2();
                                    closeMenu3();
                                    closeMenu4();
                                  }}>
                  Game Servers
                </div>
                {openMenu1 && (
                  <div className='item-dropdown'>
                    <div className="dropdown" onClick={closeMenu1}>
                      <Link href="/games" onClick={() => setBtnIcon(!showmenu)}>Games Server List</Link>
                      <Link href="/pricing" onClick={() => setBtnIcon(!showmenu)}>Pricing Table</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

             <div className='navbar-item counter'>
                <Link href="/location" onClick={() => setBtnIcon(!showmenu)}>
                Locations
                </Link>
              </div>

                <div className='navbar-item counter'>
                  <div ref={ref2}>
                    <div className="dropdown-custom dropdown-toggle btn" 
                      onClick={() => {
                                    handleBtnClick2();
                                    closeMenu1();
                                    closeMenu();
                                    closeMenu3();
                                    closeMenu4();
                                  }}>
                      Support
                    </div>
                    {openMenu2 && (
                      <div className='item-dropdown'>
                        <div className="dropdown" onClick={closeMenu2}>
                          <Link href="/knowledgebase" onClick={() => setBtnIcon(!showmenu)}>Knowledgebase</Link>
                          <Link href="/faq" onClick={() => setBtnIcon(!showmenu)}>FAQ</Link>
                          <Link href="/contact" onClick={() => setBtnIcon(!showmenu)}>Contact</Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className='navbar-item counter'>
                  <Link href="/news" onClick={() => setBtnIcon(!showmenu)}>
                  News
                  </Link>
                </div>

                <div className='navbar-item counter'>
                  <div ref={ref3}>
                    <div className="dropdown-custom dropdown-toggle btn" 
                      onClick={() => {
                                    handleBtnClick3();
                                    closeMenu1();
                                    closeMenu2();
                                    closeMenu();
                                    closeMenu4();
                                  }}>
                      Company
                    </div>
                    {openMenu3 && (
                      <div className='item-dropdown'>
                        <div className="dropdown" onClick={closeMenu3}>
                          <Link href="/about" onClick={() => setBtnIcon(!showmenu)}>About Us</Link>
                          <Link href="/affliate" onClick={() => setBtnIcon(!showmenu)}>Affliates</Link>
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
                                    closeMenu();
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
              <div ref={ref}>
                <Link href="/">
                  Home
                </Link>
              </div>
          </div>

          <div className='navbar-item counter'>
              <div ref={ref1}>
                <div className="dropdown-custom dropdown-toggle btn" 
                   onMouseEnter={handleBtnClick1} onMouseLeave={closeMenu1}>
                  Game Servers
                  {openMenu1 && (
                  <div className='item-dropdown'>
                    <div className="dropdown" onClick={closeMenu1}>
                      <Link href="/games">Games Server List</Link>
                      <Link href="/pricing">Pricing Table</Link>
                    </div>
                  </div>
                )}
                </div>
                
              </div>
          </div>

          <div className='navbar-item counter'>
            <Link href="/location">
            Locations
            </Link>
          </div>

          <div className='navbar-item counter'>
              <div ref={ref2}>
                <div className="dropdown-custom dropdown-toggle btn" 
                   onMouseEnter={handleBtnClick2} onMouseLeave={closeMenu2}>
                  Support
                  {openMenu2 && (
                  <div className='item-dropdown'>
                    <div className="dropdown" onClick={closeMenu2}>
                      <Link href="/knowledgebase">Knowledgebase</Link>
                      <Link href="/faq">FAQ</Link>
                      <Link href="/contact">Contact</Link>
                    </div>
                  </div>
                )}
                </div>
                
              </div>
          </div>

          <div className='navbar-item counter'>
            <Link href="/news">
            News
            </Link>
          </div>

          <div className='navbar-item counter'>
              <div ref={ref3}>
                <div className="dropdown-custom dropdown-toggle btn" 
                   onMouseEnter={handleBtnClick3} onMouseLeave={closeMenu3}>
                  Company
                  {openMenu3 && (
                  <div className='item-dropdown'>
                    <div className="dropdown" onClick={closeMenu3}>
                      <Link href="/about">About Us</Link>
                      <Link href="/affliate">Affliates</Link>
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
            <Link href="/pricing" className="btn-line" id="btn-line">Get Hosting</Link>
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

        {/********* Mobile Menu Button *********/}
        <div className="mobile-menu-btn d-lg-none" onClick={toggleMobileMenu}>
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {/********* Mobile Menu Button *********/}

        {/********* Mobile Menu *********/}
        {isMobileMenuOpen && (
          <div className="mobile-menu glass"
               style={{
                 position: 'fixed',
                 top: '80px',
                 left: 0,
                 right: 0,
                 background: 'rgba(15, 23, 42, 0.95)',
                 backdropFilter: 'blur(20px)',
                 borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                 zIndex: 1000,
                 animation: 'slideInDown 0.3s ease-out',
               }}>
            {/********* Mobile Menu *********/}
            <div className='menu'>
              <div className='navbar-item counter'>
                <div ref={ref}>
                  <Link href="/" onClick={() => setBtnIcon(!showmenu)}>
                    Home
                  </Link>
                </div>
              </div>

              <div className='navbar-item counter'>
                <div ref={ref1}>
                  <div className="dropdown-custom dropdown-toggle btn" 
                    onClick={() => {
                                      handleBtnClick1();
                                      closeMenu();
                                      closeMenu2();
                                      closeMenu3();
                                      closeMenu4();
                                    }}>
                    Game Servers
                  </div>
                  {openMenu1 && (
                    <div className='item-dropdown'>
                      <div className="dropdown" onClick={closeMenu1}>
                        <Link href="/games" onClick={() => setBtnIcon(!showmenu)}>Games Server List</Link>
                        <Link href="/pricing" onClick={() => setBtnIcon(!showmenu)}>Pricing Table</Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>

               <div className='navbar-item counter'>
                  <Link href="/location" onClick={() => setBtnIcon(!showmenu)}>
                  Locations
                  </Link>
                </div>

                  <div className='navbar-item counter'>
                    <div ref={ref2}>
                      <div className="dropdown-custom dropdown-toggle btn" 
                        onClick={() => {
                                      handleBtnClick2();
                                      closeMenu1();
                                      closeMenu();
                                      closeMenu3();
                                      closeMenu4();
                                    }}>
                        Support
                      </div>
                      {openMenu2 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu2}>
                            <Link href="/knowledgebase" onClick={() => setBtnIcon(!showmenu)}>Knowledgebase</Link>
                            <Link href="/faq" onClick={() => setBtnIcon(!showmenu)}>FAQ</Link>
                            <Link href="/contact" onClick={() => setBtnIcon(!showmenu)}>Contact</Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                <div className='navbar-item counter'>
                  <Link href="/news" onClick={() => setBtnIcon(!showmenu)}>
                  News
                  </Link>
                </div>

                <div className='navbar-item counter'>
                    <div ref={ref3}>
                      <div className="dropdown-custom dropdown-toggle btn" 
                        onClick={() => {
                                      handleBtnClick3();
                                      closeMenu1();
                                      closeMenu2();
                                      closeMenu();
                                      closeMenu4();
                                    }}>
                        Company
                      </div>
                      {openMenu3 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu3}>
                            <Link href="/about" onClick={() => setBtnIcon(!showmenu)}>About Us</Link>
                            <Link href="/affliate" onClick={() => setBtnIcon(!showmenu)}>Affliates</Link>
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
                                      closeMenu();
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
            {/********* Mobile Menu *********/}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-item {
          padding: 12px 20px;
          color: #f8fafc;
          transition: all 0.3s ease;
          border-radius: 8px;
          margin: 4px 8px;
        }

        .dropdown-item:hover {
          background: rgba(99, 102, 241, 0.1);
          color: #6366f1;
          transform: translateX(5px);
        }

        .hamburger {
          width: 30px;
          height: 20px;
          position: relative;
          cursor: pointer;
        }

        .hamburger span {
          display: block;
          position: absolute;
          height: 3px;
          width: 100%;
          background: #f8fafc;
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        .hamburger span:nth-child(1) {
          top: 0px;
        }

        .hamburger span:nth-child(2) {
          top: 8px;
        }

        .hamburger span:nth-child(3) {
          top: 16px;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg);
          top: 8px;
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg);
          top: 8px;
        }
      `}</style>
    </nav>
  )
}

export default Navbar;