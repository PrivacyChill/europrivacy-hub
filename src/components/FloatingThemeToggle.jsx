import React from 'react';

const FloatingThemeToggle = () => {
    const toggleTheme = () => {
        const currentTheme = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', currentTheme ? 'dark' : 'light');
    };

    return (
        <button
            className="floating-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                border: 'none',
                borderRadius: '50%',
                backgroundColor: '#007bff',
                color: 'white',
                padding: '10px 15px',
                cursor: 'pointer',
                zIndex: 1000,
            }}
        >
            {/* SVG icons inside the button can be added if required */}
            🌙 {/* You can replace this with icons if you'd like */}
        </button>
    );
};

export default FloatingThemeToggle;
