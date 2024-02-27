// CurvyBackground.jsx
import React from 'react';

const AbstractBackground = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
        >
            {/* Custom SVG path for a curvy background with interchanged colors */}
            <path fill="white" d="M70 80 Q 100 60, 100 20 L 100 100 L 0 100 Z" />
            <path fill="#26a69a" d="M0 80 Q 30 60, 70 80 L 0 80 Z" />
        </svg>
    );
};
export default AbstractBackground;
