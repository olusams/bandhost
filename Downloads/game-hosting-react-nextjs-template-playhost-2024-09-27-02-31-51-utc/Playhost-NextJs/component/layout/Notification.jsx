import React, { useState, useEffect } from 'react';

const Notification = ({ 
    message, 
    type = 'info', 
    duration = 5000, 
    onClose, 
    isVisible = false 
}) => {
    const [isShowing, setIsShowing] = useState(isVisible);

    useEffect(() => {
        if (isVisible) {
            setIsShowing(true);
            const timer = setTimeout(() => {
                setIsShowing(false);
                setTimeout(() => {
                    onClose?.();
                }, 300);
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [isVisible, duration, onClose]);

    const getIcon = () => {
        switch (type) {
            case 'success':
                return (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22,4 12,14.01 9,11.01"/>
                    </svg>
                );
            case 'error':
                return (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="15" y1="9" x2="9" y2="15"/>
                        <line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                );
            case 'warning':
                return (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                        <line x1="12" y1="9" x2="12" y2="13"/>
                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                );
            default:
                return (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="16" x2="12" y2="12"/>
                        <line x1="12" y1="8" x2="12.01" y2="8"/>
                    </svg>
                );
        }
    };

    const getStyles = () => {
        const baseStyles = {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '16px 20px',
            borderRadius: '12px',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            maxWidth: '400px',
            zIndex: 10000,
            transform: isShowing ? 'translateX(0)' : 'translateX(100%)',
            opacity: isShowing ? 1 : 0,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        };

        switch (type) {
            case 'success':
                return {
                    ...baseStyles,
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: '#10b981',
                    borderColor: 'rgba(16, 185, 129, 0.2)',
                };
            case 'error':
                return {
                    ...baseStyles,
                    background: 'rgba(239, 68, 68, 0.1)',
                    color: '#ef4444',
                    borderColor: 'rgba(239, 68, 68, 0.2)',
                };
            case 'warning':
                return {
                    ...baseStyles,
                    background: 'rgba(245, 158, 11, 0.1)',
                    color: '#f59e0b',
                    borderColor: 'rgba(245, 158, 11, 0.2)',
                };
            default:
                return {
                    ...baseStyles,
                    background: 'rgba(99, 102, 241, 0.1)',
                    color: '#6366f1',
                    borderColor: 'rgba(99, 102, 241, 0.2)',
                };
        }
    };

    if (!isVisible && !isShowing) return null;

    return (
        <div style={getStyles()}>
            <div className="notification-icon" style={{ flexShrink: 0 }}>
                {getIcon()}
            </div>
            <div className="notification-content" style={{ flex: 1 }}>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>
                    {message}
                </p>
            </div>
            <button
                onClick={() => {
                    setIsShowing(false);
                    setTimeout(() => {
                        onClose?.();
                    }, 300);
                }}
                style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    padding: '4px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                }}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
        </div>
    );
};

// Notification Manager Hook
export const useNotification = () => {
    const [notifications, setNotifications] = useState([]);

    const showNotification = (message, type = 'info', duration = 5000) => {
        const id = Date.now();
        const notification = { id, message, type, duration, isVisible: true };
        
        setNotifications(prev => [...prev, notification]);

        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== id));
        }, duration + 300);
    };

    const removeNotification = (id) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    return {
        notifications,
        showNotification,
        removeNotification,
        success: (message, duration) => showNotification(message, 'success', duration),
        error: (message, duration) => showNotification(message, 'error', duration),
        warning: (message, duration) => showNotification(message, 'warning', duration),
        info: (message, duration) => showNotification(message, 'info', duration),
    };
};

// Notification Container Component
export const NotificationContainer = ({ notifications, onRemove }) => {
    return (
        <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 10000 }}>
            {notifications.map((notification, index) => (
                <div key={notification.id} style={{ marginBottom: '10px' }}>
                    <Notification
                        message={notification.message}
                        type={notification.type}
                        duration={notification.duration}
                        isVisible={notification.isVisible}
                        onClose={() => onRemove(notification.id)}
                    />
                </div>
            ))}
        </div>
    );
};

export default Notification; 