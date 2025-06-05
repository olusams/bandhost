import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
const testimonialData = [
  {
    testimonialThumb: '/images/testimonial_placeholder_1.jpeg',
    testimonialText: 'Remlyx did a great job redesigning my website. He moved all the old content to the new site, added several new features and My audience has grown a lot since they took over - and there haven\'t been any technical issues.',
    avatarName: 'John',
    avatarDesignation: 'Customer',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_placeholder_2.jpeg',
    testimonialText: 'The beauty of Remlyx is that you are given a buffet of different options. The designers will tweak the designs to make them exactly how you want them.',
    avatarName: 'Sandra',
    avatarDesignation: 'Customer',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_placeholder_3.jpeg',
    testimonialText: 'Remlyx took the time to understand my business and where I wanted it to be in the future and was able to design a website that truly represented me, i highly recommend them !',
    avatarName: 'Janaete',
    avatarDesignation: 'Customer',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_placeholder_4.jpeg',
    testimonialText: "I\'m very impressed with the services. I would like to express my sincere thanks for the hard work, patience, and sheer professionalism you have shown in developing and delivering a bespoke website to support our business.",
    avatarName: 'George',
    avatarDesignation: 'Customer',
    ratings: '5',
  },
];

export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                      avatarImage={item.testimonialThumb}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
