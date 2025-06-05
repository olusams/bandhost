import React, { useEffect, useRef } from 'react';
import Div from '../Div';

export default function FunFact({ variant, title, subtitle, data, isVisible }) {
  const funFactRefs = useRef([]);
  const intervalIds = useRef([]); // To store interval IDs for cleanup

  useEffect(() => {
    let animationInterval;

    const animateOdometer = (item, index) => {
      const odometerElement = funFactRefs.current[index]?.querySelector('.odometer');
      if (odometerElement && window.Odometer) {
        odometerElement.innerHTML = 0; // Reset to 0
        setTimeout(() => {
          odometerElement.innerHTML = item.number; // Animate to the number
        }, 50); // Small delay for reset to take effect
      }
    };

    if (isVisible && data) {
      // Initial animation for all items
      data.forEach((item, index) => {
        animateOdometer(item, index);
      });

      // Set up repeating animation
      animationInterval = setInterval(() => {
        data.forEach((item, index) => {
          animateOdometer(item, index);
        });
      }, 5000); // Repeat every 5 seconds

    } else {
      // Clear interval if not visible
      clearInterval(animationInterval);
    }

    // Cleanup function to clear interval when component unmounts or isVisible changes
    return () => {
      clearInterval(animationInterval);
    };
  }, [isVisible, data]); // Rerun effect if isVisible or data changes

  return (
    <Div className={variant ? `cs-funfact_wrap ${variant}` : 'cs-funfact_wrap'}>
      <Div
        className="cs-funfact_shape"
        style={{ backgroundImage: 'url(/images/funfact_shape_bg.svg)' }}
      />
      <Div className="cs-funfact_left">
        <Div className="cs-funfact_heading">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </Div>
      </Div>
      <Div className="cs-funfact_right">
        <Div className="cs-funfacts">
          {data && data.map((item, index) => (
            <Div className="cs-funfact cs-style1" key={index} ref={el => funFactRefs.current[index] = el}>
              <Div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                <span className="odometer">{/* Odometer will populate this */}</span>
                {item.suffix || ''}
              </Div>
              <Div className="cs-funfact_text">
                <p>{item.title}</p>
              </Div>
            </Div>
          ))}
        </Div>
      </Div>
    </Div>
  );
}
