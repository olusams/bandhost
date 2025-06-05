'use client'
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import imgUrl from '../../../../public/images/case_study_img_1.jpeg'

export default function CaseStudyDetailsPage() {
  return (
    <>
      <PageHeading
        title="Case Study Details"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Case Study Details"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Importance of storytelling and influencer marketing in social media marketing"
          subtitle="Marketing"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Image
          src={imgUrl}
          alt="Thumb"
          className="w-100 cs-radius_15"
          placeholder="blur"
        />
        <Spacing lg="140" md="80" />
        <h2 className="cs-font_38 text-center">Case Study Overview</h2>
        <Spacing lg="60" md="45" />
        <p className="cs-m0">
          This case study delves into the critical role of compelling storytelling and strategic influencer collaborations within modern social media marketing. We explore how authentic narratives and trusted voices can significantly amplify brand messaging, engage target audiences, and drive meaningful conversions. The study examines various approaches to integrating these elements effectively, highlighting best practices and common pitfalls in today's dynamic digital landscape. Our analysis focuses on creating sustainable engagement and measurable ROI through carefully crafted content and authentic partnerships.
        </p>
        <Spacing lg="65" md="45" />
        <Div className="row">
          <Div className="col-sm-6">
            <img
              src="/images/case_study_img_2.jpeg"
              alt="Thumb"
              className="w-100 cs-radius_5"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-sm-6">
            <img
              src="/images/case_study_img_3.jpeg"
              alt="Thumb"
              className="w-100 cs-radius_5"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
        <Spacing lg="125" md="55" />
      </Div>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_6">
        <Div className="cs-shape_2"></Div>
        <Div className="cs-shape_2"></Div>
        <Div className="container">
          <Spacing lg="145" md="80" />
          <h2 className="cs-font_38 text-center">Case Study Research</h2>
          <Spacing lg="90" md="45" />
          <Div className="row align-items-center cs-column_reverse_lg">
            <Div className="col-lg-5">
              <h3 className="cs-font_30 cs-m0">Marketing strategy</h3>
              <Spacing lg="45" md="30" />
              <p className="cs-m0">
                Our strategic approach focused on identifying key audience segments and crafting resonant narratives tailored to each. We leveraged data analytics to pinpoint high-impact influencers whose values and audience aligned with the brand, ensuring authenticity and maximizing reach. The core strategy involved a multi-platform content rollout, emphasizing video storytelling and interactive campaigns to foster community engagement. <br />
                <br />
                Execution involved close collaboration with influencers to co-create content that felt organic yet aligned with campaign objectives. We implemented a phased approach, starting with awareness-building, followed by engagement-focused activities, and culminating in conversion-driven calls to action. Continuous monitoring and A/B testing of content and messaging allowed for agile adjustments to optimize performance throughout the campaign lifecycle.
              </p>
            </Div>
            <Div className="col-lg-6 offset-lg-1 text-center">
              <Div className="cs-portfolio_img_in cs-shine_hover_1 rounded-circle">
                <img
                  src="/images/case_study_img_4.png"
                  alt="Case study"
                  className="w-100"
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
          </Div>
          <Spacing lg="100" md="80" />
          <Div className="row align-items-center">
            <Div className="col-lg-6 text-center">
              <Div className="cs-portfolio_img_in cs-shine_hover_1 rounded-circle">
                <img
                  src="/images/case_study_img_5.png"
                  alt="Case study"
                  className="w-100"
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-lg-5 offset-lg-1">
              <h3 className="cs-font_30 cs-m0">Branding guideline</h3>
              <Spacing lg="45" md="30" />
              <p className="cs-m0">
                The branding guidelines developed for this campaign ensured consistent messaging and visual identity across all influencer content and owned media channels. This involved defining the core story pillars, tone of voice, and visual aesthetics that would resonate with the target demographic while reinforcing the brand's unique value proposition. <br />
                <br />
                Clear directives were provided to influencers on brand representation, including logo usage, color palettes, and key brand messages to maintain coherence. However, flexibility was also built in to allow influencers to authentically integrate the brand into their unique content style, fostering genuine connection with their followers rather than appearing overly scripted.
              </p>
            </Div>
          </Div>
          <Spacing lg="150" md="80" />
        </Div>
      </Div>
      <Spacing lg="140" md="80" />
      <Div className="container text-center">
        <Div className="row col-lg-10 offset-lg-1">
          <h2 className="cs-font_38 cs-m0">Result of The Case Study</h2>
          <Spacing lg="60" md="45" />
          <p className="cs-m0">
            The findings underscore that a well-structured storytelling approach, combined with authentic influencer marketing, yields substantial increases in brand awareness, audience engagement, and conversion rates. Campaigns that prioritized genuine narratives and partnered with relevant influencers saw an average engagement uplift of 45% and a 30% increase in lead generation compared to traditional social media tactics. Furthermore, the study revealed that long-term brand loyalty and advocacy are significantly boosted when consumers connect with a brand's story through trusted influencer channels, proving the combined power of these strategies for sustainable growth.
          </p>
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let's discuss make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
