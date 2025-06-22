import React, { useState, useEffect } from 'react';
import Link from 'next/link'; 

const ScrollToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        const updateScrollProgress = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollProgress(scrollPercent);
        };

        window.addEventListener('scroll', toggleVisibility);
        window.addEventListener('scroll', updateScrollProgress);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* Scroll Progress Bar */}
            <div 
                className="scroll-progress" 
                style={{ width: `${scrollProgress}%` }}
            />
            
            {/* Scroll to Top Button */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="scroll-to-top-btn"
                    aria-label="Scroll to top"
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        border: 'none',
                        color: 'white',
                        fontSize: '20px',
                        cursor: 'pointer',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: 'translateY(0)',
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-3px) scale(1.1)';
                        e.target.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0) scale(1)';
                        e.target.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.3)';
                    }}
                >
                    <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                    >
                        <path d="M18 15l-6-6-6 6"/>
                    </svg>
                </button>
            )}
        </>
    );
};

export default ScrollToTopBtn;
