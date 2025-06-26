import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import Link from 'next/link';

const image1 ="./img/slider/1.webp";
const image2 ="./img/slider/2.webp";
const image3 ="./img/slider/3.webp";
const image4 ="./img/slider/4.webp";

const Slider = () => {
  return (
    <Swiper className="mainslider"
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      autoplay={{ delay: 4000 }} 
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      pagination={{
        clickable: false,
        renderBullet: function (index, className) {
          return `<span class="${className}">${index + 1} <span className="swiper-pagination-current">/ 4</span></span>`;
        },
      }}
      >
      <SwiperSlide>
        <div className="swiper-inner" style={{
                                              backgroundImage: `url(${image1})`,
                                              width: '100%',
                                              height: '100%',
                                            }}>
            <div className="sw-caption">
                <div className="container">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-8 mb-sm-30">
                        <div className="subtitle blink mb-4" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        Welcome to Yorkshire's Gaming Community
                        </div>

                <h1 className="slider-title text-uppercase mb-1" data-aos="fade-in" data-aos-delay="00" data-aos-duration="1000" data-aos-easing="ease-in-out">
                         Leeds Gaming Hub
                </h1>

                        </div>
                        <div className="col-lg-6">
                            <p className="slider-text">Join Yorkshire's premier gaming community in the heart of Leeds. Experience epic tournaments, LAN parties, and connect with fellow gamers in our state-of-the-art gaming facility.</p>
                            <div className="sw-price wp">
                                <div className="d-starting">
                                    Membership
                                </div>
                                <div className="d-price">
                                    <span className="d-cur">£</span>
                                    <span className="d-val">15</span>
                                    <span className="d-period">/month</span>
                                </div>
                            </div>
                            <div className="spacer-10"></div>
                            <Link className="btn-main mb10" href="#">Join Our Gaming Community</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sw-overlay"></div>
        </div> 
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-inner" style={{
                                              backgroundImage: `url(${image2})`,
                                              width: '100%',
                                              height: '100%',
                                            }}>
            <div className="sw-caption">
                <div className="container">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-8 mb-sm-30">
                            <div className="subtitle blink mb-4">Weekly Tournaments</div>
                            <h1 className="slider-title text-uppercase mb-1">Esports Arena</h1>
                        </div>
                        <div className="col-lg-6">
                            <p className="slider-text">Compete in our weekly tournaments featuring popular games like Valorant, CS2, League of Legends, and more. Win prizes and climb our leaderboards!</p>
                            <div className="sw-price ">
                                <div className="d-starting">
                                    Tournament Entry
                                </div>
                                <div className="d-price">
                                    <span className="d-cur">£</span>
                                    <span className="d-val">5</span>
                                    <span className="d-period">/event</span>
                                </div>
                            </div>
                            <div className="spacer-10"></div>
                            <Link className="btn-main mb10" href="#">View Tournament Schedule</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sw-overlay"></div>
        </div>         
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-inner" style={{
                                              backgroundImage: `url(${image3})`,
                                              width: '100%',
                                              height: '100%',
                                            }}>
            <div className="sw-caption">
                <div className="container">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-8 mb-sm-30">
                            <div className="subtitle blink mb-4">LAN Gaming Events</div>
                            <h1 className="slider-title text-uppercase mb-1">Gaming Nights</h1>
                        </div>
                        <div className="col-lg-6">
                            <p className="slider-text">Experience the thrill of LAN gaming with our monthly gaming nights. Bring your friends or make new ones in our dedicated gaming spaces with high-end equipment.</p>
                            <div className="sw-price ">
                                <div className="d-starting">
                                    LAN Night
                                </div>
                                <div className="d-price">
                                    <span className="d-cur">£</span>
                                    <span className="d-val">10</span>
                                    <span className="d-period">/night</span>
                                </div>
                            </div>
                            <div className="spacer-10"></div>
                            <Link className="btn-main mb10" href="#">Book Your Gaming Station</Link>
                        </div>
                    </div>
                </div>
            </div>                                
            <div className="sw-overlay"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-inner" style={{
                                              backgroundImage: `url(${image4})`,
                                              width: '100%',
                                              height: '100%',
                                            }}>
            <div className="sw-caption">
                <div className="container">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-8 mb-sm-30">
                            <div className="subtitle blink mb-4">Gaming Academy</div>
                            <h1 className="slider-title text-uppercase mb-1">Learn & Improve</h1>
                        </div>
                        <div className="col-lg-6">
                            <p className="slider-text">Join our gaming academy for coaching sessions, strategy workshops, and skill development programs. Perfect for beginners and competitive players alike.</p>
                            <div className="sw-price ">
                                <div className="d-starting">
                                    Academy Session
                                </div>
                                <div className="d-price">
                                    <span className="d-cur">£</span>
                                    <span className="d-val">25</span>
                                    <span className="d-period">/session</span>
                                </div>
                            </div>
                            <div className="spacer-10"></div>
                            <Link className="btn-main mb10" href="#">Enroll in Gaming Academy</Link>
                        </div>
                    </div>
                </div>
            </div>                                
            <div className="sw-overlay"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;