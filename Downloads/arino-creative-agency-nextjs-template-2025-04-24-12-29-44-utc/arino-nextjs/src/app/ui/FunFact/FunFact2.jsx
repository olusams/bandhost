import React, { useEffect, useRef } from 'react'
import Div from '../Div'

export default function FunFact2({data, variant, bgUrl, isVisible}) {
  const funFactRefs = useRef([]); // Ref to store individual fun fact text divs

  useEffect(() => {
    if (isVisible && window.Odometer) {
      data.forEach((item, index) => {
        const odometerElement = funFactRefs.current[index]?.querySelector('.odometer');
        if (odometerElement) {
          // Temporarily set to a non-target value (like 0 or an intermediary) to force re-animation
          // Then set to the actual target number.
          // This needs to happen quickly, so Odometer notices the change.
          odometerElement.innerHTML = 0; // Or any starting number for the animation
          setTimeout(() => {
            odometerElement.innerHTML = item.number;
          }, 50); // A small delay might be needed for Odometer to pick up the change
        }
      });
    }
  }, [isVisible, data]);

  return (
    <Div className={variant?`cs-funfact_wrap_2 ${variant}`:'cs-funfact_wrap_2'}>
      {bgUrl && <div className="cs-funfact_shape" style={{backgroundImage:`url(${bgUrl})`}}></div>}
      <Div className="cs-funfacts">
        {data.map((item, index) => (
          <Div 
            key={index} 
            ref={el => funFactRefs.current[index] = el} // Assign ref to the wrapping Div of each funfact
          >
            <Div className="cs-funfact cs-style2">
              <Div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                <span className="odometer">{/* Odometer will populate this */}</span>
                {/* Display the suffix directly after the odometer span */}
                {item.suffix || ''} 
                {/* The original plus was generic, now suffix handles it or can be added if always needed */}
                {/* <span className="cs-plus">+</span> */}
              </Div>
              <h3 className="cs-funfact_title">{item.title}</h3>
            </Div>
          </Div>
        ))}
      </Div>
    </Div>
  )
}
