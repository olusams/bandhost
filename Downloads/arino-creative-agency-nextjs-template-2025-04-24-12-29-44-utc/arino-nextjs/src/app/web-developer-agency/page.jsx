'use client'
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact2 from "@/app/ui/FunFact/FunFact2";
import Hero4 from "@/app/ui/Hero/Hero4";
import LogoList from "@/app/ui/LogoList";
import MovingText2 from "@/app/ui/MovingText/MovingText2";
import Portfolio from "@/app/ui/Portfolio";
import PostList from "@/app/ui/Post/PostList";
import SectionHeading from "@/app/ui/SectionHeading";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import TimelineSlider from "@/app/ui/Slider/TimelineSlider";
import Spacing from "@/app/ui/Spacing";
import VideoModal from "@/app/ui/VideoModal";
import { Icon } from "@iconify/react";
import { useState } from "react";
import useIntersectionObserver from '@/app/ui/hooks/useIntersectionObserver';

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
const funfaceData = [
  {
    title: 'Global Happy Clients',
    number: 40,
    suffix: 'K+',
  },
  {
    title: 'Project Completed',
    number: 50,
    suffix: 'K+',
  },
  {
    title: 'Team Members',
    number: 245,
    suffix: '+',
  },
  {
    title: 'Awards Won',
    number: 550,
    suffix: '', // No suffix for this one
  },
];
const serviceData1 = [
  {
    title: 'Website Design & Development',
    href: '/service/service-details',
  },
  {
    title: 'eCommerce Solutions',
    href: '/service/service-details',
  },
  {
    title: 'Digital Analytics',
    href: '/service/service-details',
  },
];
const serviceData2 = [
  {
    title: 'Web Hosting',
    href: '/service/service-details',
  },
  {
    title: 'Support & Maintenance',
    href: '/service/service-details',
  },
  {
    title: 'Custom Website Revamp',
    href: '/service/service-details',
  },
];
const portfolioData = [
  {
    title: 'Driving School Website',
    subtitle: 'See Project',
    href: '/portfolio/driving-school',
    src: '/images/portfolio_11.jpeg',
    category: 'web_design',
  },
  {
    title: 'Nursery School Website',
    subtitle: 'See Project',
    href: '/portfolio/nursery-school',
    src: '/images/portfolio_12.jpeg',
    category: 'web_design',
  },
  {
    title: 'Barbers Shop Website',
    subtitle: 'See Project',
    href: '/portfolio/barbers-shop',
    src: '/images/portfolio_13.jpeg',
    category: 'web_design',
  },
  {
    title: 'Gest Logistics Platform',
    subtitle: 'See Project',
    href: '/portfolio/gest-logistics',
    src: '/images/portfolio_14.jpeg',
    category: 'web_development',
  },
  {
    title: 'Custom Bracelets eCommerce',
    subtitle: 'See Project',
    href: '/portfolio/custom-bracelets',
    src: '/images/portfolio_15.jpeg',
    category: 'ecommerce',
  },
  {
    title: 'Skyline Travel Website',
    subtitle: 'See Project',
    href: '/portfolio/skyline-travel',
    src: '/images/portfolio_16.jpeg',
    category: 'web_design',
  },
];

