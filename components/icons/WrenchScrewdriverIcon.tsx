import React from 'react';

const WrenchScrewdriverIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.471-2.471a.563.563 0 0 1 .801 0l3.743 3.743a.563.563 0 0 1 0 .801l-2.471 2.471M11.42 15.17 15.17 11.42M5.57 5.57 9.146 2.001a.563.563 0 0 1 .801 0l3.743 3.743a.563.563 0 0 1 0 .801L9.948 9.948M5.57 5.57l3.743 3.743" />
    </svg>
);

export default WrenchScrewdriverIcon;