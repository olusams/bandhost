import React from 'react'
// import { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

export default function PricingTableList() {
  // const [tab, setTab] = useState('monthly')

  const foundationFeatures = [
    'Custom Landing Page Design',
    'Mobile-Responsive Layout',
    'Basic SEO Setup',
    'Contact Form Integration',
    'Social Media Links',
    '1 Revision Round',
  ];

  const growthFeatures = [
    'Up to 5 Custom-Designed Pages',
    'Mobile-Responsive Layout',
    'Content Management System (CMS) Integration',
    'Advanced SEO Setup',
    'Blog Setup & Integration',
    'Google Analytics Setup',
    '2 Revision Rounds',
  ];

  const proFeatures = [
    'Up to 10 Custom-Designed Pages',
    'Mobile-Responsive Layout',
    'Full CMS Integration & Training',
    'eCommerce Functionality (Basic Setup)',
    'Advanced SEO & Performance Optimization',
    'Custom Blog Design & Integration',
    'Google Analytics & Search Console Setup',
    '3 Revision Rounds',
    'Basic Post-Launch Support (1 month)',
  ];

  return (
    <Section className="position-relative">
      {/* Tab links UI removed */}
      <Section className="row">
        <Section className="col-lg-4">
          <PricingTable
            title='Foundation'
            price='499'
            currency='£'
            planSubtitle='Ideal for new businesses or personal projects.'
            features={foundationFeatures}
            btnText='Get Started'
            btnLink='https://www.fiverr.com/s/LNNP1gm'
          />
          <Spacing lg='25' md='25' />
        </Section>
        <Section className="col-lg-4">
          <PricingTable
            title='Growth'
            price='1299'
            currency='£'
            planSubtitle='Perfect for growing businesses needing a professional online presence.'
            features={growthFeatures}
            btnText='Choose Growth'
            btnLink='https://www.fiverr.com/s/LNNP1gm'
          />
          <Spacing lg='25' md='25' />
        </Section>
        <Section className="col-lg-4">
          <PricingTable
            title='Pro'
            price='2499'
            currency='£'
            planSubtitle='For established businesses requiring advanced features and scalability.'
            features={proFeatures}
            btnText='Go Pro'
            btnLink='https://www.fiverr.com/s/LNNP1gm'
          />
          <Spacing lg='25' md='25' />
        </Section>
      </Section>
    </Section>
  )
}
