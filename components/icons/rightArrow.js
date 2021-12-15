import React from 'react';

function RightArrow({style}) {
    return (
        <svg fill="none" style={style} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
             strokeWidth="2" className="w-4 h-4 ml-2 inline-flex" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
    );
}

export default RightArrow;