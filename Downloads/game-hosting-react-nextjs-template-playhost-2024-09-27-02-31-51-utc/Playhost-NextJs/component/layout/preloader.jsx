import React, { useState, useEffect } from 'react';

const Preloader = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setIsVisible(false);
                    }, 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="preloader-container"
             style={{
                 position: 'fixed',
                 top: 0,
                 left: 0,
                 width: '100%',
                 height: '100%',
                 background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 justifyContent: 'center',
                 zIndex: 9999,
                 transition: 'opacity 0.5s ease-out',
                 opacity: isVisible ? 1 : 0,
             }}>
            
            {/* Animated Logo */}
            <div className="logo-container"
                 style={{
                     marginBottom: '2rem',
                     animation: 'pulse 2s ease-in-out infinite',
                 }}>
                <div className="logo-text"
                     style={{
                         fontSize: '2.5rem',
                         fontWeight: 'bold',
                         background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
                         WebkitBackgroundClip: 'text',
                         WebkitTextFillColor: 'transparent',
                         backgroundClip: 'text',
                         textAlign: 'center',
                     }}>
                    Playhost
                </div>
                <div className="logo-subtitle"
                     style={{
                         fontSize: '1rem',
                         color: '#94a3b8',
                         textAlign: 'center',
                         marginTop: '0.5rem',
                     }}>
                    London Game Hosting
                </div>
            </div>

            {/* Progress Bar */}
            <div className="progress-container"
                 style={{
                     width: '300px',
                     height: '4px',
                     background: 'rgba(255, 255, 255, 0.1)',
                     borderRadius: '2px',
                     overflow: 'hidden',
                     marginBottom: '1rem',
                 }}>
                <div className="progress-bar"
                     style={{
                         height: '100%',
                         background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)',
                         width: `${progress}%`,
                         transition: 'width 0.3s ease',
                         borderRadius: '2px',
                         position: 'relative',
                     }}>
                    <div className="progress-shine"
                         style={{
                             position: 'absolute',
                             top: 0,
                             left: '-100%',
                             width: '100%',
                             height: '100%',
                             background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                             animation: 'shimmer 2s infinite',
                         }}></div>
                </div>
            </div>

            {/* Progress Text */}
            <div className="progress-text"
                 style={{
                     fontSize: '0.9rem',
                     color: '#94a3b8',
                     textAlign: 'center',
                 }}>
                Loading... {Math.round(progress)}%
            </div>

            {/* Loading Spinner */}
            <div className="loading-spinner"
                 style={{
                     marginTop: '2rem',
                     width: '40px',
                     height: '40px',
                     border: '3px solid rgba(255, 255, 255, 0.1)',
                     borderTop: '3px solid #6366f1',
                     borderRadius: '50%',
                     animation: 'spin 1s linear infinite',
                 }}></div>

            {/* Animated Dots */}
            <div className="loading-dots"
                 style={{
                     display: 'flex',
                     gap: '0.5rem',
                     marginTop: '1rem',
                 }}>
                {[0, 1, 2].map((i) => (
                    <div key={i}
                         className="dot"
                         style={{
                             width: '8px',
                             height: '8px',
                             borderRadius: '50%',
                             background: '#6366f1',
                             animation: `bounce 1.4s ease-in-out infinite both`,
                             animationDelay: `${i * 0.16}s`,
                         }}></div>
                ))}
            </div>

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                @keyframes shimmer {
                    0% { left: -100%; }
                    100% { left: 100%; }
                }

                @keyframes bounce {
                    0%, 80%, 100% { 
                        transform: scale(0);
                        opacity: 0.5;
                    }
                    40% { 
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                @keyframes fadeOut {
                    from { opacity: 1; }
                    to { opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default Preloader;