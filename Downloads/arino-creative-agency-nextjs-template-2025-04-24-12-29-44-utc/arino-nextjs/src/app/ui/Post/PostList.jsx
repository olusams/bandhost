import React from 'react';
const postData = [
  {
    title: 'The rise of eCommerce',
    postHref: '/blog/the-rise-of-ecommerce',
    subtitle:
      'The rise of e-commerce and the increasing demand for online businesses have made starting an online business a viable option....',
    authorName: 'Remlyx Admin',
    authorImg: '/images/avatar_1.jpeg',
    authorDesignation: 'Industry Insights',
    date: '20',
    month: 'Dec',
    year: '2023',
  },
  {
    title: 'Experts SEO Tips',
    postHref: '/blog/expert-seo-tips',
    subtitle:
      'SEO is the practice of optimising your website to improve its visibility and ranking on search engine results pages (SERPs)....',
    authorName: 'Remlyx Admin',
    authorImg: '/images/avatar_2.jpeg',
    authorDesignation: 'Industry Insights',
    date: '19',
    month: 'Dec',
    year: '2023',
  },
  {
    title: 'Importance Of Web Design',
    postHref: '/blog/importance-of-web-design',
    subtitle:
      'How to create an e commerce shop online without paying lots of money. A look into the key factors for a successful online presence.',
    authorName: 'Remlyx Admin',
    authorImg: '/images/avatar_3.jpeg',
    authorDesignation: 'Industry Insights',
    date: '18',
    month: 'Dec',
    year: '2023',
  },
];

export default function PostList() {
  return (
    <ul className="cs-post_3_list cs-mp0">
      {postData.map((item, index) => (
        <li key={index}>
          <div className="cs-post cs-style3">
            <div className="cs-post_left">
              <div className="cs-posted_by">
                <span className="cs-primary_font">{item.date}</span>
                <span>
                  {item.month} <br />
                  {item.year}
                </span>
              </div>
            </div>
            <div className="cs-post_right">
              <h2 className="cs-post_title">
                <a href={item.postHref}>{item.title}</a>
              </h2>
              <div className="cs-post_subtitle">{item.subtitle}</div>
              <div className="cs-post_meta">
                <div className="cs-post_avatar">
                  <div className="cs-post_avatar_img">
                    <img src={item.authorImg} alt="Avatar" />
                  </div>
                  <div className="cs-post_avatar_info">
                    <h4>{item.authorName}</h4>
                    <p>{item.authorDesignation}</p>
                  </div>
                </div>
                <a href={item.postHref} className="cs-text_btn">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
