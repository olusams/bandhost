import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Timeline from '../Timeline';
const timelineData = [
  [ // Slide 1
    {
      year: '01',
      name: 'Discovery & Planning',
      position: 'Understanding your vision, defining scope, and meticulous planning.',
      type: 'Conceptualization, Requirements, Research',
    },
    {
      year: '02',
      name: 'UX/UI Design & Architecture',
      position: 'Crafting intuitive interfaces and robust technical blueprints.',
      type: 'User Research, Wireframing, Prototyping, Data Modeling',
    },
  ],
  [ // Slide 2
    {
      year: '03',
      name: 'Development & Integration',
      position: 'Building your solution with clean code and seamless integrations.',
      type: 'Front-end, Back-end, API Implementation, Agile Practices',
    },
    {
      year: '04',
      name: 'Quality Assurance & Testing',
      position: 'Rigorous testing to ensure a flawless, high-performance product.',
      type: 'QA Planning, Manual Testing, Automated Testing, Performance Checks',
    },
  ],
  [ // Slide 3
    {
      year: '05',
      name: 'Launch, Support & Scaling',
      position: 'Successful deployment, ongoing support, and future-proofing your growth.',
      type: 'Continuous Improvement, Scalability, Security Advancements',
    },
    {
      year: 'Goal',
      name: 'Your Success Delivered',
      position: 'Partnering with you to achieve outstanding results and lasting value.',
      type: 'Transparent Collaboration, On-time Delivery',
    },
  ],
];

export default function TimelineSlider() {
  /** Slider Settings **/
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    arrows: false,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="cs-arrow_style3">
      {timelineData.map((item, index) => (
        <Div key={index}>
          <Timeline columnData={item} />
        </Div>
      ))}
    </Slider>
  );
}
