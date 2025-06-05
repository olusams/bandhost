'use client'
import Image from "next/image";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TeamSlider from "@/app/ui/Slider/TeamSlider";
import Spacing from "@/app/ui/Spacing";
import aboutImg from '../../../public/images/about_img_1.jpeg'
import aboutImg2 from '../../../public/images/about_img_2.jpeg'
import aboutImg3 from '../../../public/images/about_img_3.jpeg'
import aboutImg4 from '../../../public/images/about_img_4.jpeg'
import useIntersectionObserver from '@/app/ui/hooks/useIntersectionObserver';

// Updated FunFact Data (from homepage)
const funfaceData = [
  { title: 'Global Happy Clients', number: '25', suffix: '5K+' },
  { title: 'Successful Projects Completed', number: '30', suffix: '8K+' },
  { title: 'Dedicated Team Members', number: '3', suffix: '3+' },
  { title: 'Innovative Digital Products', number: '15', suffix: '6k+' }
];

export default function AboutPage() {
  const [funFactRef, isFunFactVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Us"
        bgSrc="/images/about_hero_bg.jpeg"
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Remlyx: Navigating Digital Horizons"
              subtitle="About Our Agency"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At Remlyx.com, we're passionate about working with entrepreneurs and small businesses to create beautiful, functional, and efficient online environments. We partner with you to understand your unique challenges and deliver high-quality, custom web solutions that drive results. Our commitment is to help you find the gusts that carry your business forward in the constantly shifting winds of technology through innovative design and technical excellence.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <Image
              src={aboutImg}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <Image
              src={aboutImg2}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <Image
              src={aboutImg3}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container" ref={funFactRef}>
        <FunFact
          title="Key Milestones"
          subtitle="A glimpse into our journey and the impact we've made, by the numbers."
          data={funfaceData}
          isVisible={isFunFactVisible}
          variant="cs-type1"
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src={aboutImg4}
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Catering to Your Unique Business Ambitions"
              subtitle="Why Partner with Remlyx?"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                For small and midsize enterprises, Remlyx delivers robust and scalable web solutions. We focus on creating professional online presences, user-friendly interfaces for high client satisfaction, and modernizing any legacy systems to ensure your business thrives in the digital landscape.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Launching a new venture? Remlyx is your trusted tech partner. We specialize in building Minimum Viable Products (MVPs) efficiently, helping you validate your business ideas quickly and within budget, allowing you to focus on core business growth while we handle the technical development.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Tech Stack Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <SectionHeading
          title="Technologies We Master"
          subtitle="Our Tech Stack"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <Div className="row">
          <Div className="col-lg-10 offset-lg-1">
            <p className="cs-m0 text-center">At Remlyx, we leverage a versatile set of technologies to bring your vision to life. Our expertise ensures that your project is built on a solid, scalable, and modern foundation.</p>
            <Spacing lg="50" md="30" />
            <Div className="row">
              <Div className="col-md-4">
                <h4 className="cs-font_22 cs-font_18_sm cs-mb-2">Front-End</h4>
                <p className="cs-m0">HTML5, CSS3, JavaScript, jQuery, React, Responsive Design, Mobile-First Principles.</p>
                <Spacing lg="0" md="25" />
              </Div>
              <Div className="col-md-4">
                <h4 className="cs-font_22 cs-font_18_sm cs-mb-2">Back-End</h4>
                <p className="cs-m0">PHP, Database Design & Management, API Development.</p>
                <Spacing lg="0" md="25" />
              </Div>
              <Div className="col-md-4">
                <h4 className="cs-font_22 cs-font_18_sm cs-mb-2">Platforms & CMS</h4>
                <p className="cs-m0">Specialized in Webflow development, experienced with various Content Management Systems.</p>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" /> 
      {/* End Tech Stack Section */}

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
      {/* End Team Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title={"Let's discuss make <br />something <i>cool</i> together"}
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
