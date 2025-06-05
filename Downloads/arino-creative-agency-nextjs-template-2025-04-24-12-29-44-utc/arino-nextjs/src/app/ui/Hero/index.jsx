import React from 'react';
import Div from '../Div';
import VerticalLinks from '../VerticalLinks';
import Button from '../Button';
import parse from 'html-react-parser';

// Helper function to render the title with alternating styles for words
const renderFunkyTitleSegments = (titleString) => {
  const segments = [];
  let keyCounter = 0;
  // Normalize <br> tags to a consistent format for splitting, then split.
  const lines = titleString.replace(/<br\s*\/?>/gi, '<br/>').split('<br/>');
  let isGradientWord = true;

  lines.forEach((line, lineIndex) => {
    if (lineIndex > 0) {
      segments.push(<br key={`br-${keyCounter++}`} />);
    }
    const words = line.split(' '); // Split line into words
    words.forEach((word, wordIndex) => {
      if (word) { // Process non-empty words
        segments.push(
          <span
            key={`word-${keyCounter++}`}
            className={isGradientWord ? 'funky-gradient-segment' : 'funky-solid-segment'}
          >
            {word}
          </span>
        );
        isGradientWord = !isGradientWord; // Alternate for the next word
      }
      // Add space back if it's not the last word in the line
      if (word && wordIndex < words.length - 1) {
        segments.push(<span key={`space-${keyCounter++}`}> </span>);
      }
    });
  });
  return segments;
};

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
  className, // Keep className for potential future use
}) {
  return (
    <Div
      className={`cs-hero cs-style1 cs-bg ${className ? className : ''}`}
      style={{ backgroundImage: `url(${bgImageUrl})` }}
      id="home"
    >
      <Div className="container">
        <Div className="cs-hero_text">
          {title && (
            <h1 className="cs-hero_title">
              {className && className.includes('hero-funky-title')
                ? renderFunkyTitleSegments(title)
                : parse(title) // Fallback to original parsing
              }
            </h1>
          )}
          <Div className="cs-hero_info">
            <Div>
              {subtitle && <p className="cs-hero_subtitle">{parse(subtitle)}</p>}
              {btnText && btnLink && (
                <Button btnLink={btnLink} btnText={btnText} />
              )}
            </Div>
          </Div>
        </Div>
      </Div>
      {heroSocialLinks && scrollDownId && (
      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      )}
      {scrollDownId && (
        <a href={scrollDownId} className="cs-down_btn">
          .
        </a>
      )}
    </Div>
  );
}