export default function WebDeveloperAgencyHome() {
  const [itemShow, setItemShow] = useState(6);

  // Refs for animations
  const [funFactRef, isFunFactVisible, funFactHasBeenVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [servicesHeadingRef, , servicesHeadingHasBeenVisible] = useIntersectionObserver({ threshold: 0.5 });
  const [aboutSectionRef, , aboutSectionHasBeenVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [portfolioRef, , portfolioHasBeenVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [milestonesRef, , milestonesHasBeenVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [blogSectionRef, , blogSectionHasBeenVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [logoListRef, , logoListHasBeenVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [ctaRef, , ctaHasBeenVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <>
      {/* Start Hero Section */}
      <Hero4
        title="Innovate. Build. Succeed."
        subtitle="We partner with businesses to create inspiring, intuitive, and high-performing web solutions that drive results."
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        phoneNumber="07448429748"
        videoSrc="/videos/placeholder_hero_video.mp4"
      />
      {/* End Hero Section */}

      {/* Start Funfact Section */}
      <Div 
        className={`container cs-scroll-animate ${funFactHasBeenVisible ? 'cs-is-visible' : ''}`}
        ref={funFactRef}
      >
        <FunFact2
          data={funfaceData}
          variant="cs-type1"
          bgUrl="/images/funfact_shape_bg.svg"
          isVisible={isFunFactVisible}
        />
      </Div>
      {/* End Funfact Section */}

      {/* Start Services Section */}
      <Spacing lg="145" md="80" />
      <Div 
        className={`container cs-scroll-animate ${servicesHeadingHasBeenVisible ? 'cs-is-visible' : ''}`}
        ref={servicesHeadingRef}
      >
        <SectionHeading
          title="Our Services"
          subtitle="What We Offer"
          variant="cs-style1 text-center"
        />
        <Spacing lg="65" md="45" />
      </Div>
      {/* End Services Section */}

      {/* Start Moving Text Section */}
      <MovingText2 data={serviceData1} />
      <Spacing lg="20" md="10" />
      <MovingText2 reverseDirection data={serviceData2} />
      {/* End Moving Text Section */}

      {/* Start About Section */}
      <Div 
        className={`cs-shape_wrap_4 cs-scroll-animate ${aboutSectionHasBeenVisible ? 'cs-is-visible' : ''}`}
        ref={aboutSectionRef}
      >
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-5 col-xl-4">
              <SectionHeading
                title="Design is how it works."
                subtitle="About Us"
              />
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                <em>"Design is not just what it looks like and feels like. Design is how it works."</em>
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                With over 10 years of experience in the creative industry, and 5 years specialising in Webflow design and development, I have a deep understanding of design principles that allows me to create websites that not only look great, but also function flawlessly. With diverse experience across multiple roles and industries, I'm well-equipped to bring more than just design skills to the table. As an asset to your fast-paced design agency team, I can contribute a wealth of expertise and experience. If you're seeking a creative, passionate designer and developer who can deliver something truly unique and Dynamique, look no further. Let's collaborate and create something great.
              </p>
              <Spacing lg="30" md="30" />
              <Spacing lg="45" md="45" />
            </Div>
            <Div className="col-lg-7 offset-xl-1">
              <Div className="cs-half_screen">
                <VideoModal
                  videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
                  bgUrl="/images/video_bg.jpeg"
                  variant="cs-style1 cs-size1"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End About Section */}

      {/* Start Projects Section */}
      <Spacing lg="145" md="80" />
      <Div 
        className={`container cs-scroll-animate ${portfolioHasBeenVisible ? 'cs-is-visible' : ''}`}
        ref={portfolioRef}
      >
        <SectionHeading
          title="Portfolio to explore"
          subtitle="Latest Projects"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 0 || index === 3 || index === 4
                  ? 'col-lg-8'
                  : 'col-lg-4'
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      {/* End Projects Section */}

      {/* Start Milestones Section (formerly Awards) */}
      <Spacing lg="140" md="80" />
      <Div 
        className={`container cs-scroll-animate ${milestonesHasBeenVisible ? 'cs-is-visible' : ''}`}
        ref={milestonesRef}
      >
        <Div className="row">
          <Div className="col-xl-4">
            <SectionHeading
              title="Our Proven Development Process"
              subtitle="How We Work"
              variant="cs-style1"
            />
            <Spacing lg="90" md="45" />
          </Div>
          <Div className="col-xl-7 offset-xl-1">
            <TimelineSlider />
          </Div>
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      {/* End Milestones Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      <Div 
        className={`cs-shape_wrap_4 cs-scroll-animate ${blogSectionHasBeenVisible ? 'cs-is-visible' : ''}`}
        ref={blogSectionRef}
      >
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Spacing lg="145" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-5 col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="45" md="45" />
            </Div>
            <Div className="col-lg-7 offset-xl-1">
              <PostList />
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      {/* End Blog Section */}

      {/* Start LogoList Section
      <Div 
        className={`container cs-scroll-animate ${logoListHasBeenVisible ? 'cs-is-visible' : ''}`}
        ref={logoListRef}
      >
        <SectionHeading
          title="Our reputed partner"
          subtitle="Top Clients"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      End LogoList Section */}

      {/* Start CTA Section */}
      <Div 
        className={`container cs-scroll-animate ${ctaHasBeenVisible ? 'cs-is-visible' : ''}`}
        ref={ctaRef}
      >
        <Cta
          title="Let's discuss your project<br />and build something <i>amazing</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
} 