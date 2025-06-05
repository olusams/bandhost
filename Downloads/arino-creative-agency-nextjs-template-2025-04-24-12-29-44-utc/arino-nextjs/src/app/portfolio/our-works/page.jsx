'use client';
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Portfolio from "@/app/ui/Portfolio"; // Assuming this is your individual portfolio item component
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import { useState } from "react";
import Cta from "@/app/ui/Cta";

// Portfolio Data - based on the items from remlyx-portfolio.netlify.app
const portfolioData = [
  {
    title: 'Tkalnia Dywanów',
    subtitle: 'Category: Photo',
    href: '/portfolio/portfolio-details', // Generic link, consider updating
    src: '/images/placeholder_tkalnia.jpg', // Placeholder image
    category: 'Photo',
  },
  {
    title: 'Oakfusion',
    subtitle: 'Category: Design',
    href: '/portfolio/portfolio-details',
    src: '/images/placeholder_oakfusion.jpg',
    category: 'Design',
  },
  {
    title: 'Ride & Travel',
    subtitle: 'Category: Photo',
    href: '/portfolio/portfolio-details',
    src: '/images/placeholder_ride_travel.jpg',
    category: 'Photo',
  },
  {
    title: 'Logo',
    subtitle: 'Category: Design',
    href: '/portfolio/portfolio-details',
    src: '/images/placeholder_logo.jpg',
    category: 'Design',
  },
  {
    title: 'Renner',
    subtitle: 'Category: Design',
    href: '/portfolio/portfolio-details',
    src: '/images/placeholder_renner.jpg',
    category: 'Design',
  },
  {
    title: '2kul Interior Design',
    subtitle: 'Category: Branding',
    href: '/portfolio/portfolio-details',
    src: '/images/placeholder_2kul.jpg',
    category: 'Branding',
  },
  {
    title: 'Typografia',
    subtitle: 'Category: Photo',
    href: '/portfolio/portfolio-details',
    src: '/images/placeholder_typografia.jpg',
    category: 'Photo',
  },
  {
    title: 'Designer Portfolio',
    subtitle: 'Category: Design',
    href: '/portfolio/portfolio-details',
    src: '/images/placeholder_designer_portfolio.jpg',
    category: 'Design',
  },
  {
    title: 'Shifting Perspective',
    subtitle: 'Category: Branding',
    href: '/portfolio/portfolio-details',
    src: '/images/placeholder_shifting_perspective.jpg',
    category: 'Branding',
  },
  // You can add more items from your original portfolioData here if needed
  {
    title: 'Colorful Art Work 1', // Example from original data
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_1.jpeg',
    category: 'ui_ux_design', // Ensure category matches for filtering if used
  },
  {
    title: 'Colorful Art Work 2', // Example from original data
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_2.jpeg',
    category: 'logo_design',
  },
   {
    title: 'Colorful Art Work 3', // Example from original data
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_0.jpg', // Assuming this image exists
    category: 'web_design',
  },
   {
    title: 'Colorful Art Work 4', // Example from original data
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_3.jpeg',
    category: 'mobile_apps',
  }
];

const categoryMenu = [
  {
    title: 'All',
    category: 'all',
  },
  {
    title: 'Photo',
    category: 'Photo',
  },
  {
    title: 'Design',
    category: 'Design',
  },
  {
    title: 'Branding',
    category: 'Branding',
  },
  {
    title: 'UI/UX Design',
    category: 'ui_ux_design',
  },
  {
    title: 'Logo Design',
    category: 'logo_design',
  },
  {
    title: 'Web Design',
    category: 'web_design',
  },
  {
    title: 'Mobile Apps',
    category: 'mobile_apps',
  },
];

export default function OurWorksPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  // Determine the number of items to show, can be dynamic or fixed
  const itemsToShow = portfolioData.length; // Show all items for now

  const filteredPortfolio = activeCategory === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <>
      <PageHeading
        title="Our Works"
        bgSrc="/images/portfolio_hero_bg.jpeg" // You might want a different bg image
        pageLinkText="Our Works"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Explore Our Creations" subtitle="Portfolio Gallery" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              {categoryMenu.map((item, index) => (
                <li
                  className={activeCategory === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActiveCategory(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {filteredPortfolio.slice(0, itemsToShow).map((item, index) => (
            <Div
              // Adjust column classes as needed for your layout preference
              // This example uses col-lg-4 for a 3-column layout on large screens
              className={'col-lg-4 col-md-6'}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1" // Use a variant that suits a gallery display
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>
        {/* Optional: Load More Button if not showing all items initially */}
        {/* <Div className="text-center"> ... </Div> */}
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="agency@Remlyx.com" // Updated email
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
} 