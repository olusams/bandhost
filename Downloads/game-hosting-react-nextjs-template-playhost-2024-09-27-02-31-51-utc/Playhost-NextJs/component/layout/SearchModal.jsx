import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const SearchModal = ({ isOpen, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef(null);

    // Sample search data - replace with your actual data
    const searchData = [
        { title: 'Minecraft Server Hosting', url: '/games', category: 'Games' },
        { title: 'Valorant Server Setup', url: '/games', category: 'Games' },
        { title: 'Pricing Plans', url: '/pricing', category: 'Pricing' },
        { title: 'London Data Center', url: '/location', category: 'Locations' },
        { title: '24/7 Support', url: '/contact', category: 'Support' },
        { title: 'DDoS Protection', url: '/about', category: 'Features' },
        { title: 'Affiliate Program', url: '/affliate', category: 'Company' },
        { title: 'Knowledge Base', url: '/knowledgebase', category: 'Support' },
    ];

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        if (searchQuery.trim()) {
            setIsLoading(true);
            // Simulate search delay
            const timer = setTimeout(() => {
                const results = searchData.filter(item =>
                    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.category.toLowerCase().includes(searchQuery.toLowerCase())
                );
                setSearchResults(results);
                setIsLoading(false);
            }, 300);

            return () => clearTimeout(timer);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="search-modal-overlay"
             style={{
                 position: 'fixed',
                 top: 0,
                 left: 0,
                 right: 0,
                 bottom: 0,
                 background: 'rgba(0, 0, 0, 0.8)',
                 backdropFilter: 'blur(10px)',
                 zIndex: 10000,
                 display: 'flex',
                 alignItems: 'flex-start',
                 justifyContent: 'center',
                 paddingTop: '10vh',
                 animation: 'fadeIn 0.3s ease-out',
             }}
             onClick={onClose}>
            
            <div className="search-modal-content"
                 style={{
                     background: 'rgba(30, 41, 59, 0.95)',
                     backdropFilter: 'blur(20px)',
                     border: '1px solid rgba(255, 255, 255, 0.1)',
                     borderRadius: '16px',
                     padding: '2rem',
                     width: '90%',
                     maxWidth: '600px',
                     maxHeight: '70vh',
                     overflow: 'hidden',
                     animation: 'slideInDown 0.3s ease-out',
                 }}
                 onClick={(e) => e.stopPropagation()}>
                
                {/* Search Header */}
                <div className="search-header"
                     style={{
                         display: 'flex',
                         alignItems: 'center',
                         gap: '1rem',
                         marginBottom: '1.5rem',
                     }}>
                    <div className="search-icon"
                         style={{
                             width: '24px',
                             height: '24px',
                             color: '#6366f1',
                         }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="M21 21l-4.35-4.35"/>
                        </svg>
                    </div>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search for games, features, support..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        style={{
                            flex: 1,
                            background: 'transparent',
                            border: 'none',
                            color: '#f8fafc',
                            fontSize: '1.1rem',
                            outline: 'none',
                        }}
                    />
                    <button
                        onClick={onClose}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#94a3b8',
                            cursor: 'pointer',
                            padding: '8px',
                            borderRadius: '8px',
                            transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            e.target.style.color = '#f8fafc';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = '#94a3b8';
                        }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </button>
                </div>

                {/* Search Results */}
                <div className="search-results"
                     style={{
                         maxHeight: '50vh',
                         overflowY: 'auto',
                     }}>
                    {isLoading ? (
                        <div className="loading-state"
                             style={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 padding: '2rem',
                                 color: '#94a3b8',
                             }}>
                            <div className="loading-spinner"
                                 style={{
                                     width: '20px',
                                     height: '20px',
                                     border: '2px solid rgba(99, 102, 241, 0.2)',
                                     borderTop: '2px solid #6366f1',
                                     borderRadius: '50%',
                                     animation: 'spin 1s linear infinite',
                                     marginRight: '12px',
                                 }}></div>
                            Searching...
                        </div>
                    ) : searchQuery.trim() ? (
                        searchResults.length > 0 ? (
                            <div className="results-list">
                                {searchResults.map((result, index) => (
                                    <Link
                                        key={index}
                                        href={result.url}
                                        onClick={onClose}
                                        style={{
                                            display: 'block',
                                            padding: '12px 16px',
                                            borderRadius: '8px',
                                            color: '#f8fafc',
                                            textDecoration: 'none',
                                            transition: 'all 0.2s ease',
                                            animation: `slideInUp 0.3s ease-out ${index * 0.05}s both`,
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
                                            e.target.style.transform = 'translateX(5px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = 'transparent';
                                            e.target.style.transform = 'translateX(0)';
                                        }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div className="result-icon"
                                                 style={{
                                                     width: '16px',
                                                     height: '16px',
                                                     color: '#6366f1',
                                                 }}>
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M9 11H1l8-8 8 8h-8v8z"/>
                                                </svg>
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontWeight: '500', marginBottom: '4px' }}>
                                                    {result.title}
                                                </div>
                                                <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                                                    {result.category}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="no-results"
                                 style={{
                                     textAlign: 'center',
                                     padding: '2rem',
                                     color: '#94a3b8',
                                 }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                                <div style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                                    No results found
                                </div>
                                <div style={{ fontSize: '0.9rem' }}>
                                    Try searching for different keywords
                                </div>
                            </div>
                        )
                    ) : (
                        <div className="search-suggestions"
                             style={{
                                 color: '#94a3b8',
                                 fontSize: '0.9rem',
                             }}>
                            <div style={{ marginBottom: '1rem', fontWeight: '500' }}>
                                Popular searches:
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {['Minecraft', 'Valorant', 'Pricing', 'Support', 'London'].map((suggestion, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSearchQuery(suggestion)}
                                        style={{
                                            background: 'rgba(99, 102, 241, 0.1)',
                                            border: '1px solid rgba(99, 102, 241, 0.2)',
                                            borderRadius: '20px',
                                            padding: '6px 12px',
                                            color: '#6366f1',
                                            cursor: 'pointer',
                                            fontSize: '0.8rem',
                                            transition: 'all 0.2s ease',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = 'rgba(99, 102, 241, 0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'rgba(99, 102, 241, 0.1)';
                                        }}>
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Search Footer */}
                <div className="search-footer"
                     style={{
                         marginTop: '1rem',
                         paddingTop: '1rem',
                         borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                         fontSize: '0.8rem',
                         color: '#64748b',
                         textAlign: 'center',
                     }}>
                    Press <kbd style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                    }}>ESC</kbd> to close
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default SearchModal; 