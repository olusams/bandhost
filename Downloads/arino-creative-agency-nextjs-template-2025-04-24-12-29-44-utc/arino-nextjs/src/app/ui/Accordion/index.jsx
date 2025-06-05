import React from 'react';
import { useState } from 'react';
import Div from '../Div';
const accordionData = [
  {
    question: 'Why choose custom web development over standard templates?',
    answer: 'Custom web development provides a solution tailored precisely to your unique business needs, brand identity, and workflow. Unlike templates, it offers greater flexibility for features, scalability for future growth, and a distinct user experience that can set you apart from competitors. You also gain full ownership of the codebase.',
  },
  {
    question: 'What is your typical web development process?',
    answer: 'Our process is collaborative and structured: 1. Discovery & Planning (understanding your goals, target audience, and project scope). 2. UX/UI Design & Architecture (creating intuitive user interfaces and a solid technical plan). 3. Development & Integration (building the website with clean code and necessary integrations). 4. Quality Assurance (rigorous testing for functionality, performance, and security). 5. Launch & Support (deploying the site and providing ongoing maintenance and support as needed).',
  },
  {
    question: 'How do you ensure the websites you build are scalable and maintainable?',
    answer: 'We build websites with future growth in mind by using modern coding practices, modular architecture, and scalable technologies. We focus on writing clean, well-documented code, which simplifies future updates, feature additions, and maintenance, whether handled by our team or another vendor.',
  },
  {
    question: 'Can you help redesign an existing website or modernize an older one?',
    answer: 'Absolutely. We specialize in website redesigns and legacy system modernization. We can help refresh your site\'s look and feel, improve user experience, migrate to modern technologies, add new functionalities, and ensure it meets current web standards for performance and security.',
  },
  {
    question: 'What kind of support do you offer after a website is launched?',
    answer: 'Our commitment doesn\'t end at launch. We offer various support and maintenance packages, including technical assistance, security updates, performance monitoring, content updates, and SEO services to ensure your website continues to perform optimally and achieve your business goals.',
  },
];

export default function Accordion() {
  const [selected, setSelected] = useState(0);
  const handelToggle = index => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? 'active' : ''}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handelToggle(index)}
          >
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
