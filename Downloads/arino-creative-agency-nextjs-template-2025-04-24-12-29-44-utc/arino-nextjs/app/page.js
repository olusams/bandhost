'use client';
import Cta from '@/app/ui/Cta';
import Div from '@/app/ui/Div';
// import FunFact from '@/app/ui/FunFact'; // Removed import if no longer used on this page
import Hero from '@/app/ui/Hero';
import LogoList from '@/app/ui/LogoList';
import MovingText from '@/app/ui/MovingText';
import SectionHeading from '@/app/ui/SectionHeading';
import PortfolioSlider from '@/app/ui/Slider/PortfolioSlider';
import PostSlider from '@/app/ui/Slider/PostSlider';
import TeamSlider from '@/app/ui/Slider/TeamSlider';
import TestimonialSlider from '@/app/ui/Slider/TestimonialSlider';
import TimelineSlider from '@/app/ui/Slider/TimelineSlider';
import Spacing from '@/app/ui/Spacing';
import VideoModal from '@/app/ui/VideoModal';
import Card from '@/app/ui/Card';
// import useIntersectionObserver from '@/app/ui/hooks/useIntersectionObserver'; // Removed if no longer needed after FunFact removal

// Hero Social Links
const heroSocialLinks = [
  {
    name: 'Behance',
    links: '/',
  },
  {
    name: 'Twitter',
    links: '/',
  },
];
// FunFact Data - REMOVED
// const funfaceData = [ ... ]; 

// Portfolio Data
const portfolioData = [
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_1.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_2.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_0.jpg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_3.jpeg',
  },
  {
    title: 'Tkalnia Dywanów',
    subtitle: 'Category: Photo',
    href: '/portfolio/portfolio-details', // Generic link
    src: '/images/placeholder_tkalnia.jpg', // Placeholder image
    category: 'Photo',
  },
  {
    title: 'Oakfusion',
    subtitle: 'Category: Design',
    href: '/portfolio/portfolio-details', // Generic link
    src: '/images/placeholder_oakfusion.jpg', // Placeholder image
    category: 'Design',
  },
  {
    title: 'Ride & Travel',
    subtitle: 'Category: Photo',
    href: '/portfolio/portfolio-details', // Generic link
    src: '/images/placeholder_ride_travel.jpg', // Placeholder image
    category: 'Photo',
  },
  {
    title: 'Logo',
    subtitle: 'Category: Design',
    href: '/portfolio/portfolio-details', // Generic link
    src: '/images/placeholder_logo.jpg', // Placeholder image
    category: 'Design',
  },
  {
    title: 'Renner',
    subtitle: 'Category: Design',
    href: '/portfolio/portfolio-details', // Generic link
    src: '/images/placeholder_renner.jpg', // Placeholder image
    category: 'Design',
  },
  {
    title: '2kul Interior Design',
    subtitle: 'Category: Branding',
    href: '/portfolio/portfolio-details', // Generic link
    src: '/images/placeholder_2kul.jpg', // Placeholder image
    category: 'Branding',
  },
  {
    title: 'Typografia',
    subtitle: 'Category: Photo',
    href: '/portfolio/portfolio-details', // Generic link
    src: '/images/placeholder_typografia.jpg', // Placeholder image
    category: 'Photo',
  },
  {
    title: 'Designer Portfolio',
    subtitle: 'Category: Design',
    href: '/portfolio/portfolio-details', // Generic link
    src: '/images/placeholder_designer_portfolio.jpg', // Placeholder image
    category: 'Design',
  },
  {
    title: 'Shifting Perspective',
    subtitle: 'Category: Branding',
    href: '/portfolio/portfolio-details', // Generic link
    src: '/images/placeholder_shifting_perspective.jpg', // Placeholder image
    category: 'Branding',
  },
];

export default function Home() {
  // const [funFactRef, isFunFactVisible] = useIntersectionObserver({ threshold: 0.1 }); // REMOVED FunFact observer

  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Code & Innovation<br/>Building Future-Proof Solutions"
        subtitle="Expert developers delivering high-performance, scalable software and web applications tailored to your unique business needs. Let's build something amazing together."
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero_bg.jpeg"
        className="hero-funky-title"
        // btnText="Great CTA" was here, can be re-added if needed for Hero on homepage
      />
      {/* End Hero Section */}

      {/* Start FunFact Section - REMOVED */}
      {/* 
      <Div className="container" ref={funFactRef}>
        <FunFact ... />
      </Div>
      */}
      {/* End FunFact Section - REMOVED */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
                btnText="See All Services"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="UI/UX design"
                    link="/service/service-details"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="React.js Development"
                    link="/service/service-details"
                    src="/images/service_2.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Digital Marketing"
                    link="/service/service-details"
                    src="/images/service_3.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Technology"
                    link="/service/service-details"
                    src="/images/service_4.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider data={portfolioData} />
      </Div>
      {/* End Portfolio Section */}

      {/* Start Awards Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="We get multiple awards"
                subtitle="Our Awards"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Awards Section */}

      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
          bgUrl="/images/video_bg.jpeg"
        />
      </Div>
      {/* End Video Block Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let's discuss and make <br />something <i>cool</i> together"
          btnText="Contact Us"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
} 