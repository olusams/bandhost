'use client'
import Cta from "@/app/ui/Cta"
import Div from "@/app/ui/Div"
import PageHeading from "@/app/ui/PageHeading"
import Spacing from "@/app/ui/Spacing"
import SocialWidget from "@/app/ui/Widget/SocialWidget"
import imgUrl from '../../../../public/images/member_details_1.jpeg'
import Image from "next/image"

export default function TeamDetails() {
  return (
    <>
      <PageHeading
        title='Team Details'
        bgSrc='/images/team_hero_bg.jpeg'
        pageLinkText='Team Details'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image src={imgUrl} alt="Member" className="w-100" placeholder="blur" />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <Spacing lg='0' md='45'/>
            <Div className="cs-section_heading cs-style1">
              <h2 className="cs-section_title">Melon Bulgery</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle">Product Designer</h3>
              <Div className="cs-height_5 cs-height_lg_5" />
              <Div className="cs-separator cs-accent_bg" />
              <Div className="cs-height_45 cs-height_lg_25" />
              <p className="cs-m0">Melon is a visionary Product Designer with a passion for creating intuitive and impactful user experiences. With a keen eye for detail and a user-centric approach, Melon translates complex problems into elegant and effective design solutions. They thrive on collaborating with cross-functional teams to bring innovative digital products to life, from initial concept and wireframing through to final polish and user testing.</p>
              <Div className="cs-height_25 cs-height_lg_20" />
              <p className="cs-m0">Driven by a belief in design's power to shape interactions and solve real-world challenges, Melon consistently seeks to push creative boundaries. Their expertise spans user research, prototyping, and interaction design, always aiming to deliver products that are not only aesthetically pleasing but also highly functional and aligned with user needs and business objectives.</p>
              <Div className="cs-height_45 cs-height_lg_30" />
              <SocialWidget/>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='Let's disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
